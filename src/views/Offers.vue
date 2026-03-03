<script>
import { ref, reactive } from "vue";

export default {
  name: "Offers",
  setup() {
    const Promocake = ref(false);
    const PromoCode = ref(null);
    const Promocouple = ref(false);
    const aniverary = ref(false);

    const GenerateBtn = () => {
      Promocake.value = true;
      PromoCode.value = Math.floor(100000 + Math.random() * 900000);
      console.log(PromoCode)
    };

    const CloseBtn = () => {
      Promocake.value = false;
    };

    const Closecouple = () => {
      Promocake.value = false;
    };

    const coupleBtn = () => {
      Promocake.value = true;
      PromoCode.value = Math.floor(100000 + Math.random() * 900000);
      console.log(PromoCode)
    };

    const aniversarydiscount = () => {
      Promocake.value = true;
      PromoCode.value = Math.floor(100000 + Math.random() * 900000);
      console.log(PromoCode)
    };

      const closeSary = () => {
      Promocake.value = false;
    };

    return {
      Promocake,
      GenerateBtn,
      CloseBtn,
      PromoCode,
      Promocouple,
      Closecouple,
      coupleBtn,
      aniverary,
      aniversarydiscount,
      closeSary
    };
  },
};
</script>

<template>
  <div class="w-341.3 h-90 bg-[url('/images/Web-head.jpg')] bg-cover bg-center">
    <!--for image-->
    <div class="flex justify-center items-center text-center p-30 md:flx-row">
      <!--Text Area-->
      <div>
        <h1 class="text-white text-5xl font-serif">
          <b>February Special Offers</b>
        </h1>
        <p class="text-white text-2xl font-serif">
          Discount make your wallet easy
        </p>
      </div>
    </div>
  </div>

  <!--Special Offers Starts-->

  <div class="flex justify-center items-center text-3xl p-3">
    <h1><b>Special Offers!!</b></h1>
  </div>

  <div>
    <div
      class="flex justify-around items-center flex-col gap-5 p-5 md:flex-row"
    >
      <!--Promo!!-->
      <div class="text-center bg-amber-400 w-80 p-5 rounded-md">
        <h1><b>20% Cake Discount</b></h1>
        <p>
          Enjoy your favorite cakes for less with our special 20% discount! From
          rich chocolate to creamy cheesecake and fruity delights, every slice
          is sweeter with savings. Treat yourself today! 🍰✨
        </p>
        <button
          class="bg-cyan-900 p-1.5 text-white rounded-md cursor-pointer"
          @click="GenerateBtn"
        >
          Generate Coupon
        </button>
      </div>
      <div class="text-center bg-amber-400 w-80 p-5.5 rounded-md">
        <h1><b>50% Couple Discount</b></h1>
        <p>
          Celebrate love with a sweet treat! 💕 Couples get 50% OFF on your
          favorite desserts. Bring your special someone and enjoy sweet moments
          together. 🍰✨
        </p>
        <button
          class="bg-cyan-900 p-1.5 text-white rounded-md cursor-pointer"
          @click="coupleBtn"
        >
          Generate Coupon
        </button>
      </div>
      <div class="text-center bg-amber-400 w-80 p-3 rounded-md ">
        <h1><b>Anniversary Discount Special</b></h1>
        <p>
          It’s your anniversary! 🎉 To celebrate your love and continued
          support, we're giving you exclusive discounts on your favorite treats.
          Join us, share something sweet, and make your special day even more
          memorable. 🍰💕
        </p>
        <button
          class="bg-cyan-900 p-1.5 text-white rounded-md cursor-pointer"
          @click="aniversarydiscount"
        >
          Generate Coupon
        </button>
      </div>
    </div>
  </div>

  <!--For pop=up-->

  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-10"
    v-show="Promocake"
  >
    <div class="bg-white w-96 p-6 rounded-md shadow-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Promo</h1>
      <p class="text-2xl">Your Promocode:</p>
      <p class="text-center text-2xl">
        <b>{{ PromoCode }}</b>
      </p>
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-250 ease-in-out active:bg-blue-400"
        @click="CloseBtn"
      >
        Close
      </button>
    </div>
  </div>

  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-10"
    v-show="Promocouple"
  >
    <div class="bg-white w-96 p-6 rounded-md shadow-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Promo</h1>
      <p class="text-2xl">Your Promocode:</p>
      <p class="text-center text-2xl">
        <b>{{ PromoCode }}</b>
      </p>
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-250 ease-in-out active:bg-blue-400"
        @click="Closecouple"
      >
        Close
      </button>
    </div>
  </div>

  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-10"
    v-show="aniverary"
  >
    <div class="bg-white w-96 p-6 rounded-md shadow-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Promo</h1>
      <p class="text-2xl">Your Promocode:</p>
      <p class="text-center text-2xl">
        <b>{{ PromoCode }}</b>
      </p>
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-250 ease-in-out active:bg-blue-400"
        @click="closeSary"
      >
        Close
      </button>
    </div>
  </div>
</template>
