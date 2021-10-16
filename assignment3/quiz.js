const readline = require("readline");

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout,
});

var playername = "";
var score = 0;
var total = 0;

const questions = () => {
    
    // Question 1...

    console.log("1.  The British East India Company established its first factory in");
    console.log("A. Ahmadabad");
    console.log("B. surat");
    console.log("C. Gandhinagar");
    console.log("D. Rajkot");

    rl.question("Answer : " , (ans) => {
        if(ans == "B" || ans == "b")
        {
            console.log("Correct Answer...");
            score = score + 5;
            console.log("Score = " , score);
        }
        else
        {
            console.log("Wrong Answer...");
            if(score === 0)
            {
                score = 0;
            }
            else
            {
                score = score - 2;
            }
        }

        // Question 2...

        console.log("2. Which one is the longest river in Gujarat?");
        console.log("A. Tapi");
        console.log("B. Narmada");
        console.log("C. Mahi");
        console.log("D. Sabarmati");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 3...

        console.log("3.Gujarat is the largest producer of _______");
        console.log("A. Rice");
        console.log("B. Milk");
        console.log("C. Wheat");
        console.log("D. Mango");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 4...

        console.log("4. On which river the Sardar Sarovar Dam is built?");
        console.log("A. Narmada");
        console.log("B. Tapi");
        console.log("C. Godavari");
        console.log("D. Sabarmati");

        rl.question("Answer : " , (ans) => {
            if(ans == "a" || ans == "A")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 5...

        console.log("Which one is the largest District of Gujarat?");
        console.log("A. Junagadh");
        console.log("B. Jamnagar");
        console.log("C. Kutch");
        console.log("D. Bhavnagar");

        rl.question("Answer : " , (ans) => {
            if(ans == "c" || ans == "C")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 6...

        console.log("6. Which district have the largest forest area in Gujarat?");
        console.log("A. Dang");
        console.log("B. Gir Somnath");
        console.log("C. Tapi");
        console.log("D. Amreli");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 7...

        console.log("7. Which city is also known as the Diamond City of India?");
        console.log("A. Rajkot");
        console.log("B. Surat");
        console.log("C. Gandhinagar");
        console.log("D. Ahmadabad");

        rl.question("Answer : " , (ans) => {
            if(ans == "B" || ans == "b")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 8...

        console.log("8.  Who had built the Sun Temple of Modhera?");
        console.log("A. Bhimdev");
        console.log("B. Karandev");
        console.log("C. Siddharaj Jaisinh");
        console.log("D. Kumarapala");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 9...

        console.log("9.  Who is the longest serving Chief Minister of Gujarat?");
        console.log("A. Narendra Modi");
        console.log("B. Jivraj Narayan Mehta");
        console.log("C. Shankersinh Vaghela");
        console.log("D.  Chimanbhai Patel");

        rl.question("Answer : " , (ans) => {
            if(ans == "A" || ans == "a")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("Score = " , score);
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
            }

        // Question 10...

        console.log("10. The UNESCO heritage site 'Rani ki vav' is located in which district?");
        console.log("A. Bharuch");
        console.log("B. Amreli");
        console.log("C. Bhavnagar");
        console.log("D. Patan ");

        rl.question("Answer : " , (ans) => {
            if(ans == "D" || ans == "d")
            {
                console.log("Correct Answer...");
                score = score + 5;
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
            else
            {
                console.log("Wrong Answer...");
                if(score === 0)
                {
                    score = 0;
                }
                else
                {
                    score = score - 2;
                }
                console.log("================================ \n");
                console.log("Player  = " , playername);
                console.log("Total Score  = " , score + "\n");
                console.log("================================");
                rl.close();
            }
    


            });
            });
            });
            });
            });
            });
            });
            });
        });
    });

};

const startgame = () => {

    console.log("1. Start");
    console.log("2. Exit");

    rl.question("Enter Your Choice = " , (ans) => {
        if(ans == 1) 
        {
            rl.question("Enter Your name = " , (uname) => {
                playername = uname;
                if(playername.length > 0)
                {
                    console.log(playername);
                    questions();
                }
                else
                {
                    console.log("Enter Valid Name...");
                    startgame();
                }
            });
        }
        else if(ans == 2)
        {
            rl.close();
        }
        else
        {
            console.log("Enter Valid Name...");
            startgame();
        }
    });

   
};


startgame();

