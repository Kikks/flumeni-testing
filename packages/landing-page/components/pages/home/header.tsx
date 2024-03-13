"use client";
import { useContext, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WaitlistContext } from "@/contexts/waitlist";

export default function Header() {
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
		<header className='relative  pt-32 pb-16 w-full container flex flex-col items-center space-y-3'>
			<div className='absolute top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[70%] rounded-full aspect-square bg-[radial-gradient(rgba(34,34,40,.8)_20%,rgba(0,0,0,0)_70%)]' />

			<div className='absolute top-[10%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[64px] w-[64px] rounded-full aspect-square bg-[radial-gradient(at_10%_10%,#494955_40%,#141414_70%)] blur-md' />
			<div className='absolute top-[60%] left-[90%] translate-x-[-50%] translate-y-[-50%] h-[96px] w-[96px] rounded-full aspect-square bg-[radial-gradient(at_10%_10%,#494955_40%,#141414_70%)] blur-md' />
			<div className='absolute top-[75%] left-[10%] translate-x-[-50%] translate-y-[-50%] h-[130px] w-[130px] rounded-full aspect-square bg-[radial-gradient(at_10%_10%,#494955_40%,#141414_70%)] blur-md' />

			<h1 className='z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center lg:!leading-snug'>
				Elevate Your Interviews with
				<br />
				AI-Driven Tracking
			</h1>

			<p className='z-10 text-center max-w-[40ch] lg:max-w-[50ch] text-gray-text'>
				Track, Prepare, Connect: Flumeni Empowers You to Ace Every Interview
				Opportunity
			</p>

			<form
				id='join-waitlist'
				onSubmit={e => {
					e.preventDefault();
					handleJoinWaitlist();
				}}
				className='mx-auto w-full max-w-[500px] lg:max-w-[700px] flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3 !mt-10 z-10 scroll-pt-40 scroll-mt-40'
			>
				<Input
					className='flex-1 border-foreground md:border-none bg-[#18181c] lg:h-16 lg:px-8'
					placeholder='Your Email'
					value={email}
					onChange={e => setEmail(e.target.value)}
					type='email'
					required
				/>
				<Button size='lg' className='lg:h-16 font-bold'>
					Join the Waitlist
				</Button>
			</form>
		</header>
	);
}
