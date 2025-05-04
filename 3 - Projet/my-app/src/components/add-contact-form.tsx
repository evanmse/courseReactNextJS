"use client"
import React, { use } from 'react'
import { useRouter } from 'next/navigation';
import { Contact } from '@/types/contact.model';
import { ContactContext } from '@/context/contact-context';


type Props = {}

export default function AddContactForm({}: Props) {

    const router = useRouter();

    const { contacts, setContact} = use(ContactContext);

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const nouveauContact : Contact = {
            id: Math.round(Math.random() * 100),
            nom: form.get('nom') as string,
            email: form.get('email') as string,
            numTel: form.get('phone') as string,
            avatar: "https://avatar.iran.liara.run/public",
    };

        setContact([nouveauContact, ...contacts]);
    
        router.push('/contacts');
    }

  return (
    <form className='mt-2 flex' onSubmit={(e)=>handleSubmitForm(e)}>
            <div className='form-group'>
                <label htmlFor="nom">Nom du contact</label>
                <input type="text" name='nom' id="" placeholder='Evan Massé' required minLength={3} />
            </div>
            <div className='form-group'>
                <label htmlFor="email">Adresse mail</label>
                <input type="email" name='email' id="" placeholder='contact@evanmse.com' required minLength={3} />
            </div>
            <div className='form-group'>
                <label htmlFor="phone">Numéro de telephone</label>
                <input type="tel" name='phone' id="" placeholder='+33 06 xx xx xx xx' required minLength={8}/>
            </div>
        
            <button type="submit" className='btn btn-primary w-full'>Ajouter</button>
        </form>
    )}
