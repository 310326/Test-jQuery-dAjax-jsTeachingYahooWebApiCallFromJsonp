function ShowAddress() {
	var appid = 'Your-AppId';
	
	$.ajax({
		type: 'GET',
		url: 'http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/localSearch',
		dataType: 'jsonp',
		data: {
			appid: appid,
			query: encodeURI($('#query').val),
			output: 'json',
//			callback: 'ShowResult'
		},
//			jsonpCallback: 'CallJSONP',
		success: function(json){
			var len = json.length;
			Message(json);
//			for(var i=0; i < len; i++){
//				$("#b").append(json[i].version + ' ' + json[i].codename + '<br>');
//			}
		}
	});
}

function CallJSONP(url) {
	Message("JSONP response: " + url);
	var target = document.createElement('script');
	target.charset = 'utf-8';
	target.src = url;
	document.body.appendChild(target);
}

function ShowResult(result) {
	console.log(result);
	if(result.ResultInfo.Count > 0)
	{
		Message(result.ResultInfo.Count + "件の結果が見つかりました。\n" + result.Feature[0].Name + "の住所は" + result.Feature[0].Property.Address + "です。");
	}
	else
	{
		Message("検索結果が見つかりませんでした。")
	}
}

function Message(message_string, type) {
	if(type === "alert")
	{
		alert(message_string);
	}
	else
	{
		console.log(message_string);
	}
}