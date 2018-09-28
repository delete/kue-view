<template>
  <div class="home">
    <div class="board flex">
      <JobColumn
        class="board__column"
        title="queued"
        :badge="stats.inactiveCount"
        :jobs="queuedJobs"
        @restart="restartJobs"
        @delete="deleteJobs"/>
      <JobColumn
        class="board__column"
        title="active"
        :badge="stats.activeCount"
        :jobs="activedJobs"
        @restart="restartJobs"
        @delete="deleteJobs"/>
      <JobColumn
        class="board__column"
        title="complete"
        :badge="stats.completeCount"
        :jobs="completedJobs"
        @restart="restartJobs"
        @delete="deleteJobs"/>
      <JobColumn
        class="board__column"
        title="failed"
        :badge="stats.failedCount"
        :jobs="failedJobs"
        @restart="restartJobs"
        @delete="deleteJobs"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
} from 'vuex-class';

import JobColumn from '@/components/JobColumn.vue';
import { JobStats } from '@/JobModel';

@Component({
  components: {
    JobColumn,
  },
})
export default class Home extends Vue {

  @Getter('GET_COMPLETED')
  private completedJobs!: any[];

  @Getter('GET_FAILED')
  private failedJobs!: any[];

  @Getter('GET_ACTIVED')
  private activedJobs!: any[];

  @Getter('GET_QUEUED')
  private queuedJobs!: any[];

  @State('stats')
  private stats!: JobStats;

  @Action('FETCH_JOBS')
  private fetchJobs!: () => {};

  @Action('RESTART_JOB')
  private restartJob!: ({ id, state }: any) => {};

  @Action('DELETE_JOB')
  private deleteJob!: ({ id }: any) => {};

  public created() {
    setInterval(() => this.fetchJobs(), 1000);
  }

  public restartJobs(jobs: any[]) {
    jobs.forEach((j) => this.restartJob({ id: j.id, state: 'inactive' }));
  }

  public deleteJobs(jobs: any[]) {
    jobs.forEach((j) => this.deleteJob({ id: j.id }));
  }
}
</script>

<style>
.board__column {
  flex-basis: 33%;
}
</style>
