<template>
  <div class="menu absolute pin-t" style="width: calc(100% - 3rem);" :class="showMenu ? 'menu--show' : ''">
    <div class="w-full border border-t-0 border-grey-light bg-white p-4">
      <div class="m-3 flex justify-around">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

@Component
export default class Menu extends Vue {

  @Prop()
  public showMenu!: boolean;
}
</script>

<style>
.menu {
  transform: translateY(-100%);
  transition: transform .3s;
}
.menu--show {
  transform: translateY(0);
}
</style>
