/* eslint-disable @next/next/no-img-element */

import { useFilterStore } from "@/app/global/filter";
import { Button } from "@/components/ui/button";
import { ToggleGroupItem } from "@/components/ui/toggle-group";

interface PropCategory {
    id: number
    image: string
    name: string

}

function CategoryCard({ id, image, name }: PropCategory) {



    return (
        <ToggleGroupItem variant={"outline"} value={id} aria-label="Toggle underline" className="flex gap-2" >
            {name}
            <img src={image} alt="" className="w-4" />
        </ToggleGroupItem>
    );
}

export default CategoryCard;

export function AllCategoryCard({ name, id }: { name: string, id: number }) {

    return (
        <ToggleGroupItem variant={"outline"} value={id} aria-label="Toggle " className="flex gap-2" >
            {name}
        </ToggleGroupItem>
    );
}

