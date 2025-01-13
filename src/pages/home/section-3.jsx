const Section3 = () => {
  return (
    <div className="relative text-white max-h-screen w-full">
      <img
        src="img/section-3.png"
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/4 right-1/2 mx-20">
        <h1 className="text-4xl font-bold">Power that Doesnt Cost the Earth</h1>
        <div className="mt-10">
          <p className="text-xl">
            If you need advice then give us a call on 07745593882 or hit the
            button below to request a call back!
          </p>
        </div>
        <div className="mt-10 flex gap-5">
          <button className="bg-secondary rounded-3xl p-3 w-48 text-black">
            Call Us Today
          </button>
        </div>
      </div>
    </div>
  );
};
export default Section3;
