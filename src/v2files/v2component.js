import React from 'react';

export default class RPSUI extends React.Component {
    constructor() {
        super()
        this.state = {
            bScore: 0,
            uScore: 0,
            bChoice: "",
            uChoice: "",
            result: ""
        };

    }

    //reset state
    reset(e) {
        this.setState({
            bScore: 0,
            uScore: 0,
            bChoice: "",
            uChoice: "",
            result: ""
        });

    }

    //bot choices
    bChoice(e) {
        const randomN = Math.random();//random number generator for the bot
        const arrayIndex = Math.floor(randomN * 3)//times the random number by 3(1 for each option)   
        const range = arrayIndex; //getting the number 0,1,2 for the index for the array
        const choices = ['Rock', 'Paper', 'Scissors']; //the choice array
        const bot = choices[range]; //allocating the index number to the array
        this.setState({ bChoice: bot })//sets the state bChoice to the corresponding choice in the array 
    }

    //user choices
    rock(e) {
        this.setState({ 
            uChoice: "Rock" }, 
            (e) => { this.result(e) ; 
        });
    }
    paper(e) {
        this.setState({
            uChoice: "Paper"}, 
            (e) => { this.result(e) ;
        });
    }
    scissors(e) {
        this.setState({
            uChoice: "Scissors"},
            (e) => { this.result(e) ;
        });
    }

    //win or lose
    win(e) {
        this.setState((uScore) => {
            return {uScore: this.state.uScore + 1};
          });
    }
    lose(e) {
        this.setState((bScore) => {
            return {bScore: this.state.bScore + 1};
          });
    }
    
    //result if statement
    result(e) {
        //Rock
        if (this.state.uChoice === "Rock" && this.state.bChoice === "Rock") {
            this.setState({ result: "Looks like you're stuck between a rock and a hard place, its a draw." },
            (e)=>{this.scoreCheck(e)})

        } else if (this.state.uChoice === "Rock" && this.state.bChoice === "Scissors") {
            this.setState({ result: "Rock breaks scissors, it's a win!" },
            (e) => { this.win(e)},
            (e)=>{this.scoreCheck(e)})

        } else if (this.state.uChoice === "Rock" && this.state.bChoice === "Paper") {
            this.setState({ result: "Rock gets covered by paper, it's a loss." },
            (e) => { this.lose(e)} ,
            (e)=>{this.scoreCheck(e)})
        //Paper
        } else if (this.state.uChoice === "Paper" && this.state.bChoice === "Rock") {
            this.setState({ result: "Paper covers rock, it's a win!" },
            (e) => { this.win(e)} ,
            (e)=>{this.scoreCheck(e)})

        } else if (this.state.uChoice === "Paper" && this.state.bChoice === "Paper") {
            this.setState({ result: "Theres more paper here than an empty office printer, its a draw." },
            (e)=>{this.scoreCheck(e)})

        } else if (this.state.uChoice === "Paper" && this.state.bChoice === "Scissors") {
            this.setState({ result: "Paper gets cut but scissors, it's a loss." },
            (e) => { this.lose(e)} ,
            (e)=>{this.scoreCheck(e)})
        //Scissors
        } else if (this.state.uChoice === "Scissors" && this.state.bChoice === "Rock") {
            this.setState({ result: "Scissors just cant cut rock, it's a loss." },
            (e) => { this.lose(e)} ,
            (e)=>{this.scoreCheck(e)})

        } else if (this.state.uChoice === "Scissors" && this.state.bChoice === "Paper") {
            this.setState({ result: "Scissors cuts paper, it's a win!" },
            (e) => { this.win(e)} ,
            (e)=>{this.scoreCheck(e)})

        } else if (this.state.uChoice === "Scissors" && this.state.bChoice === "Scissors") {
            this.setState({ result: "On guard!, tis a draw." },
            (e)=>{this.scoreCheck(e)})
        }
    }

    scoreCheck(e) {
        if (this.state.uScore >= 5 || this.state.bScore >= 5) {
            this.reset(e)
        }
    }
    

    render() {
        return (


            //-------------------------------------------------------
            <>
                <button type='button' id="startReset" onClick={(e) => { this.reset(e) }}>Start/Reset</button>
                <button type='button' id="rock" className="selection" onClick={(e) => { this.rock(e); this.bChoice(e) }}>Rock </button>
                <button type='button' id="paper" className="selection" onClick={(e) => { this.paper(e); this.bChoice(e) }}>Paper </button>
                <button type='button' id="scissors" className="selection" onClick={(e) => { this.scissors(e); this.bChoice(e) }}>Scissors </button>
                <div className="scoreBoard">
                    <p>Your Score </p><p id="yourScore">{this.state.uScore} </p>
                    <p> : </p>
                    <p id="botScore"> {this.state.bScore}</p><p> Bot Score</p>
                </div>
                <p>You chose: {this.state.uChoice}</p> <br />
                <p>The Machine chose: {this.state.bChoice} </p> <br />
                <p id="result">The Result is: {this.state.result}</p>
            </>
            //--------------------------------------------------------------
        )
    }
}