let nam;
let boo=true;
nam="Yarik";
const header = document.querySelector("#header") /* queryselector выделяет рабочую область и заносит в переменную для дальнейшего изменения*/
console.log(nam, typeof boo,header);
function simpleMath(a,b){
    let result = a+b;
    return result
}
let sum = simpleMath(33, 52);
console.log(sum);