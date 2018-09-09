<template>
  <div class="max-w-md w-full lg:flex">
    <div 
        @click.stop="handleClick(jobId)"
        class="jobCard hover:shadow w-full border border-grey-light bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
      <div class="mb-3">
        <div class="text-grey-dark text-xl mb-2 flex">
          <span class="font-bold mr-4" title="Job ID">{{ jobId }}</span>
          <span title="Job type">{{ jobType }}</span>
        </div>
      </div>
      <details class="mb-3" @click.stop>
        <summary class="text-grey">
          Details
        </summary>
        <div class="mb-6 mt-3 pl-4 text-grey border-l border-grey-light">
          <p>Created at: {{ createdAt }}</p>
          <p>Started at: {{ startedAt }}</p>
          <p>Updated at: {{ updatedAt }}</p>
          <p>Duration: {{ duration }}</p>
          <p>Priority: {{ priority }}</p>
          <p>WorkerId: {{ workerId }}</p>
        </div>
      </details>
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
    updatedAt: String,
    startedAt: String,
    duration: String,
    priority: Number,
    workerId: String,
    attempts: Object,
    data: Object,
  },
})
export default class JobCard extends Vue {
  @Emit('click')
  private handleClick(jobId: number) {/*  */}
}
</script>

<style scoped>
summary {
  opacity: 0;
  outline: none;
}

.jobCard:hover summary {
  opacity: 1;
}

summary::-webkit-details-marker {
   display: none
}

summary:before {
  content: "+";
  color: #b8c2cc;
  font-size: inherit;
  margin: -5px 5px 0 0;
  padding: 0;
  text-align: center;
  width: 20px;
}

details {
  text-align: left;
}

details[open] summary:before {
  content: "-";
  color: #b8c2cc;
}

details[open] summary {
  opacity: 1 !important;
}
</style>
