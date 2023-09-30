import Image from "next/image";
import { SECTION } from "../constants/Data";

export default function About() {
  return (
    <div className="min-h-screen mt-10 bg-gradient-to-r from-yellow-500 to-yellow-300">
      <Image
        src={"https://i.ibb.co/vYhXsYP/Screenshot-from-2023-09-30-00-06-00.png"}
        alt="about"
        width={1200}
        height={400}
        className="w-full h-auto sm:h-[100vh] m-auto rounded-2xl"
      />
      <title>Cookoo</title>
      <header className="py-6 sm:py-12 text-center text-black w-full sm:w-[40%] mx-auto">
        <h1 className="text-4xl font-bold">Who We Are</h1>
        <p className="mt-4 text-lg mx-auto">
          Cookoo Recipe App is a website dedicated to culinary enthusiasts,
          featuring a collection of delectable dishes showcased through stunning
          images and accompanied by inspiring articles. Explore a world of
          culinary delights!
        </p>
      </header>

      <main className="container mx-auto py-6 sm:py-12">
        {SECTION?.map((section, i) => (
          <section
            key={section.id}
            className={` ${
              i % 2 === 1 ? "flex flex-col md:flex-row-reverse " : "md:flex"
            } justify-between text-center text-black w-full sm:w-[75%] mx-auto gap-6 md:gap-6 content-left border border-gray-500 mb-5 px-2 rounded-2xl`}
          >
            <Image
              src={section.imageSrc}
              alt={section.imageAlt}
              width={section.imageWidth}
              height={section.imageHeight}
              className="w-full sm:w-[48%] h-auto sm:h-[40vh] m-auto rounded-2xl mb-5"
            />
            <section className="my-auto w-full sm:w-[50%]">
              <h2 className="text-3xl font-semibold mb-4 text-left">
                {section.title}
              </h2>
              <p className="text-lg text-gray-700 text-left">
                {section.description}
              </p>
            </section>
          </section>
        ))}

        <section className="py-6 sm:py-12 text-center text-black w-full sm:w-[80%] mx-auto">
          <h2 className="text-3xl font-semibold">
            Any More <br />
            Questions?
          </h2>
          <p className="mt-4 text-lg w-full sm:w-[65%] py-4 mx-auto">
            Are you a fan of Cookoo , looking for your next professional step, a
            journalist, or interested in working on a campaign or cooperation
            with us? Leave us a message!
          </p>
          <button>
            <a
              href="mailto:vodakix670@hapincy.com"
              className="mt-4 inline-block bg-orange-500 text-black px-6 py-3 rounded-[25px] hover:bg-blue-100 transition duration-300"
            >
              Leave us a message
            </a>
          </button>
        </section>
      </main>
    </div>
  );
}
