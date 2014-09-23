var App = {};
App.title = "선악지수 측정기";
App.desc = "내안의 선함과 악함은 어떻게 이루어져 있을까?  결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://pds.joins.com/news/component/gamemeca/201212/24/DMC2_121224.jpg";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.result = "%var1%님은 %var2%%의 선과 %var3%%의 악으로 이루어져 있습니다.";
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
			(100-rnd)
		];
		for(i=0; i<vars.length; i++) {
			pattern = "\%var"+(i+1)+"\%";
			var regexp = new RegExp(pattern, "gi");
			result = result.replace(regexp, vars[i]);
		}
		App.resultUrl = CURRENT_URL.replace(/&.+/,'')+'&type=result&vars='+JSON.stringify(vars);
		
		return result;
		//return name+"님은 "+rnd+"%의 선과 "+(100-rnd)+"%의 악으로 이루어져 있습니다.";
	}
}
App.data = [];