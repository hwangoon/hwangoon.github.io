var timer;
var APPNAME;
var TYPE;
var CURRENT_URL = window.location.toString();
$(document).ready(function() {
	APPNAME = getParm('name');
	TYPE = getParm('type') ? decodeURIComponent(getParm('type')) : 'play';
	
	var list = '';
	if(typeof List != 'undefined') {
		List = array_shuffle(List);
		$(List).each(function() {
			is_active = false;
			if(this[0] == APPNAME) {
				is_active = true;
			}
			list += '<a href="?name='+this[0]+'" class="list-group-item'+
				(is_active ? ' active':'')+
				'">'+
				this[1]+
				'</a>';
		});
		$('.list-group').append(list);
	}
	
	$('.result').hide();

	if(is_mobile() == false) {
		$('button.ks').hide();
		$('button.kt').hide();
		alert("카카오스토리, 카톡으로 결과보기 기능은 모바일에서만 가능합니다.");
	}
	if(APPNAME != null && APPNAME != '') {
		loadFile('./data/'+APPNAME+'.js', 'js');
		timer = setInterval("checkLoadFile('./data/"+APPNAME+".js', 'js', init)", 300);
	} else {
		$('.content').hide();
		$('.list > h2').text('카카오테스트');
		$('.adwrap:eq(0)').hide();
	}
});

var init = function() {
	if(TYPE == 'result') {
		var result = App.result;
		var vars = JSON.parse(getParm('vars'));
		for(i=0; i<vars.length; i++) {
			pattern = "\%var"+(i+1)+"\%";
			var regexp = new RegExp(pattern, "gi");
			result = result.replace(regexp, '<span class="text-danger">'+vars[i]+'</span>');
		}
		
		$('#result-app-title').text("'"+App.title+"' 실행결과:");
		$('#result-body').html(result);
		
		$('.result').show();
	}
	$('title').text(App.title + ' - ' +$('title').text());
	$('#app-title').text(App.title);
	$('#app-desc').text(App.desc);
	$('#app-input').html(App.input);
}

var getResult = function(type) {
	var resultText = App.getResult();
	console.log(resultText);

	if(resultText != null) {
		if(type == "ks") {
			//카카오스토리
			kakao.link("story").send({
				post: '['+App.title+'] 실행결과\n\'올리기\'버튼을 누른 후 아래 링크에서 확인해 주세요.\n\n'
					+App.resultUrl,
				appid:window.location+ Math.floor(Math.random()*100000),
				appver:"1.0",
				appname:App.title,
				urlinfo:JSON.stringify({
					title:'['+App.title+'] 실행결과',
					desc:'['+App.title+'] 실행 결과를 확인하려면 이곳을 누르세요.',
					imageurl:[App.thumbnail],
					type:"article"})
			});
		} else if(type == "fb") {
			//페이스북

		} else if(type == "tw") {
			//트위터

		} else if(type == "kt") {
			//카카오톡
			function executeURLLink() {
				kakao.link("talk").send({
					msg: App.desc,
					url: window.location,
					appid: window.location,
					appver: "1.0",
					appname: App.title,
					type: "link"
				});
			}

		}
	}
}

//utilities
function getParm(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function loadFile(filename, filetype){
 if (filetype=="js"){ //if filename is a external JavaScript file
  var fileref=document.createElement('script')
  fileref.setAttribute("type","text/javascript")
  fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){ //if filename is an external CSS file
  var fileref=document.createElement("link")
  fileref.setAttribute("rel", "stylesheet")
  fileref.setAttribute("type", "text/css")
  fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
  document.getElementsByTagName("head")[0].appendChild(fileref)
}

var filesadded=""
function checkLoadFile(filename, filetype, cb){
 if (filesadded.indexOf("["+filename+"]")==-1){
	loadFile(filename, filetype)
	filesadded+="["+filename+"]" //List of files added in the form "[filename1],[filename2],etc"
	if(typeof App != 'undefined') {
		clearInterval(timer);
		cb();
	}
 }
 else
  return null;
}

function getRandomNumber(start, end) {
	return Math.floor((Math.random() * end) % end + start);
}

function is_mobile(){
	if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||
		navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||
		navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||
		navigator.userAgent.match(/Windows Phone/i)){
		return true;
	}else{
		return false;
	}
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function array_shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};