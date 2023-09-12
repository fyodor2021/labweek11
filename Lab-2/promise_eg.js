function makePromiseCall(x){
    let p1 = new Promise((resolve,reject)=>{
        if(x > 2){
            resolve({msg:"Promise GOT Success"})
        }else{
            reject("Promise failed")
        }
    
    })
    return p1
}


makePromiseCall(100).then((data)=>{
    //console.log("Success: " + JSON.stringify)
    console.log("Success: "+ data.msg)
},err=>{
    console.log("Error: " + err)
})
 
makePromiseCall(1).then((Success)=>{
    console.log(Success)
}).catch((err)=>{
    console.log("Error: " + err )
}).finally(() => {
    console.log("Finally")
})

makePromiseCall(100).then( s => {
    console.log("call 1 : " + s)
    console.log("call 11 : " + s.msg)
    return "I am from the first call"
}).then( y => {
    console.log("call 2 : " + y)
})