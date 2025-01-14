import { FaArrowRight } from "react-icons/fa";

const Section4 = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl font-bold text-center">Solar Kit</h1>
        <div className="w-full flex justify-center">
          <p className="text-center max-w-[800px]">
            Complete solar system kits, ready for installation. They can be used
            to supplement on-grid housing, a complete self-sustaining home or
            some combination of the two.
          </p>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col gap-5 border utline-slate-100 max-w-[300px] rounded-lg">
            <img src="img/content-1.png" alt="" width={300} />
            <div className="p-2">
              <p className="font-bold">Off Grind</p>
              <p className="line-clamp-3 mt-3">
                WOC has contributed to students so that they can work in their
                dream company, we will continue to stick to our commitment to
                create an advanced generation,
              </p>
              <button className="text-primary flex items-center gap-2 mt-5">
                View Products
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 border utline-slate-100 max-w-[300px] rounded-lg">
            <img src="img/content-2.png" alt="" width={300} />
            <div className="p-2">
              <p className="font-bold">Off Grind</p>
              <p className="line-clamp-3 mt-3">
                WOC has contributed to students so that they can work in their
                dream company, we will continue to stick to our commitment to
                create an advanced generation,
              </p>
              <button className="text-primary flex items-center gap-2 mt-5">
                View Products
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-5 border utline-slate-100 max-w-[300px] rounded-lg">
            <img src="img/content-3.png" alt="" width={300} />
            <div className="p-2">
              <p className="font-bold">Off Grind</p>
              <p className="line-clamp-3 mt-3">
                WOC has contributed to students so that they can work in their
                dream company, we will continue to stick to our commitment to
                create an advanced generation,
              </p>
              <button className="text-primary flex items-center gap-2 mt-5">
                View Products
                <FaArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section4;
