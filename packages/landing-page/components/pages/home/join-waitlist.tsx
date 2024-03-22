"use client";
import React, { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WaitlistContext } from "@/contexts/waitlist";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function JoinWaitlist() {
	const [email, setEmail] = useState("");
	const { setEmail: setWaitlistEmail, setShowWaitlistModal } =
		useContext(WaitlistContext);

	const handleJoinWaitlist = () => {
		if (!email) return;
		if (email.trim() === "") return;

		setWaitlistEmail(email);
		setShowWaitlistModal(true);
	};

	return (
		<section className='w-full bg-[#18181c] px-10 md:px-20 py-10 lg:py-32 xl:px-32'>
			<div className='relative w-full container flex flex-col items-center lg:items-start space-y-5 py-24 bg-primary-gradient lg:px-16 xl:px-24 rounded-2xl'>
				<h2 className='text-3xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold'>
					Still Scrolling?!
				</h2>
				<p className='text-foreground max-w-[35ch] md:text-xl text-center lg:text-left'>
					According to the unofficial internet rules, you now owe us your email
					address.
				</p>

				<form
					onSubmit={e => {
						e.preventDefault();
						handleJoinWaitlist();
					}}
					className='w-full bg-white rounded-xl p-2 flex space-x-2 sm:max-w-[500px]'
				>
					<Input
						className='flex-1 bg-transparent border-none text-background'
						placeholder="What's you email?"
						value={email}
						onChange={e => setEmail(e.target.value)}
						type='email'
						name='email'
						required
					/>
					<Button variant='black'>Join Waitlist</Button>
				</form>

				<div className='hidden lg:block absolute top-[50%] translate-y-[-50%] -right-5 w-full mx-auto max-w-[650px] md:w-[50%] p-5'>
					<AspectRatio ratio={554 / 369} className='relative'>
						<Image
							src='/icons/map.svg'
							alt='Popular Companies'
							className='object-contain'
							layout='fill'
						/>
					</AspectRatio>
				</div>
			</div>
		</section>
	);
}
