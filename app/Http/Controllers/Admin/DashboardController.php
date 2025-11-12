<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Log;

class DashboardController extends Controller
{
    public function index()
    {
        Log::info('returning admin dashboard blade');
        // dd(Auth::user()); 

        return view('admin.dashboard');
    }

    /**
     * Get dashboard statistics
     */
    public function getStats()
    {
        try {
            $now = Carbon::now();
            $todayStart = $now->copy()->startOfDay();
            $weekStart = $now->copy()->startOfWeek();

            // Get status counts
            $statusCounts = Contact::select('status', DB::raw('count(*) as count'))
                ->groupBy('status')
                ->pluck('count', 'status')
                ->toArray();

            // Calculate totals
            $total = Contact::count();
            $new = $statusCounts['new'] ?? 0;
            $inProgress = $statusCounts['in_progress'] ?? 0;
            $waitingForResponse = $statusCounts['waiting_for_response'] ?? 0;
            $resolved = $statusCounts['resolved'] ?? 0;
            $spam = $statusCounts['spam'] ?? 0;
            $closed = $statusCounts['closed'] ?? 0;

            // Today's count
            $todayCount = Contact::where('created_at', '>=', $todayStart)->count();

            // This week's count
            $weekCount = Contact::where('created_at', '>=', $weekStart)->count();

            // Calculate average response time (in hours)
            // This assumes you track when an enquiry moves from 'new' to another status
            // For now, we'll use a placeholder calculation
            $averageResponseTime = $this->calculateAverageResponseTime();

            // Calculate resolution rate
            $resolvedCount = $resolved + $closed;
            $resolutionRate = $total > 0 ? round(($resolvedCount / $total) * 100) : 0;

            return response()->json([
                'success' => true,
                'data' => [
                    'total' => $total,
                    'new' => $new,
                    'inProgress' => $inProgress,
                    'waitingForResponse' => $waitingForResponse,
                    'resolved' => $resolved,
                    'spam' => $spam,
                    'closed' => $closed,
                    'todayCount' => $todayCount,
                    'weekCount' => $weekCount,
                    'averageResponseTime' => $averageResponseTime,
                    'resolutionRate' => $resolutionRate
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching dashboard statistics',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get recent enquiries
     */
    public function getRecentEnquiries(Request $request)
    {
        try {
            $limit = $request->input('limit', 5);

            $enquiries = Contact::select(['id', 'name', 'email', 'service', 'status', 'created_at'])
                ->orderBy('created_at', 'desc')
                ->limit($limit)
                ->get();

            return response()->json([
                'success' => true,
                'data' => $enquiries
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching recent enquiries',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Get combined dashboard data
     */
    public function getDashboardData()
    {
        try {
            $stats = $this->getStats()->getData()->data;
            $enquiries = $this->getRecentEnquiries(request())->getData()->data;

            return response()->json([
                'success' => true,
                'data' => [
                    'stats' => $stats,
                    'recentEnquiries' => $enquiries
                ]
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching dashboard data',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * Calculate average response time
     * Note: This is a simplified calculation. 
     * You may want to add a 'responded_at' timestamp field to track actual response times
     */
    private function calculateAverageResponseTime()
    {
        // Get contacts that have moved beyond 'new' status
        $respondedContacts = Contact::whereNotIn('status', ['new', 'spam'])
            ->whereNotNull('updated_at')
            ->select('created_at', 'updated_at')
            ->get();

        if ($respondedContacts->isEmpty()) {
            return '0 hours';
        }

        $totalMinutes = 0;
        $count = 0;

        foreach ($respondedContacts as $contact) {
            $diffInMinutes = $contact->created_at->diffInMinutes($contact->updated_at);
            // Only count if there's an actual time difference (status was changed)
            if ($diffInMinutes > 0) {
                $totalMinutes += $diffInMinutes;
                $count++;
            }
        }

        if ($count === 0) {
            return '0 hours';
        }

        $averageMinutes = $totalMinutes / $count;
        $averageHours = round($averageMinutes / 60, 1);

        return $averageHours . ' hours';
    }

    /**
     * Get enquiry trends for charts (optional - for future use)
     */
    public function getTrends(Request $request)
    {
        try {
            $days = $request->input('days', 7);
            $startDate = Carbon::now()->subDays($days)->startOfDay();

            $trends = Contact::where('created_at', '>=', $startDate)
                ->select(
                    DB::raw('DATE(created_at) as date'),
                    DB::raw('count(*) as count')
                )
                ->groupBy('date')
                ->orderBy('date', 'asc')
                ->get();

            return response()->json([
                'success' => true,
                'data' => $trends
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error fetching trends',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
