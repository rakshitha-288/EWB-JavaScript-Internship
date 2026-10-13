const score = Number(prompt("enter your score:"));

let grade;

if (score >= 90){
    grade = "A";
}
else if (score >= 80){
    grade = "B";
}
else if (score >= 70){
    grade = "C";
}
else if (score >= 60){
    grade = "D";
}
else{
    grade = "E";
}

switch( grade ){
    case "A":
        grade = "A";
        break;
    case "B":
        grade = "B";
        break;
    case "C":
        grade = "C";
        break;
    case "D":
        grade = "D";
        break;
    default:
        grade = "E";
}

const status = score >= 40 ? "Passed" : "Failed";

console.log("score:" + score);
console.log("grade" + grade);
console.log("status:" + status);
