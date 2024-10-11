'use client'
import React from 'react'
import styles from './select.module.scss'

interface SelectProps {
    options : string []
    title : string
}




const Select : React.FC<SelectProps> = ( { options, title })=>{
    return(
        <select className={styles.contain}>
            <option value="" disabled selected> {title} </option>
            {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
           
        </select>
    )
}

export default Select