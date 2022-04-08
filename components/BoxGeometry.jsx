import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

const  BoxGeometry = (props) => { 
  //ref绑定空间网络
  const mesh =useRef()
  const [active,setActive]=useState(false)
  const [hover, setHover] = useState(false)

  useFrame((state, delta) => {
      mesh.current.rotation.x += 0.01  // rotation 旋转
      mesh.current.rotation.y += 0.01 
    //    mesh.current.rotation.z += 0.01 
    })   
  return (
    /* 网格：用于包裹渲染几何体 */
    <mesh
    {...props}  // 可添加的其他参数
    ref={mesh}
    position={[0,0,0]} //空间坐标
    scale={active?1.5:1} // 缩放
    onClick={(event) => setActive(!active)} //点击模型
    onPointerOver={(event)=>setHover(true)} //鼠标进入
    onPointerOut={(event)=>setHover(false)} //鼠标出去
    >
      {/* Geometry 几何体   boxGeometry 立方体  args: width,length depth（x,y,z） */}
      <boxGeometry args={[2,2,2]} />
      {/* 事物  标准  材质 (理解为表面颜色 回受到光源影响) */}
      <meshStandardMaterial   color={hover? 'hotpink' : 'orange'} />

      {/* 法向量映射到RGB颜色的材质 */}
      <meshLambertMaterial   color={hover? 'hotpink' : 'orange'} />

      {/*    物体本身颜色  着色 （不受光照影响）*/}
      <meshBasicMaterial  color='hotpink' />
    </mesh>
  )
}
export default  BoxGeometry
