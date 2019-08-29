var http = require('http');
var url = require('url');
var sqlServer = require('./mysqlDb')
const PORT=80;
var locObject = 
{
	gps:
		{
			id:"",
			device:"",
			loc:
			{
				lat:"",
				lon:"",
				acc:"",
				valid:""
			},
			time:
				{
					value:"",
					unit:"UTC"
				}
		}
};

var altObject =
{
	gps:
		{
			id:"",
			device:"",
			alt:
				{
					value:"",
					unit:"",
					acc:"",
					valid:""
				},
			time:
				{
					value:"",
					unit:"UTC"
				}
		}
};
var speedObject = 
{
	gps:
		{
			id:"",
			device:"",
			speed:
			{
				value:"",
				unit:"",
				valid:""
			},
			time:
				{
					value:"",
					unit:"UTC"
				}

		}	
};

var tempObject=
{
	temp:
	{
		id:"",
		device:"",
		value:"",
		unit:""
	},
	time:
		{
			value:"",
			unit:"UTC"
		}
};
if(sqlServer.testConnection())
{
	console.log("Database is connected with web server");
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  var q = url.parse(decodeURI(req.url), true).query;
  var retTxt = JSON.stringify({Status:"0"});
if(q.cmd === 0)
{
	retTxt = JSON.stringify({Status:0});
}
else
{
	var dataObj = JSON.parse(q.arg);
	var returnVal = null;
	console.log(dataObj);
	returnVal = sqlServer.storeIntoDatabase(dataObj);
	if(returnVal !== null)
	{
		retTxt = JSON.stringify({Status:returnVal});
	}
}
  res.end(retTxt);
}).listen(PORT);
			
