import Login from "../components/Login";

export default function LoginPage({ users, setCheckLogin, googleUserData, setGoogleUserData, setFbUserData }) {

    return (
        <>
            <Login
                users={users}
                setCheckLogin={setCheckLogin}
                googleUserData={googleUserData}
                setGoogleUserData={setGoogleUserData}
                setFbUserData={setFbUserData}
            />
        </>
    )
}
