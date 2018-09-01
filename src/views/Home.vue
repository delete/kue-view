<template>
  <div class="home">
    <div class="flex board">
      <section class="queued p-6 border-r border-grey-lighter relative">
        <Menu :showMenu="showMenu" @selected="toggleSelectAll"/>
        
        <h2 class="text-3xl text-grey capitalize m-6">queued</h2>
        <div class="jobs pr-2">
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
      </section>
      <section class="active p-6 border-r border-grey-lighter">
        <h2 class="text-3xl text-grey capitalize m-6">active</h2>
        <div class="jobs">
        </div>
      </section>
      <section class="complete p-6 border-r border-grey-lighter">
        <h2 class="text-3xl text-grey capitalize m-6">complete</h2>
        <div class="jobs">
        </div>
      </section>
      <section class="failed p-6 border-r border-grey-lighter">
        <h2 class="text-3xl text-grey capitalize m-6">failed</h2>
        <div class="jobs">
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import moment from 'moment';

import jobs from '../../jobs.json';
import JobCard from '../components/JobCard.vue';
import Menu from '../components/Menu.vue';

@Component({
  components: {
    JobCard,
    Menu
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

  public toggleSelectAll () {
    this.selectAll = !this.selectAll;
  }

  get selectAllText () {
    return this.selectAll ? 'Unselect all' : 'Select all';
  }

  get selectAll () {
    return this.jobs ? this.selectedJobs.length === this.jobs.length : false
  }
  set selectAll (value: any) {
    this.selectedJobs = value ? [...this.jobs] : [];
  }

  get showMenu() {
    return this.selectedJobs.length > 0;
  }
}
</script>

<style>
.board > section {
  flex-basis: 33%;
}

.jobs {
  max-height: calc(100vh - 110px);
  overflow-y: auto;
}
</style>
