<template>
  <div>
    <div class="d-flex justify-space-between">
      <div class="align-self-center">
        <span class="display-1">Delicious Food Menu</span><br>
        <span class="headline">in Your Handphone</span><br>
        <span class="subtitle-1">Ayo segera pilih dan pesan makanan favorit anda</span><br>
        <v-btn color="green" dark to="/foods" class="mt-5"
        ><v-icon left dark> mdi-arrow-right </v-icon>Pesan</v-btn
      >
      </div>
      <div>
        <v-img src="img/foods/ilustrasi.png" max-height="500" max-width="400" />
      </div>
    </div>
    <div class="mt-10">
      <BestFoods></BestFoods>
    </div>
  </div>
</template>

<script>
import BestFoods from '../components/BestFood'
export default {
  name: "Home",
  components:{
    BestFoods
  }
};
</script>
