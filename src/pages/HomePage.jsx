import { useEffect } from "react"
import { useHistory } from "react-router-dom";


export default function HomePage({ checkLogin, setCheckLogin, googleUserData, fbUserData }) {

    const history = useHistory();

    useEffect(() => {
        if (!checkLogin) {
            history.push('/auth')
        }
        console.log(googleUserData);
        console.log(fbUserData);
    }, []);

    return (
        <>
            {checkLogin ?
                <>
                    <h1>
                        Página Principal
                    </h1>
                    <div>
                        <img src={fbUserData.picture.data.url} alt="imagen de perfil" />
                    </div>
                </>
                :
                null
            }
        </>
    )
}


