var App = {};
App.title = "나에게 성형이 가장 필요한 부위는?";
App.desc = "나에게 성형이 가장 필요한 부위는 어디일까요? 결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://cfile23.uf.tistory.com/image/182E38424E62C71A2DFC25";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.result = "%var1%님에게 성형이 가장 필요한 부위는 %var2%입니다.";
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
		"눈",
		"코",
		"입",
		"귀",
		"피부",
		"턱",
		"광대",
		"머리 전체",
		"어깨",
		"가슴",
		"목",
		"이마",
		"뒤통수",
		"손목",
		"팔뚝",
		"뱃살",
		"등",
		"엉덩이",
		"종아리",
		"허벅지",
		"다리",
		"팔",
		"무릎",
		"발",
		"발가락",
		"손가락",
		"발바닥",
		"손바닥",
		"팔꿈치",
		"허리",
		"옆구리",
		"상체",
		"하체",
		"몸 전체",
		"팔꿈치",
		"인중",
		"콧망울",
		"콧등",
		"눈썹",
		"눈두덩이"
	]
];