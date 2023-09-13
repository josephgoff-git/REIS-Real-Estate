import Link from "next/link"

const Header = ({ hamburger, sideBar, setSideBar, handleHamburgerClick }) => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link href="/" className="flex flex-row items-center justify-center gap-[8px]">
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold text-primary-500">REIS</div>
            <div className="relative text-sm leading-[16px] font-medium text-primary-500">
              Real State
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] text-sm lg:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <Link href="/" className="relative leading-[22px] font-semibold hover:text-gray-black text-gray-500">HOME</Link>
            {/* <div className="relative leading-[22px]">ABOUT US</div> */}
            {/* <div className="relative leading-[22px]">OUR AGENTS</div> */}
            <Link href="/properties" className="relative leading-[22px] font-semibold hover:text-gray-black text-gray-500">
              PROPERTIES
            </Link>
            {/* <div className="relative leading-[22px]">GALLERY</div> */}
            {/* <div className="relative leading-[22px]">BLOG</div> */}
            {/* <div className="relative leading-[22px]">CONTACT US</div> */}
            {/* <div className="relative leading-[22px]">SEARCH</div> */}
          </div>
          {!hamburger && (
            <button onClick={()=>{ handleHamburgerClick() }} 
              className="cursor-pointer [border:none] hidden p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
              <img
                className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
                alt=""
                src="/notification.svg"
              />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
