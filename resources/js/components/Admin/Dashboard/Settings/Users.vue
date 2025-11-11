<template>
  <div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-medium text-gray-900">Users Management</h2>
      <button
        @click="showInviteModal = true"
        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Invite User
      </button>
    </div>

    <!-- Users Table -->
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr v-for="user in users" :key="user.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {{ user.name || 'Pending' }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ user.email }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {{ user.role }}
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span
                :class="[
                  'px-2 inline-flex text-xs leading-5 font-semibold rounded-full',
                  user.status === 'active'
                    ? 'bg-green-100 text-green-800'
                    : user.status === 'pending'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-gray-100 text-gray-800'
                ]"
              >
                {{ user.status }}
              </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              <button
                v-if="user.status === 'pending'"
                @click="resendInvite(user.id)"
                class="text-blue-600 hover:text-blue-900 mr-4"
              >
                Resend Invite
              </button>
              <button
                @click="deleteUser(user.id)"
                class="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
          <tr v-if="users.length === 0">
            <td colspan="5" class="px-6 py-4 text-center text-sm text-gray-500">
              No users found. Click "Invite User" to add users.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Invite User Modal -->
    <div
      v-if="showInviteModal"
      class="fixed z-10 inset-0 overflow-y-auto"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          @click="closeInviteModal"
        ></div>

        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div
          class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <form @submit.prevent="sendInvite">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                  <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Invite New User
                  </h3>
                  <div class="mt-4">
                    <label for="email" class="block text-sm font-medium text-gray-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      v-model="inviteForm.email"
                      required
                      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      placeholder="user@example.com"
                    />
                  </div>
                  <div class="mt-4">
                    <label for="role" class="block text-sm font-medium text-gray-700">
                      Role
                    </label>
                    <select
                      id="role"
                      v-model="inviteForm.role"
                      required
                      class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div v-if="inviteError" class="mt-4 text-sm text-red-600">
                    {{ inviteError }}
                  </div>
                  <div v-if="inviteSuccess" class="mt-4 text-sm text-green-600">
                    {{ inviteSuccess }}
                  </div>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Invite' }}
              </button>
              <button
                type="button"
                @click="closeInviteModal"
                class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      users: [],
      showInviteModal: false,
      inviteForm: {
        email: '',
        role: 'user',
      },
      inviteError: '',
      inviteSuccess: '',
      isSubmitting: false,
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get('/api/admin/users');
        this.users = response.data;
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    async sendInvite() {
      this.inviteError = '';
      this.inviteSuccess = '';
      this.isSubmitting = true;

      try {
        await axios.post('/api/admin/users/invite', this.inviteForm);
        this.inviteSuccess = 'Invitation sent successfully!';
        this.inviteForm.email = '';
        this.inviteForm.role = 'user';
        
        setTimeout(() => {
          this.closeInviteModal();
          this.fetchUsers();
        }, 1500);
      } catch (error) {
        this.inviteError = error.response?.data?.message || 'Failed to send invitation';
      } finally {
        this.isSubmitting = false;
      }
    },
    async resendInvite(userId) {
      try {
        await axios.post(`/api/admin/users/${userId}/resend-invite`);
        alert('Invitation resent successfully!');
      } catch (error) {
        alert('Failed to resend invitation');
      }
    },
    async deleteUser(userId) {
      if (confirm('Are you sure you want to delete this user?')) {
        try {
          await axios.delete(`/api/admin/users/${userId}`);
          this.fetchUsers();
        } catch (error) {
          alert('Failed to delete user');
        }
      }
    },
    closeInviteModal() {
      this.showInviteModal = false;
      this.inviteForm.email = '';
      this.inviteForm.role = 'user';
      this.inviteError = '';
      this.inviteSuccess = '';
    },
  },
};
</script>