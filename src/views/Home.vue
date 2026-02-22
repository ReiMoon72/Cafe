<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  setup() {
    const router = useRouter();

    const cotactBtn = () => {
      router.push({ name: "Contact" });
    };

    const menuBtn = () => {
      router.push({ name: "Contact" });
    };

    return { cotactBtn, menuBtn };
  },
};
</script>

<template>
  <!--Hero-->
  <div
    class="flex justify-evenly items-center flex-col p-5 md:flex-row-reverse"
  >
    <img class="h-80" src="/public/images/kape.jpg" />
    <div>
      <h2 class="text-3xl">
        <b
          >Were you can chill, <br />
          and forget your Problems</b
        >
      </h2>
      <p>Have a drink and chill before Disater</p>
      <button
        class="bg-cyan-900 text-white p-2 m-1 rounded-sm cursor-pointer"
        @click="cotactBtn"
      >
        <b>Contact</b>
      </button>
      <button
        class="bg-gray-700 text-white p-2 w-20 rounded-sm cursor-pointer"
        @click="menuBtn"
      >
        <b>Menu</b>
      </button>
    </div>
  </div>

  <!--Selective Foods-->

  <h1 class="text-2xl text-center p-10"><b>Our Food Section</b></h1>

  <!--Menu-->
  <div>
    <!--Images-->
    <div class="flex justify-around items-center flex-col p-2 md:flex-row">
      <div class="text-center">
        <img class="w-90 p-5 rounded-xl" src="/public/images/pod.png" />
        <h1 class="text-2xl"><b>Lots of Food</b></h1>
        <p>Lots of food brings endless flavors to the table.</p>
      </div>
      <div class="text-center">
        <img class="w-90 p-5 rounded-xl" src="/public/images/inom.png" />
        <h1 class="text-2xl"><b>Refreshing Drinks</b></h1>
        <p>Refreshing drinks keep you cool and energized all day.</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
