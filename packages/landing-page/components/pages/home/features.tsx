"use client";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

const features = [
	{
		icon: "/icons/feature-1.svg",
		title: "Smart Preparation",
		description:
			"Elevate your interview skills with Flumeni's AI-driven platform for personalized guidance."
	},
	{
		icon: "/icons/feature-2.svg",
		title: "Job Application Tracker",
		description:
			"Stay organized and monitor your interview progress with Flumeni's tracking tools."
	},
	{
		icon: "/icons/feature-3.svg",
		title: "Lead Generation",
		description:
			"Access insider knowledge and valuable leads from past or current employees of your target organizations."
	}
];

export default function Features() {
	return (
		<section
			id='features'
			className='container flex flex-col items-center lg:items-start space-y-14 py-20 lg:py-32 xl:px-32'
		>
			<div className='flex flex-col space-y-3 text-center lg:text-left md:max-w-[600px] lg:max-w-none'>
				<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold'>
					Flumeni: Your Interview Sidekick
				</h2>
				<p className='text-gray-text'>
					Navigate interviews with ease and confidence, every step of the way
				</p>
			</div>

			<div className='w-full grid gap-7 grid-cols-1 lg:grid-cols-3 md:max-w-[600px] lg:max-w-none'>
				{features.map((feature, index) => (
					<div
						key={index}
						className='group flex flex-col items-center space-y-5 py-12 px-7 rounded-2xl bg-[#18181c] text-center'
					>
						<div className='h-24 w-24 p-3 rounded-3xl bg-[#222228] group-hover:bg-primary-gradient flex items-center justify-center'>
							<div className='h-10 w-10'>
								<AspectRatio ratio={1} className='relative'>
									<Image
										src={feature.icon}
										alt={feature.title}
										layout='fill'
										className='object-contain'
									/>
								</AspectRatio>
							</div>
						</div>
						<h3 className='text-lg font-semibold'>{feature.title}</h3>
						<p className='text-gray-text text-center text-xs leading-loose'>
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
