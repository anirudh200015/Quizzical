import React from "react"
import FirstPage from "./component/FirstPage"
import Data from "./component/Data"
import Display from "./component/Display"
import style from "./component/style.css"
import CorrectAns from "./component/CorrectAns"

function App(){
   // const category={"Anime & Manga":31 ,"Science:gadgets": 30, "entertainment:comics":29, "sports":21,"Mythology": 20,"General Knowledge": 9,"Video games":15,"Animals":27}

    const [categ,setCateg]=React.useState()
    const [numberOfQues, setNumberOfQues]=React.useState()
    const[checkFlag,setCheckFlag]=React.useState(0)
    const[score,setScore]=React.useState(0)
    const [page,setPage]=React.useState(1)
    const [allData,setAllData]=React.useState([])
    const [questions, setQuestions]=React.useState(getquestions)
    
    console.log( "yoyo!!!",questions)
    console.log( "category:",categ)
    console.log( "number: ",numberOfQues)


    function getquestions(){
        let a=[{}]
        for(let i=0;i<allData.length;i++){
            a.push({
                question: allData[i].question,
                correct_answer: allData[i].correct_answer,
                incorrect_answers: allData[i].incorrect_answers,
                selected:"",
                options: shuffleArray([allData[i].correct_answer , ...allData[i].incorrect_answers])  
            })

        }
        return a.slice(1)
    }


    function shuffleArray(array) {

        // console.log(props.questions)

   for (var i = array.length - 1; i > 0; i--) {
   
       // Generate random number
       var j = Math.floor(Math.random() * (i + 1));
                   
       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }
       
   return array;
}


  React.useEffect(()=>{
       async function getdata(){
        const res = await fetch(`https://opentdb.com/api.php?amount=${numberOfQues}&category=${categ}&type=multiple`)                       //https://opentdb.com/api.php?amount=5&category=31&type=multiple
            const data=await res.json()
            setAllData(data.results)
            
       }
       getdata()
        
        // return function(){
        //         fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        //     .then(res => res.json())
        //     .then(data=> setAllData(data.results))
        // }
    } 
         , [categ && numberOfQues])
   
    
   
   function handleSubmit(){
            setPage(page+1)
            let arr=[{}]
        allData.map(item=>(
         arr.push({
                question:item.question,
                correct_answer: item.correct_answer,
                incorrect_answers: item.incorrect_answers,
                selected: "",
                options: shuffleArray([item.correct_answer , ...item.incorrect_answers])  
            })
        ))
      setQuestions(arr.slice(1))
   }

   


   function handleChange(event,index){
       const arr=[]
       console.log("page :" ,page) 
        const {name,value}=event.target
        console.log(name ,": ", value) 

        setQuestions(oldval=> {
            
            const a=[]
            // a.push({})
            for(let i=0;i<oldval.length;i++){
                // console.log(oldval[i])
                if(i===index){
                    // console.log("finally")
                    console.log(oldval[i])
                    a.push({
                        ...oldval[i],
                        selected :value
                    })
                }
                else  {
                    a.push(oldval[i])       
                }
                
            }
            return a
        }
        )

    
    }
        
    function checkAns(){
        checkFlag===1
        ?
        setPage(1)
        :
        setCheckFlag(1)
        console.log("clicked")
        questions.map(item=>{
            item.correct_answer===item.selected ? setScore(oldval=>oldval+1): setScore(oldval=>oldval)
        })
        
    }   
       
   function changePage(){
    setPage(1)
    
   }

   function setInputs(event){
        const{id,value}=event.target

        //  const num =event.target.value
        //  setCateg(value)
        //  setNumberOfQues(num)
        if(id==="number"){
            console.log(value)
            setNumberOfQues(value)
        }
        else if (id==="category"){
            setCateg(value)
            
        }
   }


    return (
        
        <main>
       {     
         
        page===1
        ?
         <FirstPage 
            formQues={handleSubmit}
            page={page}
            setInputs={setInputs}
            numberOfQues={numberOfQues}
            categ={categ}
         />
         :
         <section >
            <Display 
                questions ={questions}
                // handleClick={handleClick}
                handleChange={handleChange}
                checkAns={checkAns}
                checkFlag={checkFlag}
                score={score}
            />
            
            <CorrectAns 
                checkFlag={checkFlag}
                score={score}
                changePage={changePage}
                numberOfQues={numberOfQues}
        
            />
            
        </section> 
         
       }
        </main>
    
    )
}

export default App;
