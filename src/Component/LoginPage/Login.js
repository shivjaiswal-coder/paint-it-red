import React from 'react'
import './Login.css'
function Login() {
    return (
        <div>
        <div class="si1">
            <div class="si2">
                <h3>Sign-In</h3>
                <div>
                    <label class="si3">Email-Id</label>
                    <br/>
                    <input type="email" class="si4" maxLength="128" ></input>
                    <br/>
                </div>
                <div>
                    <label class="si3">Password</label>
                    <br/>
                    <input type="password" class="si4" maxLength="128" ></input>
                    <br/>
                </div>  
                <button class="si5">Sign-In</button>
                <br/>
                <div>
                    <button class="si6">Google</button>
                    <button class="si7">Facebook</button>
                </div>
            </div>
        </div>
        <button class="si8">Create your new Account</button>
        </div>
    )
}
export default Login
