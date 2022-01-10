import React from 'react';

export default function Loader(props) {
  return (
    <div className='loader'>
      <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-red">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
    </div>

  );
}
