import Logo from "../public/images/logo.svg";
import Burger from "./svg/Burger.jsx";

const Header = ({setIsOpen}) => {

   return (
      <header className={'flex items-center justify-between mb-8 pr-4'}>
         <img className={'scale-75 -translate-x-2'} src={Logo} alt="a" />

         <Burger className={'cursor-pointer tablet:hidden'} onClick={(e) => {
            e.stopPropagation()
            setIsOpen(true)
         }} />
         <div className={'tablet:block hidden text-sm font-semibold [&>a]:text-custom3/75 [&>a:hover]:text-custom3'}>
            <a href="#" className={''}>Home</a>
            <a href="#" className={'ml-4'}>New</a>
            <a href="#" className={'ml-4'}>Popular</a>
            <a href="#" className={'ml-4'}>Trending</a>
            <a href="#" className={'ml-4'}>Categories</a>
         </div>
      </header>
   )
}

export default Header;