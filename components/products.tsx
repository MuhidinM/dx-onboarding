import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { House } from "lucide-react";
import { Product } from "@/types";
import { products } from "@/constants";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <div className="container mx-auto flex flex-col h-[655px]">
        <main className="flex-grow overflow-auto">
          <Card className="h-[540px]">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                {selectedProduct.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-muted-foreground">
                  {selectedProduct.description}
                </p>
              </div>
            </CardContent>
          </Card>
        </main>
        <nav className="mt-8">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white">
            <div className="flex w-max justify-center items-center">
              <div className="p-6 bg-white" onClick={handleBackToList}>
                <House className="h-6 w-6 text-[#00adef]" />
              </div>
              {products.map((product) => (
                <div
                  key={product.id}
                  className={`p-3 bg-white ${
                    product.id === selectedProduct.id ? "bg-muted" : ""
                  }`}
                  onClick={() => handleProductSelect(product)}
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="rounded-md"
                  />
                  <span className="sr-only">{product.name}</span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </nav>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card
            key={product.id}
            className="cursor-pointer shadow-lg"
            onClick={() => handleProductSelect(product)}
          >
            <CardContent className="p-2 h-[200px] flex items-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={200}
                className="w-full object-cover rounded-t-lg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
