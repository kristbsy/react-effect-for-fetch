import { useEffect, useState } from "react";
import { Advice, AdviceJson } from "../../../types";

interface AdviceSlipProps {
  onAdviceAddToFavourite: (advice: Advice) => void;
}

async function getRandomAdviceSlip(): Promise<Advice> {
  const result = (await (
    await fetch("https://api.adviceslip.com/advice", { cache: "no-store" })
  ).json()) as AdviceJson;
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
    void getRandomAdviceSlip().then((a) => {
      setAdvice(() => a);
    });
  }, []);

  return (
    <section className="adivce-slip">
      {advice != null ? (
        <>
          <h3>Some Advice</h3>
          <p>{advice.advice}</p>
          <button onClick={() => void refreshAdvice()}>Get More Advice</button>
          <button
            onClick={() => {
              onAdviceAddToFavourite(advice);
            }}
          >
            Save to Favourties
          </button>
        </>
      ) : null}
    </section>
  );
}
