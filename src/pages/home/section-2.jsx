const Section2 = () => {
  return (
    <div className="flex justify-center gap-20 p-20">
      <div className="flex flex-col gap-10">
        <p className="text-5xl font-bold max-w-xl">
          The Friendliest Installers in the South-West
        </p>
        <p className="max-w-xl">
          At Solidarity Solar our aims are to help our customers towards a
          sustainable future and genuinely care about the quality of products we
          use for our installs. We never sell you equipment you dont need and
          will always advise to the best of our ability, No hard sell or pushy
          sales tactics ever. We take pride in our work and do our best to make
          sure that we meet, or exceed, our customers expectations.
        </p>
        <div className="text-xl">
          <div className="flex gap-2 items-center">
            <p className="text-primary">01/</p>
            <p className="font-bold">Collaborate with 100+ leading</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-primary">02/</p>
            <p className="font-bold"> 100+ leading universities and companies</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-primary">03/</p>
            <p className="font-bold">Leading universities and companies</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-primary">04/</p>
            <p className="font-bold">Universities and companies</p>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          src="img/section-2.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 -left-20">
          <img src="img/Frame 7.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Section2;
