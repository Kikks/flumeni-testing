"use client";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import React from "react";

export default function Problems() {
	return (
		<section
			id='problems'
			className='container flex flex-col items-center lg:items-start space-y-14 py-20 !pr-0 lg:py-32 xl:px-32 xl:pr-0'
		>
			<div className='flex flex-col space-y-3 text-left'>
				<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold'>
					It’s not you, it’s these guys
				</h2>
				<p className='text-gray-text'>
					Don’t let Google Sheets stop you from landing your next job. Be
					intentional about your job interviews.
				</p>
			</div>

			<div className='w-full'>
				<AspectRatio ratio={1501 / 609} className='relative'>
					<Image
						src='/images/competitors-2.png'
						alt='Problems'
						layout='fill'
						quality={100}
					/>
				</AspectRatio>
			</div>
		</section>
	);
}
