import axios, { AxiosInstance } from 'axios';

export class KueApi {
  private request: AxiosInstance;

  constructor() {
    this.request = axios.create({
      baseURL: 'https://192.168.1.170:3050/',
      headers: {
        Host: '192.168.1.170:3050',
        Referer: 'http://192.168.1.170:3050/',
      },
    });
  }

  public getAll(from: number, to: number, orderBy: string) {
    return this.request.get(`jobs/${from}..${to}/${orderBy}`);
  }

  public getOne(id: number) {
    return this.request.get('job/' + id);
  }

  public deleteJob(id: number) {
    return this.request.delete('job/' + id);
  }

  public restartJob(id: number, state: string) {
    return this.request.get(`${state}/${id}`);
  }

  public stats() {
    return this.request.get('stats');
  }
}
