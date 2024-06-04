import { useFrame } from '@react-three/fiber';
import React from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const  Astronaut = () => {
  const astoRef = React.useRef();
  const [model, setModel] = React.useState();

  useFrame(() => {
    astoRef.current.rotation.y += 0.005;
  });
  React.useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('../../../public/model3d/scene.gltf', (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  return model ? <primitive object={model}  ref={astoRef}/> : null;
};

export default Astronaut;