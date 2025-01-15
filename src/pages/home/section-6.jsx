const Section6 = () => {
  return (
    <div className="p-10">
      <p className="font-bold text-3xl text-center">Our values</p>
      <p className="text-center mt-3">
        More than 3000 users have been helped by World Online Course.
      </p>

      <div className="flex gap-10 mt-10 justify-center">
        <div className="flex flex-col gap-5 max-w-80 border border-primary rounded-xl p-5 bg-[#eef5f3] ">
          <img src="img/Vector (2).png" alt="" width={50} />
          <p className="font-bold text-xl">Customer Care</p>
          <p>
            Were here to help you with solar panel installation in Devon and
            Cornwall. If we were to sum ourselves up in a few words, those would
            be reliable, honest and friendly. We find our customers agree! Were
            with you from the start of the project to the finish.
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-80 border border-primary rounded-xl p-5 bg-[#eef5f3]">
          <img src="img/Price Tag.png" alt="" width={50} />
          <p className="font-bold text-xl">Price</p>
          <p>
            As Im sure youll have seen, solar systems dont tend to come cheap.
            Our aim is to make solar power accessible to everyone, so we price
            ourselves in a way that makes solar energy more affordable. Were
            focused on helping you and on helping the environment, rather than
            on turning a profit.
          </p>
        </div>
        <div className="flex flex-col gap-5 max-w-80 border border-primary rounded-xl p-5 bg-[#eef5f3]">
          <img src="img/Environment.png" alt="" width={50} />
          <p className="font-bold text-xl">Sustainability</p>
          <p>
            As weve said, we do this because we truly care about the planet and
            about seeing people embrace a greener, more eco-friendly approach to
            power. The world of green energy can be jargon-filled and opaque, so
            we want to help educate people on the big and little things they can
            do to protect our planet!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Section6;
