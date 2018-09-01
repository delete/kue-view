<template>
  <div class="home">
    <div class="board flex">
      <JobColumn class="board__column" title="queued" :jobs="queuedJobs" @restart="restartJobs" @delete="deleteJobs"/>
      <JobColumn class="board__column" title="active" :jobs="activedJobs" @restart="restartJobs" @delete="deleteJobs"/>
      <JobColumn class="board__column" title="complete" :jobs="completedJobs" @restart="restartJobs" @delete="deleteJobs"/>
      <JobColumn class="board__column" title="failed" :jobs="completedJobs" @restart="restartJobs" @delete="deleteJobs"/>
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

import JobColumn from '../components/JobColumn.vue';
import { clearInterval } from 'timers';

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

  @Action('FETCH_JOBS')
  private fetchJobs!: () => {};

  public async created() {
    await this.fetchJobs();
  }

  public restartJobs(jobs: any[]) {
    console.log(jobs);
  }

  public deleteJobs(jobs: any[]) {
    console.log(jobs);
  }
}
</script>

<style>
.board__column {
  flex-basis: 33%;
}
</style>
