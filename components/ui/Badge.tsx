export default function Badge({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80">
      {children}
    </span>
  );
}
