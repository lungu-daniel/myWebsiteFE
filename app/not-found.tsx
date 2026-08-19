import Link from "next/link";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="pt-40 pb-20">
        <p className="mb-2 font-mono text-sm text-accent">{"$ cat page.tsx"}</p>
        <h1 className="mb-3 text-3xl font-semibold text-foreground">404 — Not Found</h1>
        <p className="mb-6 text-muted">This page doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
}
