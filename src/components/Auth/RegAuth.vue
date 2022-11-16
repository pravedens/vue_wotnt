<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344" title="Регистрация">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >

      <v-text-field
          name="email"
          type="email"
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          name="password"
          v-model="password"
          :counter="8"
          :rules="passwordRules"
          label="Пароль"
          type="password"
          required
      ></v-text-field>

        <v-text-field
            v-model="confirmPassword"
            :counter="8"
            :rules="[(password === confirmPassword || 'Пароль не совпадает'), (v => !!v || 'Пароль обязателен')]"
            label="Подтвердите пароль"
            type="password"
            required
        ></v-text-field>

      <v-btn
          color="primary"
          class="mr-4"
          @click="validate"
          :disabled="!valid"
      >
        Регистрация
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
      //v => /(?=.*[A-Z])/.test(v) || 'Пароль должен иметь не менее 1 символа верхнего регистра',
      //v => /(?=.*\d)/.test(v) || 'Пароль должен иметь хотя бы одну цифру',
      //v => /([!@$%#^&*(){}<>])/.test(v) || 'Пароль должен иметь один специальный символ [!@#$%]'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail обязателен',
      v => /.+@.+\..+/.test(v) || 'E-mail должен быть действующим',
    ],
    confirmPassword: '',

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
