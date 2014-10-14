var App = {};
App.title = "야동식 이름짓기";
App.desc = "내 야동식 이름은? ㅋㅋ 결과는 재미로 봐주세요 ^^";
App.thumbnail = "https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xap1/v/t1.0-9/10360205_1512302872351604_3954709963097402839_n.png?oh=374b50c6a778e181848fa4ec90d0ebbf&oe=54BBAC18&__gda__=1421778209_587aec0aac564dc3c632171f58a94de9";
App.input = '\
	<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">\
	<br />\
	<select id="input-year">\
		<option value="0">XXX0</option>\
		<option value="1">XXX1</option>\
		<option value="2">XXX2</option>\
		<option value="3">XXX3</option>\
		<option value="4">XXX4</option>\
		<option value="5">XXX5</option>\
		<option value="6">XXX6</option>\
		<option value="7">XXX7</option>\
		<option value="8">XXX8</option>\
		<option value="9">XXX9</option>\
	</select>년\
	\
	<select id="input-month">\
		<option value="0">1</option>\
		<option value="1">2</option>\
		<option value="2">3</option>\
		<option value="3">4</option>\
		<option value="4">5</option>\
		<option value="5">6</option>\
		<option value="6">7</option>\
		<option value="7">8</option>\
		<option value="8">9</option>\
		<option value="9">10</option>\
		<option value="10">11</option>\
		<option value="11">12</option>\
	</select>월\
	\
	<select id="input-day">\
		<option value="0">1</option>\
		<option value="1">2</option>\
		<option value="2">3</option>\
		<option value="3">4</option>\
		<option value="4">5</option>\
		<option value="5">6</option>\
		<option value="6">7</option>\
		<option value="7">8</option>\
		<option value="8">9</option>\
		<option value="9">10</option>\
		<option value="11">11</option>\
		<option value="12">12</option>\
		<option value="13">13</option>\
		<option value="14">14</option>\
		<option value="15">15</option>\
		<option value="16">16</option>\
		<option value="17">17</option>\
		<option value="18">18</option>\
		<option value="19">19</option>\
		<option value="20">20</option>\
		<option value="21">21</option>\
		<option value="22">22</option>\
		<option value="23">23</option>\
		<option value="24">24</option>\
		<option value="25">25</option>\
		<option value="26">26</option>\
		<option value="27">27</option>\
		<option value="28">28</option>\
		<option value="29">29</option>\
		<option value="30">30</option>\
		<option value="31">31</option>\
	</select>일\
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