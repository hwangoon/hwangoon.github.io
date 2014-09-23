var App = {};
App.title = "다음시즌 나의 롤 티어는?";
App.desc = "나는 롤을 잘하고싶다! 결과는 재미로 봐주세요 ^^";
App.thumbnail = "https://lh4.ggpht.com/hPN__HpXBvIRzaK55Bb2hvu4XDk42smw48Ktj0B4e_oYNEkjlAK31uCnmSxhsQ003nk=h900";
App.input = '<input text="text" placeholder="이름을 입력해주세요." id="input-name" class="text-input" required="true">';
App.result = "%var1%님의 다음시즌 롤 티어는 '%var2%'입니다.";
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
		"챌린저",
		"다이아1",
		"다이아1",
		"다이아2",
		"다이아2",
		"다이아2",
		"다이아3",
		"다이아3",
		"다이아3",
		"다이아3",
		"다이아4",
		"다이아4",
		"다이아4",
		"다이아4",
		"다이아4",
		"다이아5",
		"다이아5",
		"다이아5",
		"다이아5",
		"다이아5",
		"다이아5",
		"플레티넘1",
		"플레티넘1",
		"플레티넘1",
		"플레티넘1",
		"플레티넘1",
		"플레티넘1",
		"플레티넘1",
		"플레티넘2",
		"플레티넘2",
		"플레티넘2",
		"플레티넘2",
		"플레티넘2",
		"플레티넘2",
		"플레티넘2",
		"플레티넘2",
		"플레티넘3",
		"플레티넘3",
		"플레티넘3",
		"플레티넘3",
		"플레티넘3",
		"플레티넘3",
		"플레티넘3",
		"플레티넘3",
		"플레티넘3",
		"플레티넘4",
		"플레티넘4",
		"플레티넘4",
		"플레티넘4",
		"플레티넘4",
		"플레티넘4",
		"플레티넘4",
		"플레티넘4",
		"플레티넘4",
		"플레티넘4",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"플레티넘5",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드1",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드2",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드3",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드4",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"골드5",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버1",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버2",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버3",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버4",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"실버5",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈1",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈2",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈3",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈4",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"브론즈5",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭",
		"언랭"
	]
];