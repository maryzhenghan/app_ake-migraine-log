let MOCK_LOGS = {
	"recentLogs": [
		{
			"id": "111",
			"date": "05/10/2018",
			"migraine": "yes",
			"weather": "88F, sunny, humidity: 90%",
			"water count": "76 oz",
			"skipped meals": "no",
			"hours of sleep": "23:30 to 06:55",
			"total hours": "7.42 hours",
			"notes": "n/a",
			"publishedAt": 201805111737
		},
		{
			"id": "222",
			"date": "05/11/2018",
			"migraine": "no",
			"weather": "73F, overcast, humidity: 86%",
			"water count": "88 oz",
			"skipped meals": "no",
			"hours of sleep": "23:45 to 07:00",
			"total hours": "7.25 hours",
			"notes": "indoors most of the day",
			"publishedAt": 201805121534
		},
		{
			"id": "333",
			"date": "05/12/2018",
			"migraine": "no",
			"weather": "92F, sunny, humidity: 94%",
			"water count": "102 oz",
			"skipped meals": "breakfast - late",
			"hours of sleep": "23:00 to 05:35",
			"total hours": "6.6 hours",
			"notes": "woke up early for sendoff",
			"publishedAt": 201805132203
		},
		{
			"id": "444",
			"date": "05/13/2018",
			"migraine": "yes",
			"weather": "89F, thunderstorms, humidity: 80%",
			"water count": "90 oz",
			"skipped meals": "no",
			"hours of sleep": "23:35 to 6:55",
			"total hours": "7.33 hours",
			"notes": "migraine probably from waking up early yesterday, or rain/barometric pressure",
			"publishedAt": 201805151310
		},
		{
			"id": "555",
			"date": "05/14/2018",
			"migraine": "no",
			"weather": "77F, cloudy, humidity: 83%",
			"water count": "88 oz",
			"skipped meals": "lunch",
			"hours of sleep": "23:00 to 07:00",
			"total hours": "8 hours",
			"publishedAt": 201805151315
		}
	]
}

function getRecentLogs(callbackFn) {
	setTimeout(function(){ callbackFn(MOCK_LOGS)}, 100);
}

// function stays same when connecting to real API later
function displayRecentLogs(data) {
	for (index in data.recentLogs) {
		$('body').append(
			'<p>' + data.recentLogs[index].text + '</p>');
	}
}


// function stays the same even when connecting to real API
function getDisplayLogs() {
	getRecentLogs(displayRecentLogs);
}

$(getDisplayLogs);