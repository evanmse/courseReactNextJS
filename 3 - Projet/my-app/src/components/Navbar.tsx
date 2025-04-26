
import Link from 'next/link'
import React from 'react'

type Props = Record<never, never>;

export default function Navbar({}: Props) {
  return (
    <header className='navbar'>
        <Link href={"/"} className=''>
            <h4>Fiche de Contact</h4>
        </Link>
    </header>
  )
}