import React, { Suspense } from 'react';

import {
    Jumbotron, Button
} from 'reactstrap';

const Home = () => {

    //MF 

    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">Olá module federation</h1>
                <hr className="my-2" />
                <p>Este componente é de outro App</p>
                <p className="lead">
                    <Button color="primary">
                           Botão
                    </Button>
                </p>
            </Jumbotron>
        </div>
    )
}

export default Home;