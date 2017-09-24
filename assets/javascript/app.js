$(document).ready(function() {
    // Global Variables
    $("#question-div").hide();
    $("#question-answers").hide();



    var incorrectAnswers;
    var correctAnswers;
    var intervalId;

    //prevents the clock from being sped up unnecessarily
    var clockRunning = false;

    var timeConverted;
    var gameLock = true;
    var correctGuesses = 0;
    var incorrectGuesses = 0;
    var unanswered = 0;


    //     Each question written as an object

    var q1 = {
        question: "There was a plane crash every single person died. Who survived?",
        answers: ["You", "The Pilot", "Married Couples", "Your Mother"],
        correctIndex: 2
    }


    var q2 = {
        question: "What is big and yellow and comes in the morning, to brighten mom's day?",
        answers: ["School Bus", "Your Smile", "The Sun", "Big Bird"],
        correctIndex: 0
    }
    var q3 = {
        question: "What is easy to get into, but hard to get out of?",
        answers: ["A Boat", "An Argument", "Marriage", "Trouble"],
        correctIndex: 3
    }
    var q4 = {
        question: "The more you take, the more you leave behind. What am I?",
        answers: ["Money", "Footsteps", "Friends", "Enemies"],
        correctIndex: 1
    }
    var q5 = {
        question: "A boy fell off a 100 foot ladder. But he did not get hurt. Why not?",
        answers: ["The ladder was plastic", "The floor was foam", "He was only on the first step", "The floor is lava"],
        correctIndex: 2
    }
    var q6 = {
        question: "What has cities, but no houses; forests, but no trees; and water, but no fish?",
        answers: ["NeverLand", "Videogames", "A Map", "A Book"],
        correctIndex: 2
    }
    var q7 = {
        question: "I fly without wings, I cry without eyes. What am I?",
        answers: ["A Flyfish", "A Fly", "A Rainbow", "A Cloud"],
        correctIndex: 3
    }
    var q8 = {
        question: "Feed me and I live, yet give me a drink and I die. What am I?",
        answers: ["Fire", "Venus Flytrap", "Black Hole", "Poison"],
        correctIndex: 0
    }
    var q9 = {
        question: "What goes up and goes down but does not move?",
        answers: ["Money", "A Hummingbird", "The Temperature", "Wind"],
        correctIndex: 2
    }
    var q10 = {
        question: "A man is trapped in a room. The room has only two possible exits: two doors. Through the first door there is a room constructed from magnifying glass. The blazing hot sun instantly fries anything or anyone that enters. Through the second door there is a fire-breathing dragon. How does the man escape?",
        answers: ["He opens the first door so the dragon can destroy the second room", "He waits until night time and then goes through the first door", "He feeds the dragon part of his body so it becomes his friend", "He smashes through the second room"],
        correctIndex: 1
    }

    // The array of question objects 
    var questionsArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
    // The number of q object (question in the trivia game) I'm on
    var questionCount = 0;




    //   Gifs to appear
    var gif1 =
        '<iframe src="https://giphy.com/embed/4cUCFvwICarHq" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif2 =
        '<iframe src="https://giphy.com/embed/h2OLfcSKKthRK" width="478" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif3 =
        '<iframe src="https://giphy.com/embed/3o6ZtmGkSCwGWQNTOg" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif4 =
        '<iframe src="https://giphy.com/embed/jvUjIiKFPdte" width="480" height="260" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif5 =
        '<iframe src="https://giphy.com/embed/3o6Zthx0c3KWJ8Y7e0" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif6 =
        '<iframe src="https://giphy.com/embed/5gw0VWGbgNm8w" width="480" height="233" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif7 =
        '<iframe src="https://giphy.com/embed/gZEBpuOkPuydi" width="480" height="325" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif8 =
        '<iframe src="https://giphy.com/embed/xT77Y36ijyuwn58bja" width="480" height="431" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif9 =
        '<iframe src="https://giphy.com/embed/MLZYKauKxeqKk" width="480" height="374" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gif10 =
        '<iframe src="https://giphy.com/embed/26tPoyDhjiJ2g7rEs" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var finishedGif =
        '<iframe src="https://giphy.com/embed/t9ctG5MZhyyU8" width="480" height="474" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>';
    var gifsArray = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10];


    // set question index to 0 (i=0)
    // start: display question i
    // set interval at 30 seconds
    // if they choose an answer
    // after 30 seconds
    // tell them if they got it right
    // increment i
    // go to start

    // Main Process

    function newQuestAtStart() {
        stopwatch.reset();
        intervalId = setInterval(stopwatch.count, 1000);
        console.log("quest count is " + questionCount);
        $("#question-answers").html("");
        $("#question-div").show();
        $("#question-answers").show();
        $("#question-answers").append(
            "<div class='text-center question'>" +
            questionsArray[questionCount].question +
            "</div>"
        );
        for (var j = 0; j < 4; j++) {
            $("#question-answers").append(
                "<div class='answer text-center' id='answer-" +
                j +
                "'data-answer-index= " +
                j +
                ">" +
                questionsArray[questionCount].answers[j] +
                "</div>"
            );
        }
    }
    if (questionCount == 9) {
        $("#question-answers").html("");
        clearInterval(intervalId);
        $("#question-answers").text("<div class='text-center question'>You got " + correctGuesses + "out of 10. Do you want to play again? </div>");
        $("#question-answers").append("<button class='btn btn-lg btn-primary' id='replay'>Play again?</button>");
        $("#replay").on("click", function() {
            questionCount = 0;
            newQuestAtStart();

        });
    } else {

        $("#start").on("click", function() {
            $("#intro").hide();



            newQuestAtStart();
            stopwatch.reset();
            intervalId = setInterval(stopwatch.count, 1000);
            // newQ();
            $("body").on("click", ".answer", function() {
                if ($(this).attr("data-answer-index") == questionsArray[questionCount].correctIndex) {
                    clearInterval(intervalId);
                    $("#question-answers").html("");
                    $("#question-answers").append("<div class='text-center question'>Nice! You got it right!</div>");
                    $("#question-answers").append("<div class='text-center'>" + gifsArray[questionCount] + "</div>");
                    questionCount++;
                    correctGuesses++;
                    console.log("Correct: " + correctGuesses);
                    setTimeout(function() {
                        newQuestAtStart();
                    }, 3000);
                    return;


                } else {
                    clearInterval(intervalId);
                    $("#question-answers").html("");
                    $("#question-answers").append("<div class='text-center question'>Sorry, the correct answer is " + questionsArray[questionCount].answers[questionsArray[questionCount].correctIndex] + "</div>");
                    $("#question-answers").append("<div class='text-center'>" + gifsArray[questionCount] + "</div>");
                    questionCount++;
                    incorrectGuesses++;
                    console.log("Incorrect: " + incorrectGuesses);
                    setTimeout(function() {
                        newQuestAtStart();
                    }, 3000);
                    return;
                }
            });


        });
    }

    //  The timer object.
    var stopwatch = {
        time: 30,


        reset: function() {
            stopwatch.time = 30;
            $(".time-left").html(stopwatch.time);
            clearInterval(intervalId);

        },

        newQuestion: function() {
            clearInterval(intervalId);
        },

        count: function() {
            var converted = stopwatch.timeConverter(stopwatch.time);
            timeCoverted = converted;
            stopwatch.time--;
            $(".time-left").html(converted);
            console.log(stopwatch.time);
            // The other logic that says when time is up, we switch to a third condition (opposed to the clicked right and clicked wrong conditions)
            if (stopwatch.time === -1) {
                clearInterval(intervalId);
                $("#question-answers").html("");
                $("#question-answers").append("<div class='text-center question'>Time's up! The correct answer is " + questionsArray[questionCount].answers[questionsArray[questionCount].correctIndex] + "</div>");
                $("#question-answers").append("<div class='text-center'>" + gifsArray[questionCount] + "</div>");
                questionCount++;
                unanswered++;
                setTimeout(function() {
                    newQuestAtStart();
                }, 3000);
                console.log(questionCount);
            }


        },


        timeConverter: function(t) {
            if (t < 10) {
                t = "0" + t;
            }

            return t;
        }
    };
});