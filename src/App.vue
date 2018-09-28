<template>
  <div id="app" class="bg-grey-lightest">
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class App extends Vue {
  @Action('FETCH_STATS')
  private fetchStats!: () => {};

  public created() {
    setInterval(() => this.fetchStats(), 1000);
  }
}
</script>
<style>
@import "tailwindcss/preflight";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/* Style Scroll bar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-button {
  background-color: rgb(210, 210, 210);
}

::-webkit-scrollbar-track {
  background-color: #e4e4e4;
}

::-webkit-scrollbar-thumb {
  background-color: rgb(210, 210, 210);
}
</style>
