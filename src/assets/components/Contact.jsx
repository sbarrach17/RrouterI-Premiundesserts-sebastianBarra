import React from "react";

const Contact = () => {
    return (
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label fs-5 mt-3">
                            Correo Electrónico
                        </label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="TuCorreo@ejemplo.com" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-4">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label fs-5">
                            Déjanos tu comentario
                        </label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-danger">
                Enviar
            </button>
        </div>
    );
};

export default Contact;
