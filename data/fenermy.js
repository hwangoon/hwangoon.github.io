var App = {};
App.title = "전생의 원수";
App.desc = "전생의 원수를 알아봅니다. 결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://cfile1.uf.tistory.com/image/17777D4C4FB8E7EF014420";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.result = "%var1%님의 전생의 원수는 %var2%입니다.";
App.resultUrl = window.location;
App.getResult = function() {
	var rnd = getRandomNumber(0,App.data[0].length);	//array!
	var name = $('#input-name').val();

	if(name == '') {
		alert('이름을 입력해주세요.');
		$('#input-name').focus();
		return null;
	} else {
		var result = App.result;
		var vars = [
			name,
			App.data[0][rnd]
		];
		for(i=0; i<vars.length; i++) {
			pattern = "\%var"+(i+1)+"\%";
			var regexp = new RegExp(pattern, "gi");
			result = result.replace(regexp, vars[i]);
		}
		App.resultUrl = CURRENT_URL.replace(/&.+/,'')+'&type=result&vars='+encodeURIComponent(JSON.stringify(vars));

		return result;
	}
}
App.data = [
	[
		"친구",
		"동생",
		"엄마",
		"아빠",
		"우리반 1번",
		"우리반 2번",
		"우리반 3번",
		"우리반 4번",
		"우리반 5번",
		"우리반 6번",
		"우리반 7번",
		"우리반 8번",
		"우리반 9번",
		"우리반 10번",
		"우리반 11번",
		"우리반 12번",
		"우리반 13번",
		"우리반 14번",
		"우리반 15번",
		"우리반 16번",
		"우리반 17번",
		"우리반 18번",
		"우리반 19번",
		"우리반 20번",
		"옆반 1번",
		"옆반 2번",
		"옆반 3번",
		"옆반 4번",
		"옆반 5번",
		"옆반 6번",
		"옆반 7번",
		"옆반 8번",
		"옆반 9번",
		"옆반 10번",
		"옆반 11번",
		"옆반 12번",
		"옆반 13번",
		"옆반 14번",
		"옆반 15번",
		"옆반 16번",
		"옆반 17번",
		"옆반 18번",
		"옆반 19번",
		"옆반 20번",
		"담임",
		"담임선생님",
		"담심 선생님",
		"옆반 담임",
		"옆반 담임선생님",
		"옆반 담임 선생님",
		"교장",
		"교장선생님",
		"교장 선생님",
		"교감",
		"교감선생님",
		"교감 선생님",
		"양호선생님",
		"양호 선생님",
		"체육선생님",
		"체육 선생님",
		"썸남 혹은 썸녀",
		"EXO 수호",
		"EXO 백현",
		"EXO 찬열",
		"EXO 디오",
		"EXO 카이",
		"EXO 세훈",
		"B1A4 진영",
		"B1A4 신우",
		"B1A4 산들",
		"B1A4 바로",
		"B1A4 공찬",
		"제국의아이들 문준영",
		"제국의아이들 Kevin",
		"제국의아이들 황광희",
		"제국의아이들 임시완",
		"제국의아이들 김태헌",
		"제국의아이들 정희철",
		"제국의아이들 하민우",
		"제국의아이들 박형식",
		"제국의아이들 김동준",
		"걸스데이 소진",
		"걸스데이 유라",
		"걸스데이 민아",
		"걸스데이 혜리",
		"에이핑크 박초롱",
		"에이핑크 윤보미",
		"에이핑크 정은지",
		"에이핑크 손나은",
		"에이핑크 김남주",
		"에이핑크 박초롱",
		"AOA 지민",
		"AOA 초아",
		"AOA 유나",
		"AOA 유경",
		"AOA 혜정",
		"AOA 민아",
		"AOA 설현",
		"AOA 찬미",
		"f(x) 빅토리아",
		"f(x) 엠버",
		"f(x) 루나",
		"f(x) 설리",
		"f(x) 크리스탈"
	]
];