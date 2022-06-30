import React from 'react';
import './login.css';

const Register = () => {
    return (
        <>
        <section className="h-100 bg-dark">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col">
                    <div className="card card-registration my-4">
                    <div className="row g-0">
                        <div className="col-xl-6 d-none d-xl-block"
                        style={{
                            filter: 'brightness(50%)', 
                            backgroundImage: `url("https://isomorphic-phi.vercel.app/static/media/sign.adf5846b.jpg")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
     
                            }}>
                        
                        </div>
                        <div className="col-xl-6">
                        <div className="card-body p-md-5">
                            <h3 className="mb-5 text-uppercase">Isomorphic</h3>

                            <div className="form-outline mb-4">
                            <input type="text" id="form3Example8" className="form-control form-control-lg" placeholder='Username' />
                            {/* <label className="form-label" htmlFor="form3Example8">Username</label> */}
                            </div>
        
                            <div className="form-outline mb-4">
                            <input type="password" id="form3Example6" className="form-control form-control-lg" placeholder='Password'/>
                            {/* <label className="form-label" htmlFor="form3Example8">Password</label> */}
                            </div>
                            <div className="row">
                            <div className="col-md-6 mb-4">
                                {/* <div className="form-check d-flex justify-content-center mb-5"> */}
                                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                                <label className="form-check-label" htmlFor="form2Example3g">
                                Remember me
                                </label> 
                                {/* </div> */}
                            </div>
                            <div className="col-md-6 mb-4">
                                 
                                <button type="button"
                                className="btn btn-success btn-block btn-lg gradient-custom-5 text-white fw-bold"
                                style={{
                                     margin: '6px 4px', backgroundColor: '#1E90FF', fontSize: '14px', float: 'right'}}>Sign in</button>
                             
                            </div>
                            </div>
      
                            <p className="text-center text-muted mt-3 mb-5" 
                            style={{fontSize: '14px'}}><span className='star'>*</span>
                                username: demo password: demodemo or just click on any button.
                            </p>
                            <hr className='mt-5 mb-5'></hr>
                            <div className="d-flex justify-content-center">
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-white fw-bold"
                            style={{
                                width: '100%', margin: '6px 4px', backgroundColor: '#4169E1', fontSize: '14px'}}>Sign in with Facebook</button>
                            </div>
                            <div className="d-flex justify-content-center">
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-white fw-bold"
                            style={{
                                width: '100%', margin: '6px 4px', backgroundColor: '#CD5C5C', fontSize: '14px'}}>Sign in with Google Plus</button>
                            </div>
                            <div className="d-flex justify-content-center"
                           >
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-white fw-bold"
                            style={{
                                width: '100%', margin: '6px 4px', backgroundColor: '#ff7f50', fontSize: '14px'}}>Sign in with Auth0</button>
                            </div>
                            <div className="d-flex justify-content-center">
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-white fw-bold"
                            style={{
                                width: '100%', margin: '6px 4px', backgroundColor: '#ffd700', fontSize: '14px'}}>Sign in with Firebase</button>
                            </div>
                            
                            <p className="text-center text-muted mt-5 mb-0"><a href="/forgot"
                                className="text-body">Forgot Password</a></p>
                            <p className="text-center text-primary mt-5 mb-0"><a href="/register"
                                className="text-primary">Create an Isomorphic account</a></p>
                            </div>            

                        
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        </>
    )
};

export default Register;