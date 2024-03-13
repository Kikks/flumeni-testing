import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function JoinWaitlist() {
	return (
		<section className='w-full bg-[#18181c] lg:py-32 xl:px-32'>
			<div className='relative container flex flex-col items-center lg:items-start space-y-5 py-24 bg-primary-gradient xl:px-24 rounded-2xl'>
				<h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-semibold'>
					Still Scrolling?!
				</h2>
				<p className='text-foreground max-w-[35ch] text-xl'>
					According to the unofficial internet rules, you now owe us your email
					address.
				</p>

				<div className='w-full bg-white rounded-xl p-2 flex space-x-2 lg:max-w-[500px]'>
					<Input
						className='flex-1 bg-transparent border-none text-background'
						placeholder="What's you email?"
					/>
					<Button variant='black'>Join Waitlist</Button>
				</div>
			</div>
		</section>
	);
}
