"use client";
import React, { useContext, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "../ui/dialog";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { WaitlistContext } from "@/contexts/waitlist";

const formURL =
	"https://script.google.com/macros/s/AKfycbxcYhstwG_h7fHqhBsqHqofmi6ZiKQOX11sMDmCKJ-Xj9xf5O39My7-5RHsM_Msx9QU/exec";

const JoinWaitlistModal = () => {
	const { email, showWaitlistModal, questionOptions, setShowWaitlistModal } =
		useContext(WaitlistContext);

	const [isLoading, setIsLoading] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");
	const [location, setLocation] = useState("");

	const handleSubmission = () => {
		setIsLoading(true);

		const data = {
			Email: email,
			"Biggest Interview Preparation Challenge": selectedOption,
			Location: location
		};

		const formData = new FormData();
		for (let i = 0; i < Object.keys(data).length; i += 1) {
			formData.append(Object.keys(data)[i], Object.values(data)[i]);
		}

		fetch(formURL, { method: "POST", body: formData })
			.then(res => {
				if (res.status === 200) {
					toast.success("Success", {
						description:
							"Thank you for your response; you'll hear from us soon!",
						className: "bg-green-500"
					});
					setShowWaitlistModal(false);
				} else {
					toast.error("Error", {
						description: "Something went wrong. Please try again later.",
						className: "bg-red-500"
					});
				}
			})
			.catch(err => {
				toast.error("Error", {
					description:
						err?.response?.message ??
						err?.message ??
						"Something went wrong. Please try again later.",
					className: "bg-red-500"
				});
				console.log(err);
			})
			.finally(() => setIsLoading(false));
	};

	const handleCloseModal = (value: boolean) => {
		if (isLoading) return;

		if (!value) {
			handleSubmission();
			setShowWaitlistModal(value);
		}
	};

	useEffect(() => {
		fetch("https://ipapi.co/json")
			.then(res => res.json())
			.then(data =>
				setLocation(`${data?.region ?? ""} ${data?.country_name ?? ""}`)
			)
			.catch(err => console.error(err));
	}, []);

	return (
		<Dialog open={showWaitlistModal} onOpenChange={handleCloseModal}>
			<DialogContent className='!p-0 overflow-hidden max-w-[90vw] sm:max-w-md'>
				<DialogHeader className='bg-primary p-6 w-full'>
					<DialogTitle>One Quick Question!</DialogTitle>
				</DialogHeader>

				<div className='w-full p-6 space-y-10'>
					<p className='font-semibold'>
						What has been your biggest challenge in preparing for interviews so
						far?
					</p>

					<RadioGroup
						className='space-y-2'
						value={selectedOption}
						onValueChange={value => setSelectedOption(value)}
						disabled={isLoading}
					>
						{questionOptions.map((item, index) => (
							<div key={index} className='flex items-start space-x-2'>
								<RadioGroupItem value={item.question} id={String(item.id)} />
								<Label
									htmlFor={String(item.id)}
									className='text-xs font-normal'
								>
									{item.question}
								</Label>
							</div>
						))}
					</RadioGroup>
				</div>

				<DialogFooter className='p-6'>
					<Button
						disabled={isLoading || selectedOption.trim() === ""}
						onClick={handleSubmission}
					>
						Submit
						{isLoading && <Loader2 className='animate-spin ml-2' />}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default JoinWaitlistModal;
