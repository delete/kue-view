<template>
  <SimpleScrollBottom @bottom="loadMoreJobs">
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
  </SimpleScrollBottom>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  State,
  Getter,
  Action,
} from 'vuex-class';

import JobColumn from '@/components/JobColumn.vue';
import SimpleScrollBottom from '@/components/SimpleScrollBottom.vue';
import { JobStats } from '@/JobModel';

@Component({
  components: {
    JobColumn,
    SimpleScrollBottom,
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
  private fetchJobs!: ({ min, max }: any) => {};

  @Action('RESTART_JOB')
  private restartJob!: ({ id, state }: any) => {};

  @Action('DELETE_JOB')
  private deleteJob!: ({ id }: any) => {};

  private min: number = 0;
  private max: number = 100;
  private fetchInterval: any;

  public created() {
    this.startFetchJobs();
  }

  public restartJobs(jobs: any[]) {
    jobs.forEach((j) => this.restartJob({ id: j.id, state: 'inactive' }));
  }

  public deleteJobs(jobs: any[]) {
    jobs.forEach((j) => this.deleteJob({ id: j.id }));
  }

  private startFetchJobs() {
    this.fetchInterval = setInterval(() => this.fetchJobs({min: this.min, max: this.max}), 1000);
  }

  private loadMoreJobs() {
    clearInterval(this.fetchInterval);
    this.max += 50;

    this.startFetchJobs();
  }
}
</script>

<style>
.board__column {
  flex-basis: 33%;
}
</style>
