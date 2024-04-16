"use client"
import { getCategories } from "@/lib/fetch/categories";
import { useQuery } from "react-query";
import CategoryCard, { AllCategoryCard } from "./CategoryCard";
import { Category } from "@/types/types";

function CategoryList() {
    const { data: categories, isLoading, isError } = useQuery<Category[]>(
        'categories',
        getCategories,
        { cacheTime: 3600 }
    );

    if (isLoading) return <div>cargando...</div>;
    if (isError) return <div>Ocurrió un error</div>;

    return (
        <div className="flex flex-wrap gap-2 mb-4">
            <AllCategoryCard name="all"/>
            {
            categories && categories?.map((category, index) => (
                <CategoryCard key={index} id={category.id} name={category.name} image={category.image as string} />
            ))
            }
        </div>
    );
}

export default CategoryList;
