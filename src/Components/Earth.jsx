import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const Earth = () => {
	const earthRef = useRef();

	const arcsData = [...Array(10).keys()].map(() => ({
		startLat: (Math.random() - 0.5) * 180,
		startLng: (Math.random() - 0.5) * 360,
		endLat: (Math.random() - 0.5) * 180,
		endLng: (Math.random() - 0.5) * 360,
		color: [
			["#21931a", "#01231a", "#ad0231", "#1ad09a"][Math.round(Math.random() * 3)],
			["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
		],
	}));

	useEffect(() => {
		if (!earthRef.current) return;

		const earth = earthRef.current,
			scene = earth.scene(),
			controls = earth.controls();

		controls.autoRotate = true;
		controls.autoRotateSpeed = 0.7;
		controls.enableZoom = false;
		scene.rotation.z = 0.197;
	}, [earthRef.current]);

	return (
		<Globe
			ref={earthRef}
			width={326}
			height={326}
			backgroundColor="#0000"
			backgroundImageOpacity={0.5}
			showAtmosphere
			showGraticules
			globeImageUrl="/assets/earth-night.jpg"
			bumpImageUrl="/assets/earth-topology.png"
			arcColor={"color"}
			arcsData={arcsData}
			arcDashGap={2}
			arcDashAnimateTime={1000}
			arcDashLength={() => Math.random()}
		/>
	);
};

export default Earth;
