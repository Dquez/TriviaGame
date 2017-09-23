$(document).ready(function() {
    // Global Variables
    $("#question-div").hide();

    var questionCount = 0;
    var incorrectAnswers;
    var correctAnswers;
    var intervalId;

    //prevents the clock from being sped up unnecessarily
    var clockRunning = false;
    var count;
    var timeConverted;




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






    // setTimeout(nextQuestion, 5000);


    // $("button").on(
    //     "click",
    //     function() {
    //         var person = $(this).attr("data-person");
    //         stopwatch.questionCount++;
    //     },
    //     5000
    // );




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

    // $("#first").hide();
    // $("#second").hide();
    // $("#first").hide();
    // $("#third").hide();
    // $("#fourth").hide();
    // $("#fifth").hide();
    // $("#sixth").hide();
    // $("#seventh").hide();
    // $("#eighth").hide();
    // $("#ninth").hide();
    // $("#tenth").hide();

    // $("#firstGif").append();
    // Functions


    function generateQuestion() {
       $("#question-div").show();

        for (var i = 0; i < questionsArray.length; i++) {
            
            $("#question-answers").append(
                "<div class='text-center question'>" +
                questionsArray[i].question +
                "</div>"
            );
            // Where to hide question-answers[i > current iteration]
            for (var j = 0; j < questionsArray[i].answers.length; j++) {
                $("#question-answers").append(
                    "<div class='answer text-center' id='answer-" +
                    j +
                    "'data-answer-index= " +
                    j +
                    ">" +
                    questionsArray[i].answers[j] +
                    "</div>"
                );
            }
        }
    }

   // TODO Fix timer to stop at 0, change between quesitons, set up clicking event on answers


    // Main Process
    $("#start").on("click", function() {
        intervalId = setInterval(stopwatch.count, 1000);
        // stopwatch.count(); $(this).data("answerIndex") gameRandom.indexOf(userInput) > -1
        generateQuestion();
        console.log(this);
        $("body").on("click", ".answer", function() {
            if ($(this).data("answer-index") === $(this).correctIndex) {
                console.log(this);
                clearInterval(intervalId);
                $("#question-answers").empty();
                $("#question-answers").append("<div class='text-center question'>Correct!</div>)");
                $("#question-answers").append(gif1);
                setTimeout(function() {
                    $(this).hide();
                }, 5000);
            } else if ($(".answer").on("click").indexOf(questionsArray[i].correctIndex) == -1 || stopwatch.time === -1) {
                clearInterval(intervalId);
                $("#question-answers").empty();
                $("#question-answers").append("<div class='text-center question'>Sorry, the correct answer was this.data-index </div>)");
                $("#question-answers").append(gif1);
                setTimeout(function() {
                    $(this).hide();
                }, 5000);
            }
        });
    });

    //  The timer object.
    var stopwatch = {
        time: 45,
        // questionCount: 0,

        reset: function() {
            stopwatch.time = 45;
            $(".time-left").html(stopwatch.time);
            clearInterval(intervalId);

            stopwatch.start();
            // stopwatch.questionCount = 0;
        },

        // start: function() {
        //         ,
        newQuestion: function() {
            clearInterval(intervalId);
        },

        count: function() {
            var converted = stopwatch.timeConverter(stopwatch.time);
            timeCoverted = converted;
            $("#intro").hide();
            stopwatch.time--;
            $(".time-left").html(converted);
        },
        // } else {
        //     stopwatch.time--;
        //     console.log(stopwatch.time);
        //     $(".time-left").html(converted);
        // }
        // },

        timeConverter: function(t) {
            if (t < 10) {
                t = "0" + t;
            }

            return t;
        }
    };
});