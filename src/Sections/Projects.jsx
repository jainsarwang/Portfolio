import { Suspense, useState } from "react";
import { myProjects, technologiesIcon } from "../contants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../Components/CanvasLoader";
import DemoComputer from "../Components/DemoComputer";

const projectCount = myProjects.length;

const Projects = () => {
	const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
	const current = myProjects[selectedProjectIndex];

	const handleNavigation = (direction) => {
		setSelectedProjectIndex((prevIndex) => {
			if (direction === "previous") return prevIndex == 0 ? projectCount - 1 : prevIndex - 1;
			else return prevIndex == projectCount - 1 ? 0 : prevIndex + 1;
		});
	};

	return (
		<section className="c-space my-20" id="work">
			<p className="head-text">My work</p>

			<div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
				<div className="flex flex-col gap-5 relative sm:p-10 px-5 shadow-2xl shadow-black-200">
					<div className="absolute top-0 right-0 pointer-events-none">
						<img
							src={current.spotlight}
							alt={current.title}
							className="sw-full h-96 object-cover rounded-xl"
						/>
					</div>

					<div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg" style={current.logoStyle}>
						<img src={current.logo} alt="logo" className="w-10 h-10 shadow-sm" />
					</div>

					<div className="flex flex-col gap-5 text-white-600 my-5">
						<p className="text-white text-2xl font-semibold animatedText">{current.title}</p>

						<p className="animatedText">{current.desc}</p>

						<p className="animatedText">{current.subDesc}</p>
					</div>

					<div className="flex items-center justify-between flex-wrap gap-5">
						<div className="flex items-center gap-3">
							{current.tags.map((tag, idx) => {
								const tech = technologiesIcon[tag];

								if (!tech) return <></>;

								return (
									<div key={idx} className="tech-logo" title={tech.name}>
										<img src={tech.image} alt={tech.name} />
									</div>
								);
							})}
						</div>

						{current.liveLink || current.githubLink ? (
							<a
								href={current.liveLink ?? current.githubLink}
								target="_black"
								rel="noreferrer"
								className="flex item-center gap-2 cursor-pointer text-white-600"
							>
								<p>{current.liveLink ? "Check Live Site" : "Visit GitHub Repo"}</p>

								<img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" />
							</a>
						) : (
							<></>
						)}
					</div>

					<div className="flex item-center justify-between mt-7">
						<button className="arrow-btn" onClick={() => handleNavigation("previous")}>
							<img src="/assets/left-arrow.png" alt="left arrow" className="w-4 h-4" />
						</button>

						<button className="arrow-btn" onClick={() => handleNavigation("next")}>
							<img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
						</button>
					</div>
				</div>

				<div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
					<Canvas>
						<ambientLight intensity={Math.PI} />
						<directionalLight position={[10, 10, 5]} />

						<Center>
							<Suspense fallback={<CanvasLoader />}>
								<group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
									<DemoComputer texture={current.texture} />
								</group>
							</Suspense>
						</Center>

						<OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
					</Canvas>
				</div>
			</div>
		</section>
	);
};

export default Projects;
