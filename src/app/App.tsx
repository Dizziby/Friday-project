import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";
import {Login} from "../components/c1 - Login/Login";
import {Profile} from "../components/c3 - Profile/Profile";
import {Registration} from "../components/c2 - Registration/Registration";
import {RecoveryPassword} from "../components/c4 - RecoveryPassword/RecoveryPassword";
import {InputNewPassword} from "../components/c5 - InputNewPassword/InputNewPassword";
import {Test} from "../components/c7 - Test/Test";
import {Error} from "../components/c6 - Error/Error";

function App() {
    const styleLink = {marginRight: "10px"}
    debugger
    return (
        <div className="App">
            <NavLink to={"/login"} style={styleLink}>Login</NavLink>
            <NavLink to={"/registration"} style={styleLink}>Registration</NavLink>
            <NavLink to={"/profile"} style={styleLink}>Profile</NavLink>
            <NavLink to={"/recoveryPassword"} style={styleLink}>RecoveryPassword</NavLink>
            <NavLink to={"/inputNewPassword"} style={styleLink}>InputNewPassword</NavLink>
            <NavLink to={"/error"} style={styleLink}>Error</NavLink>
            <NavLink to={"/test"} style={styleLink}>Test</NavLink>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/registration"} element={<Registration/>}/>
                <Route path={"/profile"} element={<Profile/>}/>
                <Route path={"/recoveryPassword"} element={<RecoveryPassword/>}/>
                <Route path={"/inputNewPassword"} element={<InputNewPassword/>}/>
                <Route path={"/error"} element={<Error />}/>
                <Route path={"/test"} element={<Test />}/>
            </Routes>
        </div>
    );
}

export default App;
