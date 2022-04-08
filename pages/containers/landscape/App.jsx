import React, { useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import { useGLTF } from "@react-three/drei";
//  react three hook便于获取three场景元素
//动画库

const App = (props) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/landscape.glb");
  console.log(nodes);

  return (
    // 定义渲染场景
    <div
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <Canvas
        flat
        dpr={[1, 2]}
        camera={{
          // 配置摄像头
          fov: 25, //视角
          position: [0, 0, 8], // 摄像头位置
        }}
      >
        {/* 背景色 */}
        <color attach="background" args={["#e0b7ff"]} />
        {/* 环境光源   颜色          强度 */}
        <ambientLight color="#fff" intensity={0.5} />
        {/*  点光光源   */}
        <pointLight color="red" position={[10, 10, 10]} />
        {/* 渲染的物体 */}

        {/* 展示控制 */}
        <PresentationControls
          global //全局旋转或者拖拽模型
          cursor //是否在拖动上切换光标样式
          speed={5} //灵敏性级别控制
          zoom={0.5} //最大缩放级别
          rotation={[0, -Math.PI / 4, 0]} //模型默认旋转角度
          // polar={[-Infinity, Infinity]} //垂直极限控制
          // azimuth={[-Math.PI / 4, Math.PI / 4]} //水平极限控制
          config={{ mass: 0.5, tension: 170, friction: 100 }} // Spring的配置=》质量 张力 摩擦力
        >
          <group ref={group} {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.27}>
              <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MainMesh_Material_0.geometry}
                    material={materials["Material.001"]}
                  />
                </group>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.MainMeshBounds_SmallObjectsOpaque_0.geometry
                    }
                    material={
                      nodes.MainMeshBounds_SmallObjectsOpaque_0.material
                    }
                  />
                </group>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.MainMeshOtuline_Outline_0.geometry}
                    material={nodes.MainMeshOtuline_Outline_0.material}
                  />
                </group>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.RocksOutline_Outline_0.geometry}
                    material={nodes.RocksOutline_Outline_0.material}
                  />
                </group>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Skybox_SmallObjectsOpaque_0.geometry}
                    material={nodes.Skybox_SmallObjectsOpaque_0.material}
                  />
                </group>
                <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.SmallObjects_SmallObjectsOpaque_0.geometry}
                    material={nodes.SmallObjects_SmallObjectsOpaque_0.material}
                  />
                  <mesh
                    castShadow
                    receiveShadow
                    geometry={
                      nodes.SmallObjects_SmallObjectTransparent_0.geometry
                    }
                    material={materials.SmallObjectTransparent}
                  />
                </group>
              </group>
            </group>
          </group>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default App;
