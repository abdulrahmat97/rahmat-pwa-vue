<template>
  <v-app>
    <v-app-bar app color="white" flat>
      <div class="d-flex align-center">Resto Linov</div>

      <div class="d-flex align-center ml-5">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/foods">Foods</v-btn>
      </div>

      <v-spacer></v-spacer>

      <v-btn text to="/cart">
        <v-icon left> mdi-cart-outline </v-icon>
        <span class="mr-2">Keranjang</span>
        <v-chip class="ma-2">{{ getCart.length }}</v-chip>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "App",
  data: () => ({
    //
  }),
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
    ...mapGetters(["getCart"]),
  },
};
</script>
