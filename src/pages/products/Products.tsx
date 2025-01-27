import { useEffect, useState } from "react";
import client from "../../../client";
import { useNavigate } from "react-router";
import Card from "../../components/Card";
import { MutatingDots } from "react-loader-spinner";

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

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]); // State to store products
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch products from Sanity
  async function fetchProducts() {
    setLoading(true); // Set loading to true before fetching data
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
    `;

    try {
      const products = await client.fetch(query);
      setProducts(products); // Set the fetched products to state
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  }

  // Fetch products when the component mounts
  useEffect(() => {
    fetchProducts();
  }, []); // Empty dependency array means it will run only once after the first render

  return (
    <div>
      {loading ? (
          <MutatingDots
            visible={true}
            height="100"
            width="100"
            color="blue"
            secondaryColor="blue"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass="w-full h-screen flex justify-center items-center"
            />
           // Show loader while data is fetching
      ) : (
        <div className="max-w-[1500px] mx-auto grid sm:px-4 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-16">
          {products.map((item) => (
            <div key={item.id} onClick={() => navigate(`/${item.id}`)}>
              <Card product={item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}