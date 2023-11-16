import React from "react";
import './NewsLetter.css';

function NewsLetter() {
    return (
       <>
           <div className= "news">
               <div className= "new-text">
                   <h2>NewsLetter</h2>
                   <form>
                       <input type= "email" placeholder= "your@email.com"/>
                       <button type= "submit">Subscribe</button>
                   </form>
               </div>

           </div>
       </>
    )
}

export default NewsLetter;