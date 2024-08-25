import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft } from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Coop Stream",
    description:
      "A powerful integrated development environment for all your coding needs. Features include intelligent code completion, real-time error detection, and support for multiple programming languages.",
    imageUrl: "/products/coop-stream.png",
  },
  {
    id: 2,
    name: "Debbo",
    description:
      "An advanced data visualization tool that transforms complex datasets into stunning, interactive charts and graphs. Perfect for data analysts and business intelligence professionals.",
    imageUrl: "/products/debbo.png",
  },
  {
    id: 3,
    name: "Diaspora",
    description:
      "A comprehensive cloud management solution that simplifies the process of deploying, monitoring, and scaling your applications across multiple cloud platforms.",
    imageUrl: "/products/diaspora.png",
  },
  {
    id: 4,
    name: "Michu",
    description:
      "A next-generation firewall that provides robust protection against cyber threats. Includes advanced features like intrusion prevention, application control, and real-time threat intelligence.",
    imageUrl: "/products/MICHU.png",
  },
  {
    id: 5,
    name: "Souq Pass",
    description:
      "An intelligent AI-powered assistant that helps streamline your workflow, automate repetitive tasks, and provide insights to boost productivity.",
    imageUrl: "/products/souqpass.png",
  },
  {
    id: 6,
    name: "Coop Recon",
    description:
      "A feature-rich video conferencing solution designed for seamless remote collaboration, with high-quality audio/video, screen sharing, and interactive whiteboarding.",
    imageUrl: "/products/recon.png",
  },
  {
    id: 7,
    name: "Equb",
    description:
      "A next-generation firewall that provides robust protection against cyber threats. Includes advanced features like intrusion prevention, application control, and real-time threat intelligence.",
    imageUrl: "/products/equb-image.webp",
  },
  {
    id: 8,
    name: "Coop Ambition",
    description:
      "An intelligent AI-powered assistant that helps streamline your workflow, automate repetitive tasks, and provide insights to boost productivity.",
    imageUrl: "/products/coopAmbition.webp",
  },
  {
    id: 9,
    name: "VSLA",
    description:
      "A feature-rich video conferencing solution designed for seamless remote collaboration, with high-quality audio/video, screen sharing, and interactive whiteboarding.",
    imageUrl: "/products/VSLA-image.png",
  },
];

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
          <Card>
            <CardHeader>
              <Button
                variant="ghost"
                onClick={handleBackToList}
                className="mb-2"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to list
              </Button>
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
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex w-max space-x-4 p-4">
              {products.map((product) => (
                <Button
                  key={product.id}
                  variant="ghost"
                  className={`p-1 ${
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
                </Button>
              ))}
            </div>
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
