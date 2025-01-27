import { useEffect, useState } from "react";
import client from "../../client";
import { useNavigate } from "react-router";
import Card from "../Card";

export interface Product {
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
  id: number;
  category: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  }
}


export default function FetchData() {
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[]>([]) // State to store products

  // Fetch products from Sanity
  async function fetchProducts() {
    const query = `
      *[_type == "product"] {
        title,
        image {
          asset -> {
            _id,
            url
          }
        },
        id,
        category,
        price,
        description,
        rating{
          rate,
          count
        },
      }
    `

    const products = await client.fetch(query)
    setProducts(products) // Set the fetched products to state
  }

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts()
  }, []) // Empty dependency array means it will run only once after the first render

  return (
    <div>
      <div className="grid sm:px-4 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {products.map((item) => (
        <div  key={item.id} onClick={() => navigate(`/${item.id}`)}>
          <Card product={item} />
        </div>
        ))}
        </div>
    </div>
  );
}