import Link from "next/link";
import PropertyRentCard from "./property-rent-card";

const RentPropertiesContainer2 = () => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px]">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center gap-[40px] text-left text-base text-gray-white">
          <PropertyRentCard />
          <PropertyRentCard propBackgroundImage={`url("/card-21@3x.png")`} />
          <PropertyRentCard propBackgroundImage={`url("/card-31@3x.png")`} />
          <PropertyRentCard propBackgroundImage={`url("/card-41@3x.png")`} />
        </div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] rounded bg-primary-500 flex flex-row py-3 px-6 items-start justify-start text-base text-gray-white"
        href="/"
      >
        <div className="relative leading-[24px] font-medium">
          Load more listing
        </div>
      </Link>
    </div>
  );
};

export default RentPropertiesContainer2;
