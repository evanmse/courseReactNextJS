'use client'
import React, { Children, ReactNode, useState } from 'react'
import { contacts } from '@/data/contacts';
import { ContactContext } from '@/context/contact-context';

type Props = {
    children: React.ReactNode;
};

export default function Provider({children}: Props) {
    const [contactsList, setContactList] = useState(contacts)
    return <>
    <ContactContext value={{
        contacts: contactsList,
        setContact: setContactList
    }}>
        {children}
    </ContactContext>
    </>
}