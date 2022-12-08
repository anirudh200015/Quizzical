import React from "react"
import he from "he"

function Display(props){
    
//     var options =[]

//     function shuffleArray(array) {

//         // console.log(props.questions)

//    for (var i = array.length - 1; i > 0; i--) {
   
//        // Generate random number
//        var j = Math.floor(Math.random() * (i + 1));
                   
//        var temp = array[i];
//        array[i] = array[j];
//        array[j] = temp;
//    }
       
//    return array;
// }
    // function merge(item){
    //     var options=[]
    // options.push(item.correct_answer,...item.incorrect_answers)
    // options = shuffleArray(options)
    // return options
    // }
    
    const original_questions= props.questions   // taking out the first undefined element from teh array
    
    
    
    const array= original_questions.map((item,index)=> {
        // options = shuffleArray([item.correct_answer , ...item.incorrect_answers])                                    //[item.correct_answer,item.incorrect_answers]
   return  (   
    <section className="question-section">
        
        <h3 key={index} className="ques-text">{he.decode(item.question)}</h3>

        <div  className="list-div">
          {
              
            
            item.options.map((val)=>(                  // for different options 
            <div  >   
                    {// <ul className="list"> 
                    //     {/* {item.isHeld===true? <li  className= "change" onClick={()=>props.handleClick(val,index+1)} value={val}> {val} </li> :<li onClick={()=>props.handleClick(val,index+1)} value={val}> {val} </li> } */}
                    //     <li  className= {item.isHeld=== true ? "change": "og-color"} onClick={()=>props.handleClick(val,index+1)} value={val}> {val} </li>
                    // </ul>
                    } 
                          
                    <input 
                        disabled= {props.checkFlag ?true: false}
                        type="radio" 
                        id={val} 
                        name={index}
                        value={val}
                        onChange={(event)=>props.handleChange(event,index)}    // item.selected===item.correct?"correct":"incorrect"
                    />
                    <label  className= {props.checkFlag===1? item.correct_answer===val  ? "correct" : "" :""   }   htmlFor={val} >
                      {val}
                    </label>
            
                    </div>
            ))
                
            
        }
    </div>  
        
    </section>
    
     ) })



    return (
    <section className="display-section">
       <div className="display"> 
          <h1>Kill it Now !!!!</h1>
          {array}
      </div>
      <div className="submit-div">
     {props.checkFlag===0 && <button onClick={props.checkAns} className="submit">Check </button> }
      </div>
      {/* <div className="submit-div">
        {
        props.checkFlag===0
        ? 
                
        :
        <div>
          <h2>You scored {props.score}/5 !! </h2>
          <button onClick={props.setPage(1)}> Play Again</button>
        </div>
        }
      </div> */}
    </section>

    )
}

export default Display;