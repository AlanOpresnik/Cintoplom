"use client";
import { useState } from "react";
import { products } from "@/lib/product-data-mock";
import { Search } from "lucide-react";
import { ProductFilters } from "./components/FiltersProducts/FilterProducts";
import { Input } from "@/Components/ui/input";
import { ProductCard } from "./components/ProductCard/ProductCard";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<{
    categories: string[];
    types: string[];
    formats: string[];
  }>({
    categories: [],
    types: [],
    formats: [],
  });

  const handleFilterChange = (
    filterType: keyof typeof selectedFilters,
    value: string
  ) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value];
      return { ...prev, [filterType]: newFilters };
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({
      categories: [],
      types: [],
      formats: [],
    });
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedFilters.categories.length === 0 ||
      selectedFilters.categories.some((cat) =>
        product.category.toLowerCase().includes(cat)
      );

    const matchesFormat =
      selectedFilters.formats.length === 0 ||
      product.format.some((f) => selectedFilters.formats.includes(f));

    return matchesSearch && matchesCategory && matchesFormat;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1">
            <ProductFilters
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Products Grid */}
          <main className="lg:col-span-3 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "producto" : "productos"}{" "}
                encontrados
              </p>
            </div>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No se encontraron productos con los filtros seleccionados.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
