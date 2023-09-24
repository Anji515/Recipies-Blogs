const Loader = () => {
  return (
    <div className="flex flex-col items-center mt-[-100px] justify-center h-screen">
      <div className="w-24 h-24 border-t-4 border-blue-500 border-solid rounded-full animate-spin" />
      <p className="mt-4 text-xl font-semibold">Loading....</p>
    </div>
  );
};

export default Loader;
