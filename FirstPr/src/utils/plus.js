const isValidNumber = function(value){
    return typeof value==="number";
}

const plus = (a,b)=> {
    if(!isValidNumber(a)||!isValidNumber(b))throw new Error('error');
    return (a+b);
}
module.exports=plus;