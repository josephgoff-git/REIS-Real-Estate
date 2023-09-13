import PropertyCard from "./property-card";
import Link from "next/link"
const PropertyContainer = ({allProperties}) => {
  
  return (
    <div className="self-stretch flex flex-row flex-wrap items-start justify-center text-left text-[14.51px] text-gray-700 font-body-regular-600">
      <div className="flex-1 flex flex-row flex-wrap items-start justify-center gap-[12px] px-2.5">
        {allProperties && allProperties.map((property) => (
          <Link href="/property" key={property.id}>
          <PropertyCard
            imgUrl={property.image}
            name={property.name}
            price={property.price}
            squareFootage={property.squareFootage}
            baths={property.baths}
            carSpace={property.carSpace}
            seller={property.seller}
            sellerImg={property.sellerImg}
            coast={property.coast}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PropertyContainer;
