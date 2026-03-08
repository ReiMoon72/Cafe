<script>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Footer",
  setup() {
    const router = useRouter();

    const Home = () => {
      router.push({ name: "Home" });
    };

    const About = () => {
      router.push({ name: "About" });
    };

    const SO = () => {
      router.push({ name: "Offers" });
    };

    const Menu = () => {
      router.push({ name: "Menu" });
    };

    const OA = () => {
      router.push({ name: "Order" });
    };

    return { Home, About, SO, Menu, OA };
  },
};
</script>

<template>
  <!--Start Of Footer-->

  <div
    class="font-mono flex justify-between flex-col gap-5 p-3 bg-zinc-900 text-white mt-10 md:flex-row"
  >
    <!--Start Of Fotter-->
    <div>
      <p class="text-4xl text-left">
        <b
          >The Rei Caffee <br />
          Website</b
        >
      </p>
    </div>
    <div class="text-center flex flex-col">
      <!--Contacts-->
      <p class="text-2xl"><b>Contact Information</b></p>
      <p>Zone 4 Sitio Pag-Kakaisa, <br />Sucat Muntinlupa City</p>
      <p>+63 9123456789</p>
      <p>rsa563820@gamil.com</p>
    </div>
    <div class="text-center flex flex-col">
      <p class="text-2xl"><b>Navigation</b></p>
      <button @click="Home">HOME</button>
      <button @click="About">ABOUT US</button>
      <button @click="Menu">MENU</button>
      <button @click="SO">SPECIAL OFFERS</button>
      <button @click="OA">ORDER AREA</button>
    </div>
    <div class="text-center flex flex-col">
      <p class="text-2xl"><b>Social Media</b></p>
      <button>Instagram</button>
      <button>Facebook</button>
      <button>Tiktok</button>
    </div>
  </div>
</template>
