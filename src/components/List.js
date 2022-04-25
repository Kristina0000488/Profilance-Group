import * as React from 'react';

import Paper      from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CheckIcon  from '@mui/icons-material/Check';
import ClearIcon  from '@mui/icons-material/Clear';
import { red }    from '@mui/material/colors';

import '../styles/List.scss';


export default function List({ data, regimeAdmin, onCheck, onRemove }) 
{
    return (
        <Paper
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%' }}
        >
            <ul className='list'>
                { data && data.map( ({ title, content, date, id, checked }, index) => (
                    <li 
                        className='list__item' 
                        key={ index }
                    >
                        <p className='list__item__title'>{ title }</p>
                        <p>{ content }</p>
                        <p className='list__item__date'>{ date }</p>
                        { regimeAdmin && <div className='list__item__btns'>
                            { !checked && <IconButton onClick={ _ => onCheck(id) } >
                                    <CheckIcon color="success" />
                                </IconButton> }
                            <IconButton onClick={ _ => onRemove(id) } >
                                <ClearIcon sx={{ color: red[500] }} />
                            </IconButton>
                        </div> }
                    </li>
                ) )}
            </ul>
        </Paper> 
    );
}