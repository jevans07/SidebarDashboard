import React from "react";
import img1 from  './Resistance_images/Map of Total Cases_1.png'

const ResistanceMaps = () => {
    return (
        <div className = 'resistance'>
        <header>
      <h1>Resitance: Maps</h1>
    </header>
    <main>
      <p>Maps will showcase the severity of the amount of resistance or pathogens that are current in a specific state. 
        Multiple maps with headings/captions will be available per page if needed.
      </p>
      <img src={img1} width={350} height={350} textAlign="center" alt="Placeholder" />
    </main>
      </div>
  );
};
 
export default ResistanceMaps;