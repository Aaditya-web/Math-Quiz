player_1_name= localStorage.getItem("player_1_name");
player_2_name= localStorage.getItem("player_2_name");

player_1_score= 0;
player_2_score= 0;

document.getElementById("player_1_name").innerHTML= player_1_name+ ":";
document.getElementById("player_2_name").innerHTML= player_2_name+ ":";

document.getElementById("player_1_score").innerHTML= player_1_score;
document.getElementById("player_2_score").innerHTML= player_2_score;

document.getElementById("Player_Question").innerHTML= "Question Turn - " + player_1_name;
document.getElementById("Player_Answer").innerHTML= "Answer Turn - " + player_2_name;

function login()
{
    window.location= "game_page.html"
}


function send()
{
    number1 = document.getElementById("number 1").value;
    number2 = document.getElementById("number 2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

  
    question_number = "<h4>" + number1 + " X " + number2 +"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value= "";

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";

}

question_turn = "player_1";
answer_turn = "player_2";

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn =="player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player_1_score").innerHTML = update_player1_score;

        }
        else
        {
           update_player2_score = player2_score +1;
           document.getElementById("player_2_score").innerHTML = update_player2_score
        }

    }

    if(question_turn =="player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - " + player_2_name;
    }

    if(question_turn =="player2")
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question turn - " + player_1_name;


    }

    if(question_turn =="player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - " + player_2_name;
    }

    if(question_turn =="player2")
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question turn - " + player_1_name;


    }
}
