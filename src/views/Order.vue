<script>
import { ref, reactive, computed } from "vue";

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

    const closeRecept = () =>{
      aniverary.value = false
    };

    const confirmOrderBtn = () =>{
      alert("Your order has been placed!!")
    }

    const juiced = ref('')

    const finalPrice = computed(() =>{
      const drenk = drenks.value.find(p => p.name === juiced.value)
      return part ? part.price : null
    })

    const drenks = ref([
      { name: "Latte", price: 150 },
      { name: "Amerikano", price: 140 },
      { name: "Espresso", price: 90 },
      { name: "Classic MilkTea", price: 100 },
      { name: "Taro", price: 110 },
      { name: "Matcha", price: 120 },
    ]);



    return {
      foods,
      drinks,
      coffeee,
      ffooodss,
      aniverary,
      closeSary,
      receipt,
      userName,
      drenks,
      closeRecept,
      confirmOrderBtn,
      finalPrice,
      juiced
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
          v-show="drinks" v-model="juiced">
          <option>Choose a Drink</option>
          <option value="Latte">Latte</option>
          <option value="Amerikano">Americano</option>
          <option value="Espresso">Expresso</option>
          <option value="Classic MilkTea">Classic MilkTea</option>
          <option value="Taro">Taro</option>
          <option value="Matcha">Matcha</option>
        </select>
        <!--For foods-->
        <select
          class="border border-orange-950 rounded-md p-0.5 bg-gray-800"
          v-show="foods"
        >
          <option>Choose a Foods</option>
          <option value="Pizza">Pizza</option>
          <option value="Lasagna">Lasagna</option>
          <option value="Fried-Chiken">Fried Chiken</option>
        </select>
        <button class="bg-gray-800 p-2 rounded-md w-25" @click="receipt">
          Receipt
        </button>
      </form>
    </div>
  </div>

  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-10"
    v-show="aniverary"
  >
    <div class="bg-white w-96 p-6 rounded-md shadow-lg text-center">
      <!--Navigation bar of receipt-->
      <div class=" flex justify-between items-center">
        <p class="text-2xl">Your Receipt</p>
        <button class=" text-red-600 p-1 text-2xl hover:text-red-900 active:text-red-700 transition duration-250 ease-in-out" @click="closeRecept">X</button>
      </div>
      <hr>
      <!--For the items-->
      <div class="p-2">
        <p>Name: {{ userName }}</p>
        <p>Coffee Or Food Order: {{  }}</p>
        <p v-if="finalPrice !== null">Price: ₱{{ finalPrice }}</p>
      </div>
      <!--For Button-->
      <div class="text-white">
        <button class=" bg-blue-700 w-30 p-1 rounded-md" @click="confirmOrderBtn">Confirm Order</button>
      </div>
    </div>
  </div>
</template>
