import FeatureImage from "@/components/pages/home/feature-image";
import Features from "@/components/pages/home/features";
import GetAnEdge from "@/components/pages/home/get-an-edge";
import Header from "@/components/pages/home/header";
import Pricing from "@/components/pages/home/pricing";
import Problems from "@/components/pages/home/problems";

export default function Home() {
	return (
		<main className='min-h-screen overflow-x-hidden'>
			<Header />
			<FeatureImage />
			<Features />
			<Problems />
			<GetAnEdge />
			<Pricing />
		</main>
	);
}
