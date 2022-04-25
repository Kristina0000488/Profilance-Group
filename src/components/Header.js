import React         from 'react';
import { 
    Link, 
    useNavigate 
}                    from "react-router-dom";
import { 
    useDispatch, 
    useSelector 
}                    from 'react-redux';

import Button        from '@mui/material/Button';
import useMediaQuery from "@mui/material/useMediaQuery";
import useTheme      from "@mui/material/styles/useTheme";
import Menu          from '@mui/material/Menu';
import MenuItem      from '@mui/material/MenuItem';
import IconButton    from '@mui/material/IconButton';
import MoreVertIcon  from '@mui/icons-material/MoreVert';

import Logo          from '../media/img/logo.svg'

import '../styles/Header.scss';


export default function Header() 
{ 
    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);    

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    const auth     = useSelector( ({ authReducer }) => authReducer.user );    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme    = useTheme();
    const isMobile = useMediaQuery( theme.breakpoints.down("750") );    
    
    function renderSwitchBtn(mobile=isMobile)
    { 
        if (!auth.username) {
            return <Link 
                to={ '/login' }
                className="header__link"
            >
                <Button variant={ mobile ? "text" : "contained" }>Вход</Button>
            </Link> 
        } else {
            return <Button 
                onClick={ _ => {
                    navigate("/");
                    dispatch({ type: 'LOGOUT' })
                }} 
                variant={ mobile ? "text" : "outlined" }
            >
                Выход                        
            </Button>
        }
    }

    function renderMobileMenu()
    {
        return <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link 
                        to={ '/news' }
                        className="header__link"
                    >
                        Новости
                    </Link> 
                </MenuItem>
                <MenuItem onClick={handleClose}>{ renderSwitchBtn() }</MenuItem>
            </Menu>
        </div>
    }

    return (
        <div className='header'>
            <Link 
                to={ '/' }
                className="header__link"
            >
                <img src={ Logo } alt="logo"/> 
            </Link>   
           { isMobile ? renderMobileMenu() : <div className="header__block">               
                <Link 
                    to={ '/news' }
                    className="header__link"
                >
                    <Button variant="text">Новости</Button>
                </Link>     
                { renderSwitchBtn() }
            </div> }
        </div>
    )    
}