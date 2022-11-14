<template>
  <v-carousel hide-delimiters>
    <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.imageSrc"
        cover
    >
      <div class="car-link">
        <v-btn block :to="'/mainGospel/' + item.id">{{ item.title }}</v-btn>
      </div>
    </v-carousel-item>
  </v-carousel>
  <v-container
      fluid
  >
    <v-row dense>
      <v-col
          v-for="item of items"
          :key="item.id"
          :cols="item.flex"
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
              :src="item.imageSrc"
              cover
          >
            <v-card-title class="text-white" v-text="item.title"></v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">
            Number 10
          </v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{ item.description }}</div>
          </v-card-text>

          <v-card-actions>
            <v-btn
                flat
                :to="'/mainGospel/' + item.id"
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
      items: [
        {
          title: 'First ad',
          description: 'Hello i am description_1',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '123'
        },
        {
          title: 'Second ad',
          description: 'Hello i am description_2',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '1234'
        },
        {
          title: 'Third ad',
          description: 'Hello i am description_3',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '12345'
        },
        {
          title: 'For ad',
          description: 'Hello i am description_4',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '123456'
        },
      ],
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
