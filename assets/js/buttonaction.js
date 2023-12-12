/**
 * 
 */

function numFunction() {

	var a = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    var result= Math.floor(Math.random() * 10) + 1;
    
   for (var i = 0; i < 10; i++) {
    if (i + 1 == result) {
     console.log(a[i]);
     console.log(i+1);
     document.getElementById("button-color").value =a[i];
     document.getElementById("button-color").style.fontSize = "4em";
     document.getElementById("button-color").style.fontWeight = "bold";
     document.getElementById("show-sentence").style.display = "inline-block";
     document.getElementById("button-color").disabled=true;
	break;
    }
   }

  }

function senFunction() {

	var b = [ "오늘은 유혹을 뿌리치세요.<br>그런다면 아주 좋은 일이 생길겁니다.", 
		"활동에 비해 성과에 만족하지 못할 수 있습니다.<br>하지만 이대로 밀고 나아간다면 <br>반드시 더 큰 성과를 얻을 수 있습니다.", 
		"성급한 판단으로 일을 그르치지 맙시다.",
		"즐거운 마음으로 크게 발전할 운세입니다.", 
		"오늘 너무 자신의 행동 반경을 넓히진 마세요.<br> 독이 될 수 있습니다.",
		"드디어 때가 왔습니다.<br> 당신이 하고자 하는 일이 이뤄질 것입니다.",
		"시간적 여유가 없어보이네요.<br> 마음의 안정과 휴식을 취하세요.",
		"당신의 말 한마디가 <br>다른 사람을 아프게 할 수 있습니다.<br> 오늘 하루 말 조심해요.", 
		"당연히 될거라 생각한 일이 실패할 수도 있습니다.<br> 끝까지 긴장을 늦추지 마세요.",
		"뭔가 좋은 기운이 들어오는 날입니다.<br> 오늘 하루 긍정적인 마음으로 보냅시다."];
    var result= Math.floor(Math.random() * 10) + 1;
    
   for (var i = 0; i < 10; i++) {
    if (i + 1 == result) {
     console.log(b[i]);
     console.log(i+1);
     document.getElementById("show-sentence").style.display = "inline-block";
     document.getElementById("button-color").disabled=true;
     document.getElementById("button-color").style.display="none";
     document.getElementById("showSen").style.display="inline";
     document.getElementById("showSen").innerHTML=b[i]
     break;
    }
   }
}
   function colorFunction() {
	  
		var c = [ "빨강", "주황", "노랑", "초록", "하늘", "파랑", "보라색", "흰색", "검은색", "분홍색"];
	    var result= Math.floor(Math.random() * 10) + 1;
	    var col=["#FF0000", "#FFA500", "#FFFF00", "#138D75", "#00ffff", "#0000FF", "#8A2BE2", "#FFFFFF", "#000000", "#FF1493"];
	   for (var i = 0; i < 10; i++) {
	    if (i + 1 == result) {
	     console.log(c[i]);
	     console.log(i+1);
	     console.log(col[i]);
	     document.getElementById("button-color").style.background=col[i];
	     document.getElementById("button-color").value =c[i];
	     document.getElementById("button-color").style.fontSize = "3em";
	     document.getElementById("button-color").style.fontWeight = "bold";
	     document.getElementById("show-sentence").style.display = "inline-block";
	     document.getElementById("button-color").disabled=true;
		break;
	    }
	   }

	  }