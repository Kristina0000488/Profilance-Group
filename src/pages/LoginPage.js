import React               from "react";
import { useDispatch }     from 'react-redux';
import { useNavigate }     from "react-router-dom";
import Button              from '@mui/material/Button';
import TextField           from '@mui/material/TextField';
import Dialog              from '@mui/material/Dialog';
import DialogContent       from '@mui/material/DialogContent';
import DialogTitle         from '@mui/material/DialogTitle';
import { autentification } from '../mock/auth';

import '../styles/LoginPage.scss';


export default function LoginPage()  
{    
    const [ open ]            = React.useState(true);
    const [ error, setError ] = React.useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const descriptionFields = [
        { 
            name: "username",
            label: "Login",
            type: "text"
        },
        { 
            name: "password",
            label: "Password",
            type: "password"
        },
    ];
  
    async function handleSubmit(event) {
        event.preventDefault();
    
        let formData                = new FormData(event.currentTarget);
        let username                = formData.get("username");
        let password                = formData.get("password");
        let { data: user, success } = await autentification( { username, password } );
        
        if ( !success )
        {
            setError( true );
        } else {
            dispatch({ type: 'LOGIN', user });
            navigate('/', { replace: true }); 
        }
    }
    
    return (
        <Dialog open={ open } className='login'>
            <DialogTitle>Please enter your login</DialogTitle>
            <DialogContent>
                <form onSubmit={handleSubmit} className="login__form">
                    { 
                        descriptionFields.map( ({ name, label, type }, id) => (
                            <TextField
                                key={ id }
                                id="outlined-basic"  
                                variant="outlined"                  
                                error={ error }
                                type={ type }
                                name={ name }
                                label={ label }
                                className='login__form__field'
                                required
                            />
                        ))
                    }  
                    <Button 
                        type="submit" 
                        variant="contained"
                        className="login__form__btn"
                    >
                        Login
                    </Button>
                </form>
            </DialogContent>
      </Dialog>
    );
}