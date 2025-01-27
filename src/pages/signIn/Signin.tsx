import { AiOutlineSwapRight } from "react-icons/ai";
import { Link } from "react-router";

export default function Signin() {
  return (
    <div className='max-w-[1500px] mx-auto'>
      <div className="flex h-full">
        <section className=" max-h-[35rem] w-full md:w-1/2">
          <div className="flex justify-center items-center w-full h-full">
            <form className="w-[30rem] md: bg-white p-8 my-40 rounded-lg shadow-lg mx-5 md:mx-15">

              <h2 className='text-xl text-gray-400'>Welcome back !!!</h2>
              <h1 className='text-4xl my-10'>Sign In</h1>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded-lg  bg-indigo-100"  required />
              </div>
              <div className="mb-4">
                <div className='flex justify-between'>
                  <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                  <button className='text-gray-400 hover:cursor-pointer hover:text-gray-600 transition duration-500 underline'>Forgot Password?</button>
                </div>
                <input type="password" id="password" name="password" className="w-full px-3 py-2 rounded-lg  bg-indigo-100"  required />
              </div>
              <div className='flex justify-center items-center w-full'>
              <button type="submit" className="w-[8rem] flex items-center justify-between bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-200">Sign In  <AiOutlineSwapRight size={30}/></button>
              </div>
              <div className='text-center mt-4'>
                Don't have an account? <Link to={'/signup'} className='text-indigo-600 hover:underline'>Sign up</Link>
              </div>
            </form>
          </div>
        </section>
        <div className='hidden md:flex w-1/2 bg-indigo-100 relative  max-h-[35rem]'>
          <img src="./signIn.png" width={500} height={500} className='object-contain absolute bottom-2 -left-20' alt="" />
        </div>
      </div>
    </div>
  )
}
