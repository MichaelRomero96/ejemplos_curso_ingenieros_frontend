import { Grid, Paper, TextField, Typography, Button } from "@material-ui/core";
import { getDefaultNormalizer } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { loginStyles } from "../styles/loginStyles"

//googleAPI Credentials
import { GoogleLogin } from 'react-google-login';

export default function Login({ setCheckLogin, setGoogleUserData, googleUserData }) {

    const classes = loginStyles();
    const history = useHistory();
    const users = [
        { email: 'jorge@gmail.com', password: '123456' },
        { email: 'maria@hotmail.com', password: 'maria123' }
    ]
    const [validation, setValidation] = useState({
        email: false,
        password: false
    });
    const [errors, setErrors] = useState({
        email: true,
        password: true
    })
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const { email, password } = user;
    useEffect(() => {
        let object = users.filter(item => item.email === email);
        let emailValidation = object[0];
        console.log(emailValidation)
        if (emailValidation?.length !== 0) {
            if (emailValidation?.email === email) {
                setValidation({ email: true, password: false });
                console.log("si es correo")
                if (emailValidation?.password === password) {
                    console.log('si es el password del usuario');
                    setValidation({ email: true, password: true });
                } else {
                    console.log('No es el password del usuario');
                    setValidation({ email: true, password: false });
                }
            } else {
                setValidation({ email: false, password: false });
            }
        }
    }, [user]);
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };
    useEffect(() => {
        if (email.trim().length !== 0) {
            setErrors({ ...errors, email: false });
        } else {
            setErrors({ ...errors, email: true });
        }
    }, [user])
    const handleClick = () => {
        if (validation.email && validation.password) {
            setCheckLogin(true);
            history.push('/')
        } else {
            alert('Correo o contraseña inválidos')
        }
    };    
    const responseGoogle = (data) => {
        console.log(data);
        return setGoogleUserData(data.profileObj);

    }

    useEffect(() => {
      if(googleUserData?.profileObj.length !== 0) {
          setCheckLogin(true);
          history.push('/')
      }
    }, [googleUserData])

    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item xs={12} md={4}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper elevation={10} className={classes.paper}>
                            <Grid container className={classes.mainContainer}>
                                <Grid item md={12} sm={12} xs={12} className={classes.title}>
                                    <Typography variant='h4' color='secondary'>
                                        Iniciar Sesión
                                    </Typography>
                                </Grid>
                                <Grid container className={classes.inputContainer} spacing={2}>
                                    <Grid item md={12} sm={12} xs={12}>
                                        {errors.email ? (
                                            <Typography style={{ color: 'red' }}>
                                                No ha llenado el campo Email
                                            </Typography>
                                        ) : null}
                                    </Grid>
                                    <Grid item md={12} sm={12} xs={12}>
                                        <TextField name='email' error={errors.email} value={user.email} onChange={handleChange} color='secondary' label='E-mail' type='email' variant='outlined' size='small' fullWidth />
                                    </Grid>

                                    <Grid item md={12} sm={12} xs={12}>
                                        <TextField name='password' value={user.password} onChange={handleChange} color='secondary' label='Password' type='password' variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item md={12} sm={12} xs={12} className={classes.paddingButton}>
                                        <Button fullWidth variant='contained' onClick={handleClick} color='primary' className={classes.button}>
                                            <Typography color='secondary'>
                                                Login
                                            </Typography>
                                        </Button>
                                    </Grid>
                                    <Grid item md={12} sm={12} xs={12} className={classes.apisText}>
                                        <Typography color='secondary'>
                                            Inicia Sesión con Google o Facebook
                                        </Typography>
                                    </Grid>
                                    <Grid item md={12} sm={12} xs={12} className={classes.apisText}>
                                        <GoogleLogin
                                            clientId="737999626252-72uj04rfg51un5mftne5spvtb9livln5.apps.googleusercontent.com"
                                            buttonText="Iniciar Sesión"
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
                                            cookiePolicy={'single_host_origin'}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

