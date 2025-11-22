import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardFooter } from "@/Components/ui/card";
import { ProductInterface } from "@/lib/ProductInterface";
import Link from "next/link";

export const ProductCard = ({
  name,
  category,
  format,
  img,
  label,
  slug
}: ProductInterface) => {
  return (
    <Link  href={`/products/${slug}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border/50">
        <div className="aspect-square bg-gradient-to-br from-muted to-background p-6 flex items-center justify-center">
          <img src={img} alt={name} className="w-full h-full object-contain" />
        </div>
        <CardContent className="p-4">
          <div className="flex gap-2 mb-2">
            <Badge variant="secondary" className="text-xs bg-primary text-white">
              {category}
            </Badge>
            {format.map((size) => (
              <Badge key={size} variant="outline" className="text-xs">
                {size}
              </Badge>
            ))}

          </div>
          <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{label}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="default" className="w-full">
            Ver Detalles
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
};
