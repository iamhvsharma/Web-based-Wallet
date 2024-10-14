import React from 'react'
import { Button } from './ui/button'

const WalletGenerator = () => {
  return (
    <div>

      {/* Landing Page  */}
      <div className=' h-80 px-20 py-10 '>
        <h1 className='text-4xl md:text-3xl font-black mb-3'>Sandook supports  multiple blockchain</h1>
        <p className='text-primary/80 font-semibold text-lg md:text-xl mb-3'>Choose a Blockchain to get started.</p>
        <Button className = ' bg-black text-white rounded-xl hover:bg-zinc-800 mr-1 '>Solana</Button>
        <Button className = ' bg-black text-white rounded-xl hover:bg-zinc-800 ml-1  '>Ethereum</Button>

      </div>
      
      
    </div>
  )
}

export default WalletGenerator
