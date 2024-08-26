import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Download, ExternalLink, House, Sparkles } from "lucide-react";
import { Product } from "@/types";
import { products } from "@/constants";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleOpenLink = (url: string | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (file: string | undefined) => {
    const filePath = `/slides/${file}`;

    const link = document.createElement("a");
    link.href = filePath;
    link.download = "presentation.pptx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackToList = () => {
    setSelectedProduct(null);
  };

  if (selectedProduct) {
    return (
      <div className="flex flex-col h-[680px]">
        <main className="flex-grow overflow-auto">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                {selectedProduct.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative flex-grow flex flex-col md:flex-row gap-6">
              <div className="absolute bottom-0 right-0 text-orange-100 w-12 h-12 sm:w-16 sm:h-16">
                <Sparkles className="w-full h-full" />
              </div>
              <div className="w-full md:w-1/3 flex flex-col space-y-4">
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />
                <div className="flex-grow overflow-auto mb-4"></div>
                {selectedProduct.file && (
                  <Button
                    onClick={() => handleDownload(selectedProduct.file)}
                    className="bg-[#00adef]"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download PPT
                  </Button>
                )}
                {selectedProduct.link && (
                  <Button
                    onClick={() => handleOpenLink(selectedProduct.link)}
                    className="bg-[#00adef]"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Site
                  </Button>
                )}
              </div>
              <div className="w-full md:w-2/3 flex flex-col">
                <div className="flex-grow overflow-auto mb-4">
                  <p className="text-muted-foreground">
                    {selectedProduct.description}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-between items-end mt-4">
                  <div className=""></div>
                  <div className="z-10 bg-orange-100 text-orange-800 text-xs sm:text-sm font-semibold py-1 px-2 sm:py-1.5 sm:px-3 rounded-full inline-block font-['Open Sans'] shadow-md">
                    {selectedProduct.moto
                      ? selectedProduct.moto
                      : " Bank Smarter, Live Better"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
        <nav className="mt-8">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white">
            <div className="flex w-max justify-center items-center hover:cursor-pointer">
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
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.slice(0, 9).map((product) => (
          <Card
            key={product.id}
            className="cursor-pointer shadow-lg"
            onClick={() => handleProductSelect(product)}
          >
            <CardContent className="p-2 h-[206px] flex items-center">
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
