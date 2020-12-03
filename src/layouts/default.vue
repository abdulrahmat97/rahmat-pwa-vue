<template>
  <div>
    <v-app-bar app color="white" flat>
      <div class="d-flex align-center">Resto Linov</div>

      <!-- <div class="d-flex align-center ml-5">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/foods">Foods</v-btn>
      </div> -->
      <v-toolbar-items class="ml-10">
        <v-btn text to="/">Home</v-btn>
      </v-toolbar-items>
      <v-toolbar-items>
        <v-btn text to="/foods">Foods</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text to="/cart" class="mr-5">
          <v-icon left> mdi-cart-outline </v-icon>
          <span class="mr-2">Keranjang</span>
          <v-chip class="ma-2">{{ calTotalCart }}</v-chip>
        </v-btn>
      </v-toolbar-items>
      <v-btn to="/auth/login" v-if="!getLocal" color="primary" dark depressed>
        Login
      </v-btn>
      <v-btn @click="logout" v-if="getLocal" color="error" dark depressed>
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <v-footer class="mt-10">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} — <strong>Abdul Rahmat</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  created() {
    this.$store
      .dispatch("fetchCart")
      .then((res) => {
        //
      })
      .catch((ex) => {
        console.log("ex", ex);
        //
      });
  },
  computed: {
    getLocal() {
      return sessionStorage.getItem("user");
    },
    ...mapGetters(["getCart", "getUser"]),
    calTotalCart() {
      let total = 0;
      if (this.getCart.length == 0) {
        return 0;
      } else {
        this.getCart.forEach((item) => {
          total = total + parseInt(item.jumlah_pemesanan);
        });
        return total;
      }
    },
  },
  methods: {
    logout() {
      sessionStorage.clear();
      this.$router.push("/auth/login");
    },
  },
};
</script>

<style>
</style>