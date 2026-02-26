<script>
import { ref, reactive } from "vue";

export default {
  name: "Menu",
  setup() { 
  
   const coffee = () =>{
    kapenmalamig.value = 'kapenamainit';
   };

   const Milk = () =>{
    Milktea.value = 'gatastea';
   }

   const foods = () =>{
    pods.value = 'pagkain';
   }
 
    return { coffee, kapenmalamig, Milk, Milktea, pods, foods };
  },
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
      <p
        class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out"
        @click="coffee"
      >
        Coffee
      </p>
      <p
        class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out"
      @click="Milk">
        Milk Tea
      </p>
      <p
        class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out"
      @click="foods">
        Foods
      </p>
    </div>
  </div>

  <!--Kape-->
  <hr />
  <div
    class="flex justify-around items-center flex-col gap-3 text-center p-5 md:flex-row"
    v-if="kapenmalamig === 'kapenamainit'"  >
    <div>
      <img class="w-60 rounded-md" src="/public/menu-image/late.jpg" />
      <p class="p-2">Latte</p>
    </div>
    <div>
      <img class="w-60 rounded-md" src="/public/menu-image/USA.jpeg" />
      <p class="p-2">Amerikano</p>
    </div>
    <div>
      <img class="w-60 rounded-md" src="/public/menu-image/expresssoooo.jpg" />
      <p class="p-2">Expresso</p>
    </div>
  </div>

  <!--Milk Tea-->

  <div
    class="flex justify-around items-center flex-col gap-3 text-center p-5 md:flex-row"
    v-if="Milktea === 'gatastea'"
  >
    <div>
      <img src="/public/images/milktea-images/klasik.jpg" />
      <p>Classic Black Milk Tea</p>
    </div>
    <div>
      <img src="/public/images/milktea-images/ube.jpg" />
      <p>Taro Brown Sugar</p>
    </div>
    <div>
      <img src="/public/images/milktea-images/Matcha.jpg" />
      <p>Matcha</p>
    </div>
  </div>

  <!--pods-->
  <div class=" flex justify-around items-center flex-col gap-3 text-center p-5 md:flex-row" v-if="pods === 'pagkain'">
    <div>
      <img class="w-50" src="/public/images/foods/pizza.png" />
      <p>Pizza</p>
    </div>
    <div>
      <img src="/public/images/foods/lasagna.jpg" />
      <p>Lasagna</p>
    </div>
    <div>
      <img src="/public/images/foods/manok.jpg" />
      <p>Fried Chiken</p>
    </div>
  </div>
</template>

<style scoped></style>
