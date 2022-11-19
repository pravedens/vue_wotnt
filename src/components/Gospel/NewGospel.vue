<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344" title="Добавить проповедь">
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >

        <v-text-field
            name="title"
            v-model="title"
            :rules="[v => !!v || 'Название обязательное']"
            label="Добавить название"
            type="text"
            required
        ></v-text-field>

        <v-textarea
            name="description"
            v-model="description"
            auto-grow
            variant="filled"
            color="deep-purple"
            :rules="[v => !!v || 'Описание обязательное']"
            label="Описание"
            type="text"
            required
            rows="2"
        ></v-textarea>

        <v-file-input
            v-model="files"
            color="deep-purple-accent-4"
            counter
            label="File input"
            multiple
            placeholder="Select your files"
            prepend-icon="mdi-paperclip"
            variant="outlined"
            :show-size="1000"
        >
          <template v-slot:selection="{ fileNames }">
            <template v-for="(fileName, index) in fileNames" :key="fileName">
              <v-chip
                  v-if="index < 2"
                  color="deep-purple-accent-4"
                  label
                  size="small"
                  class="mr-2"
              >
                {{ fileName }}
              </v-chip>

              <span
                  v-else-if="index === 2"
                  class="text-overline text-grey-darken-3 mx-2"
              >
          +{{ files.length - 2 }} File(s)
        </span>
            </template>
          </template>
        </v-file-input>

        <img src="" height="100">

        <v-switch
            v-model="promo"
            hide-details
            inset
            color="primary"
            label="Добавить в слайдер"
        ></v-switch>

        <v-btn
            color="primary"
            class="mr-4"
            @click="createGospel"
            :disabled="!valid"
        >
          Добавить
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "NewGospel",
  data () {
    return {
      title: '',
      description: '',
      files: [],
      promo: false,
      valid: false
    }
  },

  methods: {
    async createGospel () {
      const { valid } = await this.$refs.form.validate()

      if (valid) {
        const gospel = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc: 'https://freephotos.cc/storage/preview/path/colored-pencils-upside-down-with-room-for-text_free_stock_photos_picjumbo_DSC03452-2210x1474.jpg'
        }
        this.$store.dispatch('createGospel', gospel)
      }
    }
  }
}
</script>

<style scoped>

</style>
