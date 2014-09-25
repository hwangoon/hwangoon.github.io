var App = {};
App.title = "내가 평생 모을 수 있는 돈은?";
App.desc = "내가 평상 모을 수 있는 돈은 얼마나 될까요? 결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://cfile25.uf.tistory.com/image/204EFD4C4D1013E425A788";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.result = "%var1%님이 평생 모을 수 있는 돈은 %var3%%var4%원입니다.";
App.resultUrl = window.location;
App.getResult = function() {
	var rnd1 = getRandomNumber(0, App.data[0].length);	//array!
	var rnd2 = getRandomNumber(0, App.data[1].length);	//array!
	var name = $('#input-name').val();
	
	if(name == '') {
		alert('이름을 입력해주세요.');
		$('#input-name').focus();
		return null;
	} else {
		var result = App.result;
		var vars = [
			name,
			App.data[0][rnd1],
			App.data[1][rnd2]
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
	['','이','삼','사','오','육','칠','팔','구'],
	['','십','백','천','만','십만','백만','천만','억','십억','백억','천억','조','십조','백조','천조']
];