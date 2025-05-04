import { Contact } from '@/types/contact.model';
import React from 'react'
import Image from 'next/image';
import ContactCardAction from './contact-card-action';


type Props = {
    contact: Contact;
};

export default function ContactCard({ contact }: Props) {
  return (
    <div className='w-full'>
        {
            <div key={contact.id} className='flex mt-2 between'>
                <Image src={contact.avatar} width={70} height={70} alt={contact.nom}  />
                <div className='flex-1'>
                    <h4>
                    {contact.id} - {contact.nom}
                    </h4>
                <p>{contact.email}</p>
                {contact.numTel}
            </div>
            <ContactCardAction contact={contact} />
        </div>
        }
    </div>
  )
}