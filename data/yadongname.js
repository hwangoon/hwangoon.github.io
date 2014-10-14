var App = {};
App.title = "야동식 이름짓기";
App.desc = "내 야동식 이름은? ㅋㅋ 결과는 재미로 봐주세요 ^^";
App.thumbnail = "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10360205_1512302872351604_3954709963097402839_n.png?oh=374b50c6a778e181848fa4ec90d0ebbf&oe=54BBAC18&__gda__=1421778209_587aec0aac564dc3c632171f58a94de9";
App.input = '\
	<select id="input-year" class="select-input">\
		<option value="0">XXX0년</option>\
		<option value="1">XXX1년</option>\
		<option value="2">XXX2년</option>\
		<option value="3">XXX3년</option>\
		<option value="4">XXX4년</option>\
		<option value="5">XXX5년</option>\
		<option value="6">XXX6년</option>\
		<option value="7">XXX7년</option>\
		<option value="8">XXX8년</option>\
		<option value="9">XXX9년</option>\
	</select>\
	<br />\
	<select id="input-month" class="select-input">\
		<option value="0">1월</option>\
		<option value="1">2월</option>\
		<option value="2">3월</option>\
		<option value="3">4월</option>\
		<option value="4">5월</option>\
		<option value="5">6월</option>\
		<option value="6">7월</option>\
		<option value="7">8월</option>\
		<option value="8">9월</option>\
		<option value="9">10월</option>\
		<option value="10">11월</option>\
		<option value="11">12월</option>\
	</select>\
	<br />\
	<select id="input-day" class="select-input">\
		<option value="0">1일</option>\
		<option value="1">2일</option>\
		<option value="2">3일</option>\
		<option value="3">4일</option>\
		<option value="4">5일</option>\
		<option value="5">6일</option>\
		<option value="6">7일</option>\
		<option value="7">8일</option>\
		<option value="8">9일</option>\
		<option value="9">10일</option>\
		<option value="11">11일</option>\
		<option value="12">12일</option>\
		<option value="13">13일</option>\
		<option value="14">14일</option>\
		<option value="15">15일</option>\
		<option value="16">16일</option>\
		<option value="17">17일</option>\
		<option value="18">18일</option>\
		<option value="19">19일</option>\
		<option value="20">20일</option>\
		<option value="21">21일</option>\
		<option value="22">22일</option>\
		<option value="23">23일</option>\
		<option value="24">24일</option>\
		<option value="25">25일</option>\
		<option value="26">26일</option>\
		<option value="27">27일</option>\
		<option value="28">28일</option>\
		<option value="29">29일</option>\
		<option value="30">30일</option>\
		<option value="31">31일</option>\
	</select>\
	<br />\
	<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">\
';
App.result = "%var1%님의 야동식 이름은 '%var2% %var3% %var4%'입니다.";
App.resultUrl = window.location;
App.getResult = function() {
	var rnd = getRandomNumber(0,App.data[0].length);	//array!
	var name = $('#input-name').val();
	var year = $('#input-year').val();
	var month = $('#input-month').val();
	var day = $('#input-day').val();

	if(name == '') {
		alert('이름을 입력해주세요.');
		$('#input-name').focus();
		return null;
	} else {
		var result = App.result;
		var vars = [
			name,
			App.data[0][parseInt(year)],
			App.data[1][parseInt(month)],
			App.data[2][parseInt(day)]
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
		"내 엉덩이의",
		"내 가슴의",
		"내 다리의",
		"내 팔뚝의",
		"내 뒤통수의",
		"내 가랑이의", 
		"내뒤통수 의",
		"내 허벅지의",
		"내 배꼽의",
		"내 정수리의"
	],
	[
		"섹시함(은)",
		"도발적임(은)",
		"힘(은)",
		"탄력(은)",
		"질감(은)",
		"느낌(은)",
		"맛(은)",
		"향기(은)",
		"흔들림(은)",
		"꾸물거림(은)",
		"튕김(은)",
		"진동(은)"
	],
	[
		"길어졌다.",
		"땅으로 꺼졌다.",
		"빙구같다.",
		"미쳤다.",
		"비싸다.",
		"하늘로 솟았다.",
		"안타깝다.",
		"한숨만 나온다.",
		"짧아졌다.",
		"그대들과는 다르다.",
		"다 거짓말이다.",
		"자존심 상한다.",
		"영원하다.",
		"싸다.",
		"불타고 있다.",
		"높아졌다.",
		"선덕거린다.",
		"예~뿨",
		"폭발했다.",
		"아쉽다.",
		"빵빵 터진다.",
		"귀요미다.",
		"낮아졌다.",
		"시크하다.",
		"사라졌다.",
		"나를 조련한다.",
		"어이없다.",
		"핫이슈다.",
		"여전하다.",
		"키키키키킼ㅋ키",
		"야하다."
	]
];