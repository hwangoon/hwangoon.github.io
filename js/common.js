var timer;
var APPNAME;
var TYPE;
var CURRENT_URL = window.location.toString();
var INITED = false;

$(document).ready(function() {
	APPNAME = getParm('name');
	TYPE = getParm('type') ? getParm('type') : 'play';
	
	addShortCut = 'naversearchapp://addshortcut?url=http%3A%2F%2Fhwangoon.github.io%2F%3Fref%3Dshortcut&icon=http%3A%2F%2Fpf.talk.kakao.co.kr%2Fatt%2Fmini%2F38%2F16%2F1%2FAZ8.png&title=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%85%8C%EC%8A%A4%ED%8A%B8&serviceCode=nstore&version=7';
	if(isMobile.Android()) {
		var uagent = navigator.userAgent.toLocaleLowerCase();
		if (uagent.search("chrome") > -1) {
			//chrome
			window.location = "intent:" + addShortCut + "#Intent;package=com.nhn.android.search;end;";
		} else {
			//default
			var iframe = document.createElement('iframe');
			iframe.style.display = 'none';
			iframe.src = addShortCut;
			//iframe.onload = install_block;
			document.body.appendChild(iframe);
		}
	}
	
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
		//alert("카카오스토리, 카톡으로 결과보기 기능은 모바일에서만 가능합니다.");
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
		var vars = JSON.parse(decodeURIComponent(getParm('vars')));
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
	
	if($('#app-title').text() == App.title) {
		INITED = true;
	}
};

var checkInited = function() {
	if(INITED == false) {
		init();
		return false;
	} else {
		clearInterval(timer);
		return true;
	}
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
			window.location.href = "https://www.facebook.com/dialog/feed?"+
			"app_id=457408721067962&"+
			"link="+encodeURIComponent(App.resultUrl)+"&"+
			"picture="+encodeURIComponent(App.thumbnail)+"&"+
			"name="+'카카오테스트 - ' + App.title+"&"+
			"caption="+App.title+' 실행결과'+"&"+
			"description="+resultText+"&"+
			"message="+resultText+"&"+
			"redirect_uri="+encodeURIComponent(App.resultUrl);
			/*
				http://www.facebook.com/dialog/feed?
			  app_id=123050457758183&
			  link=http://developers.facebook.com/docs/reference/dialogs/&
			  picture=http://fbrell.com/f8.jpg&
			  name=Facebook%20Dialogs&
			  caption=Reference%20Documentation&
			  description=Dialogs%20provide%20a%20simple,%20consistent%20interface%20for%20applications%20to%20interact%20with%20users.&
			  message=Facebook%20Dialogs%20are%20so%20easy!&
			  redirect_uri=http://www.example.com/response
			*/
			/*
			window.location.href = "https://www.facebook.com/dialog/share?"+
			"app_id=457408721067962&"+
			"display=popup&"+
			"href="+encodeURIComponent(App.resultUrl)+"&"+
			"redirect_uri="+encodeURIComponent(App.resultUrl);
			*/
		} else if(type == "tw") {
			//트위터
            window.location.href = 'https://twitter.com/intent/tweet?'+
                'original_referer='+encodeURIComponent(App.resultUrl)+
                '&text='+encodeURIComponent('['+App.title+'] 실행결과 \n')+
                '&url='+encodeURIComponent(App.resultUrl);

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
};

//utilities
var getParm = function(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

var loadFile = function(filename, filetype){
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
};

var filesadded=""
var checkLoadFile = function(filename, filetype, cb){
 if (filesadded.indexOf("["+filename+"]")==-1){
	loadFile(filename, filetype)
	filesadded+="["+filename+"]" //List of files added in the form "[filename1],[filename2],etc"
	if(typeof App != 'undefined') {
		clearInterval(timer);
		cb();
		timer = setInterval("checkInited()", 300);
		//
	} else {
		filesadded = '';
	}
 }
 else
  return null;
};

var getRandomNumber = function(start, end) {
	return Math.floor((Math.random() * end) % end + start);
};

var is_mobile = function(){
	if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||
		navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||
		navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||
		navigator.userAgent.match(/Windows Phone/i)){
		return true;
	}else{
		return false;
	}
};

var isMobile = { 
Android: function() { return navigator.userAgent.match(/Android/i); }, 
BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
var array_shuffle = function(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};