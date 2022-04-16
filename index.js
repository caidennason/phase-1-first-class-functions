function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return function dog(){}
}

function returnsAnAnonymousFunction(){
    return function(){}
}