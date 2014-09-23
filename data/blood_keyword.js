var App = {};
App.title = "내 혈액형에 어울리는 키워드";
App.desc = "내 혈액형에 어울리는 키워드는? 결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://cfile28.uf.tistory.com/image/27129F40518FCB4D069B4B";
App.input = '<select id="input-type" class="select-input">'+
	'<option>혈액형을 선택해 주세요.</option>'+
	'<option>A</option>'+
	'<option>B</option>'+
	'<option>O</option>'+
	'<option>AB</option>'+
	'</select>'+
	'<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.result = "%var1%형인 %var2%님에게 어울리는 키워드는 '%var3%', '%var4%', '%var5%', '%var6%'입니다.";
App.resultUrl = window.location;
App.getResult = function() {
	var rnd = [];
	rnd[0] = getRandomNumber(0,App.data[0].length);	//array!
	rnd[1] = getRandomNumber(0,App.data[1].length);	//array!
	rnd[2] = getRandomNumber(0,App.data[2].length);	//array!
	rnd[3] = getRandomNumber(0,App.data[3].length);	//array!
	var name = $('#input-name').val();
	var type = $('#input-type').val();

	if(type == '혈액형을 선택해 주세요.') {
		alert('혈액형을 선택해 주세요.');
		$('#input-type').focus();
		return null;
	} else if(name == '') {
		alert('이름을 입력해주세요.');
		$('#input-name').focus();
		return null;
	} else {
		var result = App.result;
		var vars = [
			type,
			name,
			App.data[0][rnd[0]],
			App.data[1][rnd[1]],
			App.data[2][rnd[2]],
			App.data[3][rnd[3]]
		];
		for(i=0; i<vars.length; i++) {
			pattern = "\%var"+(i+1)+"\%";
			var regexp = new RegExp(pattern, "gi");
			result = result.replace(regexp, vars[i]);
		}
		App.resultUrl = CURRENT_URL.replace(/&.+/,'')+'&type=result&vars='+JSON.stringify(vars);
		
		return result;
	}
}
App.data = [
	[
        "소심",
        "조용",
        "여성스러움",
        "배려",
        "인간관계",
        "약속",
        "섬세",
        "뒤끝",
        "계획",
        "애교",
        "낯가림",
        "순정파",
        "뒷처리",
        "답답",
        "부끄러움",
        "개그",
        "귀여움",
        "비꼬기",
        "깔끔",
        "어정쩡",
        "잔소리"
    ],
    [
        "잠",
        "순진",
        "뒷담",
        "배고픔",
        "정이 많음",
        "생활력",
        "칼같은 인간관계",
        "초딩",
        "톡톡튐",
        "귀찮음",
        "무신뢰",
        "매력",
        "나르시즘",
        "고양이",
        "더러움",
        "시끄러움",
        "의리",
        "오지랖",
        "패션",
        "자존심",
        "쿨한척",
        "감정과잉",
        "화려함",
        "유목민"
    ],
    [
        "리더",
        "수다쟁이",
        "평화",
        "관심",
        "기분파",
        "귀찮음",
        "끼",
        "나대기",
        "식욕",
        "솔직",
        "호불호",
        "칭찬",
        "자존심",
        "개념충만",
        "감동",
        "질투",
        "집착",
        "사교",
        "대범",
        "잘난척",
        "인정",
        "우울"
    ],
    [
        "비관",
        "잠",
        "비판",
        "냉정",
        "똑똑함",
        "패션",
        "선구자",
        "시크",
        "아웃사이더",
        "주관",
        "사오정",
        "충돌",
        "의심",
        "눈치",
        "특별",
        "자랑",
        "논리",
        "인내심",
        "투덜쟁이",
        "미소"
    ]
];