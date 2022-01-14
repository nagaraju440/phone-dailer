
  var x=document.getElementById("x")
  var s=""
addNumber=(num)=>{
  console.log("you clicked",num)
  if(num==100){
      num="*"
  }
  if(num==101){
    num="#"
  }
  s=s+num;
  x.value=s

}
removeNumber=()=>{
    s=s.slice(0, -1);
    x.value=s
}