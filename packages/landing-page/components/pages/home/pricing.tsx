import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import Image from "next/image";

const pricingPlans = [
	{
		icons: "/icons/elevate.svg",
		title: "Elevate",
		features: [
			"AI-Powered Interview Preparation",
			"Job Application Tracker",
			"Lead Generation",
			"Access to Resource Library",
			"Standard Support"
		],
		price: "$50",
		isSuggested: true
	},
	{
		icons: "/icons/apex.svg",
		title: "Apex",
		features: [
			"AI-Powered Interview Preparation",
			"Job Application Tracker",
			"Lead Generation",
			"Access to Resource Library",
			"Standard Support"
		],
		isCustomPrice: true
	}
];

export default function Pricing() {
	return (
		<section
			id='pricing'
			className='container flex flex-col items-center lg:items-start space-y-14 py-20 lg:py-32 xl:px-32'
		>
			<div className='w-full flex flex-col space-y-5 text-center'>
				<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold lg:leading-normal'>
					Prepare to price
				</h2>
				<p className='text-gray-text'>Choose Your Path to Interview Success</p>
			</div>

			<div className='w-full flex flex-col items-center space-y-20 md:flex-row md:space-y-0 md:space-x-10 md:justify-center'>
				{pricingPlans.map((item, index) => (
					<div
						key={index}
						className='relative w-full max-w-[320px] md:self-stretch'
					>
						<div
							className={cn(
								"w-full relative overflow-hidden rounded-xl p-7 pt-4 z-10",
								item.isSuggested
									? "bg-[linear-gradient(135deg,#FFB198_0%,#018080_90%)]"
									: "bg-[#18181c]"
							)}
						>
							{item.isSuggested && (
								<>
									<div className='z-5 absolute top-[5%] left-[95%] translate-x-[-50%] translate-y-[-50%] h-[30%] aspect-square rounded-full bg-[radial-gradient(at_90%_0%,#0177ae_10%,#929993_60%)] !border-none' />
									<div className='z-5 absolute top-[70%] left-[15%] translate-x-[-50%] translate-y-[-50%] h-[80%] aspect-square rounded-full bg-[radial-gradient(at_10%_10%,#929993_40%,#0177ae_70%)] !border-none' />
								</>
							)}
							<h4 className='w-full text-center font-bold py-7 z-20'>
								{item.title}
							</h4>
							<hr
								className={cn(
									"w-full z-20",
									item.isSuggested ? "border-background" : "border-foreground"
								)}
							/>
							<div className='py-7 w-full space-y-5 z-20'>
								{item.features.map((feature, id) => (
									<div
										className='w-full flex items-center space-x-2 z-20'
										key={id}
									>
										<div className='h-6 w-6 rounded-lg bg-[#222228] flex items-center justify-center z-20'>
											<CheckIcon className='h-4 w-4' />
										</div>

										<p className='text-left flex-1 font-semibold text-xs z-20'>
											{feature}
										</p>
									</div>
								))}
							</div>
							<hr
								className={cn(
									"w-full z-30",
									item.isSuggested ? "border-background" : "border-foreground"
								)}
							/>
							<div className='w-full text-left pt-7 z-20'>
								{item.isCustomPrice ? (
									<p className='text-xl font-bold z-20'>Let&apos;s Talk</p>
								) : (
									<p className='flex space-x-5 items-center z-20'>
										<span className='text-2xl font-bold z-20'>
											₦{item.price}
										</span>
										<span className='text-sm z-20'>/ year</span>
									</p>
								)}
							</div>
						</div>

						<div className='z-50 absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-16 w-16 rounded-full bg-[#242228] flex items-center justify-center'>
							<div className='w-[50%] h-[50%]'>
								<AspectRatio ratio={1} className='relative'>
									<Image src={item.icons} alt={item.title} layout='fill' />
								</AspectRatio>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
