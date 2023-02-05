import React from "react";

import './ListitemComponent.css';

//MaterialUi
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

//Routing
import { Link } from "react-router-dom";

class ListitemComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {lesson: this.props.lesson.lesson}
    }

   render(){
      return(
        <>  
            <Link to="/lesson" style={{textDecoration: 'none'}}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText 
                        primary={
                            <React.Fragment>
                                <h3 className="listItem-h3">{this.state.lesson.name}</h3>
                            </React.Fragment>
                        }
                    />
                </ListItem>
            </Link>

            <Divider variant="inset" component="li" />
        </>
      )
   }

}

export default ListitemComponent;