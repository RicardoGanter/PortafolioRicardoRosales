'use client'
import styles from './skill.module.scss' 
import React, { ReactNode } from 'react'

interface SkillProps {
	name : string
	knowledge : string
	image : ReactNode
}


const Skill : React.FC<SkillProps> =({name, knowledge, image})=>{

	
	return(
		<div className={styles.contain}>  
			<div className={styles.Image}>
				{image}
			</div>
			<p>{name}</p>
			<p>{knowledge}</p>

		</div>
	)
}

export default Skill