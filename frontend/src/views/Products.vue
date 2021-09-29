<template>
  <v-main>
    <h1 class="title-1 text-center my-5">Productos</h1>
    <section data-cy="products">
      <v-row>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="4"
          data-cy="product-item"
        >
          <v-card
            class="mx-auto"
            max-width="400"
          >
            <v-img
              :src="product.image"
              lazy-src="https://via.placeholder.com/300"
              aspect-ratio="1"
              class="white--text align-end"
              height="200px"
            >
            </v-img>
            <v-card-title data-cy="product-name">{{ product.name }}</v-card-title>
            <v-card-text></v-card-text>
            <div class="d-flex">
              <div class="ml-auto">
                <v-chip color="primary" data-cy="price">
                  {{
                    product.price === 0 ?
                      "No Disponible" :
                      new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(product.price)
                  }}
                </v-chip>
              </div>
            </div>
          </v-card>
        </v-col>
    </v-row>
    </section>
  </v-main>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState([
      'products'
    ])
  },
  methods: {
    ...mapActions([
      'getProducts'
    ])
  },
  created () {
    this.getProducts()
  }
}
</script>

<style>
.v-chip {
  margin: 10px;
}
</style>
