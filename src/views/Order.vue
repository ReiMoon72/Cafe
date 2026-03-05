<script>
import { ref, reactive } from "vue";

export default {
  name: "Order",
  setup() {
    const foods = ref(false);
    const drinks = ref(false);
    const aniverary = ref(false);
    const userName = ref("");

    const coffeee = () => {
      foods.value = false;
      drinks.value = true;
    };

    const ffooodss = () => {
      foods.value = true;
      drinks.value = false;
    };

    const closeSary = () => {
      aniverary.value = false;
    };

    const receipt = () => {
      aniverary.value = true;
    };

    const drenks = ref([
      { name: "Latte", price: 150 },
      { name: "Amerikano", price: 140 },
      { name: "Espresso", price: 90 },
      { name: "Classic MilkTea", price: 100 },
      { name: "Taro", price: 110 },
      {name: "Matcha", price: 120}
    ])

    return {
      foods,
      drinks,
      coffeee,
      ffooodss,
      aniverary,
      closeSary,
      receipt,
      userName,
      drenks
    };
  },
};
</script>

<template>
  <div class="w-341.3 h-90 bg-[url('/images/bg.png')] bg-cover bg-center">
    <!--for image-->
    <div class="flex justify-center items-center text-center p-30 md:flx-row">
      <!--Text Area-->
      <div>
        <h1 class="text-white text-5xl font-serif">
          <b>Order Now!!</b>
        </h1>
        <p class="text-white text-2xl font-serif">To make us happy</p>
      </div>
    </div>
  </div>

  <!--Order System-->

  <div class="text-3xl text-center p-3">
    <h1><b>Order Procedure</b></h1>
  </div>

  <div>
    <div>
      <form
        class="flex justify-center items-center flex-col p-7 gap-3 bg-blue-900 w-80 m-auto rounded-md text-white md:w-90"
        @click.prevent=""
      >
        <label>Enter your name</label>
        <input
          class="border border-blue-500 rounded-md p-1 text-center"
          type="text"
          placeholder="Enter name"
          v-model="userName"
        />
        <label>Foor or Coffee</label>
        <button class="bg-red-700 p-1 rounded-md text-white" @click="coffeee">
          Coffee
        </button>
        <button
          class="bg-orange-950 p-1 text-white w-13 rounded-md"
          @click="ffooodss"
        >
          Food
        </button>
        <select
          class="border border-red-500 rounded-md p-0.5 bg-gray-600"
          v-show="drinks"
        >
          <option>Choose a Drink</option>
          <option>Latte</option>
          <option>Amerikano</option>
          <option>Expresso</option>
          <option>Classic MilkTea</option>
          <option>Taro</option>
          <option>Matcha</option>
        </select>
        <!--For foods-->
        <select
          class="border border-orange-950 rounded-md p-0.5 bg-gray-800"
          v-show="foods"
        >
          <option>Choose a Foods</option>
          <option>Pizza</option>
          <option>Lasagna</option>
          <option>Fried Chiken</option>
        </select>
        <button class="bg-gray-800 p-2 rounded-md w-25" @click="receipt">
          Submit
        </button>
      </form>
    </div>
  </div>

  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-10"
    v-show="aniverary"
  >
    <div class="bg-white w-96 p-6 rounded-md shadow-lg text-center">
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-250 ease-in-out active:bg-blue-400"
        @click="closeSary"
      >
        Close
      </button>
    </div>
  </div>
</template>
