import * as React from 'react';
import Box        from '@mui/material/Box';
import TextField  from '@mui/material/TextField';
import Button     from '@mui/material/Button';

import '../styles/Form.scss';


export default function Form({ fields=null, onChange, onSubmit }) 
{    
    return ( <>
        { 
            fields && <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                className="form"
            >
                { fields.map( ({ title, required=false }, id) => <div key={ id }>
                    <TextField
                        required={ required }
                        id="outlined-required"
                        label={ title }
                        onChange={ ({ target }) => onChange(target.value, id) }
                    />
                </div> )}
                <Button 
                    variant="contained"
                    onClick={ _ => onSubmit() }
                    className='form__btn_submit'
                >
                    Add
                </Button>
            </Box>
        }
    </> );
}