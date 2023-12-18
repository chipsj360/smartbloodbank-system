import Form from "react-validation/build/form";
import { useState} from 'react'; 
import  PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import useToken from '../hooks/useToken';

function Login () {
    const{setToken}=useToken()
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setIsError] = useState(false)
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    async function LoginUser (credentials) {
      return fetch('http://localhost:8080/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
        .then(data => 
          data.json()
        ) 
      
     }
     
     const handleLogin = async e => {
      e.preventDefault();

      setLoading(true);
      setUserName("")
      setPassword("")


      const token = await LoginUser({
        userName,
        password
      });

      setLoading(false);

        if(token){
          setToken(token);
          return navigate("/dashboard")
        }else {
          setIsError(true);
          console.error("Login failed!!")
        }

     }

    
  
    const onChangeUserName = (e) => {
      const userName = e.target.value;
      setUserName(userName);
    };
  
    const onChangePassword = (e) => {
      const password = e.target.value;
      setPassword(password);
    };
  
   
    return (
      <div>
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
                        <span className="d-none d-lg-block">Turing Foods</span>
                      </a>
                    </div>
                    {/* End Logo */}

                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="pt-4 pb-2">
                          <h5 className="card-title text-center pb-0 fs-4">
                            Sign In
                          </h5>
                        </div>

                        <Form
                          className="row g-3 needs-validation"
                          noValidate
                          onSubmit={handleLogin}
                        >
                          <div className="col-12">
                            <label className="form-label">Email</label>
                            <div className="input-group has-validation">
                              <span
                                className="input-group-text"
                                id="inputGroupPrepend"
                              >
                                @
                              </span>
                              <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="yourEmail"
                                required
                                placeholder="Enter Email.."
                                onChange={onChangeUserName}
                                value={userName}
                              />
                              <div className="invalid-feedback">
                                Please enter your email
                              </div>
                            </div>
                          </div>

                          <div className="col-12">
                            <label className="form-label">Password</label>
                            <input
                              type="password"
                              name="password"
                              className="form-control"
                              id="yourPassword"
                              required
                              placeholder="Enter Password"
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
                                type="checkbox"
                                name="remember"
                                value="true"
                                id="rememberMe"
                              />
                              <label className="form-check-label">
                                Remember me
                              </label>
                            </div>
                          </div>
                          {/* <div className="col-12">
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                            >
                              Login
                            </button>
                          </div> */}

                          <div className="form-group">
                            <button
                              className="btn btn-primary btn-block"
                              disabled={loading}
                            >
                              {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                              )}
                              <span>Login</span>
                            </button>
                          </div>

                          <div className="col-12">
                            <p className="small mb-0">
                              Don't have account?{" "}
                              <a href="/signup">Create an account</a>
                            </p>
                          </div>
                          {error && (
                            <p className="alert alert-danger">{error}</p>
                          )}

                          {/* <CheckButton
                            style={{ display: "none" }}
                            ref={checkBtn}
                          /> */}
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        {/* End #main */}

        <a
          href="/login"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      </div>
    );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
 
export default Login;