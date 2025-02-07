import { useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavouriteSlipsList from "./components/FavouriteSlipsList";
import { Advice } from "../../types";

export default function AdviceSection() {
  const [favs, setFavs] = useState<Advice[]>([]);

  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip
        onAdviceAddToFavourite={(fav) => {
          if (!favs.map((a) => a.slip_id).includes(fav.slip_id)) {
            setFavs([...favs, fav]);
          }
        }}
      />
      <FavouriteSlipsList slips={favs} />
    </section>
  );
}
