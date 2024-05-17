import { ProductI } from "@/types/";
import { useState, useEffect } from "react";

interface FilteredProducts {
  filteredProducts: any;
  applyFilter: (filterOptions: Partial<PropUseFilter>) => void;
}

interface PropUseFilter {
  products: any;
  word?: string;
  category?: string;
  maxPrice?: number;
}

export function useFilter({
  products,
  word,
  category,
  maxPrice,
}: PropUseFilter): FilteredProducts {
  const [filteredProducts, setFilteredProducts] = useState<any>(products);

  useEffect(() => {
    applyInitialFilter();
  }, []);

  const applyInitialFilter = () => {
    let filtered = products;

    if (word) {
      const searchTerm = word.toLowerCase();
      filtered = filtered.filter((product: any) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    }

    if (category) {
      filtered = filtered.filter(
        (product: any) => product.category === category
      );
    }

    if (maxPrice) {
      filtered = filtered.filter((product: any) => product.price <= maxPrice);
    }

    setFilteredProducts(filtered);
  };

  const applyFilter = (filterOptions: Partial<PropUseFilter>) => {
    let filtered = products;

    if (filterOptions.word) {
      const searchTerm = filterOptions.word.toLowerCase();
      filtered = filtered.filter((product: any) =>
        product.name.toLowerCase().includes(searchTerm)
      );
    }

    if (filterOptions.category) {
      filtered = filtered.filter(
        (product: any) => product.category === filterOptions.category
      );
    }

    if (filterOptions.maxPrice) {
      filtered = filtered.filter(
        (product: any) => product.price <= filterOptions.maxPrice!
      );
    }

    setFilteredProducts(filtered);
  };

  return {
    filteredProducts,
    applyFilter,
  };
}
