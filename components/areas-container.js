import { useEffect, useState } from "react";
import AreaCard from "./area-card";
// import { createClient } from "@supabase/supabase-js";

// const [properties, setProperties] = useState([])
// const [popularLocations, setPopularLocations] = useState([])

// function sortByHighest(popularity) {
//   let highest = 0;
//   let secondHighest = 0;
//   let thirdHighest = 0;
//   let fourthHighest = 0;
//   for (let i=0;i<popularity.length;i++) {
//     if (popularity[i][1] > highest) {highest = popularity[i]}
//   }
//   for (let i=0;i<popularity.length;i++) {
//     if (popularity[i][1] > highest && popularity[i] !== highest) {secondHighest = popularity[i]}
//   }
//   for (let i=0;i<popularity.length;i++) {
//     if (popularity[i][1] > highest && popularity[i] !== highest && popularity[i] !== secondHighest) {thirdHighest = popularity[i]}
//   }
//   for (let i=0;i<popularity.length;i++) {
//     if (popularity[i][1] > highest && popularity[i] !== highest && popularity[i] !== secondHighest && popularity[i] !== thirdHighest) {fourthHighest = popularity[i]}
//   }
//   return [highest, secondHighest, thirdHighest, fourthHighest]
// }

// useEffect(()=>{
//   const fetchProperties = async () => {
//     const result = await client.from('properties').select('*')
//     setProperties(result.data)
//   }
//   fetchProperties()

//   let popularity = []
//   for (let i=0;i<properties.length;i++) {
//     let found = false;
//     let val = null;
//     for (let j=0;j<popularity.length;j++) {
//       if (properties[i].name === popularity[j][0]) {found = true; val = j}
//     }
//     if (found) {
//       popularity[val][1] += 1
//     } else {
//       popularity.push([properties[i].name, 1])
//     }
//   }
//   popularity = sortByHighest(popularity)
//   setPopularLocations(popularity)
// },[])

// const client = createClient(
//   process.env.NEXT_PUBLIC_URL,
//   process.env.NEXT_PUBLIC_KEY
// )

const AreasContainer = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col py-[53px] px-[50px] items-center justify-start gap-[45px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col py-0 px-[30px] items-center justify-start gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap py-0 px-2.5 box-border items-start justify-center max-w-[95%px] text-left text-5xl text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
              {/* {popularLocations && popularLocations.map((item, index) => (
                <>{index < 2 && <AreaCard 
                cityName={item[0]} 
                numListings={item[1]}
                propPadding="unset"
                propBoxSizing="unset"
                propBackgroundImage={`url("/card-2@3x.png")`}
                />}</>
              ))} */}
            
            
            <AreaCard cityName="Centerville" />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-2@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
              numListings={10}
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-3@3x.png")`}
              propPadding="unset"
              propBoxSizing="unset"
              numListings={10}
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <AreaCard
              cityName="Arlington"
              propBackgroundImage={`url("/card-4@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
              numListings={10}
            />
            <AreaCard
              cityName="Centerville"
              propBackgroundImage={`url("/card-5@3x.png")`}
              propPadding="10px"
              propBoxSizing="border-box"
              numListings={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreasContainer;
