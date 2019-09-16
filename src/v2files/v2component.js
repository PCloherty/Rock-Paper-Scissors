import React from 'react';

export default class RPSUI extends React.Component {
    constructor() {
        super()
        this.state = {
            bScore: 0,
            uScore: 0,
            bChoice: "",
            uChoice: "",
            result: "",
            resultStyle:""
        };

    }

    //reset state
    reset(e) {
        this.setState({
            bScore: 0,
            uScore: 0,
            bChoice: "",
            uChoice: "",
            result: "",
            resultStyle:""
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
            uChoice: "Rock"
        },
            (e) => {
                this.result(e);
            });
    }
    paper(e) {
        this.setState({
            uChoice: "Paper"
        },
            (e) => {
                this.result(e);
            });
    }
    scissors(e) {
        this.setState({
            uChoice: "Scissors"
        },
            (e) => {
                this.result(e);
            });
    }

  
    //win or lose or draw
    win(e) {
        this.setState({resultStyle:"resultW"});
        this.setState((uScore) => {
            return { uScore: this.state.uScore + 1 };
        },(e) => { this.scoreCheck(e) });
    }
    lose(e) {
        this.setState({resultStyle:"resultL"});
        this.setState((bScore) => {
            return { bScore: this.state.bScore + 1 };
        },(e) => { this.scoreCheck(e) });

    }
    draw(e) {
        this.setState({resultStyle:"resultD"},
        (e) => { this.scoreCheck(e) });
    }

    //result if statement
    result(e) {
        //Rock
        if (this.state.uChoice === "Rock" && this.state.bChoice === "Rock") {
            this.setState({ result: "Looks like you're stuck between a rock and a hard place. Its a draw." },
            (e) => { this.draw(e) })    
            

        } else if (this.state.uChoice === "Rock" && this.state.bChoice === "Scissors") {
            this.setState({ result: "Generally speaking rock actually blunts scissors, unless its a really really big boulder, but back to the game. It's a win!" },
                (e) => { this.win(e) })

                


        } else if (this.state.uChoice === "Rock" && this.state.bChoice === "Paper") {
            this.setState({ result: "In the magical world of rock paper scissors, when paper covers rock, it nullifies rock completely. It's a loss." },
                (e) => { this.lose(e) })
               
            //Paper
        } else if (this.state.uChoice === "Paper" && this.state.bChoice === "Rock") {
            this.setState({ result: "Well pay checks are worth more than stones, am I right? It's a win!" },
                (e) => { this.win(e) })


        } else if (this.state.uChoice === "Paper" && this.state.bChoice === "Paper") {
            this.setState({ result: "Theres more paper here than an empty office printer, its a draw." },
            (e) => {this.draw(e)})
                


        } else if (this.state.uChoice === "Paper" && this.state.bChoice === "Scissors") {
            this.setState({ result: "Paper gets cut but scissors, it's a loss." },
                (e) => { this.lose(e) })


            //Scissors
        } else if (this.state.uChoice === "Scissors" && this.state.bChoice === "Rock") {
            this.setState({ result: "Scissors just cant cut rock, it's a loss." },
                (e) => { this.lose(e) })


        } else if (this.state.uChoice === "Scissors" && this.state.bChoice === "Paper") {
            this.setState({ result: "Scissors cuts payslips, it's a win!" },
                (e) => { this.win(e) })


        } else if (this.state.uChoice === "Scissors" && this.state.bChoice === "Scissors") {
            this.setState({ result: "En guarde! Tis a draw." },
                (e) => {this.draw(e)})

        }
    }

    scoreCheck(e) {
        if (this.state.uScore > 5 || this.state.bScore > 5) {
            this.reset(e)
        }
    }


    render() {
        return (


            //-------------------------------------------------------
            <div className='content'>
                <button type='button' id="startReset" onClick={(e) => { this.reset(e) }}>Start/Reset</button>
                <button type='button' id="rock" className="selection" onClick={(e) => { this.rock(e); this.bChoice(e) }}>Rock </button>
                <button type='button' id="paper" className="selection" onClick={(e) => { this.paper(e); this.bChoice(e) }}>Paper </button>
                <button type='button' id="scissors" className="selection" onClick={(e) => { this.scissors(e); this.bChoice(e) }}>Scissors </button>
                <div className="scoreBoard">
                    <p>Your Score </p><p id="yourScore"> {this.state.uScore} </p>
                    <p> : </p>
                    <p id="botScore"> {this.state.bScore}</p><p> Bot Score</p>
                </div>
                <p>You chose: {this.state.uChoice}</p> <br />
                <p>The Machine chose: {this.state.bChoice} </p> <br />
                <p id="result" className={this.state.resultStyle}>The Result is: {this.state.result}</p>
                <p>The code behind the game is <a href="https://github.com/PCloherty/rock-paper-scissors">available here</a>.</p>
            </div>
            //--------------------------------------------------------------
        )
    }
}