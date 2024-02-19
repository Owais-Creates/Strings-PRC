// let ques1str = "owais";
// let revStr = "";
// let splistr = ques1str.split("");

// for (i = splistr.length; i <= 1; i++) {
//     revStr += splistr[i];

// }

// console.log(revStr)

let ques1str = "owais";
let revStr = "";
let splistr = ques1str.split("");

for (let i = splistr.length-1; i >= 0; i--) {
    revStr += splistr[i];
}

console.log(revStr);