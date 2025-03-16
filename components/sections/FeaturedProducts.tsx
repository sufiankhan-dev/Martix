import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function FeaturedProducts() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Featured Products
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Our most popular products based on sales and customer reviews.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Card key={item} className="overflow-hidden">
              <div className="relative">
                <Image
                  src={`/placeholder.svg?height=400&width=400&text=Product+${item}`}
                  width={400}
                  height={400}
                  alt={`Product ${item}`}
                  className="aspect-square object-cover transition-transform hover:scale-105"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 rounded-full bg-white/80"
                >
                  <Heart className="h-5 w-5" />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
                {item % 3 === 0 && (
                  <Badge className="absolute left-2 top-2">Sale</Badge>
                )}
              </div>
              <CardContent className="p-4">
                <div className="space-y-1">
                  <h3 className="font-medium">Product Name {item}</h3>
                  <p className="text-sm text-muted-foreground">Category</p>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-bold">
                    ${(19.99 + item * 10).toFixed(2)}
                  </span>
                  {item % 3 === 0 && (
                    <span className="text-sm line-through text-muted-foreground">
                      ${(29.99 + item * 10).toFixed(2)}
                    </span>
                  )}
                </div>
                <Button size="sm">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
