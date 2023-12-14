function makeSum(){
    let sum = 0;
    function resultFn(x){
        sum += x;
        console.log(sum)
        return resultFn;
    }
    return resultFn
}
let sum = makeSum()
sum(3);
sum(5);
sum(20);

