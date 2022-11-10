<template>

    <v-layout>
      <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"

      >
        <template v-slot:image>
          <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon
              @click="drawer = !drawer"
          >

          </v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>WoTnt</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn
            class="hidden-sm-and-down"
            v-for="link in links"
            :key="link.title"
            :to="link.url"
            icon
        >
          <v-icon>{{ link.icon }}</v-icon>
        </v-btn>

      </v-app-bar>
      <v-navigation-drawer
          expand-on-hover
          rail
          v-model="drawer"
      >
        <v-list>
          <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="МРО ЦХВЕ"
              subtitle="Слово Истины"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
              v-for="link of links"
              :key="link.title"
              :prepend-icon="link.icon"
              :title="link.title"
              :to="link.url"
          >

          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <v-card height="200px"></v-card>
        <router-view/>
      </v-main>
    </v-layout>


</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {title: 'Вход', icon: 'mdi-account', url: '/login'},
        {title: 'Регистрация', icon: 'mdi-face', url: '/reg'},
        {title: 'Заказы', icon: 'mdi-archive', url: '/orders'},
        {title: 'Добавить проповедь', icon: 'mdi-card-plus', url: '/newGospel'},
        {title: 'Список проповедей', icon: 'mdi-sticker', url: '/listGospel'}
      ]
    }
  }
}
</script>

<style>

</style>
