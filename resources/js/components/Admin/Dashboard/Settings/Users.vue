<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h2 class="text-lg font-medium text-gray-900">Users Management</h2>
        <p class="mt-2 text-sm text-gray-700">
          Invite new users to your application. They will receive an email with a
          link to complete their registration.
        </p>
      </div>
      <div class="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
        <button
          @click="showInviteModal = true"
          type="button"
          class="inline-flex items-center justify-center rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Invite User
        </button>
      </div>
    </div>

    <!-- Pending Invitations -->
    <div class="mt-8">
      <h3 class="text-base font-medium text-gray-900">Pending Invitations</h3>
      <div class="mt-4 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
        <table class="min-w-full divide-y divide-gray-300">
          <thead class="bg-gray-50">
            <tr>
              <th class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">
                Email
              </th>
              <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Invited By
              </th>
              <th class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                Expires
              </th>
              <th class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span class="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-if="loading">
              <td colspan="4" class="py-4 text-center text-sm text-gray-500">
                Loading...
              </td>
            </tr>
            <tr v-else-if="invitations.length === 0">
              <td colspan="4" class="py-4 text-center text-sm text-gray-500">
                No pending invitations
              </td>
            </tr>
            <tr v-else v-for="invitation in invitations" :key="invitation.id">
              <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                {{ invitation.email }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ invitation.inviter.name }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ formatDate(invitation.expires_at) }}
              </td>
              <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                <button
                  @click="cancelInvitation(invitation)"
                  class="text-red-600 hover:text-red-900"
                >
                  Cancel
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Invite User Modal -->
    <teleport to="body">
    <div
      v-if="showInviteModal"
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
            <div>
              <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                Invite New User
              </h3>
              <form @submit.prevent="sendInvitation" class="mt-4">
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    v-model="inviteForm.email"
                    type="email"
                    id="email"
                    required
                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    :class="{ 'border-red-300': inviteForm.errors.email }"
                  />
                  <p v-if="inviteForm.errors.email" class="mt-2 text-sm text-red-600">
                    {{ inviteForm.errors.email }}
                  </p>
                </div>
                <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                  <button
                    type="submit"
                    :disabled="inviteForm.processing"
                    class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:col-start-2 disabled:opacity-50"
                  >
                    {{ inviteForm.processing ? 'Sending...' : 'Send Invitation' }}
                  </button>
                  <button
                    type="button"
                    @click="closeInviteModal"
                    class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </teleport>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Users",
  data() {
    return {
      invitations: [],
      loading: false,
      showInviteModal: false,
      inviteForm: {
        email: '',
        processing: false,
        errors: {},
      },
    };
  },
  mounted() {
    this.fetchInvitations();
  },
  methods: {
    async fetchInvitations() {
      this.loading = true;
      try {
        const response = await axios.get('/api/invitations');
        this.invitations = response.data;
      } catch (error) {
        console.error('Error fetching invitations:', error);
      } finally {
        this.loading = false;
      }
    },
    async sendInvitation() {
      this.inviteForm.processing = true;
      this.inviteForm.errors = {};

      try {
        const response = await axios.post('/api/invitations', {
          email: this.inviteForm.email,
        });
        
        this.invitations.unshift(response.data.invitation);
        this.closeInviteModal();
        alert('Invitation sent successfully!');
      } catch (error) {
        if (error.response?.status === 422) {
          this.inviteForm.errors = error.response.data.errors;
        } else {
          alert('Failed to send invitation. Please try again.');
        }
      } finally {
        this.inviteForm.processing = false;
      }
    },
    async cancelInvitation(invitation) {
      if (!confirm(`Are you sure you want to cancel the invitation for ${invitation.email}?`)) {
        return;
      }

      try {
        await axios.delete(`/api/invitations/${invitation.id}`);
        this.invitations = this.invitations.filter(i => i.id !== invitation.id);
      } catch (error) {
        alert('Failed to cancel invitation. Please try again.');
      }
    },
    closeInviteModal() {
      this.showInviteModal = false;
      this.inviteForm.email = '';
      this.inviteForm.errors = {};
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    },
  },
};
</script>