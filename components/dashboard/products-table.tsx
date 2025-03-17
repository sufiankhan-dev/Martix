"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Sample product data
const products = [
  {
    id: "1",
    name: "Nike Air Max 270",
    category: "Shoes",
    price: 129.99,
    sales: 1452,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "2",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 89.99,
    sales: 934,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "3",
    name: "Slim Fit T-Shirt",
    category: "Clothing",
    price: 24.99,
    sales: 784,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "4",
    name: "Smart Watch Pro",
    category: "Electronics",
    price: 199.99,
    sales: 651,
    image: "/placeholder.svg?height=40&width=40",
  },
  {
    id: "5",
    name: "Leather Wallet",
    category: "Accessories",
    price: 49.99,
    sales: 427,
    image: "/placeholder.svg?height=40&width=40",
  },
];

export function ProductsTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-muted-foreground"
        >
          <ArrowUpDown className="mr-1 h-3 w-3" />
          Sort by Sales
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-xs text-muted-foreground"
        >
          Export
          <ArrowRight className="ml-1 h-3 w-3" />
        </Button>
      </div>
      <div className="rounded-md border">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th className="h-10 px-2 text-left align-middle font-medium">
                  Product
                </th>
                <th className="h-10 px-2 text-left align-middle font-medium">
                  Price
                </th>
                <th className="h-10 px-2 text-right align-middle font-medium">
                  Sales
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted"
                >
                  <td className="p-2 align-middle">
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-md bg-muted flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={40}
                          height={40}
                          className="rounded-md object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">{product.name}</span>
                        <span className="text-xs text-muted-foreground">
                          {product.category}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 align-middle">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="p-2 align-middle text-right font-medium">
                    {product.sales}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
