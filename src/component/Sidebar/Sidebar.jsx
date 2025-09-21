'use client'
import React, { useState } from 'react'
import {  House, Menu, StickyNote, UsersRound } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';



const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: House,
        label: "Home",
        href: "/",
      }
      
       
     
    ],
  },
  {
    title: "Post",
    items: [
      {
        icon: StickyNote,
        label: "Posts",
        href: "/posts",
      }
      
       
     
    ],
  },
  {
    title: "User",
    items: [
      {
        icon: UsersRound,
        label: "Users",
        href: "/users",
      }
      
       
     
    ],
  },
 
];


const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const pathname = usePathname();
  return (
      <div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64" : "w-20"}`}>
        <div className='h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]'>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='p-2 rounded-full hover:bg-[#2f2f2f] transition-all cursor-pointer'>
                <Menu size={24}/>
            </button>
            {isSidebarOpen && 
            (
               <nav className='mt-8 flex-grow'>
                          {menuItems.map((section) =>
                            section.items.map((item) => {
                              const IconComponent = item.icon;
                              return (
                                <Link key={item.label} href={item.href}>
                                  <div
                                    className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f] transition-colors mb-2 ${
                                      pathname === item.href ? "bg-[#2f2f2f]" : ""
                                    }`}
                                  >
                                    <IconComponent size={20} style={{ minWidth: "20px" }} />
                                     <span className='ml-4 whitespace-nowrap'>{item.label}</span>
                                   
                                  </div>
                                </Link>
                              );
                            })
                          )}
                       </nav>
                                     
        )}      
          </div>

    </div>
  )
}

export default Sidebar


 

