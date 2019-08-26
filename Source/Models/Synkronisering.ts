import Axios, { AxiosPromise } from "axios";

interface HarId {
  id?: number;
}

export class Synkronisering<T extends HarId> {
  constructor(public startURL: string) {}

  hent(id: number): AxiosPromise {
    return Axios.get(`${this.startURL}/${id}`);
  }

  gem(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return Axios.put(`${this.startURL}/${id}`, data);
    } else {
      return Axios.post(this.startURL, data);
    }
  }
}
