var App = {};
App.title = "주량 측정기";
App.desc = "내 주량은 얼마나 될까요? 결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://cfile2.uf.tistory.com/image/1554BA3850AE6761147A7F";
App.input = '<select id="input-type" class="select-input">'+
	'<option>술의 종류를 선택해주세요.</option>'+
	'<option>소주</option>'+
	'<option>맥주</option>'+
	'<option>소맥</option>'+
	'<option>양주</option>'+
	'<option>양맥</option>'+
	'<option>고량주</option>'+
	'<option>보드카</option>'+
	'<option>꼬냑</option>'+
	'</select>'+
	'<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.getResult = function() {
	var rnd = getRandomNumber(0,App.data[0].length);	//array!
	var rnd1 = getRandomNumber(1, 10);	//array!
	var name = $('#input-name').val();
	var type = $('#input-type').val();

	if(type == '술의 종류를 선택해주세요.') {
		alert('술의 종류를 선택해주세요.');
		$('#input-type').focus();
		return null;
	} else if(name == '') {
		alert('이름을 입력해주세요.');
		$('#input-name').focus();
		return null;
	} else {
		return name+"님의 "+type+" 주량은 "+rnd1+App.data[0][rnd]+"입니다.";
	}
}
App.data = [
	['병','잔','방울','사발','대접','미리','리터','톤']
];