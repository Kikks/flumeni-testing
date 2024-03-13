"use client";
import { createContext, useEffect, useState } from "react";

type WaitlistQuestionOption = {
	id: number;
	question: string;
};

const WaitlistContext: React.Context<{
	email: string;
	showWaitlistModal: boolean;
	questionOptions: WaitlistQuestionOption[];
	setEmail: (email: string) => void;
	setShowWaitlistModal: (showWaitlistModal: boolean) => void;
	setQuestionOptions: (questionOptions: WaitlistQuestionOption[]) => void;
}> = createContext({
	email: "",
	showWaitlistModal: false as boolean,
	questionOptions: [] as WaitlistQuestionOption[],
	setEmail: (_email: string) => {},
	setShowWaitlistModal: (_showWaitlistModal: boolean) => {},
	setQuestionOptions: (_questionsOptions: WaitlistQuestionOption[]) => {}
});

const WaitlistProvider = (props: any) => {
	const [email, setEmail] = useState("");
	const [showWaitlistModal, setShowWaitlistModal] = useState(false);
	const [questionOptions, setQuestionOptions] = useState<
		WaitlistQuestionOption[]
	>([]);

	useEffect(() => {
		const questionsAPIUrl = process.env.NEXT_PUBLIC_WAITLIST_QUESTION_API_URL;
		if (!questionsAPIUrl) return;

		fetch(questionsAPIUrl)
			.then(res => res.json())
			.then(data => setQuestionOptions(data ?? []))
			.catch(err => console.error(err));
	}, []);

	return (
		<WaitlistContext.Provider
			value={{
				email,
				showWaitlistModal,
				questionOptions,
				setEmail,
				setShowWaitlistModal,
				setQuestionOptions
			}}
			{...props}
		/>
	);
};

export { WaitlistContext, WaitlistProvider };
