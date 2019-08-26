import { Bruger } from "./Models/Bruger";

const bruger = new Bruger({ navn: "Frederikke", alder: 21 });

bruger.begivenheder.on("skift", () => {
  console.log("Skiftetid!");
});

bruger.begivenheder.trigger("skift");
