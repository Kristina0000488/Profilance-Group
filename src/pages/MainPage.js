import React           from 'react';
import { useSelector } from 'react-redux';

import '../styles/MainPage.scss';


export default function MainPage() 
{
    const auth = useSelector( ({ authReducer }) => authReducer.user );    
   
    return (
        <>
            { auth && <div className='main'>           
                <p className='main__text'>
                    Привет, { !auth.username ? 'гость' : auth.username }!
                </p>
            </div> }
        </>
    );
}