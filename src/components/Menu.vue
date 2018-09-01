<template>
  <div class="menu absolute pin-t" style="width: calc(100% - 3rem);" :class="showMenu ? 'menu--show' : ''">
    <div class="w-full border border-t-0 border-grey-light bg-white p-4">
      <div class="m-3 flex justify-around">
        <button @click="handleSelectClick" class="bg-black hover:bg-grey-darkest hover:border-grey-darkest text-white border border-black rounded py-2 px-4">
          SelectAll
        </button>
        <button @click="handleRestartClick" title="Delete selected job(s)" class="bg-transparent hover:text-blue hover:border-blue text-grey-dark border border-grey rounded py-2 px-4">
          Restart
        </button>
        <button @click="handleDeleteClick" title="Restart selected job(s)" class="bg-transparent hover:text-red hover:border-red text-grey-dark border border-grey rounded py-2 px-4">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    showMenu: Boolean,
  },
})
export default class Menu extends Vue {
  @Emit('selected')
  private handleSelectClick() {/*  */}

  @Emit('delete')
  private handleDeleteClick() {/*  */}

  @Emit('restart')
  private handleRestartClick() {/*  */}
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
