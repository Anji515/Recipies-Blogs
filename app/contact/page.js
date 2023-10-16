"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import ContactImage from '../../assets/Contact.webp'

export default function Contact() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMS_PREE_USER_ID);

  return (
    <div className="bg-gradient-to-r from-blue-300 to-pink-300 py-5">
      <Image
        src={ContactImage}
        alt="Contact"
        width={1000}
        height={400}
        className="w-full md:w-full md:h-[600px] h-[200px] my-2 rounded-md"
      />

      <div className="py-10 mx-auto px-4 sm:px-6 w-full flex flex-col sm:flex-row justify-center items-center gap-10">
        <div className="w-full sm:w-[40%] lg:w-[30%] max-w-screen-md mx-auto sm:order-2">
          <Image
            src="https://media.istockphoto.com/id/1474312347/photo/human-crowd-waiting-before-contact-us-symbols-on-concrete-wall.webp?b=1&s=170667a&w=0&k=20&c=KHxt_KLR1DuS6im360gBEqRrl-qYillMWp6qZHXANIs="
            width={750}
            alt="contact image"
            height={400}
            className="rounded-lg"
          />
        </div>

        <div className="w-full sm:w-[60%] lg:w-[70%] max-w-screen-md mx-auto sm:order-1 rounded-xl p-8 shadow-xl">
          <h1 className="text-4xl text-center text-white font-cursive mb-10 font-mono font-extrabold underline underline-offset-8 ">
            Lets have a talk
          </h1>
          <form onSubmit={handleSubmit} className="w-full flex flex-col my-4">
            <label className="font-bold text-teal-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              minLength={3}
              maxLength={150}
              required
              className=" p-4 bg-gray-50 border border-gray-100 mb-2 rounded-lg"
              autoComplete="off"
              id="name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <label htmlFor="email" className="font-bold text-teal-700">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              minLength={3}
              maxLength={150}
              required
              className=" p-4 bg-gray-50 border border-gray-100 mb-2 rounded-lg"
              autoComplete="off"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label className="font-bold text-teal-700" htmlFor="name">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              minLength={10}
              maxLength={500}
              className="w-full p-4 bg-gray-50 border border-gray-100 mb-2 rounded-lg"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <Button
              className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white mt-4 font-bold"
              type="submit"
              disabled={state.submitting}
            >
              Submit
            </Button>
          </form>
          {state.succeeded && <h1>Thanks for joining!</h1>}
          <div className="mt-4">
            <Link href="/">
              <p className="text-blue-700 hover:underline">Back to Home</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
