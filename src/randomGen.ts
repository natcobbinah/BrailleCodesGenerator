//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield

function* generateIdValue(index: number): any {
    let i = index;
    while(true){
        yield i;
        i += 1;
    }
}

export {generateIdValue};