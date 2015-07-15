function ShowAddress() {
	var appid = 'Your-AppId';
	
	$.ajax({
		type: 'GET',
		url: 'http://search.olp.yahooapis.jp/OpenLocalPlatform/V1/localSearch',
		dataType: 'jsonp',
		data: {
			appid: appid,
			query: $('#query').val(),
			output: 'json',
		},
		jsonpCallback: 'ShowResult',
		success: function(json){
			Message("success");
		}
	});
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