import React, { useEffect, useState } from "react";
import ArtList from "./components/ArtList";
import { ArtItem } from "../../types";

export const artApiUrl = "https://boolean-uk-api-server.fly.dev/art";
export const baseApiUrl = "https://boolean-uk-api-server.fly.dev";

async function getArtList(): Promise<ArtItem[]> {
  return await (await fetch(artApiUrl)).json();
}

function ArtsSection() {
  const [artList, setArtList] = useState<ArtItem[]>([]);
  useEffect(() => {
    getArtList().then((artlist) => setArtList(artlist));
  }, []);
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artlist={artList} />
      </div>
    </section>
  );
}

export default ArtsSection;
