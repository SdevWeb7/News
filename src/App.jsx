import Header from "./Header.jsx";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BurgerMenu from "./BurgerMenu.jsx";
import Image1 from '../public/images/image-retro-pcs.jpg'
import Image2 from '../public/images/image-gaming-growth.jpg'
import Image3 from '../public/images/image-top-laptops.jpg'
import Image4 from '../public/images/image-web-3-desktop.jpg'
import Image5 from '../public/images/image-web-3-mobile.jpg'


function App() {
   const [isOpenMenu, setIsOpenMenu] = useState(false)

   return (
      <div className={'p-8 tablet:py-8 tablet:px-20 desktop:px-32'}>
         <Header setIsOpen={setIsOpenMenu} />

         <AnimatePresence>
            {isOpenMenu && <BurgerMenu setIsOpen={setIsOpenMenu} />}
         </AnimatePresence>


         <div className={'flex flex-col desktop:flex-row'}>

            <div className={'mr-4 desktop:max-w-[65%]'}>
               <img className={'tablet:hidden'} src={Image5} alt="a" />
               <img className={'hidden tablet:block'} src={Image4} alt=""/>

               <div className={'flex desktop:justify-between mt-10 desktop:flex-row flex-col items-center'}>
                  <h1 className={'text-5xl font-extrabold desktop:w-[50%]'}>The Bright Future of Web 3.0?</h1>
                  <div className={'desktop:max-w-[40%] flex flex-col desktop:items-'}>
                     <p className={'text-xs text-custom3 mt-6 text-center desktop:mt-0 desktop:text-left'}>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                     <button className={'text-white bg-custom5 hover:bg-custom4 py-3 px-8 font-inter font-semibold tracking-[3px] text-xs mt-10'}>READ MORE</button>
                  </div>
               </div>
            </div>

            <div className={'bg-custom4 py-6 px-4 mt-8 desktop:mt-0'}>
               <h1 className={'text-custom6 font-bold text-3xl'}>New</h1>

               <h1 className={'text-custom1 font-semibold text-medium mt-8 hover:text-custom6 cursor-pointer'}>Hydrogen VS Electric Cars</h1>
               <p className={'text-custom3 text-xs font-semibold mt-2'}>Will hydrogen-fueled cars ever catch up to EVs?</p>
               <hr className={'bg-custom3 text-custom3 border-0 h-[1px] mt-8'} />

               <h1 className={'text-custom1 font-semibold text-medium mt-8 hover:text-custom6 cursor-pointer'}>What are the possible adverse effects of on-demand AI image generation?</h1>
               <p className={'text-custom3 text-xs font-semibold mt-2'}>Will hydrogen-fueled cars ever catch up to EVs?</p>
               <hr className={'bg-custom3 text-custom3 border-0 h-[1px] mt-8'} />

               <h1 className={'text-custom1 font-semibold text-medium mt-8 hover:text-custom6 cursor-pointer'}>Is VC Funding Drying Up?</h1>
               <p className={'text-custom3 text-xs font-semibold mt-2'}>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
            </div>
         </div>


         <div className={'flex flex-col desktop:flex-row desktop:justify-between mt-12'}>
            <div className={'flex desktop:max-w-[30%]'}>
               <img src={Image1} alt="a" className={'max-h-[100px]'} />
               <div className={'ml-4'}>
                  <h1 className={'text-2xl font-extrabold text-custom2 mb-1'}>01</h1>
                  <h1 className={'font-extrabold text-custom4 mb-1'}>Reviving Retro PCs</h1>
                  <p className={'text-xs text-custom3'}>What happens when old PCs are given modern upgrades?</p>
               </div>
            </div>

            <div className={'flex desktop:max-w-[30%] mt-4 desktop:mt-0'}>
               <img src={Image3} alt="a" className={'max-h-[100px]'} />
               <div className={'ml-4'}>
                  <h1 className={'text-2xl font-extrabold text-custom2 mb-1'}>02</h1>
                  <h1 className={'font-extrabold text-custom4 mb-1'}>Top 10 Laptops of 2022</h1>
                  <p className={'text-xs text-custom3'}>Our best picks for various needs and budgets.</p>
               </div>
            </div>

            <div className={'flex desktop:max-w-[30%] mt-4 desktop:mt-0'}>
               <img src={Image2} alt="a" className={'max-h-[100px]'} />
               <div className={'ml-4'}>
                  <h1 className={'text-2xl font-extrabold text-custom2 mb-1'}>03</h1>
                  <h1 className={'font-extrabold text-custom4 mb-1'}>The Growth of Gaming</h1>
                  <p className={'text-xs text-custom3'}>How the pandemic has sparked fresh opportunities.</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default App
