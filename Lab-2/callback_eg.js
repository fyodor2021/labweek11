function sum(a,b){
    console.log(a+b);
}

function makeCallback(x,y,fun){
    if(x >= y){
        fun(x,y)
    }else{
        console.log('A must be greater then y')
    }
}

makeCallback(10,2,sum)