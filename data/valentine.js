var App = {};
App.title = "내가 발렌타인데이에 초콜렛을 받을 확률은?";
App.desc = "과연 나는 발렌타인데이에 초콜렛을 받을 수 있을까? 결과는 재미로 봐주세요 ^^";
App.thumbnail = "http://bocamag.com/site_media/uploads/January%202015/valentines-day.jpg";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.result = "%var1%님이 발렌타인데이에 초콜렛을 받을 확률은 %var2%%입니다.";
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
			rnd
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