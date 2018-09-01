<template>
  <section class="p-6 border-r border-grey-lighter relative">
    <Menu :showMenu="showMenu">
      <TheButton @click="toggleSelectAll" :primary="true">
        {{ selectAllText }}
      </TheButton>
      <TheButton @click="handleRestartClick(selectedJobs)" title="Delete selected job(s)" class="hover:text-blue hover:border-blue">
        Restart
      </TheButton>
      <TheButton @click="handleDeleteClick(selectedJobs)" title="Restart selected job(s)" class="hover:text-red hover:border-red">
        Delete
      </TheButton>
    </Menu>
    
    <h2 class="text-3xl text-grey capitalize m-6">{{ title }}</h2>
    <div class="jobs overflow-y-auto pr-2">
      <JobCard
        v-for="(job, index) in jobs" :key="job.id"
        :jobId="job.id"
        :jobType="job.type"
        :createdAt="job.created_at"
        :updatedAt="job.updated_at"
        :startedAt="job.started_at"
        :duration="job.duration"
        :attempts="job.attempts"
        :priority="job.priority"
        :workerId="job.workerId"
        :data="job.data"
        class="mb-4 cursor-pointer select-none"
        :class="isJobSelected(job.id) ? 'shadow-md' : ''"
        @clickCtrl="selectJob(index)"
      />
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

import JobCard from '../components/JobCard.vue';
import Menu from '../components/Menu.vue';
import TheButton from '../components/TheButton.vue';

@Component({
  components: {
    JobCard,
    Menu,
    TheButton,
  },
})
export default class JobColumn extends Vue {
  @Prop({ required: true })
  public title!: string;

  @Prop({ required: true })
  public jobs!: any[];

  private selectedJobs: any[] = [];

  public selectJob(jobIndex: number) {
    const selectedJob = this.jobs[jobIndex];
    const exists = this.isJobSelected(selectedJob.id);

    if (!exists) {
      this.selectedJobs = [...this.selectedJobs, selectedJob];
    } else {
      this.selectedJobs = this.selectedJobs.filter((j) => j.id !== selectedJob.id);
    }
  }

  public isJobSelected(jobId: number) {
    return this.selectedJobs.find((j) => j.id === jobId);
  }

  public toggleSelectAll() {
    this.isAllSelected = !this.isAllSelected;
  }

  @Emit('restart')
  private handleRestartClick(jobs: any[]) {/*  */}

  @Emit('delete')
  private handleDeleteClick(jobs: any[]) {/*  */}

  get selectAllText() {
    return this.isAllSelected ? 'Unselect all' : 'Select all';
  }

  get isAllSelected() {
    return this.jobs ? this.selectedJobs.length === this.jobs.length : false;
  }
  set isAllSelected(value: any) {
    this.selectedJobs = value ? [...this.jobs] : [];
  }

  get showMenu() {
    return this.selectedJobs.length > 0;
  }
}
</script>

<style>
.jobs {
  max-height: calc(100vh - 110px);
}
</style>
