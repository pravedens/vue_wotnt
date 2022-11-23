<template>
  <v-card
      class="mx-auto mt-16"
      max-width="400"
  >
    <v-toolbar color="purple">

      <v-toolbar-title>Заказы</v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-list lines="three">
      <v-list-subheader>User Controls</v-list-subheader>

      <v-list-item>
        <v-list-item-title>Content filtering</v-list-item-title>

        <v-list-item-subtitle>
          Set the content filtering level to restrict appts that can be downloaded
        </v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-title>Password</v-list-item-title>

        <v-list-item-subtitle>
          Require password for purchase or use password to restrict purchase
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list lines="three" select-strategy="multiple">
      <v-list-subheader>General</v-list-subheader>

      <v-list-item
          v-for="order in orders"
          :key="order.id"
          value="notifications"
      >
        <template v-slot:prepend="{ isActive }">

          <v-list-item-action start>
            <v-checkbox-btn
                :input-value="order.done"
                :model-value="isActive"
                @change="markDone(order)"
            >

            </v-checkbox-btn>
          </v-list-item-action>
        </template>

        <v-list-item-title>{{ order.name }}</v-list-item-title>

        <v-list-item-subtitle>
          {{ order.phone }}
        </v-list-item-subtitle>
        <template v-slot:append>
          <v-btn
              :to="'/MainGospel/' + order.adId"
              color="secondary"
              variant="text"
          >Open</v-btn>
        </template>
      </v-list-item>

    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "OrderUser",
  data () {
    return {
      orders: [
        {
          id: 'fds3',
          name: 'Vladilen',
          phone: '8-921-121-12-12',
          adId: '123',
          done: false
        }
      ]
    }
  },

  methods: {
    markDone (order) {
      order.done = true
    },
  }
}
</script>

<style scoped>


</style>
