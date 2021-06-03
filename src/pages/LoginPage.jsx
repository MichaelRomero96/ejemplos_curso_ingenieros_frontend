import Login from "../components/Login"
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function LoginPage({ users, checkLogin, setCheckLogin, googleUserData }) {

    return (
        <>
            <Login users={users} setCheckLogin={setCheckLogin} googleUserData={googleUserData} />
        </>
    )
}
