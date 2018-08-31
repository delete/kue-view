<template>
  <div class="home">
    <div class="flex board">
      <div class="queued p-6 border-r border-grey-lighter">
        <h2 class="text-3xl text-grey capitalize m-6">queued</h2>
        <JobCard
          v-for="(job, index) in jobs" :key="job.id"
          :jobId="job.id"
          :jobType="job.type"
          :createdAt="job.created_at"
          :attempts="job.attempts"
          class="mb-4 cursor-pointer select-none"
          :class="isJobSelected(job.id) ? 'shadow-md' : ''"
          @clickCtrl="selectJob(index)"
        />
      </div>
      <div class="active p-6 border-r border-grey-lighter">
        <h2 class="text-3xl text-grey capitalize m-6">active</h2>
      </div>
      <div class="complete p-6 border-r border-grey-lighter">
        <h2 class="text-3xl text-grey capitalize m-6">complete</h2>
      </div>
      <div class="failed p-6 border-r border-grey-lighter">
        <h2 class="text-3xl text-grey capitalize m-6">failed</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';

import jobs from '../../jobs.json';
import JobCard from '../components/JobCard.vue';

@Component({
  components: {
    JobCard
  },
})
export default class Home extends Vue {
  private jobs: any[] = jobs;
  private selectedJobs: any[] = [];

  public selectJob(jobIndex: number) {
    const selectedJob = this.jobs[jobIndex];
    const exists = this.isJobSelected(selectedJob.id);
    
    if (!exists) {
      this.selectedJobs = [...this.selectedJobs, selectedJob];
    } else {
      this.selectedJobs = this.selectedJobs.filter(j => j.id !== selectedJob.id);
    }
  }

  public isJobSelected(jobId: number) {
    return this.selectedJobs.find( j => j.id === jobId);
  }
}
</script>

<style>
.board > div {
  flex-basis: 33%;
}
</style>
