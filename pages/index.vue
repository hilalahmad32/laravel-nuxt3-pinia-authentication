<script setup>
import { useAuth } from "@/store";
const auth = useAuth();
auth.getUser();
</script>

<template>
  <div>
    <NavbarVue />
    <div class="container mx-auto max-w-2xl">
      <div class="bg-pink-400 p-5 my-16 rounded-xl">
        <h1 class="text-xl text-white text-center">hi {{ auth.user.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarVue from "../components/Navbar.vue";
export default {
  name: "IndexPage",
  components: {
    NavbarVue,
  },
};
</script>
