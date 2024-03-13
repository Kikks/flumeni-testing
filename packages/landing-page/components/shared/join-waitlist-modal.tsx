"use client";
import React, { FC, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "../ui/dialog";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

interface JoinWaitlistModalProps {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const options = [
	{
		id: 1,
		question: "Identifying the specific areas where I need the most help"
	},
	{
		id: 2,
		question:
			"Identifying and measuring metrics to help me prepare for my interview better"
	},
	{
		id: 3,
		question:
			"Figuring out how to correctly allocate time for interview preparation"
	}
];

const JoinWaitlistModal: FC<JoinWaitlistModalProps> = ({ open, setOpen }) => {
	const [submitted, setSubmitted] = useState(false);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Before you go!!</DialogTitle>
					<DialogDescription>
						What has been your biggest challenge in preparing for interviews so
						far?
					</DialogDescription>
				</DialogHeader>

				<div className='w-full min-h-[200px]'>
					<RadioGroup defaultValue='option-one' className='space-y-5'>
						{options.map((item, index) => (
							<div key={index} className='flex items-center space-x-2'>
								<RadioGroupItem value={item.question} id={String(item.id)} />
								<Label htmlFor='option-one' className='text-sm'>
									{item.question}
								</Label>
							</div>
						))}
					</RadioGroup>
				</div>

				<DialogFooter>
					<Button>Submit</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default JoinWaitlistModal;
