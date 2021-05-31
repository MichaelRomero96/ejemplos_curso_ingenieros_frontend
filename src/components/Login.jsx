import { Grid, Paper, TextField, Typography, Button } from "@material-ui/core";
import { loginStyles } from "../styles/loginStyles"

export default function Login() {
    const classes = loginStyles();
    return (
        <Grid container justify='center' className={classes.root}>
            <Grid item xs={12} md={4}>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper elevation={10} className={classes.paper}>
                            <Grid container className={classes.mainContainer}>
                                <Grid item md={12} className={classes.title}>
                                    <Typography variant='h4' color='secondary'>
                                        Login
                                    </Typography>
                                </Grid>
                                <Grid container className={classes.inputContainer} spacing={2}>
                                    <Grid item md={12}>
                                        <TextField color='secondary' label='E-mail' type='email' variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item md={12}>
                                        <TextField color='secondary' label='Password' type='password' variant='outlined' size='small' fullWidth />
                                    </Grid>
                                    <Grid item md={12} className={classes.paddingButton}>
                                        <Button fullWidth variant='contained' color='primary' className={classes.button}>
                                            <Typography color='secondary'>
                                                Login
                                            </Typography>
                                        </Button>
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

