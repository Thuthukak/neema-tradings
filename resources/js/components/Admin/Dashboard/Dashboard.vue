<template>
  <div class="bg-white ">
    <!-- Header -->
    <div>
      <h1 class="text-xl sm:text-2xl fw-bold text-gray-900">Dashboard</h1>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex items-center justify-center h-64">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
    </div>

    <!-- Dashboard Content -->
    <div v-else class="space-y-4 sm:space-y-6">
      <!-- Main Stats Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 sm:gap-5">
        <!-- New Enquiries -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-4 sm:p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="ml-4 sm:ml-5 w-0 flex-1">
                <dt class="text-xs sm:text-sm font-medium text-gray-500 truncate">
                  New Enquiries
                </dt>
                <dd class="flex items-baseline mt-1">
                  <div class="text-xl sm:text-2xl font-semibold text-gray-900">
                    {{ stats.new }}
                  </div>
                  <div class="ml-2 flex items-baseline text-xs sm:text-sm font-semibold text-blue-600">
                    Needs attention
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </div>

        <!-- In Progress -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-4 sm:p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 sm:h-6 sm:w-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4 sm:ml-5 w-0 flex-1">
                <dt class="text-xs sm:text-sm font-medium text-gray-500 truncate">
                  In Progress
                </dt>
                <dd class="flex items-baseline mt-1">
                  <div class="text-xl sm:text-2xl font-semibold text-gray-900">
                    {{ stats.inProgress }}
                  </div>
                  <div class="ml-2 flex items-baseline text-xs sm:text-sm font-semibold text-yellow-600">
                    Active
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </div>

        <!-- Resolved -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-4 sm:p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 sm:h-6 sm:w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="ml-4 sm:ml-5 w-0 flex-1">
                <dt class="text-xs sm:text-sm font-medium text-gray-500 truncate">
                  Resolved
                </dt>
                <dd class="flex items-baseline mt-1">
                  <div class="text-xl sm:text-2xl font-semibold text-gray-900">
                    {{ stats.resolved }}
                  </div>
                  <div class="ml-2 flex items-baseline text-xs sm:text-sm font-semibold text-green-600">
                    {{ stats.resolutionRate }}% rate
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </div>

        <!-- Total -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="p-4 sm:p-5">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <svg class="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div class="ml-4 sm:ml-5 w-0 flex-1">
                <dt class="text-xs sm:text-sm font-medium text-gray-500 truncate">
                  Total Enquiries
                </dt>
                <dd class="flex items-baseline mt-1">
                  <div class="text-xl sm:text-2xl font-semibold text-gray-900">
                    {{ stats.total }}
                  </div>
                  <div class="ml-2 flex items-baseline text-xs sm:text-sm font-semibold text-indigo-600">
                    All time
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Secondary Stats -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-3 sm:p-4 border border-blue-100">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs sm:text-sm font-medium text-gray-600">Today</p>
              <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ stats.todayCount }}</p>
            </div>
            <svg class="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
        </div>

        <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 sm:p-4 border border-green-100">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs sm:text-sm font-medium text-gray-600">This Week</p>
              <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ stats.weekCount }}</p>
            </div>
            <svg class="h-6 w-6 sm:h-8 sm:w-8 text-green-600 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
        </div>

        <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-3 sm:p-4 border border-purple-100">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs sm:text-sm font-medium text-gray-600">Waiting</p>
              <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ stats.waitingForResponse }}</p>
            </div>
            <svg class="h-6 w-6 sm:h-8 sm:w-8 text-purple-600 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-3 sm:p-4 border border-red-100">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-xs sm:text-sm font-medium text-gray-600">Spam</p>
              <p class="text-lg sm:text-2xl font-bold text-gray-900">{{ stats.spam }}</p>
            </div>
            <svg class="h-6 w-6 sm:h-8 sm:w-8 text-red-600 opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- Recent Enquiries -->
      <div class="bg-white shadow rounded-lg overflow-hidden">
        <div class="px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-200">
          <h2 class="text-base sm:text-lg font-medium text-gray-900">Recent Enquiries</h2>
        </div>
        
        <!-- Desktop Table View -->
        <div class="hidden md:block overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Service
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="enquiry in recentEnquiries" :key="enquiry.id" class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="h-10 w-10 flex-shrink-0 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span class="text-sm font-medium text-indigo-700">
                        {{ getInitial(enquiry.name) }}
                      </span>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ enquiry.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ enquiry.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ enquiry.service }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span :class="getStatusColor(enquiry.status)" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {{ formatStatus(enquiry.status) }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {{ formatTimeAgo(enquiry.created_at) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" @click.prevent="viewEnquiry(enquiry.id)" class="text-indigo-600 hover:text-indigo-900">
                    View
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Mobile Card View -->
        <div class="md:hidden divide-y divide-gray-200">
          <div v-for="enquiry in recentEnquiries" :key="enquiry.id" class="p-4 hover:bg-gray-50">
            <div class="flex items-start justify-between mb-2">
              <div class="flex items-center">
                <div class="h-10 w-10 flex-shrink-0 rounded-full bg-indigo-100 flex items-center justify-center">
                  <span class="text-sm font-medium text-indigo-700">
                    {{ getInitial(enquiry.name) }}
                  </span>
                </div>
                <div class="ml-3">
                  <div class="text-sm font-medium text-gray-900">{{ enquiry.name }}</div>
                  <div class="text-xs text-gray-500">{{ enquiry.email }}</div>
                </div>
              </div>
              <span :class="getStatusColor(enquiry.status)" class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium">
                {{ formatStatus(enquiry.status) }}
              </span>
            </div>
            <div class="mt-2 flex items-center justify-between text-sm">
              <div class="text-gray-600">{{ enquiry.service }}</div>
              <div class="text-gray-500">{{ formatTimeAgo(enquiry.created_at) }}</div>
            </div>
            <div class="mt-2">
              <a href="#" @click.prevent="viewAllEnquiries" class="text-sm text-indigo-600 hover:text-indigo-900 font-medium">
                View Details →
              </a>
            </div>
          </div>
        </div>

        <div class="px-4 sm:px-6 py-4 border-t border-gray-200 bg-gray-50">
          <a href="#" @click.prevent="viewAllEnquiries" class="text-xs sm:text-sm font-medium text-indigo-600 hover:text-indigo-500">
            View all enquiries →
          </a>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="bg-white shadow rounded p-4 sm:p-6">
        <h2 class="text-base sm:text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <button @click="viewAllEnquiries" class="inline-flex items-center justify-center px-4 py-3 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <font-awesome-icon icon="clipboard-list" class="w-5 h-5 mr-2" />
            View All Enquiries
          </button>
          <button @click="manageUsers" class="inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <font-awesome-icon icon="user-cog" class="w-5 h-5 mr-2" />
            Manage Users
          </button>
          <!-- <button class="inline-flex items-center justify-center px-4 py-3 border border-gray-300 text-sm font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            View Reports
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Dashboard',
  data() {
    return {
      stats: {
        total: 0,
        new: 0,
        inProgress: 0,
        waitingForResponse: 0,
        resolved: 0,
        spam: 0,
        closed: 0,
        todayCount: 0,
        weekCount: 0,
        averageResponseTime: '0 hours',
        resolutionRate: 0
      },
      recentEnquiries: [],
      loading: true
    };
  },
  mounted() {
    this.fetchDashboardData();
  },
  methods: {
    async fetchDashboardData() {
      this.loading = true;
      try {
        // Fetch dashboard data from Laravel API
        const response = await axios.get('/api/dashboard/data');
        
        if (response.data.success) {
          this.stats = response.data.data.stats;
          this.recentEnquiries = response.data.data.recentEnquiries;
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
        // You might want to show an error notification here
      } finally {
        this.loading = false;
      }
    },
    getStatusColor(status) {
      const colors = {
        new: 'bg-blue-100 text-blue-800',
        in_progress: 'bg-yellow-100 text-yellow-800',
        waiting_for_response: 'bg-purple-100 text-purple-800',
        resolved: 'bg-green-100 text-green-800',
        spam: 'bg-red-100 text-red-800',
        closed: 'bg-gray-100 text-gray-800'
      };
      return colors[status] || 'bg-gray-100 text-gray-800';
    },
    formatStatus(status) {
      return status.split('_').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
    },
    getInitial(name) {
      return name.charAt(0).toUpperCase();
    },
    formatTimeAgo(date) {
      const now = new Date();
      const then = new Date(date);
      const diffMs = now - then;
      const diffMins = Math.floor(diffMs / 60000);
      const diffHours = Math.floor(diffMs / 3600000);
      const diffDays = Math.floor(diffMs / 86400000);

      if (diffMins < 60) return `${diffMins}m ago`;
      if (diffHours < 24) return `${diffHours}h ago`;
      return `${diffDays}d ago`;
    },
    viewEnquiry(id) {
      // Navigate to enquiry detail page
      // this.$router.push({ name: 'enquiry-detail', params: { id } });
      console.log('View enquiry:', id);
    },
    viewAllEnquiries() {
      // Navigate to all enquiries page
       this.$router.push({ name: 'enquiries' });
      console.log('View all enquiries');
    },
    manageUsers() {
      // Navigate to users management page router
      this.$router.push({ name: 'user-management' });
    }
  }
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>