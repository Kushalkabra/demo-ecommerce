import React from 'react'
import './Login.css'
import  background6  from '../../src/images/background6.jpg'

function Login() {
  return (
    <div>
         <section> 
        <div class="form-box">
                          <div class="form-value">
                            <form action="">

                              <div class="inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input type="email" required />
                                <label for="">Email</label>
                              </div>
                              <div class="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" required />
                                <label for="">Password</label>
                              </div>
                              <div class="forget">
                                <label for=""><input type="checkbox" />Remember Me  </label>
                                <a href="#">Forget Password</a>

                              </div>
                              <button type="button" class="btn btn-success">Login</button>
                              <div class="register">
                                <p>Don't have a account <a href="#">Register</a></p>
                              </div>
                              <h1>OR</h1>
                              <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                              </div>
                            </form>
                          </div>
                        </div>
                         </section> 
    </div>
  )
}

export default Login