
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Checkbox } from "@/Components/ui/checkbox";
import { Label } from "@/Components/ui/label";
import { Separator } from "@/Components/ui/separator";
import { X } from "lucide-react";

interface FilterSection {
  title: string;
  options: { id: string; label: string }[];
}

interface ProductFiltersProps {
  selectedFilters: {
    categories: string[];
    types: string[];
    formats: string[];
  };
  onFilterChange: (filterType: keyof ProductFiltersProps["selectedFilters"], value: string) => void;
  onClearFilters: () => void;
}

export const ProductFilters = ({ selectedFilters, onFilterChange, onClearFilters }: ProductFiltersProps) => {
  const categories: FilterSection = {
    title: "Categoría",
    options: [
      { id: "latex", label: "Látex" },
      { id: "esmalte", label: "Esmalte" },
      { id: "membrana", label: "Membrana" },
      { id: "impermeabilizante", label: "Impermeabilizante" },
    ],
  };



  const formats: FilterSection = {
    title: "Formato",
    options: [
      { id: "1L", label: "1 Litro" },
      { id: "4L", label: "4 Litros" },
      { id: "10L", label: "10 Litros" },
      { id: "20L", label: "20 Litros" },
    ],
  };

  const hasActiveFilters = 
    selectedFilters.categories.length > 0 || 
    selectedFilters.types.length > 0 || 
    selectedFilters.formats.length > 0;

  return (
    <Card className="sticky top-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl">Filtros</CardTitle>
        {hasActiveFilters && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onClearFilters}
            className="h-8 px-2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4 mr-1" />
            Limpiar
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-3 text-foreground">{categories.title}</h3>
          <div className="space-y-2">
            {categories.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${option.id}`}
                  checked={selectedFilters.categories.includes(option.id)}
                  onCheckedChange={() => onFilterChange("categories", option.id)}
                />
                <Label
                  htmlFor={`category-${option.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
        <Separator />

        {/* Formats */}
        <div>
          <h3 className="font-semibold mb-3 text-foreground">{formats.title}</h3>
          <div className="space-y-2">
            {formats.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`format-${option.id}`}
                  checked={selectedFilters.formats.includes(option.id)}
                  onCheckedChange={() => onFilterChange("formats", option.id)}
                />
                <Label
                  htmlFor={`format-${option.id}`}
                  className="text-sm font-normal cursor-pointer"
                >
                  {option.label}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};