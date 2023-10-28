//Do a loop on array and show its original properties
Array.prototype.extraProperty="Shreedhar"
const myNewArray=[1,2,3,4]
for(let v in myNewArray){
    console.log(v)///This loop dosent show oraginal property...it also show extra property
}
//So in order to print original property
console.log("This loop dosent show oraginal property...it also show extra property")
console.log("/So in order to print original property")
for(let v in myNewArray){
    if(myNewArray.hasOwnProperty(v)){
        console.log(v)
    }
}