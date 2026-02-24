<script>
import { ref, reactive } from "vue";

export default {
  name: "About",
  setup() {},
};
</script>

<template>
  <!--Head-->

  <div
    class="w-341.3 h-90 bg-[url('/images/cafe-interior.jpg')] bg-cover bg-center"
  >
    <!--for image-->
    <div class="flex justify-center items-center text-center p-30 md:flx-row">
      <!--Text Area-->
      <div>
        <h1 class="text-white text-5xl font-serif"><b>About Us</b></h1>
        <p class="text-white text-2xl font-serif">"Sip Drink And Relax"</p>
      </div>
    </div>
  </div>

  <!--The Story-->

  <!--Header-->
  <div class="text-2xl p-6 flex justify-center items-center">
    <h1><b>How the Story Began</b></h1>
  </div>

  <!--The Story-->

  <div>
    <!--Began-->
    <div
      class="flex justify-evenly items-center flex-col p-5 gap-3 md:flex-row"
    >
      <img src="/public/images/Chat.jpg" class="w-70 p-3 rounded-md" />
      <p>
        Rei Cafe was founded in 2021 when pandemic is still in. Rei Cafe was
        <br />
        created in one simple idea. To bring people who feel like lost and bring
        <br />
        people together over in handcrafted coffee and warm conversations. What
        <br />
        started just a simple dream and idea turn into cozy home of many people.
        <br />
      </p>
    </div>
  </div>

  <!--Mission And Vision-->
  <div class="flex justify-center items-center text-3xl">
    <h1><b>Our Mission & Vision</b></h1>
  </div>

  <div>
    <div class="bg-cyan-800 p-2 w-75">
      <h2 class="text-3xl"><b>Mission</b></h2>
      <p>
        To serve high-quality coffee and freshly baked goods while creating a
        <br />
        welcoming space for community and connection. <br />
      </p>
    </div>
    <div class="bg-cyan-800 p-2 w-75">
      <h2 class="text-3xl"><b>Vision</b></h2>
      <p>
        To become the go-to neighborhood cafe known for comfort, creativity, and <br>
        unforgettable flavors.
      </p>
    </div>
  </div>
</template>

<style scoped></style>
