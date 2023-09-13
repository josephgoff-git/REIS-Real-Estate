import Link from "next/link";
import PropertyCard from "./property-card";

const RentPropertiesContainer = () => {
  return (
    <div className="self-stretch flex flex-col py-[86px] px-0 items-center justify-start gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
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
        <div className="self-stretch flex flex-row flex-wrap py-0 px-2.5 items-center justify-center gap-[32px]">
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc7@2x.png"
            name="92 Allium Place, Orlando Fl"
            price="595,000"          
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc8@2x.png"
            name="92 Allium Place, Orlando Fl"
            price="595,000"          
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc9@2x.png"
            name="92 Allium Place, Orlando Fl"
            price="595,000"          
          />
          <PropertyCard
            imgUrl="/unsplashrlwe8f8anoc10@2x.png"
            name="92 Allium Place, Orlando Fl"
            price="595,000"          
          />
        </div>
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] rounded bg-primary-500 flex flex-row py-3 px-6 items-start justify-start text-base text-gray-white"
        href="/properties"
      >
        <div className="relative leading-[24px] font-medium">
          Load more listing
        </div>
      </Link>
    </div>
  );
};

export default RentPropertiesContainer;
