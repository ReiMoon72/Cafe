<script>
import { ref, reactive } from "vue";

export default {
  name: "Menu",
  setup() {
    const koffee = ref(true);
    const Milktea = ref(false);
    const pods = ref(false);
    const Latte = ref(false);
    const Americano = ref(false);
    const Expresso = ref(false)

    const kope = () => {
      koffee.value = true;
      Milktea.value = false;
      pods.value = false;
    };

    const Milk = () => {
      koffee.value = false;
      Milktea.value = true;
      pods.value = false;
    };

    const foods = () => {
      koffee.value = false;
      Milktea.value = false;
      pods.value = true;
    };

    const latteBtn = () => {
      Latte.value = true;
    };

    const closeBtn = () => {
      Latte.value = false;
    };

    const AmenicanoBTn = () => {
      Americano.value = true;
    };

    const closeamericanoBtn = () => {
      Americano.value = false;
    };

    const ExpressooBtn = () =>{
      Expresso.value = true
    }

    const ExpressoCloseBtn = () => {
      Expresso.value = false;
    };

    return {
      koffee,
      Milktea,
      pods,
      kope,
      Milk,
      foods,
      latteBtn,
      Latte,
      closeBtn,
      Americano,
      closeamericanoBtn,
      AmenicanoBTn,
      Expresso,
      ExpressoCloseBtn,
      ExpressooBtn
    };
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

  <!--Mune Navbar-->
  <div class="p-6">
    <div class="flex flex-col justify-evenly items-center gap-3 md:flex-row">
      <h1 class="text-2xl"><b>Menu Bar</b></h1>
      <p
        class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out"
        @click="kope"
      >
        Coffee
      </p>
      <p
        class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out"
        @click="Milk"
      >
        Milk Tea
      </p>
      <p
        class="cursor-pointer text-2xl hover:text-amber-800 transition duration-300 ease-in-out"
        @click="foods"
      >
        Foods
      </p>
    </div>
  </div>

  <!--Coffee Menu-->
  <hr />
  <div
    class="flex justify-around items-center flex-col gap-3 text-center p-5 md:flex-row"
    v-if="koffee"
  >
    <div class="flex flex-col items-center gap-2">
      <img class="w-60 rounded-md" src="/public/menu-image/late.jpg" />
      <button
        class="bg-amber-800 p-1.5 m-1 w-19 text-white rounded-md cursor-pointer hover:bg-amber-900 transition duration-300 ease-in-out active:bg-amber-700"
        @click="latteBtn"
      >
        Latte
      </button>
    </div>
    <div class="flex flex-col items-center gap-2">
      <img class="w-60 rounded-md" src="/public/menu-image/USA.jpeg" />
      <button
        class="bg-gray-900 p-1.5 m-1 w-22 text-white rounded-md cursor-pointer hover:bg-gray-950 transition duration-300 ease-in-out active:bg-gray-700"
        @click="AmenicanoBTn"
      >
        Amerikano
      </button>
    </div>
    <div class="flex flex-col items-center gap-2">
      <img class="w-60 rounded-md" src="/public/menu-image/expresssoooo.jpg" />
      <button
        class="bg-amber-950 p-1.5 m-1 w-22 text-white rounded-md cursor-pointer"
        @click="ExpressooBtn"
      >
        Expresso
      </button>
    </div>
  </div>

  <!--Pop Up-->
  <!--Latte-->

  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center"
    v-show="Latte"
  >
    <div class="bg-white w-96 p-6 rounded-md shadow-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Latte</h1>
      <img
        class="w-40 rounded-full mx-auto mb-4"
        src="/public/menu-image/late.jpg"
      />
      <p class="mb-2">
        A latte is a smooth espresso drink blended with steamed milk and topped
        with a light foam. Creamy and mild, it's a comforting coffee classic
        often enjoyed plain or with flavored syrups.
      </p>
      <p class="font-semibold">Available Iced and Hot</p>
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-250 ease-in-out active:bg-blue-400"
        @click="closeBtn"
      >
        Close
      </button>
    </div>
  </div>

  <!--Amiricano-->

  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center flex-wrap"
    v-show="Americano"
  >
    <div class="bg-white w-96 p-6 rounded-md shadow-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Americano</h1>
      <img
        class="w-40 rounded-full mx-auto mb-4"
        src="/public/menu-image/USA.jpeg"
      />
      <p class="mb-2">
        An Americano is a simple yet bold coffee made by diluting espresso with
        hot water. It has the strength and aroma of espresso but with a
        smoother, lighter body—perfect for those who enjoy a clean,
        straightforward cup without milk.
      </p>
      <p class="font-semibold">Available Iced and Hot</p>
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="closeamericanoBtn"
      >
        Close
      </button>
    </div>
  </div>

  <!--Expresso-->

  <div
    class="fixed inset-0 bg-opacity-50 backdrop-blur-sm flex items-center justify-center flex-wrap"
    v-show="Expresso"
  >
    <div class="bg-white w-96 p-6 rounded-md shadow-lg text-center">
      <h1 class="text-3xl font-bold mb-4">Expresso</h1>
      <img
        class="w-40 rounded-full mx-auto mb-4"
        src="/public/menu-image/expresssoooo.jpg"
      />
      <p class="mb-2">
        Brewing Methods: Espresso is made by forcing hot water through
        finely-ground coffee beans. It is a quick extraction that results in a
        small amount of coffee, usually one ounce. Regular coffee is typically
        brewed by steeping coarsely-ground coffee beans in hot water, allowing
        the flavors to infuse slowly. straightforward cup without milk.
      </p>
      <p class="font-semibold">Available Iced and Hot</p>
      <button
        class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        @click="ExpressoCloseBtn"
      >
        Close
      </button>
    </div>
  </div>

  <!--Milk Tea-->

  <div
    class="flex justify-around items-center flex-col gap-3 text-center p-5 md:flex-row"
    v-if="Milktea"
  >
    <div>
      <img src="/public/images/milktea-images/klasik.jpg" />
      <button>Classic Black Milk Tea</button>
    </div>
    <div>
      <img src="/public/images/milktea-images/ube.jpg" />
      <button>Taro Brown Sugar</button>
    </div>
    <div>
      <img src="/public/images/milktea-images/Matcha.jpg" />
      <button>Matcha</button>
    </div>
  </div>

  <!--pods-->
  <div
    class="flex justify-around items-center flex-col gap-3 text-center p-5 md:flex-row"
    v-if="pods"
  >
    <div>
      <img class="w-50" src="/public/images/foods/pizza.png" />
      <button>Pizza</button>
    </div>
    <div>
      <img src="/public/images/foods/lasagna.jpg" />
      <button>Lasagna</button>
    </div>
    <div>
      <img src="/public/images/foods/manok.jpg" />
      <button>Fried Chiken</button>
    </div>
  </div>
</template>

<style scoped></style>
