var App = {};
App.title = "그린라이트";
App.desc = "썸타고 있는 그/그녀... 과연 그린라이트일까요? 결과는 재미로 봐주세요 ^^";
App.thumbnail = "https://lh4.ggpht.com/hPN__HpXBvIRzaK55Bb2hvu4XDk42smw48Ktj0B4e_oYNEkjlAK31uCnmSxhsQ003nk=h900";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.getResult = function() {
	var rnd = getRandomNumber(0,App.data[0].length);	//array!
	var name = $('#input-name').val();

	if(name == '') {
		alert('이름을 입력해주세요.');
		$('#input-name').focus();
		return null;
	} else {
		return name+"님의 현재 상태는 그린라이트가 "+ App.data[0][rnd];
	}
}
App.data = [
	[
		"맞습니다. 적극적으로 도전해보세요!",
		"맞습니다. 적극적으로 도전해보세요!",
		"아닙니다. 조금만 더 기다려보세요."
	]
];