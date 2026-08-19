import { ReactNode } from "react";

export default function Card({ children }: { children: ReactNode }) {
  return (
    <div className="group rounded-xl bg-surface/60 p-6 transition-colors hover:bg-surface">
      {children}
    </div>
  );
}
