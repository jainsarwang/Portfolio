import { useEffect, useRef } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
const Developer = ({ animationName = "idle", ...props }) => {
	const avatarRef = useRef();
	const { nodes, materials } = useGLTF("/models/human/sarwang_avatar.glb");

	const { animations: idleAnimation } = useFBX("/models/animations/idle.fbx");
	idleAnimation[0].name = "idle";

	const { animations: victoryAnimation } = useFBX("/models/animations/victory.fbx");
	victoryAnimation[0].name = "victory";

	const { animations: saluteAnimation } = useFBX("/models/animations/salute.fbx");
	saluteAnimation[0].name = "salute";

	const { animations: clappingAnimation } = useFBX("/models/animations/clapping.fbx");
	clappingAnimation[0].name = "clapping";

	const { animations: cardsAnimation } = useFBX("/models/animations/cards.fbx");
	cardsAnimation[0].name = "cards";

	const { animations: sillyDanceAnimation } = useFBX("/models/animations/sillyDancing.fbx");
	sillyDanceAnimation[0].name = "sillydance";

	const { animations: wavingGestureAnimation } = useFBX("/models/animations/wavingGesture.fbx");
	wavingGestureAnimation[0].name = "waving";

	const { actions } = useAnimations(
		[
			idleAnimation[0],
			victoryAnimation[0],
			saluteAnimation[0],
			clappingAnimation[0],
			cardsAnimation[0],
			sillyDanceAnimation[0],
			wavingGestureAnimation[0],
		],
		avatarRef
	);

	useEffect(() => {
		if (actions[animationName]) {
			actions[animationName].reset().fadeIn(0.5).play();
		} else actions["idle"].reset().fadeIn(0.5).play();

		return () => actions[animationName]?.fadeOut(0.5);
	}, [animationName]);

	return (
		<group {...props} dispose={null}>
			<primitive ref={avatarRef} object={nodes.Hips} />

			<skinnedMesh
				name="EyeLeft"
				geometry={nodes.EyeLeft.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeLeft.skeleton}
				morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
			/>
			<skinnedMesh
				name="EyeRight"
				geometry={nodes.EyeRight.geometry}
				material={materials.Wolf3D_Eye}
				skeleton={nodes.EyeRight.skeleton}
				morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
				morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
			/>
			<skinnedMesh
				name="Wolf3D_Head"
				geometry={nodes.Wolf3D_Head.geometry}
				material={materials.Wolf3D_Skin}
				skeleton={nodes.Wolf3D_Head.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
			/>
			<skinnedMesh
				name="Wolf3D_Teeth"
				geometry={nodes.Wolf3D_Teeth.geometry}
				material={materials.Wolf3D_Teeth}
				skeleton={nodes.Wolf3D_Teeth.skeleton}
				morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
				morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Hair.geometry}
				material={materials.Wolf3D_Hair}
				skeleton={nodes.Wolf3D_Hair.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Glasses.geometry}
				material={materials.Wolf3D_Glasses}
				skeleton={nodes.Wolf3D_Glasses.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Body.geometry}
				material={materials.Wolf3D_Body}
				skeleton={nodes.Wolf3D_Body.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
				material={materials.Wolf3D_Outfit_Bottom}
				skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
				material={materials.Wolf3D_Outfit_Footwear}
				skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
			/>
			<skinnedMesh
				geometry={nodes.Wolf3D_Outfit_Top.geometry}
				material={materials.Wolf3D_Outfit_Top}
				skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
			/>
		</group>
	);
};

useGLTF.preload("/models/human/sarwang_avatar.glb");

export default Developer;
