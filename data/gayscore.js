var App = {};
App.title = "게이 확률 계산기";
App.desc = "내가 게이일 확률은 얼마나 될까? 결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://cfile6.uf.tistory.com/image/1371F94050341AA3011E72";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.result = "%var1%님이 게이일 확률은 %var2%%로 %var3% 편입니다.";
App.resultUrl = window.location;
App.getResult = function() {
	var rnd = getRandomNumber(0,100);
	var name = $('#input-name').val();

	if(name == '') {
		alert('이름을 입력해주세요.');
		$('#input-name').focus();
		return null;
	} else {
		var result = App.result;
		var vars = [
			name,
			rnd,
			((rnd < 20) ? '낮은' : 
				((rnd < 40) ? '다소 낮은' :
					((rnd < 60) ? '보통인' :
						((rnd < 80) ? '높은' : 
							'아주높은'))))
		];
		for(i=0; i<vars.length; i++) {
			pattern = "\%var"+(i+1)+"\%";
			var regexp = new RegExp(pattern, "gi");
			result = result.replace(regexp, vars[i]);
		}
		App.resultUrl = CURRENT_URL.replace(/&.+/,'')+'&type=result&vars='+encodeURIComponent(JSON.stringify(vars));

		return result;
		//return name+"님은 "+rnd+"%의 선과 "+(100-rnd)+"%의 악으로 이루어져 있습니다.";
	}
}
App.data = [];