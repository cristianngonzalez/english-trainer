import React , {useState , useEffect} from 'react';

import data from '../../data.json';
//Routing
import { useParams } from 'react-router-dom';

function LessonComponent(){

   let { id } = useParams();
   const [lesson, setLesson] = useState(0);

   useEffect(() => {
      //Set lesson in the state
      setLesson(data[0].lessons.filter(lesson => lesson.id == id)[0])
   });
    

   return(
      <>
         <h1>{lesson.name}</h1>

         
      </>
   )
}

export default LessonComponent;