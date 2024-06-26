"use client";
import { getCategories } from "@/lib/fetch/categories";
import { useQuery } from "react-query";
import CategoryCard, { AllCategoryCard } from "./CategoryCard";
import { CategoryI } from "@/types/";
import { ToggleGroup } from "@/components/ui/toggle-group";
import { useFilterStore } from "@/app/global/filter";
import { CategoryListSkeleton } from "./CategoryListSkeleton";
import styles from './CategoryList.module.css'
function CategoryList() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery<CategoryI[]>("categories", getCategories, { cacheTime: 3600 });

  const { setFilters } = useFilterStore();

  const handleCategorySelected = (id: number) => {
    setFilters({ category_id: id });
  };

  if (isLoading) return <CategoryListSkeleton />;
  if (isError) return <div>Ocurrió un error al obtener las categorias</div>;

  return (
    <div className={` flex flex-wrap gap-2 w-full `}>
      <ToggleGroup
        type="single"
        className={`${styles.box}`}
        onValueChange={(id: string) => handleCategorySelected(+id)}
      >
        <AllCategoryCard name="all" id={1} />
        {categories &&
          categories?.map((category, index) => (
            <CategoryCard
              key={index}
              id={category.id}
              image={category.image}
              name={category.name}
            />
          ))}
      </ToggleGroup>
    </div>
  );
}

export default CategoryList;
