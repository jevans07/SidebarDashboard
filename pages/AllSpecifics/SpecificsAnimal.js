import React from 'react'
import img2 from './Specifics_images1/Hierarchical Clusters of Meats.png'
const SpecificsAnimals = () => {
  return (
    <div className='specifics'>
     <header>
      <h1>Specifics: Animals</h1>
    </header>
    <main>
      <p>Hierarchical clusters can show the farmers links between animals or pathogens.
      </p>
      <img src={img2} width={350} height={350} textAlign="center" alt="Placeholder" />
    </main>
      </div>
  );
};
export default SpecificsAnimals
