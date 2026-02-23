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

    const foodBtn = () => {
      router.push({ name: "Foods" });
    };

    const drinkBtn = () => {
      router.push({ name: "Drinks" });
    };

    return { cotactBtn, menuBtn, foodBtn, drinkBtn };
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
  <div class="p-5">
    <!--Images-->
    <div class="flex justify-around items-center flex-col p-2 md:flex-row">
      <div class="text-center">
        <img class="w-90 p-5 rounded-xl" src="/public/images/pod.png" />
        <h1 class="text-2xl"><b>Lots of Food</b></h1>
        <p class="p-1">Lots of food brings endless flavors to the table.</p>
        <button
          class="bg-red-500 text-white p-1.5 w-20 rounded-md"
          @click="foodBtn"
        >
          Foods
        </button>
      </div>
      <div class="text-center">
        <img class="w-90 p-5 rounded-xl" src="/public/images/inom.png" />
        <h1 class="text-2xl"><b>Refreshing Drinks</b></h1>
        <p class="p-1">
          Refreshing drinks keep you cool and energized all day.
        </p>
        <button
          class="bg-blue-600 text-white p-1.5 w-20 rounded-md"
          @click="drinkBtn"
        >
          Drink
        </button>
      </div>
    </div>
  </div>

  <!--Special Offers-->
  <div class="bg-blue-950 h-220 md:h-115">
    <h1 class="text-center text-white text-3xl p-5">
      <b>Special Offers</b>
    </h1>
    <div class="flex justify-around items-center text-center flex-col gap-2 text-white md:flex-row">
      <!--20% Cake Discount-->
      <div class="bg-gray-800 p-5 rounded-md">
        <h2 class="text-2xl"><b>20% Cake Discount</b></h2>
        <p>
          Indulge in your favorite slice <br />
          of happiness with <br />
          our special 20% cake
          <br />
          discount! Whether you're <br />
          craving chocolate cakes, <br />
          cheesecake, or
          <br />
          something fruity, now is the <br />
          perfect time to enjoy <br />
          more sweetness for
          <br />
          less
        </p>
      </div>
      <!--50% Couple Discount-->
      <div class="bg-gray-800 p-5 rounded-md">
        <h2 class="text-2xl"><b>50% Couple Discount</b></h2>
        <p>
          Celebrate love with a special treat! <br />
          Couples enjoy 50% OFF and create <br />
          sweet memories <br />
          together. Bring your <br />
          favorite person and let love <br />
          (and dessert) fill the table.
        </p>
      </div>
      <!--Anniversary Discount Special-->
      <div class="bg-gray-800 p-3 rounded-md">
        <h2 class="text-2xl"><b>Anniversary Discount <br> Special</b></h2>
        <p>
          It’s your Anniversary! To thank <br />
          you for your love and <br />
          support, we're <br />
          offering exclusive <br />
          discounts on your favorite treats. <br />
          Come celebrate <br />
          with us and make the day extra sweet! <br />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
