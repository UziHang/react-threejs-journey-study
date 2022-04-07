
import React from 'react'
import { PresentationControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import Level from './components/Level'
const Levels = () => {
  return (
    // 定义渲染场景
    <Canvas
      flat 
      dpr={[1, 2]}
      camera={{  // 配置摄像头
        fov: 25,  //视角
        position: [0, 0, 8] // 摄像头位置
      }}
    >
      {/* 背景色 */}
      <color attach="background" args={['#e0b7ff']} />
      {/* 环境光源   颜色          强度 */}
      <ambientLight color='#fff' intensity={0.5} />
      {/*  点光光源   */}
      <pointLight color='red' position={[10, 10, 10]} />
      {/* 渲染的物体 */}

       {/* 展示控制 */}
      <PresentationControls
        global  //全局旋转或者拖拽模型
        zoom={0.8}
        rotation={[0,-Math.PI/4,0]} //旋转角度
        // polar={[0, Math.PI / 4]} //垂直限制
        // azimuth={[-Math.PI / 4, Math.PI / 4]} //水平限制
      >
        <group position-y={-0.75} dispose={null} scale={1}>
          <Level />
          </group>
        </PresentationControls>
    </Canvas>
  )
}
export default Levels
