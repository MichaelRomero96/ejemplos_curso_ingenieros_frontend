import { useEffect } from "react"
import { useHistory } from "react-router-dom";


export default function HomePage({ checkLogin, setCheckLogin, googleUserData }) {

    const history = useHistory();

    useEffect(() => {
        if (checkLogin === false) {
            // history.push('/auth')
        }
    }, []);
    console.log(googleUserData)

    return (
        <>
            {checkLogin ?
                <>
                    <h1>
                        Página Principal
                    </h1>
                    {/* <img src={googleUserData.} alt="" /> */}
                </>
                :
                null
            }
        </>
    )
}


