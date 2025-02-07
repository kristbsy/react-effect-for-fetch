import React from "react";
import { ArtItem } from "../../../types";
import ArtListItem from "./ArtListItem";

export default function ArtList(props: { artlist: ArtItem[] }) {
  return (
    <ul className="art-list">
      {props.artlist.map((art) => (
        <ArtListItem key={art.id} art={art} />
      ))}
    </ul>
  );
}
