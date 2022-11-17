<template>
  <v-toolbar
      color="">
    <v-toolbar-title>Список проповедей</v-toolbar-title>
  </v-toolbar>
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
      max-width="400"
      class="mx-auto mb-5 elevation-12"
  >

    <!-- <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>My Music</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-container>
      <v-row dense>
        <v-col
            cols="12"
        >
          <v-card
              color="#1F7087"
              theme="dark"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-h5">
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle>{{ item.description }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                      class="ml-2"
                      variant="outlined"
                      size="small"
                      :to="'/MainGospel/' + item.id"
                  >
                    Открыть
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar
                  class="ma-3"
                  size="150"
                  rounded="0"
              >
                <v-img
                    :src="item.imageSrc"
                    cover
                ></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ListGospel",
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
