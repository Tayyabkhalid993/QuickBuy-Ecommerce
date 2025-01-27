import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold"><Link to={'/landing'}>QuickBuy</Link></div>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <div className='hidden md:flex items-center space-x-4'>
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-gray-200 transition duration-200"><Link to={'/signin'}>Login</Link></button>
          <button className="text-white focus:outline-none hover:text-gray-200">
          <FaCartArrowDown size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}