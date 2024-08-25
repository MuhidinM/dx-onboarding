import { ReactNode } from "react";

export interface Product {
  id: number;
  name: string;
  description: ReactNode;
  link: string;
  imageUrl: string;
}
