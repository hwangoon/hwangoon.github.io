var timer;

$(document).ready(function() {
	var APPNAME = getParm('name');
	
	var list = '';
	$(List).each(function() {
		is_active = false;
		if(this[0] == APPNAME) {
			is_active = true;
		}
		list += '<a href="index.html?name='+this[0]+'" class="list-group-item'+
			(is_active ? ' active':'')+
			'">'+
			this[1]+
			'</a>';
	});
	$('.list-group').append(list);

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
				post: resultText+"\n\n테스트하러가기\n"+window.location,
				appid:window.location+ Math.floor(Math.random()*100000),
				appver:"1.0",
				appname:App.title,
				urlinfo:JSON.stringify({
					title:'['+App.title+']',
					desc:App.desc,
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
  clearInterval(timer);
	cb();
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