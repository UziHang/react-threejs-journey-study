
//  react three hook便于快速建立three场景 
import { useThree} from '@react-three/fiber';

//   为 react-three-fiber提供有用的附加组件，如相机、平面和控制等 
import { useGLTF } from '@react-three/drei';
//动画库
import { useSpring } from '@react-spring/three'
// import Model from '../models/level-react-draco.glb'
export  default function Level() {
    const { nodes } = useGLTF('/level-react-draco.glb')
    console.log(nodes);
    
    const {camera} =useThree()
    useSpring( // 弹簧动画hook
        ()=>({
            from:{y:camera.position.y+5},
            to:{y:camera.position.y},
            config:{friction:100},//   friction:摩擦力
            onChange:({value})=>{(camera.position.y=value.y)}
        }),
        []
     
      
    )
      //  geometry：模型几何体 material：模型材质  position：模型放置位置  rotation: 模型角度
    return <mesh geometry={nodes.Level.geometry}  material={nodes.Level.material}  position={[-0.38, 0.69, 0.62]} rotation={[Math.PI / 2, -Math.PI / 9, 0]} />
}