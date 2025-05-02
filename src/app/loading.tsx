import { Loader2 } from "lucide-react";

// Simple centered spinner loading indicator
export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-grow container mx-auto px-4 py-8">
      <Loader2 className="h-16 w-16 animate-spin text-primary" />
    </div>
  );
}
