import { Begivenhedsstyring } from "./Begivenheder";
import { Synkronisering } from "./Synkronisering";

export interface BrugerData {
  id?: number;
  navn?: string;
  alder?: number;
}

const basisURL = "http://localhost:3000/brugere";

export class Bruger {
  public begivenheder: Begivenhedsstyring = new Begivenhedsstyring();
  public synk: Synkronisering<BrugerData> = new Synkronisering<BrugerData>(
    basisURL
  );
}
