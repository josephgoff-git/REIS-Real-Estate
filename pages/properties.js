import Head from "next/head";
import "antd/dist/antd.min.css";
import { Pagination, Menu, Dropdown } from "antd";
import {
  DownOutlined
} from "@ant-design/icons";
import Header from "../components/header";
import PropertiesGridContainer from "../components/properties-grid-container";
import Footer from "../components/footer";
import { createClient } from "@supabase/supabase-js";
import { useEffect, useState } from "react"; 

const PropertiesGridView = () => {

  const [properties, setProperties] = useState([])

  useEffect(()=>{
    const fetchProperties = async () => {
      const result = await client.from('properties').select('*')
      setProperties(result.data)
    }
    fetchProperties()
  },[])

  const client = createClient(
    process.env.NEXT_PUBLIC_URL,
    process.env.NEXT_PUBLIC_KEY
  )

  const defaultOrder = [
    {
      key: "1",
      label: (
        <a onClick={(e) => e.preventDefault()}>
          Popular Properties
        </a>
      )
    },
    {
      key: "2",
      label: (
        <a onClick={(e) => e.preventDefault()}>
          Latest Properties
        </a>
      )
    },
    {
      key: "3",
      label: (
        <a onClick={(e) => e.preventDefault()}>
          Recommended Properties
        </a>
      )
    },
  ]

  const [sideBar, setSideBar] = useState(false)

  function handleHamburgerClick() {
    let side = sideBar;
    setSideBar(!side);
  }
 

  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover Your Perfect Home" />
      </Head>
      <div className="relative bg-gray-white w-full flex flex-col items-start justify-start text-center text-33xl text-gray-white font-body-regular-400">
        <Header hamburger={false} handleHamburgerClick={handleHamburgerClick}/>
        
        <div className="w-full flex flex-row">
          <div className="w-full flex flex-col">


          <div className="self-stretch h-60 flex flex-col items-center justify-center bg-[url(/category@3x.png)] bg-cover bg-no-repeat bg-[top]">
            <div className="flex flex-col items-center justify-start gap-[12px]">
              <div className="relative leading-[72px] font-semibold">
                Properties
              </div>
              <div className="relative text-base leading-[24px] text-whitesmoke-200 font-body-regular-600">
                <span>{`Home / `}</span>
                <span className="font-medium text-gray-white">Properties</span>
              </div>
            </div> 
          </div>

          <div className="self-stretch flex flex-col pt-10 px-0 pb-2 items-center justify-start gap-[36px] text-left text-base text-gray-black font-body-regular-600 lg:pl-[120px] lg:pr-[120px] lg:box-border md:pl-[60px] md:pr-[60px] md:box-border sm:pl-5 sm:pr-5 sm:box-border">
            <div className="w-[272px] flex flex-row items-center justify-start">
              <div className="flex flex-row items-end justify-start gap-[16px]">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/listbullets.svg"
                  />
                  <img
                    className="relative w-6 h-6"
                    alt=""
                    src="/squaresfour.svg"
                  />
                </div>
                <div className="relative leading-[24px]">Sort by:</div>
                <Dropdown
                  menu={{ items: defaultOrder}}
                  placement="bottomLeft"
                  trigger={["hover"]}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    {`Default Order `}
                    <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
            <PropertiesGridContainer allProperties={properties}/>
            <Pagination 
              defaultCurrent={1}
              total={50}
            />
          </div>

          <Footer
            imageIds="/houseline1.svg"
            smallImageIds="/social-media-logo.svg"
            mediumImageIds="/social-media-logo1.svg"
            smallImageIds2="/social-media-logo2.svg"
            smallImageIds3="/social-media-logo3.svg"
            largeImageIds="/social-media-logo4.svg"
          />
          </div>

          {/* {sideBar && <div className="w-[300px] ">
            <p>Hi!!</p>
          </div>} */}
        
        </div>

      </div>
    </>
  );
};

export default PropertiesGridView;
