import React from 'react';

const Card = () => {
    return (
        <div className="col-12 col-md-6 col-lg-3">
            <div className="card">
                <img src="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat debitis porro, labore pariatur rem est excepturi? Dignissimos quibusdam sit culpa, consequatur libero sint ad quisquam impedit suscipit officiis voluptate iste!</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>

            </div>

        </div>
    );

};

export default Card;