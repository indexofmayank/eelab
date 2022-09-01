import React from 'react';
import useScript from '../hooks/UseScript';

const JoinUs = () => {
  return (
    useScript('https://apps.elfsight.com/p/platform.js'),
    <div id='joinUs'>
    
    <div className="elfsight-app-3e2d39e4-4d10-441b-a562-ad49aaca25db"></div>
    </div>
  );
};

export default JoinUs;