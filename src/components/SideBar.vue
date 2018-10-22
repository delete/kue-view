<template>
  <div class="sideBar absolute pin-r" :class="sidebarClasses">
    <div class="w-full border border-r-0 border-grey-light bg-white p-4">
      <button 
        class="absolute text-3xl text-grey hover:text-indigo close-btn"
        @click="open = false"
      >
        x
      </button>
      <div class="mt-8 flex justify-around">
        <div class="flex flex-col justify-between leading-normal">

          <div class="mt-6">
            <div class="text-grey-dark text-xl mb-2 flex">
              <span class="font-bold mr-4" title="Job ID">{{ job.id }}</span>
              <span title="Job type">{{ job.type }}</span>
            </div>
          </div>

          <h2 class="mt-5 mb-5 text-grey">Job Details</h2>

          <div class="flex justify-between">
            <div class="text-grey">
              <div class="text-lg">21/05/2210</div>
              <div class="text-sm">created at</div>
            </div>
            <div class="text-grey">
              <div class="text-lg">21/05/2210</div>
              <div class="text-sm">started at</div>
            </div>
            <div class="text-grey">
              <div class="text-lg">21/05/2210</div>
              <div class="text-sm">updated at</div>
            </div>
          </div>

          <ul class="m-6 list-reset text-grey">
            <li>Duration: {{ job.duration }}</li>
            <li>Priority: {{ job.priority }}</li>
            <li>WorkerId: {{ job.workerId }}</li>
          </ul>

          <div class="text-grey mb-2 flex justify-between">
            <span title="Attempts">Attempts {{ job.attempts.made }}/{{ job.attempts.max }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class SideBar extends Vue {

  @Prop({ default: false })
  public open!: boolean;

  @Prop()
  public job: any;

  get sidebarClasses() {
    return this.open ? 'sideBar--open' : '';
  }
}
</script>

<style scoped>
.sideBar {
  width: calc(100% - 1.5rem);
  opacity: 0;
  top: 105px;
  transform: translateX(100%);
  transition: transform .3s, opacity .2s;
}

.sideBar--open {
  transform: translateX(0);
  opacity: 1;
}

.sideBar > div {
  height: 90vh;
}

.close-btn {
  left: 2rem;
  /* the font adds 3px to top */
  top: calc(2rem - 3px);
}

li {
  text-align: left;
}
</style>
