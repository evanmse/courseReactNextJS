"use client"

import React, { use }from 'react'
import ContactCard from './contact-card';
import { ContactContext } from '@/context/contact-context';

type Props = Record<never, never>;

export default function ContactList({}: Props) {
  const { contacts } = use(ContactContext)
  return (
    contacts.map((contact) => (
        <ContactCard
            key={contact.id}
            contact={contact}
        />
    )
  ))
}