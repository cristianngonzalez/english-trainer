import React , { useState , useEffect } from "react";

//MaterialUi
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//Routing
import { Link , useLocation } from "react-router-dom";


function BackbuttonComponent(){
    
    let location = useLocation();

    const [render, setRender] = useState(0);

    useEffect(() => {
        setRender(
            <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                <IconButton size="large" edge="start" color="inherit" aria-label="back" sx={{ mr: 2 }}>
                    <ArrowBackIcon/>
                </IconButton>
            </Link>
        )
	}, []);

    useEffect(() => {
        if(location.pathname == '/'){
            setRender(<></>)
        }else{
            setRender(
                <Link to='/' style={{textDecoration: 'none', color: 'white'}}>
                    <IconButton size="large" edge="start" color="inherit" aria-label="back" sx={{ mr: 2 }}>
                        <ArrowBackIcon/>
                    </IconButton>
                </Link>
            )
        }
    }, [location]);


    return(
        render
    )
    

}

export default BackbuttonComponent;