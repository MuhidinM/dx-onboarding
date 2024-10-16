import { ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  description: ReactNode;
  link?: string;
  file?: string;
  moto?: string;
  imageUrl: string;
}
