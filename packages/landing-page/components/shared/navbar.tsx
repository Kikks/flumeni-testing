"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Navbar() {
	return (
		<nav className='w-full py-5 top-0 left-0 lg:sticky z-50 bg-background'>
			<div className='container flex justify-between items-center'>
				<div className='h-10 w-32 relative'>
					<Image src='/icons/Logo--full.svg' layout='fill' alt='Flumeni' />
				</div>

				<div className='flex-1 space-x-5 hidden justify-center lg:flex'>
					<Link
						href='#features'
						className='text-sm hover:underline font-semibold'
					>
						Features
					</Link>
					<Link
						href='#pricing'
						className='text-sm hover:underline font-semibold'
					>
						Pricing
					</Link>
				</div>

				<Link href='/#join-waitlist'>
					<Button className='font-semibold px-6'>Join the Waitlist</Button>
				</Link>
			</div>
		</nav>
	);
}
