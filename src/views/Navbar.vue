<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Navbar",
  setup() {
    const router = useRouter();

    const contactBtn = () => {
      router.push({ name: "Contact" });
    };

    const navbar = ref(true);

    const navbarClose = () => {
      navbar.value = !navbar.value;
    };

    return { contactBtn, navbarClose, navbar };
  },
};
</script>

<template>
  <nav>
    <button
      class="absolute bg-blue-950 text-white p-1 rounded-md w-8 m-2"
      @click="navbarClose"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
    <div class="md:block">
    <div class="flex justify-evenly items-center p-2 md:flex-col gap-2" v-show="navbar">
      <router-link :to="{ name: 'Home' }">HOME</router-link>
      <router-link :to="{ name: 'About' }">ABOUT</router-link>
      <router-link :to="{ name: 'Menu' }">MENU</router-link>
      <button
        @click="contactBtn"
        class="bg-blue-950 text-white p-1 rounded-md hover:bg-blue-900 w-28"
      >
        Contact Me
      </button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
