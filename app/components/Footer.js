import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 justify-evenly lg:grid-cols-4 gap-10">
        <div >
              <Image
                src="https://i.ibb.co/SXMDvvv/4c8022c6e30e46139eb905d74c5605b5-removebg-preview.png"
                alt="Logo"
                width={100}
                className='bg-white rounded-full'
                height={20}
                />
            <p className="mt-2">Blogs about Recipes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Explore</h3>
            <ul className="mt-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <ul className="mt-2">
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>
            <address className="mt-2">
              Email: info@example.com<br />
              Phone: +1 (123) 456-7890
            </address>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <p className="text-center text-gray-400">
          &copy; {new Date().getFullYear()} Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;