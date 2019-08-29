const client = require('./jsclient');
const hostname = '13.233.154.241';
//const hostname = 'localhost';
const portN = 80;
const GPSID = "358739052148237";
const GPSNAME ="GT03";
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

			
function callMethod(funcId,funcArg)
{
	  var options = {
	  host: hostname,
	  port: portN,
	  path: encodeURI('/?cmd='+funcId.toString()+'&arg='+JSON.stringify(funcArg)),
	  method: 'GET',
	  headers: {
		'Content-Type': 'application/json'
	  }};
	  console.log(options.path);
	  client.getJSON(options,function(code,obj){
        if(obj.hasOwnProperty("Status"))
		{
				if(typeof(obj.Status === "string"))
				{
					console.log("result code="+obj.Status);
				}
				else
				{
					console.log("result code=");
					console.log(obj.Status);
				}
				
		}
		
		});
}


function writeGpsLocation(Loc)
{
  callMethod(1,Loc);
}


function writeGpsAltitude(Alt)
{
	callMethod(2,Alt);
}





function writeGpsSpeed(Speed)
{
	callMethod(3,Speed);
}


function writeTemperature(Temp)
{
	callMethod(4,Temp);
}


locObject.gps.id = GPSID;
locObject.gps.device = "GPSReceiver";
locObject.gps.name = GPSNAME;
locObject.gps.loc.lat = "28.563628";
locObject.gps.loc.lon = "77.179174";
locObject.gps.loc.acc = "1.5";
locObject.gps.loc.valid = true;
locObject.gps.time.value = Date.now().toString() ;//Epoch UTC time
writeGpsLocation(locObject);

altObject.gps.id = GPSID;
altObject.gps.device = "GPSReceiver"
altObject.gps.name = GPSNAME;
altObject.gps.alt.value = "400";
altObject.gps.alt.unit = "meter";
altObject.gps.alt.acc = "1.5";
altObject.gps.alt.valid = true;
altObject.gps.time.value = Date.now().toString();
writeGpsAltitude(altObject);

speedObject.gps.id = GPSID;
speedObject.gps.device = "GPSReceiver"
speedObject.gps.name = GPSNAME;
speedObject.gps.speed.value = "45.5"
speedObject.gps.speed.unit = "Kmph"
speedObject.gps.speed.valid = true
speedObject.gps.time.value = Date.now().toString()
writeGpsSpeed(speedObject);

tempObject.temp.id = GPSID;
tempObject.temp.device = "TemperatureSensor";
tempObject.temp.name = GPSNAME;
tempObject.temp.unit = "C"
tempObject.temp.value = "40.1" 
tempObject.time.value = Date.now().toString()
writeTemperature(tempObject);
