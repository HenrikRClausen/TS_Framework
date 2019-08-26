export class Attributter<T> {
  constructor(private data: T) {}

  get(dataNavn: string): number | string | boolean {
    return this.data[dataNavn];
  }

  set(opdatering: T): void {
    Object.assign(this.data, opdatering);
  }
}
