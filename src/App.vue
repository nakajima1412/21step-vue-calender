<template>
  <v-app>
    <v-container fluid pt-0>
      <router-view />
    </v-container>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import FooterComponent from '@/components/Footer.vue'

export default defineComponent({
  components: {
    Footer: FooterComponent,
  },
})
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
