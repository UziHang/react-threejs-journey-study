
import React, { useRef, useState } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'
import BoxGeometry from './components/BoxGeometry'

const  Home = () => { 
  //ref绑定空间网络
 

  return (
    // 定义渲染场景
    <Canvas
    gl={{}}
    camera ={{  // 配置摄像头
      fov:25 ,
      position:[0,0,8]
    }}

    > 
      {/* 环境光源   颜色          强度 */}
    <ambientLight color='#fff' intensity={0.5}   />
      {/*  点光光源   */}
    <pointLight  color='red' position={[10, 10, 10]} /> 
    {/* 渲染的物体 */}
    <BoxGeometry />

  </Canvas>
  )
}
export default  Home
