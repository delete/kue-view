<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
