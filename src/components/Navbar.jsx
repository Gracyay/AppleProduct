import React from 'react'
import {appleImg, bagImg, searchImg} from '../utils' ;
import {navLists} from '../constants' ;

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5
    flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
            <img src={appleImg} alt="Apple" width={14} height={18} />

            <div className="flex flex-1 justify-center max-sm:hidden">
                {navLists.map((nav)=> ( 
                    <div key={nav} className="px-5 text-sm text-sm cursor-pointer
                    text-gray hover:text-whie transition-all"> 
                    {nav}
            </div>
                ))}
                {/* The code takes the array ['Phones, Macbooks, Tablets'] (i.e. navLists imported from ../constants),
                 iterates over it, .map((nav) => ...) is a way to loop 
                 through the array and do something with each item. Here, nav will be the current item in the array, 
                 which is "Phones, Macbooks, Tablets" in this case. For each item in the array, a <div> element is created. The content of this 
                 <div> is set to the value of nav, which is "Phones, Macbooks, Tablets" 
                 Setting the Key:
                 key={nav} assigns a unique identifier to the <div>. In this case, nav itself 
                 (which is "Phones, Macbooks, Tablets") is used as the key.*/}
            </div>
            <div className="flex items-baseline gap-7 max-sm:justify-end
            max-sm:flex-1">
                <img src={searchImg} alt="search" width={18} height={18} />
                <img src = {bagImg} alt="bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar