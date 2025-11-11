<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Complete Your Registration
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        Fill in your details to activate your account
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <!-- Loading State -->
        <div v-if="loading" class="text-center">
          <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p class="mt-2 text-sm text-gray-600">Verifying invitation...</p>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="rounded-md bg-red-50 p-4">
          <div class="flex">
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">{{ error }}</h3>
              <div class="mt-4">
                <router-link
                  to="/login"
                  class="text-sm font-medium text-red-800 hover:text-red-700"
                >
                  Go to login page
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Registration Form -->
        <form v-else @submit.prevent="completeRegistration" class="space-y-6">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              v-model="form.email"
              disabled
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-gray-50 text-gray-500 sm:text-sm"
            />
          </div>

          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-700">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              v-model="form.firstName"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-700">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              v-model="form.lastName"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-700">
              Password *
            </label>
            <input
              type="password"
              id="password"
              v-model="form.password"
              required
              minlength="8"
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <p class="mt-1 text-xs text-gray-500">Must be at least 8 characters</p>
          </div>

          <div>
            <label for="confirmPassword" class="block text-sm font-medium text-gray-700">
              Confirm Password *
            </label>
            <input
              type="password"
              id="confirmPassword"
              v-model="form.confirmPassword"
              required
              class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div v-if="formError" class="rounded-md bg-red-50 p-4">
            <p class="text-sm text-red-800">{{ formError }}</p>
          </div>

          <div>
            <button
              type="submit"
              :disabled="submitting"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ submitting ? 'Creating Account...' : 'Complete Registration' }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CompleteInvite',
  data() {
    return {
      token: '',
      loading: true,
      error: '',
      formError: '',
      submitting: false,
      form: {
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  mounted() {
    this.token = this.$route.query.token;
    if (!this.token) {
      this.error = 'Invalid invitation link';
      this.loading = false;
      return;
    }
    this.verifyToken();
  },
  methods: {
    async verifyToken() {
      try {
        const response = await axios.get(`/api/auth/verify-invite/${this.token}`);
        this.form.email = response.data.email;
        this.loading = false;
      } catch (error) {
        this.error = error.response?.data?.message || 'Invalid or expired invitation link';
        this.loading = false;
      }
    },
    async completeRegistration() {
      this.formError = '';

      // Validate passwords match
      if (this.form.password !== this.form.confirmPassword) {
        this.formError = 'Passwords do not match';
        return;
      }

      // Validate password strength
      if (this.form.password.length < 8) {
        this.formError = 'Password must be at least 8 characters';
        return;
      }

      this.submitting = true;

      try {
        await axios.post('/api/auth/complete-invite', {
          token: this.token,
          firstName: this.form.firstName,
          lastName: this.form.lastName,
          password: this.form.password,
        });

        // Redirect to login page with success message
        this.$router.push({
          path: '/login',
          query: { message: 'Account created successfully! Please log in.' },
        });
      } catch (error) {
        this.formError = error.response?.data?.message || 'Failed to complete registration';
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>