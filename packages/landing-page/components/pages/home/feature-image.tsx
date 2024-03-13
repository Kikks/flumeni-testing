import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function FeatureImage() {
	return (
		<section className='relative w-full h-screen max-h-[300px] md:max-h-[550px] lg:max-h-[700px] flex items-center justify-center'>
			<div className='relative w-[80%] md:w-[70%] max-w-[700px] aspect-[883/553] z-20'>
				<AspectRatio ratio={883 / 553} className='relative'>
					<Image
						src='/images/featured-image.png'
						alt='Image'
						className='rounded-md object-cover'
						layout='fill'
					/>
				</AspectRatio>
			</div>

			<div className='z-10 absolute bottom-0 left-0 h-[60%] w-full'>
				<Image
					src='/icons/feature-image-bg.svg'
					layout='fill'
					className='bottom-0 left-0 w-full object-cover'
					alt=''
				/>
			</div>
		</section>
	);
}
