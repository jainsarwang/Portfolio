import { Canvas } from "@react-three/fiber";
import HackerRoom from "../Components/HackerRoom";
import { Suspense } from "react";
import CanvasLoader from "../Components/CanvasLoader";
import { PerspectiveCamera } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../contants";
import Target from "../Components/Target";
import ReactLogo from "../Components/ReactLogo";
import Cube from "../Components/Cube";
import Rings from "../Components/Rings";
import HeroCamera from "../Components/HeroCamera";
import Button from "../Components/Button";
import Java from "../Components/Java";

const HeroSection = () => {
	const isSmall = useMediaQuery({
			maxWidth: 440,
		}),
		isMobile = useMediaQuery({
			maxWidth: 768,
		}),
		isTablet = useMediaQuery({
			minWidth: 768,
			maxWidth: 1024,
		});

	const sizes = calculateSizes(isSmall, isMobile, isTablet);

	return (
		<section className="min-h-screen w-full flex flex-col relative" id="home">
			<div className="-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
				<p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
					Hi, I am Sarwang Jain<span className="waving-hand">👋</span>
				</p>
				<p className="hero_tag text-gray_gradient">Building Products & Helping Brands</p>
			</div>

			<div className="w-full h-full absolute inset-0">
				<Canvas className="w-full h-full">
					<Suspense fallback={<CanvasLoader />}>
						<PerspectiveCamera makeDefault position={[0, 0, 20]} />

						<HeroCamera isMobile={isMobile}>
							<HackerRoom
								position={sizes.deskPosition}
								rotation={[0, -Math.PI, 0]}
								scale={sizes.deskScale}
							/>
						</HeroCamera>

						<group>
							{/* <Target /> */}
							<Java position={sizes.javaPosition} />
							<ReactLogo position={sizes.reactLogoPosition} />
							<Cube position={sizes.cubePosition} />
							<Rings position={sizes.ringPosition} />
						</group>

						<ambientLight intensity={1} />
						<directionalLight position={[10, 10, 10]} intensity={0.5} />
					</Suspense>
				</Canvas>
				<div className="absolute bottom-7 left-0 right-o w-full z-10 c-space">
					<a href="#contact" className="w-fit">
						<Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
