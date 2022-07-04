import './Login.css';
import bookImage from "../../assets/images/bookself2.jpg";
import { Link, Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Login() {
  const[loginCred, setLoginCred] = useState({
    userName: 'sdf1@gmail.com',
    password: 'sdf1',
  })

  // const[loginAPIresponse, setLoginAPIresponse] = useState({});

  const navigate = useNavigate() 

  // useEffect(() => {
  //   if(loginAPIresponse.length) {
  //     debugger;
  //     navigate('/about');
  //   }
  // }, [loginAPIresponse, navigate]
  //   )
  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios.get('http://localhost:3000/users', {
      params: {
        email: loginCred.userName,
        password: loginCred.password,
      }
    }).then((response)=>{
      debugger;
      if(response.data && response.data.length) {
        debugger;
        navigate('/about');
      }
    }).catch((error)=>{
      console.log('Exception occurred while login - ' + error);
    })
  }

  const onChangeHandler = (event) => {
    setLoginCred({
      ...loginCred,
      [event.target.name]: event.target.value,
    })
  }
    return(
    <div className="container">
      <div className="row" id="formSignIn">
        <div className="col-4"></div>
        <div className="col-4">
          <img
            src={bookImage} alt="Book"
          />
          <form>
            <div className="form-group">
              <label name="lableInputUserName">User Name</label>

              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="text"
                  onChange={onChangeHandler}
                  name="userName"
                  className="form-control"
                  id="inputUserName"
                  placeholder="User Name"
                />
              </div>
            </div>
            <div className="form-group">
              <label name="labelInputPassword">Password</label>

              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i className="fa fa-key" aria-hidden="true"></i>
                  </div>
                </div>
                <input
                  type="password"
                  onChange={onChangeHandler}
                  name="password"
                  className="form-control"
                  id="inputPassword"
                  placeholder="Password"
                />
              </div>
            </div>
            <button type="submit" onClick={onSubmitHandler} className="btn btn-primary">Login</button>
            <Link to='/signup' className="badge badge-light">Not a member. Signup!</Link>
          </form>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
    );
}