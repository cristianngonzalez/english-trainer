import React , {useState , useEffect} from 'react';

import data from '../../data.json';
//Routing
import { useParams } from 'react-router-dom';

function LessonComponent(){

   let { id } = useParams();
   const [lesson, setLesson] = useState(0);
   const [phrases , setPhrases] = useState(0);

   useEffect(() => {
      //Set lesson in the state
      setLesson( data[0].lessons.filter(lesson => lesson.id == id)[0] );
      //Get all phrases of this lesson
      setPhrases(data[0].phrases.filter(phrase => phrase.lesson_id == id));
   } , []);

   return(
      <>
         <h1>{lesson.name}</h1>

         <div>
            <span>{}</span>
            <input type="text" />

            <div>
               {
                  phrases? 
                     /*phrases.map(phrase => 
                        <>
                           <img src={phrase.picture}></img>
                           <span>{phrase.en}</span>
                        </>
                     )*/
                  :
                     <>La verga</>
               }
            </div>
            
            <button>Continuar</button>
         </div>

      </>
   )
}

export default LessonComponent;