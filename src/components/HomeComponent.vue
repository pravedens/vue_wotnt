<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
        v-for="gospel in promoGospels"
        :key="gospel.id"
        :src="gospel.imageSrc"
        cover
    >
      <div class="car-link">
        <v-btn block :to="'/mainGospel/' + gospel.id">{{ gospel.title }}</v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>
  <v-container
      fluid
  >
    <v-row dense>
      <v-col
          v-for="gospel of gospels"
          :key="gospel.id"
          :cols="gospel.flex"
      >
        <v-card
            outlined
            tile
            class="mx-auto"
            max-width="400"
            min-width="300"
        >
          <v-img
              class="white--text align-end"
              height="200px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              :src="gospel.imageSrc"
              cover
          >
            <v-card-title class="text-white" v-text="gospel.title"></v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            Number 10
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ gospel.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
                flat
                :to="'/mainGospel/' + gospel.id"
            >
              Open
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
                text
                color="orange"
            >
              Buy
            </v-btn>
          </v-card-actions>

        </v-card>
      </v-col>
    </v-row>


  </v-container>

</template>

<script>
export default {
  name: "HomeComponent",
  data () {
    return {

    }
  },

  computed: {
    promoGospels () {
      return this.$store.getters.promoGospels
    },
    gospels () {
      return this.$store.getters.gospels
    }
  }
}
</script>

<style scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgba(0, 0, 0, .5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>
