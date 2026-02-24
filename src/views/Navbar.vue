<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Navbar",
  setup() {
    const router = useRouter();

    const contactBtn = () => {
      router.push({ name: "Offers" });
    };

    //For Button
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
      class="absolute bg-blue-950 text-white p-1 rounded-md w-8 m-2 hover:bg-blue-900 duration-70 ease-in active:bg-blue-700"
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
    <div class="bg-blue-900 text-white p-0.5" v-show="navbar">
      <div
        class="flex justify-evenly items-center flex-col p-2 md:flex-row gap-2"
        
      >
        <router-link
          class="hover:bg-blue-800 rounded-md p-1 hover:text-white active:bg-blue-800 duration-300 ease-in"
          :to="{ name: 'Home' }"
          >HOME</router-link
        >
        <router-link
          class="hover:bg-blue-800 rounded-md p-1 hover:text-white duration-300 ease-in"
          :to="{ name: 'About' }"
          >ABOUT US</router-link
        >
        <router-link
          class="hover:bg-blue-800 rounded-md p-1 hover:text-white duration-300 ease-in"
          :to="{ name: 'Menu' }"
          >MENU</router-link
        >
        <button
          @click="contactBtn"
          class="bg-blue-950 text-white p-1 rounded-md hover:bg-blue-900 w-35 duration-300 ease-in active:bg-blue-600"
        >
          SPECIAL OFFERS  
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
