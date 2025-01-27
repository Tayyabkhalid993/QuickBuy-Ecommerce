import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-indigo-600 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">QuickBuy</h2>
          <p className="text-sm">© 2023 MyCompany. All rights reserved.</p>
        </div>
        <nav className="hidden md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 text-center">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/products" className="hover:text-gray-300">Products</Link>
          <Link to="/about" className="hover:text-gray-300">About</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}