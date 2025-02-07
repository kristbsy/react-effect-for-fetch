import { ArtItem } from "../../../types";
import { baseApiUrl } from "..";

export default function ArtListItem({ art }: { art: ArtItem }) {
  return (
    <li>
      <div className="frame">
        <img src={`${baseApiUrl}${art.imageURL}`} />
      </div>
      <h3>{art.title}</h3>
      <p>Artist: {art.artist}</p>
      <h4>Publication History:</h4>
      <ul>
        {art.publicationHistory.map((pub, id) => (
          <li key={id}>{pub}</li>
        ))}
      </ul>
    </li>
  );
}
