<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Home",
  setup() {
    const router = useRouter();
    const show = ref(false);

    onMounted(() => {
      show.value = true;
    });

    const cotactBtn = () => {
      router.push({ name: "Order" });
    };

    const menuBtn = () => {
      router.push({ name: "Menu" });
    };

    const foodBtn = () => {
      router.push({ name: "Foods" });
    };

    const drinkBtn = () => {
      router.push({ name: "Drinks" });
    };

    return { cotactBtn, menuBtn, foodBtn, drinkBtn, show };
  },
};
</script>

<template>
  <transition
    enter-active-class="transition duration-700 ease-out"
    enter-from-class="opacity-0 translate-y-10"
    enter-to-class="opacity-100 translate-y-0"
  >
    <div v-if="show">
      <!--Hero-->
      <div
        class="flex justify-evenly items-center flex-col p-5 md:flex-row-reverse"
      >
        <img
          class="h-80 rounded-xl hover:scale-105 transition duration-500"
          src="/images/kape.jpg"
        />

        <div>
          <h2 class="text-3xl">
            <b>
              Were you can chill, <br />
              and forget your Problems
            </b>
          </h2>

          <p>Have a drink and chill before Disaster</p>

          <button
            class="bg-cyan-900 text-white p-2 m-1 rounded-sm cursor-pointer hover:scale-105 transition duration-300"
            @click="cotactBtn"
          >
            <b>Order Now!!</b>
          </button>

          <button
            class="bg-gray-700 text-white p-2 w-20 rounded-sm cursor-pointer hover:scale-105 transition duration-300"
            @click="menuBtn"
          >
            <b>Menu</b>
          </button>
        </div>
      </div>

      <!--Selective Foods-->
      <h1 class="text-2xl text-center p-2">
        <b>Our Food Section</b>
      </h1>

      <!--Menu-->
      <div class="p-5">
        <div
          class="flex justify-around items-center flex-col p-2 md:flex-row"
        >
          <!--Food-->
          <div
            class="text-center hover:scale-105 transition duration-300 cursor-pointer"
            @click="foodBtn"
          >
            <img
              class="w-90 p-5 rounded-xl"
              src="/images/pod.png"
            />
            <h1 class="text-2xl"><b>Lots of Food</b></h1>
            <p class="p-1">
              Lots of food brings endless flavors to the table.
            </p>
          </div>

          <!--Drinks-->
          <div
            class="text-center hover:scale-105 transition duration-300 cursor-pointer"
            @click="drinkBtn"
          >
            <img
              class="w-90 p-5 rounded-xl"
              src="/images/inom.png"
            />
            <h1 class="text-2xl"><b>Refreshing Drinks</b></h1>
            <p class="p-1">
              Refreshing drinks keep you cool and energized all day.
            </p>
          </div>
        </div>
      </div>

      <!--Special Offers-->
      <div class="bg-gray-800 h-200 md:h-75">
        <h1 class="text-center text-white text-3xl p-2.5">
          <b>Special Offers</b>
        </h1>

        <div
          class="flex justify-around items-center text-center flex-col gap-4 text-white md:flex-row md:text-justify md:p-2"
        >
          <!--Cake Discount-->
          <div
            class="bg-gray-700 w-80 p-3.5 rounded-md text-center flex flex-col gap-2 hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            <h2 class="text-2xl"><b>20% Cake Discount</b></h2>

            <p>
              Indulge in your favorite slice of happiness with our special
              20% cake discount! Whether you're craving chocolate cakes,
              cheesecake, or something fruity, now is the perfect time to
              enjoy more sweetness for less.
            </p>
          </div>

          <!--Couple Discount-->
          <div
            class="bg-gray-700 p-3.5 rounded-md text-center w-80 hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            <h2 class="text-2xl"><b>50% Couple Discount</b></h2>

            <p>
              Celebrate love with a special treat! Couples enjoy 50% OFF
              and create sweet memories together. Bring your favorite
              person and let love (and dessert) fill the table.
            </p>
          </div>

          <!--Anniversary Discount-->
          <div
            class="bg-gray-700 p-3.5 rounded-md text-center w-80 hover:-translate-y-2 hover:shadow-xl transition duration-300"
          >
            <h2 class="text-2xl">
              <b>
                Anniversary Discount <br />
                Special
              </b>
            </h2>

            <p>
              It's your Anniversary! To thank you for your love and
              support, we're offering exclusive discounts on your
              favorite treats. Come celebrate with us and make the day
              extra sweet!
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped></style>