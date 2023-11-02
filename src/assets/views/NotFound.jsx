import React from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="text-center">
            <Image src="src/assets/img/error.png" fluid />
            <h4>Lo sentimos, no encontramos la URL que solicitaste</h4>
            <h5>Te invitamos a ir a nuestra página de inicio</h5>
            <Link to="/" className="nav-link text-white fw-medium fs-5">
                <button type="button" class="btn btn-danger">
                    HOME
                </button>
            </Link>
        </div>
    );
};

export default NotFound;
