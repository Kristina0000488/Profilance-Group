import * as React from 'react';

import Paper      from '@mui/material/Paper';
import InputBase  from '@mui/material/InputBase';


export default function SearchField(props) 
{
    const { title='Поиск', onChange, value='' } = props;

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300 }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={ title }
                value={ value }
                onChange={ ({ target }) => onChange(target.value) }
            />
        </Paper>
    );
}