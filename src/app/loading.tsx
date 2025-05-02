import { Skeleton } from "@/components/ui/skeleton";

// Simple full-page loading skeleton
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      {/* Header Skeleton */}
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-1/4" />
        <div className="flex space-x-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>

      {/* Title Skeleton */}
      <div className="text-center space-y-4 mt-12">
        <Skeleton className="h-12 w-1/2 mx-auto" />
        <Skeleton className="h-6 w-3/4 mx-auto" />
      </div>

      {/* Content Skeleton (Example: Card Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {[1, 2, 3].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}

// Skeleton for a Card component (adjust based on typical card structure)
function CardSkeleton() {
  return (
    <div className="space-y-4 p-4 border rounded-lg bg-card">
      <Skeleton className="h-40 w-full" /> {/* Image placeholder */}
      <Skeleton className="h-6 w-3/4" /> {/* Title */}
      <Skeleton className="h-4 w-1/2" /> {/* Description line 1 */}
      <Skeleton className="h-4 w-full" /> {/* Description line 2 */}
      <Skeleton className="h-8 w-1/3 mt-4" /> {/* Button */}
    </div>
  );
}
