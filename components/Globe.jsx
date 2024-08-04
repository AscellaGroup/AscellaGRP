"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

extend({ ThreeGlobe });

const GlobeComponent = ({ globeConfig, data }) => {
  const [globeData, setGlobeData] = useState(null);
  const globeRef = useRef(null);

  const defaultProps = {
    ...globeConfig,
  };

  useEffect(() => {
    if (typeof window !== "undefined" && globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current, data]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial();
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  const _buildData = () => {
    if (!data || !Array.isArray(data)) return;

    const points = data.map((arc) => ({
      size: defaultProps.pointSize,
      lat: arc.startLat,
      lng: arc.startLng,
      color: arc.color,
      label: arc.name,
    }));

    const arcs = data.map((arc) => ({
      startLat: arc.startLat,
      startLng: arc.startLng,
      endLat: arc.endLat,
      endLng: arc.endLng,
      color: arc.color,
      altitude: arc.altitude || defaultProps.arcAltitude, // Use specific altitude or default
    }));

    setGlobeData({ points, arcs });
  };

  useEffect(() => {
    if (typeof window !== "undefined" && globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => defaultProps.polygonColor);

      globeRef.current
        .pointsData(globeData.points)
        .pointColor((e) => e.color)
        .pointsMerge(true)
        .pointAltitude(0.0)
        .pointRadius(1);

      globeRef.current
        .arcsData(globeData.arcs)
        .arcColor((e) => e.color)
        .arcAltitude((e) => e.altitude) // Set altitude for each arc
        .arcStroke(0.5)
        .arcDashLength(0.5)
        .arcDashGap(0.01)
        .arcDashInitialGap(() => Math.random())
        .arcDashAnimateTime(2000);
    }
  }, [globeData]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
};

const WebGLRendererConfig = () => {
  const { gl, size } = useThree();

  useEffect(() => {
    if (typeof window !== "undefined") {
      gl.setPixelRatio(window.devicePixelRatio);
      gl.setSize(size.width, size.height);
      gl.setClearColor(0x000000, 0);
    }
  }, [gl, size]);

  return null;
};

const World = (props) => {
  const { globeConfig, data } = props;
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);
  return (
    <Canvas
     scene={scene} camera={new PerspectiveCamera(50, 1.2, 180, 1800)}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
      <directionalLight
        color={globeConfig.directionalLeftLight}
        position={new Vector3(-400, 100, 400)}
      />
      <directionalLight
        color={globeConfig.directionalTopLight}
        position={new Vector3(-200, 500, 200)}
      />
      <pointLight
        color={globeConfig.pointLight}
        position={new Vector3(-200, 500, 200)}
        intensity={0.8}
      />
      <GlobeComponent {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={300}
        maxDistance={300}
        autoRotateSpeed={3}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
};

export { GlobeComponent as Globe, World };


// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
// import ThreeGlobe from "three-globe";
// import { useThree, Canvas, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import countries from "@/data/globe.json";

// extend({ ThreeGlobe });

// const GlobeComponent = ({ globeConfig, data }) => {
//   const [globeData, setGlobeData] = useState(null);
//   const [arcs, setArcs] = useState([]);
//   const globeRef = useRef(null);

//   const defaultProps = {
//     ...globeConfig,
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined" && globeRef.current) {
//       _buildMaterial();
//       const interval = setInterval(() => {
//         setArcs((prevArcs) => {
//           const currentIndex = prevArcs.length;
//           if (currentIndex >= data.length) {
//             clearInterval(interval);
//             return prevArcs;
//           }
//           return [
//             ...prevArcs,
//             {
//               startLat: data[currentIndex].startLat,
//               startLng: data[currentIndex].startLng,
//               endLat: data[currentIndex].endLat,
//               endLng: data[currentIndex].endLng,
//               color: data[currentIndex].color,
//               altitude: data[currentIndex].altitude || defaultProps.arcAltitude,
//             },
//           ];
//         });
//       }, globeConfig.arcTime);
//       return () => clearInterval(interval);
//     }
//   }, [globeRef.current, data, globeConfig.arcTime]);

//   useEffect(() => {
//     _buildData();
//   }, [arcs]);

//   const _buildMaterial = () => {
//     if (!globeRef.current) return;

//     const globeMaterial = globeRef.current.globeMaterial();
//     globeMaterial.color = new Color(globeConfig.globeColor);
//     globeMaterial.emissive = new Color(globeConfig.emissive);
//     globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
//     globeMaterial.shininess = globeConfig.shininess || 0.9;
//   };

//   const _buildData = () => {
//     if (!data || !Array.isArray(data)) return;

//     const points = data.map((arc) => ({
//       size: defaultProps.pointSize,
//       lat: arc.startLat,
//       lng: arc.startLng,
//       color: arc.color,
//       label: arc.name,
//     }));

//     setGlobeData({ points, arcs });
//   };

//   useEffect(() => {
//     if (typeof window !== "undefined" && globeRef.current && globeData) {
//       globeRef.current
//         .hexPolygonsData(countries.features)
//         .hexPolygonResolution(3)
//         .hexPolygonMargin(0.7)
//         .showAtmosphere(defaultProps.showAtmosphere)
//         .atmosphereColor(defaultProps.atmosphereColor)
//         .atmosphereAltitude(defaultProps.atmosphereAltitude)
//         .hexPolygonColor(() => defaultProps.polygonColor);

//       globeRef.current
//         .pointsData(globeData.points)
//         .pointColor((e) => e.color)
//         .pointsMerge(true)
//         .pointAltitude(0.0)
//         .pointRadius(1);

//       globeRef.current
//         .arcsData(globeData.arcs)
//         .arcColor((e) => e.color)
//         .arcAltitude((e) => e.altitude)
//         .arcStroke(0.5)
//         .arcDashLength(0.5)
//         .arcDashGap(0.01)
//         .arcDashInitialGap(() => Math.random())
//         .arcDashAnimateTime(globeConfig.arcTime - 500); // Slightly less than arcTime for smooth transition
//     }
//   }, [globeData]);


  

//   return (
//     <>
//       <threeGlobe ref={globeRef} />
//     </>
//   );
// };

// const WebGLRendererConfig = () => {
//   const { gl, size } = useThree();

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       gl.setPixelRatio(window.devicePixelRatio);
//       gl.setSize(size.width, size.height);
//       gl.setClearColor(0x000000, 0);
//     }
//   }, [gl, size]);

//   return null;
// };

// const World = (props) => {
//   const { globeConfig, data } = props;
//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);
//   return (
//     <Canvas
//       scene={scene}
//       camera={new PerspectiveCamera(50, 1.2, 180, 1800)}
//     >
//       <WebGLRendererConfig />
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={globeConfig.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.8}
//       />
//       <GlobeComponent {...props} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={300}
//         maxDistance={300}
//         autoRotateSpeed={3}
//         autoRotate={true}
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </Canvas>
//   );
// };

// export { GlobeComponent as Globe, World };
