
import React from 'react';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const  Astronaut = () => {
  
  const [model, setModel] = React.useState();

 
  React.useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('../../../model3d/scene.gltf', (gltf) => {
      setModel(gltf.scene);
    });
  }, []);

  return model ? <primitive object={model}  /> : null;
};

export default Astronaut;