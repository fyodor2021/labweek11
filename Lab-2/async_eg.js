async function sayHello (){
    console.log("Hello world - start")
    let c = await makePromiseCall(100)
    console.log(c)
    


    try{
        c = await makePromiseCall(1)
    console.log(c)
    }catch(e){
        console.log(e)
    }
    console.log("Hello world - end")

}

async function makePromiseCall(x){
    let p1 = new Promise((resolve,reject)=>{
        if(x > 2){
            resolve({msg:"Promise GOT Success"})
        }else{
            reject("Promise failed")
        }
    
    })
    return p1
}

sayHello().then(() => {
    console.log("sayHello")
})