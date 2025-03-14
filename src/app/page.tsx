import { Suspense } from "react";
import NewProductList from "./components/NewProductList";
import ProductList from "./components/ProductList";
import Loading from "./loading";

export default async function Home() {
  return (
    <div>
      <h1>sparta shop</h1>
      <Suspense fallback={<Loading />}>
        <NewProductList />
      </Suspense>

      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </div>
  );
}

export interface Product {
  id: string;
  isNew: boolean;
  handle: string;
  availableForSale: boolean;
  title: string;
  description: string;
  descriptionHtml: string;
  options: { name: string; values: string[] }[];
  price: { amount: string; currencyCode: string };
  variants: {
    id: string;
    title: string;
    price: string;
    availableForSale: boolean;
  }[];
  images: string;
  featuredImage: string;
  seo: { title: string; description: string };
  tags: string[];
  updatedAt: string;
}
