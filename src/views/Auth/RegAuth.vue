<template>
  <v-sheet class="pa-12" rounded>
    <v-card class="mx-auto px-6 py-8" max-width="344" title="Регистрация">
      <v-form
        ref="form"
        lazy-validation
    >

      <v-text-field
          name="email"
          type="email"
          v-model="email"
          :rules="[(v => !!v || 'E-mail обязателен'), (v => /.+@.+\..+/.test(v) || 'E-mail должен быть действующим')]"
          label="E-mail"
          required
      ></v-text-field>

      <v-text-field
          name="password"
          v-model="password"
          :counter="8"
          :rules="[(v => !!v || 'Пароль обязателен'), (v => (v && v.length >= 8) || 'Пароль должен содержать не менее 8 символов')]"
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
          @click="register"
      >
        Регистрация
      </v-btn>
        <v-btn
            color="primary"
            class="mr-4"
            @click="signInWithGoogle"
        >
          Google
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { useRouter } from 'vue-router'

const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const router = useRouter()

const register = () => {
  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        console.log("Successfully registered!");
        console.log(auth.currentUser)
        router.push('/')
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      })
};

const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        router.push("/")
      })
      .catch(() => {
        //handle error
      })
}

</script>

<style scoped>

</style>
