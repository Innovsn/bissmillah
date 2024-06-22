$(function () {
    $("#add").click(function() {
        var studentID = $("#studentID").val();
        var score = $("#score").val();

        function addline(letter, color){
            $("#mylist").append( $('<li>' + studentID + " : (" + score + ") = " + letter + " </li>").css("color", color) );
        };

        function clearinput(){
            $("#studentID, #score").val("");
        };


        if (isNaN (studentID) || isNaN(score) || studentID < 0 || score < 0 || score > 100 || studentID == "" || score == "")
        {
            alert ("Whoops Invalid Score! Please enter only number and in range of 0 - 100");
            clearinput();
        }

        else
        {
            if (score >= 85 ){
                addline("A", "green");
            }
            else if (score >= 80){
                addline("A-", "green");
            }
            else if (score >= 75){
                addline("B+", "blue");
            }
            else if (score >= 70){
                addline("B", "blue");
            }
            else if (score >= 67){
                addline("B-", "blue");
            }
            else if (score >= 64){
                addline("C+", "orange");
            }
            else if (score >= 60){
                addline("C", "orange");
            }
            else if (score >= 55){
                addline("D", "red");
            }
            else if (score >= 0){
                addline("E", "red");
            }
            clearinput();
        }
    });
});