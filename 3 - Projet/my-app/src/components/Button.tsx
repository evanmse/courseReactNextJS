'use client'

import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: Props) {
    const handleClick = () => {
        console.log('Button clicked');
    };
    return (
    <div>
        <button onClick={onClick || handleClick}>
            {children || "Visiter l'application"}
        </button>
    </div>
    );
}
