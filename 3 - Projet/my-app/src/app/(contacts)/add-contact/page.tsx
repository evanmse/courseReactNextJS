import React from 'react'
import AddContactForm from '@/components/add-contact-form';

type Props = Record<never, never>;

export default function page({}: Props) {
  return (
    <div className='mt-2'>
        <h1>Ajouter un contact</h1>
        <AddContactForm />
    </div>
  )
}