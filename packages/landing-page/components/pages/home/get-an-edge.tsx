"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function GetAnEdge() {
	return (
		<section id='edge' className='bg-[#18181c]'>
			<div className='container flex flex-col items-center md:flex-row lg:items-start space-y-14 py-10 lg:py-10'>
				<div className='w-full mx-auto max-w-[400px] md:max-w-none md:w-[55%] p-5'>
					<AspectRatio ratio={1} className='relative'>
						<Image
							src='/icons/popular-companies.svg'
							alt='Popular Companies'
							className='object-contain'
							layout='fill'
						/>
					</AspectRatio>
				</div>

				<div className='w-full md:w-[45%] md:p-5 md:self-stretch flex flex-col items-center justify-center lg:items-start'>
					<div className='flex flex-col space-y-5 text-center md:text-left md:max-w-[600px] lg:max-w-none'>
						<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold lg:max-w-[12ch] lg:leading-normal'>
							Give yourself an edge
						</h2>
						<p className='text-gray-text max-w-[40ch]'>
							Never lose track of all your job applications and Increase your
							role fit as you apply for more jobs.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
