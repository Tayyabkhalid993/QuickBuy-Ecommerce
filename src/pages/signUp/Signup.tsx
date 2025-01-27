import { AiOutlineSwapRight } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className='max-w-[1500px] mx-auto my-5 md:my-0'>
      <div className="flex h-full">
        <section className=" max-h-[40rem] w-full md:w-1/2">
          <div className="flex justify-center items-center w-full h-full">
            <form className="w-[30rem] md: bg-white p-8 my-40 rounded-lg shadow-lg mx-5 md:mx-5">
                <h2 className='text-xl text-gray-400'>Welcome to our community</h2>
              <h1 className='text-4xl my-10'>Sign Up</h1>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-lg  bg-indigo-100" required />
              </div>
              <div className="mb-4">
                    <label htmlFor="Password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input type="password" id="password" name="password" className="w-full px-3 py-2 rounded-lg bg-indigo-100" required />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="confirmPassword" className="block text-gray-700 font-bold mb-2">Confirm Password</label>
                    </div>
                    <input type="password" id="confirmPassword" name="confirmPassword" className="w-full px-3 py-2 rounded-lg bg-indigo-100" required />
              <div className='flex justify-center items-center w-full mt-5'>
              <button type="submit" className="w-[8rem] flex items-center justify-between bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-200">Sign Up  <AiOutlineSwapRight size={30}/></button>
              </div>
              <div className='text-center mt-4'>
                Already have an account? <Link to={'/signin'} className='text-indigo-600 hover:underline'> Sign In</Link>
              </div>
            </form>
          </div>
        </section>
        <div className='hidden md:flex w-1/2 bg-indigo-100 relative py-14 max-h-full'>
          <img src="./signIn.png" width={500} height={500} className='object-contain absolute bottom-2 -left-20' alt="" />
        </div>
      </div>
    </div>
  )
}
