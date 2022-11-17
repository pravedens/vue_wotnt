<template>
  <v-card
      :loading="loading"
      class="mx-auto my-12"
      max-width="1200px"
  >
    <template v-slot:loader="{ isActive }">
      <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
      ></v-progress-linear>
    </template>

    <v-img
        cover
        height="350px"
        src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
    ></v-img>

    <v-card-item>
      <v-card-title>Cafe Badilico</v-card-title>

      <v-card-subtitle>
        <v-icon
            color="error"
            icon="mdi-fire-circle"
            size="small"
        ></v-icon>
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      <v-row
          align="center"
          class="mx-0"
      >
      </v-row>

      <div>Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
          variant="flat"
          color="secondary"
          @click="reserve"
      >
        Edit
      </v-btn>
      <v-btn
          color="deep-purple-lighten-2"
          variant="text"
          @click="reserve"
      >
        Buy
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "MainGospel",
  data () {
    return {
      loading: false,
      selection: 1,
    }
  },
  methods: {
    reserve () {
      this.loading = true

      setTimeout(() => (this.loading = false), 2000)
    },
  },
}
</script>

<style scoped>

</style>
