function $(id){
  return document.getElementById(id);
}

function strToArr(str){
  var arr=[],
      len=str.length;
  for(var i=0;i<len;i++){
    arr.push(str.charAt(i));
  }
  return arr;
}

function displayIn(str,elem){
  var tempArr=strToArr(str),
      i=0,
      len=tempArr.length,
  loop=setInterval(function(){
    elem.innerHTML+=tempArr[i++];
    if(i>=len){
      clearInterval(loop);
      elem.innerHTML+="\<br \/\>";
    }
  },500);
}


displayIn("hello world!",$("test"));

