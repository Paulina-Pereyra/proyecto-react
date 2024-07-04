import React from 'react';

const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5 bg-light"> 
        <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
        <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus, magnam eos excepturi maiores molestiae distinctio iste voluptatibus ab rerum ipsa dolorum numquam porro nisi odio esse inventore at dolore velit?</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
    </div>
    );

};

export default Jumbotron;