function fun(){
  var val1=Number(document.getElementById("id1").value);
  var val2=Number(document.getElementById("id2").value);
  const ele=document.createElement("div");
  ele.innerHTML="X+Y="+(val1+val2)
  ele.style.backgroundColor="lightblue";
  const containingElement=document.body;
  containingElement.appendChild(ele);
  
}