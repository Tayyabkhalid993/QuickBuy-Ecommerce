import { Link, useNavigate } from "react-router-dom"
import type { Product } from "../../components/create-data/fetch-data"
import { useEffect, useState } from "react"
import client from "../../../client"
import Card from "../../components/Card"



export default function LandingPage() {

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
    <section className='max-w-[1500px] mx-auto'>
      <div className='flex flex-col md:flex-row justify-around items-center py-20'>
      <div className='px-10 flex flex-col justify-center items-start gap-5 md:px-20 md:max-w-1/2'>
        <h1 className='text-5xl md:text-6xl lg:text-8xl'>Fashion <span className='text-indigo-600'>Up Your</span>  Look</h1>
        <p className='text-2xl'>We have the best products in the world</p>
        <p className=''>
        Discover the latest trends and styles that suit your personality.
        Our collection is curated with care to ensure the highest quality.
        Shop with confidence and elevate your wardrobe.
        Experience the perfect blend of comfort and elegance.
        Join our community of fashion enthusiasts today.
        Your satisfaction is our top priority.
        </p>
      </div>
        <div className='p-10 md:w-1/2'>
          <img src="./HomePage.png" alt="" />
        </div>
      </div>

      <div className="">
        <h2 className="text-3xl mb-15 ml-7">Featured Section</h2>

         <div className="grid sm:px-4 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {products.sort(() => 0.5 - Math.random()).slice(0, 5).map((item) => (
                <div key={item.id} onClick={() => navigate(`/${item.id}`)}>
                  <Card product={item} />
                </div>
                ))}
                </div>
      </div>

      <div className="flex justify-center my-5">
        <button className="text-indigo-600 hover:underline"><Link to={'/products'}> see all</Link></button>
      </div>
    </section>
  )
}
