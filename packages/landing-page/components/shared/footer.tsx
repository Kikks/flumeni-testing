import { FacebookIcon, LinkedinIcon, TwitterIcon, XIcon } from "lucide-react";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className='container flex items-center justify-between bg-background p-5 lg:px-32'>
			<div className='h-8 w-24 relative'>
				<Image src='/icons/Logo--full.svg' layout='fill' alt='Flumeni' />
			</div>

			<div className='flex items-center space-x-2'>
				<a
					href='https://www.facebook.com/Flumeni-101024748989736'
					target='_blank'
					rel='noreferrer'
					className='bg-[#18181c] rounded-2xl h-10 w-10 flex items-center justify-center'
				>
					<FacebookIcon className='h-5 w-5' />
				</a>
				<a
					href='https://www.instagram.com/flumeni/'
					target='_blank'
					rel='noreferrer'
					className='bg-[#18181c] rounded-2xl h-10 w-10 flex items-center justify-center'
				>
					<TwitterIcon className='h-5 w-5' />
				</a>
				<a
					href='https://www.linkedin.com/company/flumeni'
					target='_blank'
					rel='noreferrer'
					className='bg-[#18181c] rounded-2xl h-10 w-10 flex items-center justify-center'
				>
					<LinkedinIcon className='h-5 w-5' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
