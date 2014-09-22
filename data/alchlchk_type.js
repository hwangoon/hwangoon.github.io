var App = {};
App.title = "내 몸에 맞는 술 알아보기";
App.desc = "내 몸에는 어떤 술이 궁합이 잘 맞을까요? 결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://cfile2.uf.tistory.com/image/1554BA3850AE6761147A7F";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.getResult = function() {
	var rnd = getRandomNumber(0,App.data[0].length);	//array!
	var name = $('#input-name').val();

	if(name == '') {
		alert('이름을 입력해주세요.');
		$('#input-name').focus();
		return null;
	} else {
		return name+"님에게 어울리는 술은 "+ App.data[0][rnd]+"입니다.";
	}
}
App.data = [
	[
		"소주",
		"맥주",
		"양주",
		"폭탄주",
		"빼갈",
		"이과두주",
		"고량주",
		"백세주",
		"오십세주",
		"동동주",
		"막걸리",
		"예거밤",
		"보드카",
		"법주",
		"포도주",
		"와인",
		"복분자주",
		"정종",
		"사케",
		"위스키",
		"꼬냑",
		"럼주",
		"칵테일",
		"쏘맥",
		"청주",
		"과일소주",
		"브랜디"
	]
];