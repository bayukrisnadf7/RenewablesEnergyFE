const Section1 = () => {
  return (
    <div className="relative text-white max-h-screen">
      <img src="img/section-1.png" alt="" className="w-full h-full object-cover" />
      <div className="absolute top-1/4 right-1/2 mx-20">
        <h1 className="text-6xl font-bold">
          Solar Panel Installers In Plymouth
        </h1>

        <div className="mt-10">
          <p className="text-xl">
            Fueled is an award-winning technology consultancy that transforms
            businesses by generating ideas, building products, and accelerating
            growth.
          </p>
        </div>
        <div className="mt-10 flex gap-5">
          <button className="bg-primary rounded-xl p-3 w-48">Call Us Today</button>
          <button className="bg-secondary rounded-xl p-2 w-48 text-black ">Request a Call Back</button>
        </div>
      </div>
    </div>
  );
};
export default Section1;
