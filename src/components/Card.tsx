import { urlFor } from '../../lib/image';

export default function Card({ 
  product 
}: { 
  product: { 
    title: string; 
    image: { asset: { url: string } }; 
    id: number; 
    category: string; 
    price: number; 
    description: string; 
    rating: { rate: number; count: number }; 
  } 
}) {
  return (

      <div className="max-w-72 sm:max-w-sm w-full sm:w-auto bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
        <div className="w-full h-64 flex items-center justify-center">
          <img 
            className="w-60 h-60 sm:w-full sm:h-full object-contain" 
            src={urlFor(product.image).url()} 
            alt={product.title} />
        </div>
        <div className="p-5">
          <h2 className="text-lg md:text-xl font-bold text-gray-900 truncate">{product.title}</h2>
          <p className="text-gray-600 text-sm md:text-base mt-2 line-clamp-3">{product.description}</p>

          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-semibold text-indigo-600">${product.price}</span>
            <div className="flex items-center">
              <span className="text-yellow-500 text-lg">⭐</span>
              <span className="text-gray-700 text-sm">{product.rating.rate} ({product.rating.count})</span>
            </div>
          </div>

          <button className="mt-4 w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200">
            Add to Cart
          </button>
        </div>
      </div>
 
      
     

  );
}