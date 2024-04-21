import { Skeleton } from "@/components/ui/skeleton"

 function CategorySkeleton() {
    return (
        <div className="flex items-center space-x-4">
            <Skeleton className="h-8 w-[100px]" />
        </div>
    )
}
export function CategoryListSkeleton() {
    let categories = new Array(5).fill(10);

    return (
        <div className="flex gap-4 mb-4 flex-wrap">
            {
                categories.map((category,index) => (<CategorySkeleton key={index} />))
            }

        </div>
    )
}