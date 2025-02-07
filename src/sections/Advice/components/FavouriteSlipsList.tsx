import React from "react";
import { Advice } from "../../../types";

export default function FavouriteSlipsList({ slips }: { slips: Advice[] }) {
  return (
    <section className="favourtite-slips-list">
      <h3>Favourite Advice Slips</h3>
      <ul>
        {slips.map((slip) => (
          <li key={slip.slip_id}>{slip.advice}</li>
        ))}
      </ul>
    </section>
  );
}
