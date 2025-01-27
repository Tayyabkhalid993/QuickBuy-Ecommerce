import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Product } from './create-data/fetch-data';
import client from '../../client';
import { MutatingDots } from 'react-loader-spinner';

const ProductDetail = () => {
  const params = useParams();
  const id = params.id;

  const [dynamicProduct, setDynamicProduct] = useState<Product[]>([]);
  const [relatedProduct, setRelatedProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  // Fetch products from Sanity
  async function fetchProducts() {
    setLoading(true); // Set loading to true before fetching data
    const query = `
      *[_type == "product"] {
        title,
        category,
        image {
          asset -> {
            _id,
            url
          }
        },
        id,
        description,
        price,
         rating {
    rate,
    count
  }
      }
    `;

    try {
      // Fetch all products from Sanity
      const products = await client.fetch(query);

      // Find the dynamic product based on the id
      const dynamicProduct = products.filter((product: Product) => product.id == Number(id));
      setDynamicProduct(dynamicProduct);

      // Find related products based on category of the dynamic product
      if (dynamicProduct.length > 0) {
        const category = dynamicProduct[0].category;

        // Find all products with the same category but excluding the current dynamic product
        const related = products.filter((product: Product) => product.category === category && product.id !== Number(id));
        setRelatedProduct(related);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching data
    }
  }

  useEffect(() => {
    fetchProducts();
    
    // Smooth scroll to the top
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Enables smooth scrolling effect
      });
    }, 100); // Small delay to ensure component re-renders properly
  }, [id]); // Re-run the fetch whenever the id changes

  const navigate = useNavigate();
  return (
    <>
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
      ) : (
        <>
          {/* =================== Detail Page =================== */}
          <div className="container mx-auto px-4 py-10">
            {dynamicProduct?.map((item) => {
              return (
                <div className="flex flex-col lg:flex-row lg:justify-around bg-white shadow-lg rounded-xl overflow-hidden p-2 sm:p-6" key={item.id}>
                  <img 
                    className="w-48 lg:w-1/3 object-contain rounded-xl self-center" 
                    src={item.image.asset.url} 
                    alt={item.title} 
                  />
                  <div className="lg:w-1/2 p-6 flex flex-col justify-center">
                    <h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4">{item.title}</h1>
                    <p className="text-gray-600 text-md sm:text-lg mb-4">{item.description}</p>
                    
                    <div className="flex items-center mb-4">
                      {[...Array(Math.round(item.rating.rate))].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm sm:text-2xl">⭐</span>
                      ))}
                      <span className="ml-2 text-gray-700  sm:text-lg">({item.rating.count} reviews)</span>
                    </div>
              
                    <span className="text-2xl font-semibold text-indigo-600">{`${item.price} $`}</span>
              
                    <button className="mt-6 w-full lg:w-auto bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        
          {/* =================== Related Products =================== */}
          <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Related Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProduct?.map((item) => (
                <div 
                  key={item.id} 
                  onClick={() => navigate(`/${item.id}`)} 
                  className="bg-white shadow-md rounded-lg p-4 transition transform hover:scale-105 cursor-pointer"
                >
                  <img 
                    className="w-full h-48 object-contain rounded-md" 
                    src={item.image.asset.url} 
                    alt={item.title} 
                  />
                  <h2 className="text-xl font-bold text-gray-900 mt-4 truncate">{item.title}</h2>
                  <p className="text-gray-600 text-sm mt-2">{`${item.description.slice(0, 50)}...`}</p>
                  <div className='flex items-center justify-between mt-4'>
                    <span className="text-lg font-semibold text-indigo-600">{`${item.price}$`}</span>
                    <button className="w-32 sm:w-32 lg:w-auto bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;