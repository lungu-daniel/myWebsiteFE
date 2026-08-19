import Card from "@/components/ui/Card";

export default function GithubProjectsSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <Card key={i}>
          <div className="mb-3 h-4 w-2/3 animate-pulse rounded bg-white/10" />
          <div className="mb-2 h-3 w-full animate-pulse rounded bg-white/10" />
          <div className="h-3 w-4/5 animate-pulse rounded bg-white/10" />
        </Card>
      ))}
    </div>
  );
}
