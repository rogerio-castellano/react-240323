import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Highlight({ children }: Props) {
  return (
    <blockquote className="blockquote">
      <p className="mb-0">{children}</p>
    </blockquote>
  );
}
