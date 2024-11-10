let n  =3;
let A = [];
let PEM = [];
let U = [];
let L = [];
let U2=[];
let D = [];



function formMatrix(lst) {
    let Str = "";
    for (let i of lst) {
        Str += "[ ";
        for (let j of i) {
            Str += `${j} `;
        }
        Str += "]" + "<br>";
    }
    return Str;
}


function Ordertaken(id) {
    n=parseInt(prompt("enter order of matrix"));
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            let k = parseInt(prompt(`Enter value for a[${i + 1}][${j + 1}]: `));
            row.push(k);
        }
        A.push(row);
    }
    document.getElementById(id).innerHTML=formMatrix(A);
}



