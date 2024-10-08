import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { workExperiences } from "../contants";
import Developer from "../Components/Developer";
import { OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader";

const Experience = () => {
	const [animationName, setAnimationName] = useState();
	return (
		<section className="c-space my-20">
			<div className="w-full text-white-600">
				<h3 className="head-text">My Work Experience</h3>

				<div className="work-container">
					<div className="work-canvas w-full">
						<Canvas>
							<ambientLight intensity={4} />
							<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
							<directionalLight position={[10, 10, 10]} intensity={1} />
							<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

							<Suspense fallback={<CanvasLoader />}>
								<Developer animationName={animationName} position-y={-3} scale={3} />
							</Suspense>
						</Canvas>
					</div>

					<div className="work-content">
						<div className="sm:py-10 py-5 sm:px-5 px-2.5 sm:max-h-screen sm:overflow-auto">
							{workExperiences.map(({ name, pos, duration, title, animation, icon }, idx) => (
								<div
									key={idx}
									className="work-content_container group"
									onClick={() => setAnimationName(animation.toLowerCase())}
									onPointerOver={() => setAnimationName(animation.toLowerCase())}
									onPointerOut={() => setAnimationName("idle")}
								>
									<div className="flex flex-col h-full justify-start items-center py-2">
										<div className="work-content_logo">
											<img src={icon} alt="Logo" className="w-full h-full" />
										</div>
										<div className="work-content_bar" />
									</div>

									<div className="sm:p-5 px-2.5 py-5">
										<p className="font-bold text-white-800">{name}</p>
										<p className="text-sm mb-5">
											{pos} -- {duration}
										</p>
										<p className="group-hover:text-white transition ease-in-out duration-500">
											{title}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
