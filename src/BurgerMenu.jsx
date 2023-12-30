import { motion } from "framer-motion";
import Close from "./svg/Close.jsx";
import { useEffect, useRef } from "react";

const BurgerMenu = ({setIsOpen}) => {
   const menuRef = useRef(null)

   useEffect(() => {
      const listener = (e) => {
         if (menuRef.current && !menuRef.current.contains(e.target)) {
            setIsOpen(false)
         }
      }
      document.addEventListener('click', listener)

      return () => {
         document.removeEventListener('click', listener)
      }
   }, [])


   return (
      <motion.div initial={{opacity: 0}} exit={{opacity:0}} animate={{opacity: 1}} className={'fixed top-0 left-0 right-0 bottom-0 bg-black/70 backdrop-blur-[2px]'}>

         <motion.div initial={{x: 260}} exit={{x: 260}} animate={{x: 0}} ref={menuRef} className={'bg-gray-200 absolute top-0 right-0 bottom-0 flex flex-col w-[260px] text-xl font-semibold pl-8 bg-white'}>

            <Close className={'self-end mr-6 mt-6 cursor-pointer scale-75 text-gray-400 hover:text-black'} onClick={() => setIsOpen(false)} />

            <a href="#" className={'mt-16'}>Home</a>
            <a href="#" className={'mt-6'}>New</a>
            <a href="#" className={'mt-6'}>Popular</a>
            <a href="#" className={'mt-6'}>Trending</a>
            <a href="#" className={'mt-6'}>Categories</a>
         </motion.div>
      </motion.div>
   )
}

export default BurgerMenu;