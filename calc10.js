exports.add=function(a,b){
    let c=a+b;
    return `${a}+${b}=${c}`;
}
exports.sub=function(a,b){
    let c=a-b;
    return `${a}-${b}=${c}`;
}
function multiply(a,b){
    let c=a*b;
    return `${a}*${b}=${c}`;
}
function division(a,b){
    let c=a/b;
    return `${a}/${b}=${c}`;
}
exports.mul=multiply;
exports.div=division;