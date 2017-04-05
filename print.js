function $(id){
  return document.getElementById(id);
}

function strToArr(str){
  var arr=[],
      len=str.length;
  for(var i=0;i<len;i++){
    arr.push(str.charAt(i));
  }
  arr.push("&nbsp;");
  return arr;
}

//顺序输出arr字符串到elem元素
//应用时无须给出num参数
//如果给出num参数,则输出从arr[num]之后的元素
//为了输出美观,每个元素输出时,结尾均多了一个空格
function displayIn(arr,elem,num){
  if(!num){
	  num=0;
  }
  var tempArr=strToArr(arr[num]),
      i=0,
      len=tempArr.length,
  loop=setInterval(function(){
    elem.innerHTML+=tempArr[i++];
    if(i>=len){
      clearInterval(loop);
      elem.innerHTML+="\<br \/\>";
	  if(num++<arr.length){
		  displayIn(arr,elem,num);
	  }
    }
  },300);
}

var arr=["hello world!","thanks for your review","要输出的字符以数组形式存储","一个元素占据一行依次输出"];

displayIn(arr,$("print"));