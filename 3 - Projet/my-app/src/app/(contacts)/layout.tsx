import Navbar from '@/components/Navbar'
import Provider from '@/components/provider'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function layout({children}: Props) {
  return (
    <div className='page'>
       <Provider>
          <Navbar />
          {children}
        </Provider>
    </div>
  )
}