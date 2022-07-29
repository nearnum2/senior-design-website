<template>
  <v-app>
    <Dash_board/>
    <v-main  class="mx-4" >
      <router-view></router-view>
    </v-main>

  </v-app>
</template>

<script>
// using: https://www.youtube.com/watch?v=BIuQfQcptIU&list=PL4cUxeGkcC9g0MQZfHwKcuB0Yswgb3gA5&index=4&ab_channel=TheNetNinja
import Dash_board from '@/components/Dash_board.vue'

export default {
  name: 'App',
  components: {
    Dash_board, 
  },
  data: () => ({
    //
  }),
};
</script>
