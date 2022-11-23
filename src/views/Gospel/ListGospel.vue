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
          v-for="gospel of myGospels"
          :key="gospel.id"
          :cols="gospel.flex"

      >
        <v-card
      max-width="400"
      class="mx-auto mb-5 elevation-12"
  >
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
                  {{ gospel.title }}
                </v-card-title>

                <v-card-subtitle>{{ gospel.description }}</v-card-subtitle>

                <v-card-actions>
                  <v-btn
                      class="ml-2"
                      variant="outlined"
                      size="small"
                      :to="'/MainGospel/' + gospel.id"
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
                    :src="gospel.imageSrc"
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

    }
  },

  computed: {
    myGospels () {
      return this.$store.getters.myGospels
    }
  }
}
</script>

<style scoped>

</style>
