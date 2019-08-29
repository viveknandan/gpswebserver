var mysql = require('mysql');
const opt = {
		host: "remotedbinstance.c3dpipmj0a95.ap-south-1.rds.amazonaws.com",
		user: "root",
		password: "root1234",
		database: "gt03"	
};


exports.storeIntoDatabase= function(obj)
{
	
	
	var isLoc = (obj.hasOwnProperty("gps"))?(obj.gps.hasOwnProperty("loc")?true:false):false;
	var isSpeed = (obj.hasOwnProperty("gps"))?(obj.gps.hasOwnProperty("speed")?true:false):false;
	var isAlt = (obj.hasOwnProperty("gps"))?(obj.gps.hasOwnProperty("alt")?true:false):false;
	var isTemp = (obj.hasOwnProperty("temp"))?true:false;
	var retVal = null;
	var con = mysql.createConnection(opt);
	var sqliteCmd = "";
	if(isLoc)
	{
		sqliteCmd = "INSERT INTO location(timestamp,latitude,longitude,accuracy,deviceID,deviceName) VALUES ('"+obj.gps.time.value
		+"','"+obj.gps.loc.lat+"','"+obj.gps.loc.lon+"','"+obj.gps.loc.acc+"','"+obj.gps.id+"','"+obj.gps.name+"')";
	}
	if(isSpeed)
	{
		sqliteCmd = "INSERT INTO speed(timestamp,speedValue,unit,deviceID,deviceName) VALUES ('"+obj.gps.time.value
		+"','"+obj.gps.speed.value+"','"+obj.gps.speed.unit+"','"+obj.gps.id+"','"+obj.gps.name+"')";
	}
	if(isAlt)
	{
		sqliteCmd = "INSERT INTO altitude(timestamp,altitudeValue,unit,accuracy,deviceID,deviceName) VALUES ('"+obj.gps.time.value
		+"','"+obj.gps.alt.value+"','"+obj.gps.alt.unit+"','"+obj.gps.alt.acc+"','"+obj.gps.id+"','"+obj.gps.name+"')";
	}
	if(isTemp)
	{
		sqliteCmd = "INSERT INTO temperature(timestamp,temperatureValue,unit,deviceID,deviceName) VALUES ('"+obj.time.value
		+"','"+obj.temp.value+"','"+obj.temp.unit+"','"+obj.temp.id+"','"+obj.temp.name+"')";
	
	}
	con.connect(function(err) {
	if (err)
	{
		retVal = err;
	}
	else
	{
		console.log("Connected!");
		console.log("Executing command:"+sqliteCmd);
		con.query(sqliteCmd, function (err, result,fields) {
				retVal = err;
		});
	}

	});
	return retVal
}
exports.testConnection = function()
{
		var con = mysql.createConnection(opt);
		con.connect(function(err) {
		if (err) return false;
		else return true});
}