import Navbar from '@/components/Navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className='page'>
        <Navbar />
        {children}
    </div>
  )
}