function back(){
    window.location="index1.html";
}
function get_score(){
    score=localStorage.getItem("score");
    document.getElementById("upddate").innerHTML="<h1>score="+score+"</h1>";
}