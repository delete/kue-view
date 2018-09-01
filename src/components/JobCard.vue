<template>
  <div class="max-w-md w-full lg:flex">
    <div @click.ctrl="handleClick(jobId)" class="hover:shadow w-full border-r border-b border-l border-grey-light lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r lg:rounded-l p-4 flex flex-col justify-between leading-normal">
      <div class="mb-3">
        <div class="text-grey-dark text-xl mb-2 flex">
          <span class="font-bold mr-4" title="Job ID">{{ jobId }}</span>
          <span title="Job type">{{ jobType }}</span>
        </div>
      </div>
      <div class="opacity-0">
        <p>Teste</p>
      </div>
      <div>
        <div class="text-grey mb-2 flex justify-between">
          <span title="Attempts">{{ attempts.made }}/{{ attempts.max }}</span>
          <span title="Created date">{{ createdAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Emit } from 'vue-property-decorator';

@Component({
  components: {},
  props: {
    jobId: Number,
    jobType: String,
    createdAt: String,
    attempts: Object,
  }
})
export default class JobCard extends Vue {
  @Emit('clickCtrl')
  handleClick(jobId: number) {}
}
</script>