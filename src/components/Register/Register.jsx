import React from 'react';
import './register.css';

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
                            backgroundImage: `url("https://isomorphic-phi.vercel.app/static/media/work.56bf9122.jpg")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover'
     
                            }}>
                        
                        </div>
                        <div className="col-xl-6">
                        <div className="card-body p-md-5 text-black">
                            <h3 className="mb-5 text-uppercase">Isomorphic</h3>

                            <div className="row">
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                <input type="text" id="form3Example1m" className="form-control form-control-lg" placeholder='First Name'/>
                                {/* <label className="form-label" htmlFor="form3Example1m">First name</label> */}
                                </div>
                            </div>
                            <div className="col-md-6 mb-4">
                                <div className="form-outline">
                                <input type="text" id="form3Example1n" className="form-control form-control-lg" placeholder='Last Name' />
                                {/* <label className="form-label" htmlFor="form3Example1n">Last name</label> */}
                                </div>
                            </div>
                            </div>

                            <div className="form-outline mb-4">
                            <input type="text" id="form3Example8" className="form-control form-control-lg" placeholder='Username' />
                            {/* <label className="form-label" htmlFor="form3Example8">Username</label> */}
                            </div>
                            <div className="form-outline mb-4">
                            <input type="text" id="form3Example7" className="form-control form-control-lg" placeholder='Email' />
                            {/* <label className="form-label" htmlFor="form3Example8">Email</label> */}
                            </div>
                            <div className="form-outline mb-4">
                            <input type="password" id="form3Example6" className="form-control form-control-lg" placeholder='Password'/>
                            {/* <label className="form-label" htmlFor="form3Example8">Password</label> */}
                            </div>
                            <div className="form-outline mb-4">
                            <input type="password" id="form3Example5" className="form-control form-control-lg" placeholder='Confirm Password'/>
                            {/* <label className="form-label" htmlFor="form3Example8">Confirm Password</label> */}
                            </div>
                            <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                            <label className="form-check-label" htmlFor="form2Example3g">
                            I agree with <a href="#!" className="text-body"><u>Terms and Conditions</u></a>
                            </label> 
                            </div>
                            <div className="d-flex justify-content-center  text-white">
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-body"
                            style={{
                                width: '100%', margin: '6px 4px', background: '#1E90FF', fontSize: '16px'}}>Sign Up</button>
                            </div>
                            <div className="d-flex justify-content-center text-white">
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-body"
                            style={{
                                width: '100%', margin: '6px 4px', background: '#4169E1', fontSize: '16px'}}>Sign Up with Facebook</button>
                            </div>
                            <div className="d-flex justify-content-center  text-white">
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-body"
                            style={{
                                width: '100%', margin: '6px 4px', background: '#CD5C5C', fontSize: '16px'}}>Sign Up with Google Plus</button>
                            </div>
                            <div className="d-flex justify-content-center  text-white"
                           >
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-body"
                            style={{
                                width: '100%', margin: '6px 4px', background: '#ff7f50', fontSize: '16px'}}>Sign Up with Auth0</button>
                            </div>
                            <div className="d-flex justify-content-center  text-white">
                            <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-5 text-body"
                            style={{
                                width: '100%', margin: '6px 4px', background: '#ffd700', fontSize: '16px'}}>Sign Up with Firebase</button>
                            </div>
                            
                            <p className="text-center text-muted mt-5 mb-0">Already have an account? <a href="/"
                                className="fw-bold text-body"><u>Login here</u></a></p>
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