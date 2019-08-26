type Tilbagekald = () => void;

export class Begivenhedsstyring {
  begivenheder: { [key: string]: Tilbagekald[] } = {};

  on(begivenhed: string, returkald: Tilbagekald): void {
    const rutiner = this.begivenheder[begivenhed] || [];
    rutiner.push(returkald);
    this.begivenheder[begivenhed] = rutiner;
  }

  trigger(begivenhed: string): void {
    const rutiner = this.begivenheder[begivenhed];

    if (!rutiner || rutiner.length === 0) {
      return;
    }

    rutiner.forEach(rutine => {
      rutine();
    });
  }
}
