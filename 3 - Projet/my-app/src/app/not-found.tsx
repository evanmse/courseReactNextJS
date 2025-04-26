import React from 'react'
import Link from 'next/link';

type Props = Record<never, never>;

export default function NotFound({}: Props) {
  return (
    <div className='flex flex-col center page'>
        <h2>La page que vous demandez n&apos;existe pas</h2>
        <Link href={"/"} className='btn-link'>Retour Home</Link>
    </div>
  )
}