import { useGLTF } from '@react-three/drei';

export default function Model({ name, state, ...props }) {
    const { scene } = useGLTF(`/models/${name}_${state}.glb`);

    return(
        <group {...props}>
            <primitive object={scene}/>
        </group>
    )
}