import React from 'react'
import { Button } from './ui/button'

const Header = () => {
  return (
    <div className='nav flex items-center justify-between px-20 py-6 shadow-md'>
        <div className="logo flex">
            <h1 className='text-lg font-semibold'>Sandook</h1>
            <span className="rounded-full text-base bg-primary/10 border border-primary/50 px-2 ml-2">
              v1
            </span>
        </div>
        <Button className=' bg-black text-white rounded-xl hover:bg-zinc-800 px-2 '>Dark Mode</Button>
      
    </div>
  )
}

export default Header
