import React from "react";

interface Props {
  advicesLength: number;
}

export default function Counter({ advicesLength }: Props) {
  <>{advicesLength >= 1 && <p>Number of advices: {advicesLength}</p>}</>;
}
