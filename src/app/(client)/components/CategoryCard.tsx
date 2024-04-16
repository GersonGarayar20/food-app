/* eslint-disable @next/next/no-img-element */

import { useFilterStore } from "@/app/global/filter";
import { Button } from "@/components/ui/button";

interface PropCategory {
    id: number
    image: string
    name: string

}

function CategoryCard({ id, image, name }: PropCategory) {

    const { setFilters } = useFilterStore()


    function handleClick(evt:any) {
        setFilters({ category_id: id })
    }

    return (
        <Button className="flex gap-4 rounded-2xl px-4 py-2" onClick={handleClick}>
            <span className="text-[12px]">{name}</span>
            <img src={image} alt={name} className="w-5" />
        </Button>
    );
}

export default CategoryCard;

export function AllCategoryCard({name}:{name:string}) {

    const { setFilters } = useFilterStore()


    function handleClick(evt:any) {
        setFilters({ category_id: 0,maxPrice:1000,word:""})
    }

    return (
        <Button className="flex gap-4 rounded-2xl px-4 py-2" onClick={handleClick}>
            <span className="text-[12px]">{name}</span>
        </Button>
    );
}

