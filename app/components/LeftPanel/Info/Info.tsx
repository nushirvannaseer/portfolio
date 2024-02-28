import React from 'react'
import  Image from 'next/image';
import Link from 'next/link';

interface Props{
	icon: any;
	title: string;
	text: string;
	link: string;
}

const Info = ({icon, title, text, link}: Props) => {
  return (
	  <Link href={link} className='flex flex-row align-middle justify-start text-xs'>
		  <Image src={icon} height={30} alt="" className='mx-2'/>
		  <div className='flex flex-col my-4'>
			  <span className='text-md font-bold'>{title}</span>
			  <span>{text}</span>
		  </div>
	</Link>
  )
}

export default Info