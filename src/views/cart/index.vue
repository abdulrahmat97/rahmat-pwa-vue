<template>
  <div>
    <h1 class="font-weight-regular">
      Keranjang
      <span class="font-weight-bold">Saya</span>
    </h1>
    <div class="mt-5">
      <v-data-table
        :headers="headers"
        :items="getCart"
        hide-default-footer
        :loading="loading"
      >
        <template v-slot:item.index="{ item, index }">
          {{ getCart.indexOf(item) + 1 }}
        </template>
        <template v-slot:item.products.gambar="{ item }">
          <div class="ma-5">
            <v-img
              class="pa-2"
              :aspect-ratio="16 / 9"
              width="200"
              :src="'/img/foods/' + item.products.gambar"
            ></v-img>
          </div>
        </template>
        <template v-slot:item.keterangan="{ item }">
          {{ item.keterangan == "" ? "-" : item.keterangan }}
        </template>
        <template v-slot:item.products.harga="{ item }">
          {{ item.products.harga | rupiah }}
        </template>
        <template v-slot:item.total="{ item }">
          {{ (item.products.harga * parseInt(item.jumlah_pemesanan)) | rupiah }}
        </template>
        <template v-slot:item.action="{ item }">
          <v-btn icon color="red" @click="deleteItem(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </div>
    <div class="d-flex flex-row-reverse mt-10">
      <v-flex lg5 md5 sm12 class="align-self-end">
        <span class="font-weight-bold align-self-end mr-15 mt-1 mb-10"
          >Total : {{ calTotal | rupiah }}
        </span>
        <v-text-field v-model="nama" outlined label="Nama"></v-text-field>
        <v-text-field
          v-model="noMeja"
          outlined
          label="Nomor Meja"
        ></v-text-field>
        <v-btn
          color="green darken-1"
          dark
          @click="addToOrders"
          :loading="loading2"
          :disabled="loading2"
        >
          <v-icon left dark>mdi-cart-outline</v-icon>
          Pesan
        </v-btn>
      </v-flex>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: [
        { text: "#", value: "index" },
        { text: "Foto", value: "products.gambar" },
        { text: "Makanan", value: "products.nama" },
        { text: "Keterangan", value: "keterangan" },
        { text: "Jumlah", value: "jumlah_pemesanan" },
        { text: "Harga", value: "products.harga" },
        { text: "Tota Harga", value: "total" },
        { text: "", value: "action" },
      ],
      nama: "",
      noMeja: "",
      loading: false,
      loading2: false,
    };
  },
  created() {
    this.loading = true;
    this.$store
      .dispatch("fetchCart")
      .then((res) => {
        this.loading = false;
      })
      .catch((ex) => {
        console.log("ex", ex);
        this.loading = false;
      });
  },
  computed: {
    ...mapGetters(["getCart"]),
    calTotal() {
      let total = 0;
      if (this.getCart.length == 0) {
        return 0;
      } else {
        this.getCart.forEach((item) => {
          total = total + item.jumlah_pemesanan * item.products.harga;
        });
        return total;
      }
    },
  },
  methods: {
    deleteItem(item) {
      this.$swal({
        title: "Apakah anda yakin?",
        html: `Anda akan menghapus pesanan <b>${item.products.nama}</b>`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, hapus!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$swal("Terhapus!", "Pesanan Anda Telah dihapus.", "success");
          this.$store.dispatch("removeToCart", item);
        }
      });
    },
    addToOrders() {
      this.loading2 = true;
      let order = {
        nama: this.nama,
        noMeja: this.noMeja,
        keranjangs: this.getCart,
      };
      this.$store
        .dispatch("addToOrder", order)
        .then((res) => {
          this.loading2 = false;
          this.$router.push("/ordersuccess");
        })
        .catch((ex) => {
          this.loading2 = false;
        });
    },
  },
};
</script>

<style>
</style>