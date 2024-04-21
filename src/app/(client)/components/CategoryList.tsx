"use client"
import { getCategories } from "@/lib/fetch/categories";
import { useQuery } from "react-query";
import CategoryCard, { AllCategoryCard } from "./CategoryCard";
import { Category } from "@/types/types";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useFilterStore } from "@/app/global/filter";


function CategoryList() {
    const { data: categories, isLoading, isError } = useQuery<Category[]>(
        'categories',
        getCategories,
        { cacheTime: 3600 }
    );

    const { setFilters } = useFilterStore()


    const handleCategorySelected =(id:number)=>{
        setFilters({ category_id: id })
      
    }


    if (isLoading) return <div>cargando...</div>;
    if (isError) return <div>Ocurrió un error</div>;

    return (
        <div className="flex flex-wrap gap-2 mb-4">
            <ToggleGroup type="single" defaultValue={1} onValueChange={(id:number)=> handleCategorySelected(id)} >
                <AllCategoryCard name="all" id={1}/>
                {
                    categories && categories?.map((category, index) => (
                        <CategoryCard key={index} id={category.id} image={category.image} name={category.name} />
                    ))
                }

            </ToggleGroup>

        </div>
    );
}

export default CategoryList;
