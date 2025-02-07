import React, { useEffect, useState } from "react";
import { Advice, AdviceJson } from "../../../types";

type AdviceSlipProps = {
  onAdviceAddToFavourite: (advice: Advice) => void;
};

async function getRandomAdviceSlip(): Promise<Advice> {
  const result: AdviceJson = await (
    await fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
  ).json();
  return {
    advice: result.slip.advice,
    slip_id: result.slip.id,
  };
}

export default function AdviceSlip({
  onAdviceAddToFavourite,
}: AdviceSlipProps) {
  const [advice, setAdvice] = useState<Advice>();
  const refreshAdvice = async () => {
    const advice = await getRandomAdviceSlip();
    setAdvice(advice);
  };
  useEffect(() => {
    getRandomAdviceSlip().then((a) => setAdvice((b) => a));
  }, []);

  return (
    <section className="adivce-slip">
      {advice != null ? (
        <>
          <h3>Some Advice</h3>
          <p>{advice?.advice}</p>
          <button onClick={() => refreshAdvice()}>Get More Advice</button>
          <button onClick={() => onAdviceAddToFavourite(advice)}>
            Save to Favourties
          </button>
        </>
      ) : null}
    </section>
  );
}
