
import Form from "react-validation/build/form";
import { useState } from 'react';
import  PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';
  
const Register = () => {

    const{setToken}=useToken();
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    
  
    const onChangeUserName = (e) => {
      const name = e.target.value;
      setUserName(name);
    };
  
    const onChangeEmail = (e) => {
      const email = e.target.value;
      setEmail(email);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };

    // function to call the api that handles the signing up of a user.
    async function RegisterUser (credentials) {
      return fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data =>{
            if(!data.ok){
              throw new Error("could not fetch the data from API!")
            }
            return data.json();
        })
     }


     const handleSignup = async e => {
      e.preventDefault();

      setEmail("");
      setUserName("");
      setPassword("");
      setSuccessful(false);
      setLoading(true);
      setError(false);
     

      try {
      const token = await RegisterUser({
      
        password,
        userName
      });

      setLoading(false);
      setSuccessful(true);
      setToken(token)
      return navigate("/signin");
      
      

    }catch (error){
      setSuccessful(false)
      setError(true)
      console.error(error)
    }
     }
    

    return ( 
        <>
        <main>
          <div className="container">
            <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex justify-content-center py-4">
                      <a
                        href="/"
                        className="logo d-flex align-items-center w-auto"
                      >
                        <span className="d-none d-lg-block">
                          Turing Foods
                        </span>
                      </a>
                    </div>

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Create an Account
                          </h5>
                          <p className="text-center small">
                            Enter your personal details to create account
                          </p>
                        </div>

                        <Form
                          className="row g-3 needs-validation"
                          noValidate
                          onSubmit={handleSignup}
                        >
                          {!successful && (
                            <div>
                            

                              <div className="col-12">
                                <label
                                  htmlFor="yourUsername"
                                  className="form-label"
                                >
                                  Username
                                </label>

                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="yourUsername"
                                  required
                                  onChange={onChangeUserName}
                                  value={userName}
                                />
                                <div className="invalid-feedback">
                                  Please choose a name.
                                </div>
                              </div>

                              <div className="col-12">
                                <label
                                  htmlFor="yourPassword"
                                  className="form-label"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  name="password"
                                  className="form-control"
                                  id="yourPassword"
                                  required
                                  onChange={onChangePassword}
                                  value={password}
                                />
                                <div className="invalid-feedback">
                                  Please enter your password!
                                </div>
                              </div>

                              <div className="col-12">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    name="terms"
                                    type="checkbox"
                                    value=""
                                    id="acceptTerms"
                                    required
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="acceptTerms"
                                  >
                                    I agree and accept the{" "}
                                    <a href="/">terms and conditions</a>
                                  </label>
                                  <div className="invalid-feedback">
                                    You must agree before submitting.
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                {/* <button
                                  className="btn btn-primary w-100"
                                  type="submit"
                                >
                                  Create Account
                                </button> */}
                                <button
                                  className="btn btn-primary btn-block"
                                  disabled={loading}
                                >
                                  {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                  )}
                                  <span>Sign Up</span>
                                </button>
                              </div>
                              <div className="col-12">
                                <p className="small mb-0">
                                  Already have an account?{" "}
                                  <a href="/login">Sign In</a>
                                </p>
                              </div>
                            </div>
                          )}

                          {error && (
                            <p className='alert alert-danger'>Opps! There was a problem. Please try again.</p>
                          )}
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </>
     );
}
 
export default Register;