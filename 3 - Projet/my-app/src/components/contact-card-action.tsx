"use client";

import { Contact } from '@/types/contact.model';
import { useRouter } from 'next/navigation';
import React from 'react'

type Props = {
    contact: Contact;
}

export default function ContactCardAction({ contact }: Props) {
    const router = useRouter();
    const handleNavigate = () => {
        router.push(`/contacts/${contact.id}`);
    }
    const handleDelete = () => {};

    return (
    <div className='flex between'>
            <button className='btn btn-netral' onClick={handleNavigate}>Voir</button>
            <button className='btn-danger' onClick={handleDelete}>Supprimer</button>
    </div>
  )
}