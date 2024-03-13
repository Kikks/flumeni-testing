import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import { cn } from "@/lib/utils";
import Footer from "@/components/shared/footer";

const poppins = Poppins({
	subsets: ["devanagari"],
	weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
	title: "Flumeni",
	description: "Elevate Your Interviews with AI-Driven Tracking"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(poppins.className, "relative")}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
