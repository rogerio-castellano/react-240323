import React from "react";

interface Slip {
  id: number;
  advice: string;
}
interface Props {
  advices: Slip[];
  addAdvice: () => void;
  clearAdvices: () => void;
  removeLastAdvice: () => void;
}

export default function Advices({
  advices,
  addAdvice,
  clearAdvices,
  removeLastAdvice,
}: Props) {
  return (
    <>
      <button className="btn btn-primary me-2" onClick={addAdvice}>
        Add advice
      </button>
      <button className="btn btn-danger me-2" onClick={clearAdvices}>
        Clear advices
      </button>
      <button className="btn btn-secondary me-2" onClick={removeLastAdvice}>
        Remove last
      </button>
      <ul>
        {advices.map((item: any) => (
          <li key={item.id}>
            {item.id} - {item.advice}
          </li>
        ))}
      </ul>
    </>
  );
}
