"use client";

import { Skeleton } from "@/components/ui/skeleton";

function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="h-[150px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </div>
  );
}

export function ProductListSkeleton() {
  const listTest = new Array(18).fill(0);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
      {listTest.map((item, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}
