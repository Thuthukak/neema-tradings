<template>
  <div class="container-fluid py-4">
    <!-- Header with add button -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Manage Enquiries</h2>
      <button class="btn btn-primary" @click="openAddModal">
        <i class="bi bi-plus-circle me-1"></i> Add Enquiry
      </button>
    </div>

<div class="card rounded shadow p-4 mb-5">
    <!-- Search and Filter Controls -->
    <div class="row mb-4">
      <!-- Search bar -->
      <div class="col-md-6 mb-3">
        <div class="input-group">
          <span class="input-group-text bg-light">
            <i class="bi bi-search"></i>
          </span>
          <input 
            type="text" 
            class="form-control" 
            placeholder="Search by name, email, or phone..." 
            v-model="searchQuery"
            @input="debounceSearch"
          >
        </div>
      </div>

       <!-- Status filter -->
      <div class="col-md-3 mb-3">
        <select class="form-select" v-model="statusFilter" @change="fetchEnquiries">
          <option value="">All Status</option>
          <option value="new">New</option>
          <option value="in_progress">In Progress</option>
          <option value="waiting_for_response">Awaiting Response</option>
          <option value="resolved">Resolved</option>
          <option value="spam">Spam</option>
          <option value="closed">Closed</option>
        </select>
      </div>

      <!-- Items per page -->
      <div class="col-md-3 mb-3">
        <select class="form-select" v-model.number="perPage" @change="fetchEnquiries">
          <option :value="10">10 per page</option>
          <option :value="15">15 per page</option>
          <option :value="25">25 per page</option>
          <option :value="50">50 per page</option>
        </select>
      </div>
    </div>

    <!-- Sort Controls -->
    <div class="row mb-3">
      <div class="col-md-4">
        <div class="d-flex align-items-center">
          <label class="form-label me-2 mb-0">Sort by:</label>
          <select class="form-select form-select-sm" v-model="sortBy" @change="fetchEnquiries">
            <option value="created_at">Date Created</option>
            <option value="service">Service</option>
            <option value="updated_at">Last Updated</option>
          </select>
        </div>
      </div>
      <div class="col-md-3">
        <div class="d-flex align-items-center">
          <label class="form-label me-2 mb-0">Order:</label>
          <select class="form-select form-select-sm" v-model="sortOrder" @change="fetchEnquiries">
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
        </div>
      </div>
      <div class="col-md-5 text-end">
        <span class="text-muted small" v-if="paginationData">
          Showing {{ paginationData.from || 0 }}-{{ paginationData.to || 0 }} of {{ paginationData.total || 0 }} results
        </span>
      </div>
    </div>
    </div>

    <!-- Loading state -->
    <div v-if="loading" class="text-center my-5">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <p class="mt-2">Loading enquiries...</p>
    </div>

    <!-- No enquiries message -->
    <div v-else-if="enquiries.length === 0" class="text-center my-5">
      <i class="bi bi-inbox display-4 text-muted"></i>
      <p class="lead mt-3">No enquiries found</p>
      <p class="text-muted" v-if="searchQuery || statusFilter">Try changing your search criteria</p>
      <button v-else class="btn btn-outline-primary mt-2" @click="openAddModal">
        Add your first enquiry
      </button>
    </div>

    <!-- Enquiries table and cards -->
    <div v-else>
      <!-- Desktop table -->
      <div class="d-none d-md-block">
        <div class="table-responsive rounded shadow">
          <table class="table table-hover border">
          <thead class="table-light">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Service</th>
              <th>Message</th>
              <th>Status</th>
              <th>Date</th>
              <th class="text-end">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="enquiry in enquiries" :key="enquiry.id" class="align-middle">
              <td>{{ enquiry.name }}</td>
              <td>
                <button 
                  class="btn btn-link text-decoration-none p-0" 
                  @click="openPhoneModal(enquiry.phone)"
                  type="button"
                >
                  {{ enquiry.phone }}
                </button>
              </td>
              <td>{{ enquiry.email || 'N/A' }}</td>
              <td>{{ formatService(enquiry.service) }}</td>
              <td>
                <span class="d-inline-block text-truncate" style="max-width: 200px;" :title="enquiry.message">
                  {{ enquiry.message }}
                </span>
              </td>
              <td>
                <span 
                  class="badge" 
                  :class="statusBadgeClass(enquiry.status)"
                >
                  {{ formatStatus(enquiry.status) }}
                </span>
              </td>
              <td>{{ formatDate(enquiry.created_at) }}</td>
              <td class="text-end">
                <button 
                  class="btn btn-sm btn-outline-secondary me-2" 
                  @click="openViewModal(enquiry)"
                  type="button"
                >
                  <font-awesome-icon :icon="['fas', 'eye']" />
                </button>
                <button 
                  class="btn btn-sm btn-outline-secondary me-2" 
                  @click="openEditModal(enquiry)"
                  type="button"
                >
                  <font-awesome-icon :icon="['fas', 'pencil']" />
                </button>
                <button 
                  class="btn btn-sm btn-outline-danger" 
                  @click="confirmDelete(enquiry.id)"
                  type="button"
                >
                  <font-awesome-icon :icon="['fas', 'trash']" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

      <!-- Mobile cards -->
      <div class="d-block d-md-none">
        <div class="card mb-3" v-for="enquiry in enquiries" :key="enquiry.id">
          <div class="card-body">
            <h5 class="card-title">{{ enquiry.name }}</h5>
            <p class="card-text mb-2">
              <strong>Phone:</strong> 
              <button 
                class="btn btn-link text-decoration-none p-0" 
                @click="openPhoneModal(enquiry.phone)"
                type="button"
              >
                {{ enquiry.phone }}
              </button>
            </p>
            <p class="card-text mb-2"><strong>Email:</strong> {{ enquiry.email || 'N/A' }}</p>
            <p class="card-text mb-2"><strong>Service:</strong> {{ formatService(enquiry.service) }}</p>
            <p class="card-text mb-2"><strong>Message:</strong> {{ enquiry.message }}</p>
            <p class="card-text mb-2">
              <strong>Status:</strong>
              <span 
                class="badge ms-2" 
                :class="statusBadgeClass(enquiry.status)"
              >
                {{ formatStatus(enquiry.status) }}
              </span>
            </p>
            <p class="card-text mb-3"><small class="text-muted">{{ formatDate(enquiry.created_at) }}</small></p>
            <div class="d-flex gap-2">
              <button class="btn btn-sm btn-outline-primary" @click="openViewModal(enquiry)" type="button">
                <i class="bi bi-pencil"></i> View
              </button>
              <button class="btn btn-sm btn-outline-secondary" @click="openEditModal(enquiry)" type="button">
                <i class="bi bi-pencil"></i> Edit
              </button>
              <button class="btn btn-sm btn-outline-danger" @click="confirmDelete(enquiry.id)" type="button">
                <i class="bi bi-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="row mt-4" v-if="paginationData && enquiries.length > 0">
      <div class="col-md-7">
        <span class="text-muted small">
          Showing {{ paginationData.from || 0 }}-{{ paginationData.to || 0 }} of {{ paginationData.total || 0 }} results
        </span>
      </div>
      <div class="col-md-5 text-end">
        <button 
          class="btn btn-outline-primary btn-sm me-2" 
          :disabled="paginationData.current_page === 1"
          @click="goToPage(paginationData.current_page - 1)"
          type="button"
        >
          Previous
        </button>
        <button 
          class="btn btn-outline-primary btn-sm" 
          :disabled="paginationData.current_page === paginationData.last_page"
          @click="goToPage(paginationData.current_page + 1)"
          type="button"
        >
          Next
        </button>
      </div>
    </div>

    <!-- Phone Modal -->
    <div class="modal fade" id="phoneModal" tabindex="-1" aria-labelledby="phoneModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="phoneModalLabel">Contact Options</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body text-center">
            <h4 class="mb-4">{{ selectedPhone }}</h4>
            <div class="d-grid gap-2">
              <button class="btn btn-success btn-lg" @click="openWhatsApp" type="button">
                <i class="bi bi-whatsapp me-2"></i> Open in WhatsApp
              </button>
              <button class="btn btn-outline-primary btn-lg" @click="copyPhone" type="button">
                <i class="bi bi-clipboard me-2"></i> Copy Number
              </button>
            </div>
            <div v-if="copied" class="alert alert-success mt-3 mb-0">
              <i class="bi bi-check-circle me-2"></i> Phone number copied!
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Enquiry Create/Edit Modal -->
    <EnquiryCreateEditModal 
        :show="showEnquiryModal"
        :is-editing="isEditingEnquiry"
        :enquiry-data="currentEnquiryData"
        @close="closeModal"
        @submit="handleEnquirySubmit"
    />

  </div>
</template>

<script>
import { Modal } from 'bootstrap';
import EnquiryCreateEditModal from './EnquiryCreateEditModal.vue';

export default {
  name: 'EnquiriesManagement',
  components: {
    EnquiryCreateEditModal
  },
  data() {
    return {
      enquiries: [],
      loading: false,
      searchQuery: '',
      statusFilter: '',
      perPage: 10,
      sortBy: 'created_at',
      sortOrder: 'desc',
      paginationData: null,
      searchTimeout: null,
      selectedPhone: '',
      phoneModal: null,
      copied: false,
      showEnquiryModal: false,
      isEditingEnquiry: false,
      currentEnquiryData: null
    };
  },
  mounted() {
    this.fetchEnquiries();
    // Initialize Bootstrap modal
    const phoneModalEl = document.getElementById('phoneModal');
    if (phoneModalEl) {
      this.phoneModal = new Modal(phoneModalEl);
    }
  },
  beforeUnmount() {
    // Clean up modal instance
    if (this.phoneModal) {
      this.phoneModal.dispose();
    }
    // Clear any pending timeouts
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
  },
  methods: {
    async fetchEnquiries(page = 1) {
      this.loading = true;
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          per_page: this.perPage.toString(),
          sort_by: this.sortBy,
          sort_order: this.sortOrder
        });

        if (this.searchQuery) {
          params.append('search', this.searchQuery);
        }
        if (this.statusFilter) {
          params.append('status', this.statusFilter);
        }

        const response = await fetch(`/api/contacts?${params.toString()}`, {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        this.enquiries = data.data || [];
        this.paginationData = {
          current_page: data.current_page,
          last_page: data.last_page,
          from: data.from,
          to: data.to,
          total: data.total
        };
      } catch (error) {
        console.error('Error fetching enquiries:', error);
        this.enquiries = [];
        this.paginationData = null;
        alert('Failed to load enquiries. Please check your connection and try again.');
      } finally {
        this.loading = false;
      }
    },
    debounceSearch() {
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      this.searchTimeout = setTimeout(() => {
        this.fetchEnquiries(1); // Reset to page 1 on new search
      }, 500);
    },
    goToPage(page) {
      if (page >= 1 && this.paginationData && page <= this.paginationData.last_page) {
        this.fetchEnquiries(page);
        // Scroll to top of table
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    openPhoneModal(phone) {
      this.selectedPhone = phone;
      this.copied = false;
      if (this.phoneModal) {
        this.phoneModal.show();
      }
    },
    openWhatsApp() {
      const cleanPhone = this.selectedPhone.replace(/\D/g, '');
      window.open(`https://wa.me/${cleanPhone}`, '_blank');
      // Close modal after opening WhatsApp
      if (this.phoneModal) {
        this.phoneModal.hide();
      }
    },
    async copyPhone() {
      try {
        await navigator.clipboard.writeText(this.selectedPhone);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 3000);
      } catch (error) {
        console.error('Failed to copy:', error);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = this.selectedPhone;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          this.copied = true;
          setTimeout(() => {
            this.copied = false;
          }, 3000);
        } catch (err) {
          alert('Failed to copy phone number. Please copy manually: ' + this.selectedPhone);
        }
        document.body.removeChild(textArea);
      }
    },
    openAddModal() {
      this.isEditingEnquiry = false;
      this.currentEnquiryData = null;
      this.showEnquiryModal = true;
    },
    openEditModal(enquiry) {
      this.isEditingEnquiry = true;
      // Create a deep copy to avoid mutating the original
      this.currentEnquiryData = JSON.parse(JSON.stringify(enquiry));
      this.showEnquiryModal = true;
    },
    closeModal() {
      this.showEnquiryModal = false;
      // Small delay before clearing to allow modal animation
      setTimeout(() => {
        this.isEditingEnquiry = false;
        this.currentEnquiryData = null;
      }, 300);
    },
    handleEnquirySubmit(response) {
      // Refresh the list after successful submission
      const currentPage = this.paginationData?.current_page || 1;
      this.fetchEnquiries(currentPage);
      
      // Show success message
      const action = this.isEditingEnquiry ? 'updated' : 'created';
      this.showSuccessMessage(`Enquiry ${action} successfully!`);
    },
    showSuccessMessage(message) {
      // Simple alert for now - you can replace with a toast notification
      alert(message);
    },
    confirmDelete(id) {
      if (confirm('Are you sure you want to delete this enquiry? This action cannot be undone.')) {
        this.deleteEnquiry(id);
      }
    },
    async deleteEnquiry(id) {
      try {
        const response = await fetch(`/api/contacts/${id}`, {
          method: 'DELETE',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content || '' 
          }
        });
        
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Failed to delete enquiry');
        }
        
        // Check if we need to go to previous page (if this was the last item on current page)
        const currentPage = this.paginationData.current_page;
        const itemsOnPage = this.enquiries.length;
        
        if (itemsOnPage === 1 && currentPage > 1) {
          // Last item on non-first page, go to previous page
          this.fetchEnquiries(currentPage - 1);
        } else {
          // Refresh current page
          this.fetchEnquiries(currentPage);
        }
        
        this.showSuccessMessage('Enquiry deleted successfully!');
      } catch (error) {
        console.error('Error deleting enquiry:', error);
        alert(error.message || 'Failed to delete enquiry. Please try again.');
      }
    },
    formatDate(date) {
      if (!date) return 'N/A';
      try {
        return new Date(date).toLocaleDateString('en-ZA', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      } catch (error) {
        console.error('Error formatting date:', error);
        return 'Invalid date';
      }
    },
    formatStatus(status) {
      if (!status) return 'New';
      return status.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    },
    formatService(service) {
      if (!service) return 'N/A';
      return service
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    },
    statusBadgeClass(status) {
      const classes = {
        'new': 'bg-primary',
        'in_progress': 'bg-warning text-dark',
        'waiting_for_response': 'bg-info text-dark',
        'resolved': 'bg-success',
        'spam': 'bg-danger',
        'closed': 'bg-secondary'
      };
      return classes[status] || 'bg-primary';
    }
  }
};
</script>

<style scoped>
.btn-link {
  color: #0d6efd;
  cursor: pointer;
  font-size: inherit;
}
.btn-link:hover {
  color: #0a58ca;
  text-decoration: underline !important;
}

/* Ensure table is readable on all screen sizes */
@media (max-width: 768px) {
  .table-responsive {
    font-size: 0.875rem;
  }
}
</style>