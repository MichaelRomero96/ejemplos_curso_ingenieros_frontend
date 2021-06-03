import { TextField, Button, Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export default function LocalStorage() {
    const [name, setName] = useLocalStorage("user-name", "");
    const [lastName, setLastName] = useLocalStorage("last-name", "")
    const handleChange = ({ target }) => {
        setName(target.value);
    }
    const handleChangeLastName = ({ target }) => {
        setLastName(target.value);
    }
    const handleSaveLocalStorage = () => {
        window.localStorage.setItem('user-name', name)
        window.localStorage.setItem('last-name', lastName)
    }
    const handleEraseLocalStorage = () => {
        window.localStorage.setItem('user-name', '');
        setName('')
    }
    return (
        <>
            <Grid container spacing={2}>
                <Grid item>
                    <TextField name='name' value={name} onChange={handleChange} placeholder='Nombre' />
                </Grid>
                <Grid item>
                    <TextField name='lastName' value={lastName} onChange={handleChangeLastName} placeholder='Apellido' />
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={handleSaveLocalStorage}
                    >
                        Guardar
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant='contained'
                        color='primary'
                        onClick={handleEraseLocalStorage}
                    >
                        Borrar
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}
