<template>
    <div class="space-y-6">
      <!-- User Settings Section -->
      <section>
        
        <Users />

      </section>
    </div>
  
      
  </template>
  
  <script>
  import Users from "@/components/Admin/Dashboard/Settings/Users.vue"; 
  export default {
    name: "SettingsPage",
    components: {
      Users,
    },
  };
  </script>
  