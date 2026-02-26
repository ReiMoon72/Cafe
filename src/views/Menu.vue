<script>
import { ref, reactive } from "vue";

export default {
  name: "Menu",
  setup() {},
};
</script>

<template>
  <header
    class="w-341.3 h-80 bg-[url('/images/picture-ata.jpg')] bg-cover bg-center"
  >
    <div class="flex justify-center items-center p-30 text-4xl text-white">
      <h1><b>Menu</b></h1>
    </div>
  </header>

  <!--Mune Section-->
  <div class="p-6">
    <div class="flex flex-col justify-evenly items-center gap-3 md:flex-row">
      <h1 class="text-2xl"><b>Menu Bar</b></h1>
      <p class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out">Coffee</p>
      <p class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out">Milk Tea</p>
      <p class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out">Foods</p>
    </div>
  </div>
</template>

<style scoped></style>
