export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h1>
      <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded-lg  bg-indigo-100" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-lg  bg-indigo-100" required />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
          <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 rounded-lg  bg-indigo-100" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
          <textarea id="message" name="message" className="w-full px-3 py-2 rounded-lg  bg-indigo-100" rows={5} required></textarea>
        </div>
        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200">Send Message</button>
      </form>
    </div>
  );
}