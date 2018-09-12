<template functional>
  <div 
    class="max-w-md w-full lg:flex cursor-pointer select-none mb-4" 
    :class="props.isSelected ? 'shadow-md border border-grey' : ''"
  >
    <div
        v-on:click.stop="listeners.click(props.jobId)"
        class="jobCard hover:shadow w-full border border-grey-light bg-white rounded-b p-4 flex flex-col justify-between leading-normal">
      <div class="mb-3">
        <div class="text-grey-dark text-xl mb-2 flex">
          <span class="font-bold mr-4" title="Job ID">{{ props.jobId }}</span>
          <span title="Job type">{{ props.jobType }}</span>
        </div>
      </div>
      <details class="mb-3" @click.stop>
        <summary class="text-grey">
          Details
        </summary>
        <div class="mb-6 mt-3 pl-4 text-grey border-l border-grey-light">
          <p>Created at: {{ props.createdAt }}</p>
          <p>Started at: {{ props.startedAt }}</p>
          <p>Updated at: {{ props.updatedAt }}</p>
          <p>Duration: {{ props.duration }}</p>
          <p>Priority: {{ props.priority }}</p>
          <p>WorkerId: {{ props.workerId }}</p>
        </div>
      </details>
      <div>
        <div class="text-grey mb-2 flex justify-between">
          <span title="Attempts">{{ props.attempts.made }}/{{ props.attempts.max }}</span>
          <span title="Created date">{{ props.createdAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

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
