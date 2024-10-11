// RedirectText.tsx
"use client";

import React from 'react';
import styles from '@/styles/components/ui/RedirectText.module.scss';

interface RedirectTextProps {
    name: string;
    id: string;
    isActive: boolean; // Prop para determinar si está activo
    onClick: (id: string) => void; // Prop para manejar el clic
}

const RedirectText: React.FC<RedirectTextProps> = ({ name, id, isActive, onClick }) => {
    return (
        <a 
            className={`${styles.button} ${isActive ? styles.active : ''}`} // Cambiar clase si está activo
            onClick={() => onClick(id)}
        >
            {name}
        </a>
    );
};

export default RedirectText;
