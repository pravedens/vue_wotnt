<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344" title="Вход">
     <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >

      <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          v-model="password"
          :counter="8"
          :rules="passwordRules"
          label="Пароль"
          required
      ></v-text-field>

      <v-btn
          color="primary"
          class="mr-4"
          @click="validate"
          :disabled="!valid"
      >
        Вход
      </v-btn>
    </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
export default {
  name: "LoginAuth",
  data: () => ({
    valid: true,
    password: '',
    passwordRules: [
      v => !!v || 'Пароль обязателен',
      v => (v && v.length >= 8) || 'Пароль должен содержать не менее 8 символов',
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail обязателен',
      v => /.+@.+\..+/.test(v) || 'E-mail должен быть действующим',
    ],
  }),

  methods: {
    async validate () {
      const { valid } = await this.$refs.form.validate()

      if (valid) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
      }
    },
  },
}
</script>

<style scoped>

</style>
