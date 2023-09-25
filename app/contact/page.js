import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-300 to-pink-300 py-5">
      
      <Image
        src="https://images.unsplash.com/photo-1466096115517-bceecbfb6fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Contact"
        width={"1000"}
        height={"400"}
        className="w-full md:w-full md:h-[600px] h-[200px] my-2 rounded-md"
      />

   <div className="py-10 mx-auto px-4 sm:px-6 w-full flex flex-col sm:flex-row justify-center items-center gap-10">
  <div className="w-full sm:w-[40%] lg:w-[30%] max-w-screen-md mx-auto sm:order-2">
    <Image
      src="https://media.istockphoto.com/id/1474312347/photo/human-crowd-waiting-before-contact-us-symbols-on-concrete-wall.webp?b=1&s=170667a&w=0&k=20&c=KHxt_KLR1DuS6im360gBEqRrl-qYillMWp6qZHXANIs="
      width={750}
      alt='contact image'
      height={400}
      className="rounded-lg"
    />
  </div>

  <div className="w-full sm:w-[60%] lg:w-[70%] max-w-screen-md mx-auto sm:order-1 rounded-xl p-8 shadow-xl">
    <h1 className="text-4xl text-center text-white font-cursive mb-10 font-mono font-extrabold underline underline-offset-8 ">Lets have a talk</h1>
    <form className="grid grid-cols-1 gap-y-6">
      <div className="flex flex-col gap-10">
        <div className="flex gap-6">
          <div className="w-[50%]">
          <label htmlFor="name" className="text-teal-500 font-semibold">
            First
          </label>
          <input
            type="text"
            name="name"
            className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
            placeholder="First Name"
          />
            </div>

            <div className="w-[50%]">
          <label htmlFor="name" className="text-teal-500 font-semibold">
            Last
          </label>
          <input
            type="text"
            name="name"
            className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500  border border-gray-300 rounded-md focus:outline-none focus:ring-1"
            placeholder="Last Name"
            />
            </div>
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-teal-500 font-semibold">
          Email
        </label>
        <input
          name="email"
          type="text"
          className="w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
          placeholder="Email"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-teal-500 font-semibold">
          Phone
        </label>
        <input
          type="text"
          name="phone"
          className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
          placeholder="Phone"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-teal-500 font-semibold">
          Message
        </label>
        <textarea
          name="message"
          rows="4"
          className="block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md focus:outline-none focus:ring-1"
          placeholder="Message"
        ></textarea>
      </div>

      <div>
        <Button
          type="submit"
          className="py-3 px-6 border border-transparent shadow-lg text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Submit
        </Button>
      </div>

      <div className="mt-4">
        <Link href="/">
          <p className="text-blue-500 hover:underline">Back to Home</p>
        </Link>
      </div>
    </form>
  </div>
</div>

    </div>
  );
}
