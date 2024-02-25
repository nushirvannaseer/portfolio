import React from 'react'
import  Image from 'next/image';

interface Props{
	icon: any;
	title: string;
	text: string;
}

const Info = ({icon, title, text}: Props) => {
  return (
	  <div className='flex flex-row align-middle justify-start text-xs'>
		  <Image src={icon} height={30} alt="" className='mx-2'/>
		  <div className='flex flex-col my-4'>
			  <span className='text-md font-bold'>{title}</span>
			  <span>{text}</span>
		  </div>
	</div>
  )
}

export default Info