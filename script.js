function fun(){
  const val1=Number(document.getElementById("id1").value);
  const val2=Number(document.getElementById("id2").value);
  const ele=document.createElement("div");
  const sum=val1+val2;
  if(sum.toFixed(2)==="58.01")//truncate to 2 decimal points
  //floating point comparison
  //triple equals  used to comparison equal to compare values both type and value
  // 5 =="5" is true in JS but  5==="5" if false in JS
  // It is better to use === always in JS
  {
    ele.innerHTML="Correct = "+("58.01");
  }
  else{
    ele.innerHTML="Incorrect="+(sum);
  }
  ele.style.backgroundColor="lightblue";
  const containingElement=document.body;
  containingElement.appendChild(ele);
  
}