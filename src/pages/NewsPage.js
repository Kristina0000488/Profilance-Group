import React         from 'react';
import { 
    useDispatch, 
    useSelector 
}                    from 'react-redux';

import Button        from '@mui/material/Button';
import Dialog        from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import SearchField   from '../components/SearchField';
import List          from '../components/List';
import Form          from '../components/Form';

import '../styles/NewsPage.scss';


export default function NewsPage() 
{
    const [ searchingValue, setSearchingValue ] = React.useState('');
    const [ content, setContent               ] = React.useState('');
    const [ title, setTitle                   ] = React.useState('');
    const [ showForm, setShowForm             ] = React.useState(false);

    const dispatch = useDispatch();
    const auth     = useSelector( ({ authReducer }) => authReducer.user );    
    const news     = useSelector( ({ newsReducer }) => filterNews( newsReducer.news ) );    
  
    function filterNews( news=[] )
    {
        if ( !auth.username ) {
            return news.filter( news => news.checked === true );
        } else {
            return news;
        }
    }
  
    function filterArray(array) {
        return array.filter( ({ title }) => title.includes(searchingValue) );
    }

    function renderAddNews()
    {
        if ( !auth.isStaff && auth.username === 'user' ) {
            return <Button 
                variant="contained"
                className="news__btn"
                onClick={ _ => setShowForm(true) }
            >
                Add news
            </Button>
        }
    }

    const fieldsForm = [
        { 
            title   : 'Title',
            method  : setTitle,
            required: true,
        },
        { 
            title   : 'Content',
            method  : setContent,
            required: true,
        },
    ];

    function getDate()
    {
        return new Date().toLocaleDateString();
    }

    function onChangeForm(value, index)
    {
        fieldsForm[index].method(value);
    }

    function onSubmitNews()
    {
        const news = {
            title,
            content,
            date: getDate(),
        };
        
        dispatch({ type: 'ADD_NEWS', news });

        setShowForm(false);
        setTitle('');
        setContent('');
    }
    
    return (
        <div className={ auth.user && !auth.isStaff ? 'news news__container' : 'news' }>            
            { renderAddNews() }
            { 
                news.length > 0 && 
                <SearchField onChange={ value => setSearchingValue(value) } value={ searchingValue } /> && 
                <List 
                    data={ filterArray(news) } 
                    regimeAdmin={ auth.isStaff } 
                    onRemove={ id => dispatch({ type: 'REMOVE_NEWS', id: id }) } 
                    onCheck={ id => dispatch({ type: 'CHECK_NEWS', id: id }) } 
                />
            }
            { <Dialog open={ showForm } onClose={ _ => setShowForm(false) }>
                <DialogContent>
                    <Form 
                        fields={ fieldsForm } 
                        onChange={ (val, id) => onChangeForm( val, id ) } 
                        onSubmit={ _ => onSubmitNews() }
                    />
                </DialogContent>
            </Dialog> }
        </div>
    )    
}