<script>
import { ref, reactive } from "vue";

export default {
  name: "Order",
  setup() {
    //I need to do a Array for a Price

    const drenks = ref(true);
    const pooods = ref(false);

    const PoodsIs = () => {
      drenks.value = false;
      pooods.value = true;
    };

    const CoffeeIs = () => {
      drenks.value = true;
      pooods.value = false;
    };

    return { PoodsIs, CoffeeIs, drenks, pooods };
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

  <div>
    <div>
      <form @click.prevent="">
        <label>Enter your name</label>
        <input type="" placeholder="Enter name" />
        <label>Foor or Coffee</label>
        <label>Coffee</label>
        <input type="checkbox" :checked="drenks" @change="CoffeeIs" />
        <label>Food</label>
        <input type="checkbox" :checked="pooods" @change="PoodsIs" />
        <select v-if="drenks">
          <option>Choose a Drink</option>
          <option>Latte</option>
          <option>Amerikano</option>
          <option>Expresso</option>
          <option>Classic MilkTea</option>
          <option>Taro</option>
          <option>Matcha</option>
        </select>
        <!--For foods-->
        <select v-if="pooods">
          <option>Choose a Foods</option>
          <option>Pizza</option>
          <option>Lasagna</option>
          <option>Fried Chiken</option>
        </select>
      </form>
    </div>
  </div>
</template>
