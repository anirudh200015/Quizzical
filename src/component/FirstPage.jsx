import React from "react"

function FirstPage(props){
    
    
    return(
        <section className="first-page"> 
            <h1> QUIZZICAL</h1>
            <h2> Answer the questions to test your knowledge</h2>
            <select 
                id="number"    
                name="numberOfQues"
                value={props.numberOfQues}
                onChange={props.setInputs}
            >
                <option value="">Select number of Questions </option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
            </select>
            <br />
            <select 
                id="category"    
                name="categ"
                value={props.categ}
                onChange={props.setInputs}
            >
                <option value="">Select the category of questions </option>
                <option value="31">Anime & Manga </option>
                <option value="30">Science:gadgets</option>
                <option value="29">entertainment:comics</option>
                <option value="21">sports</option>
                <option value="20">Mythology</option>
                <option value="9">General Knowledge</option>
                <option value="15">Video games</option>
                <option value="27">Animals</option>

            </select>
            <br />
            <button onClick= {props.formQues} className = "start-button"> Start quiz</button>
        </section>
    )
}

export default FirstPage;