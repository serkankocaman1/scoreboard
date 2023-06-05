let team1 = document.getElementById("team-1")
let team2 = document.getElementById("team-2")

let scoreCount1 = 0
let scoreCount2 = 0


function plusoneTeam1(){
    scoreCount1 += 1
    team1.textContent = scoreCount1
    console.log(team1.textContent);
}
function plustwoTeam1(){
    scoreCount1 += 2
    team1.textContent = scoreCount1
    console.log(team1.textContent);
}
function plusthreeTeam1(){
    scoreCount1 += 3
    team1.textContent = scoreCount1
    console.log(team1.textContent);
}

function plusoneTeam2(){
    scoreCount2 += 1
    team2.textContent = scoreCount2
    console.log(team2.textContent);
}
function plustwoTeam2(){
    scoreCount2 += 2
    team2.textContent = scoreCount2
    console.log(team2.textContent);
}
function plusthreeTeam2(){
    scoreCount2 += 3
    team2.textContent = scoreCount2
    console.log(team2.textContent);
}

function newgame(){
    scoreCount1 = 0
    scoreCount2 = 0
    team1.textContent = scoreCount1
    team2.textContent = scoreCount2
}