console.log("Game Development");
import promptSync from "prompt-sync";
let prompt = promptSync();
class TotalBussinessLimit {
    private readonly userTotalAttempt: number;
    // private readonly 
    constructor(userAttempt: number) {
        this.userTotalAttempt = userAttempt;
    }

    displayTotalCount() {
        console.log(`Current USER count : ${this.userTotalAttempt}`)
    }

    getUserAttempt() {
        return this.userTotalAttempt
    }

}
class IncrementAttemptCount {
    public counter: number = 0;
    constructor() {

    }
    increment() {
        this.counter += 1;
    }
    displayAttemptCompleted() {
        console.log(`Complete Attempts : ${this.counter}`)
    }
}

class UserScore {
    public scoreCard: number = 0;

    incrementScoreCard() {
        this.scoreCard += 1;
    }

    returnScoreCard() {
        return this.scoreCard;
    }
}
class RandomNumberGeneration {
    createRandomNumber() {
        let num = Math.random();
        return Math.ceil(num * 10);
    }
}


class App {
    public readonly GameAttempt;
    public readonly increment;
    public readonly scoreCard;
    public readonly randomNum;
    constructor(userAttempt: number) {
        // Object.assign(this,IncrementAttemptCount , TotalBussinessLimit)
        this.GameAttempt = new TotalBussinessLimit(userAttempt);
        this.increment = new IncrementAttemptCount();
        this.scoreCard = new UserScore();
        this.randomNum = new RandomNumberGeneration();
    }

    attemptTracker() {
        console.log("HelloWorld")
    }

    displayFinalDashboard() {
        console.log(`DASHBORAD : UserScore : ${this.scoreCard.returnScoreCard()} , FAIL :${this.GameAttempt.getUserAttempt() - this.scoreCard.returnScoreCard()}`)
    }

    businessLogic() {
        if (this.increment.counter === this.GameAttempt.getUserAttempt()) {
            console.log("GameExcution Stoped!!!!")
        } else {
            this.increment.increment();
            let generateNum = this.randomNum.createRandomNumber();
            console.log("InProgress! Current Attempt " + this.increment.counter + " : " + this.GameAttempt.getUserAttempt() + " , NewNumberGenerated " + generateNum);

            let answer = Number(prompt("Enter User Num"));
            if (generateNum == answer) {
                console.log("Every Thing working");
                this.scoreCard.incrementScoreCard()
            } else {
                console.log("Workign for now");
            }
        }
    }
}

//Logic workflow
let userAttempt = Number(prompt("Enter Number of Attempt ypu want to play:"));
let start = new App(userAttempt);

for (let i = 0; i < userAttempt; i++) {
    console.log("===================================")
    start.businessLogic();
    console.log("===================================")
}
start.displayFinalDashboard()


//handling -> string , decimal and specail character in the systems