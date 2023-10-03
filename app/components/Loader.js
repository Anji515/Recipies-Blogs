import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-[-100px] justify-center h-screen">
      <div className="w-24 h-24 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
      <Image src={'https://www.foodnetwork.com/kitchen/public/burgerLoader_120x120px.gif'} alt="loader" width={100} height={100} className="bg-gradient-to-r from-white to-orange-200 rounded-2xl mt-4 text-xl font-semibold"/>
    </div>
  );
};

export default Loader;
