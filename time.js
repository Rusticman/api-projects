
var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
monthsAnswer =  ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var result = {unix:null, natural:null}


var processDate = function(str){
	//if not a valid string: return result
	var d,monthMatch;
	if(typeof str !== 'string'){
		return result;
	}
	str = str.toLowerCase();
	
	for(var i= 0 ; i < months.length; i++){
		d = str.indexOf(months[i]);
		if(d !== -1){
			
			return naturalDate(str); //call function that involves string with natural date
		}
	}
	//if no natural date (above) and has other words: return result
	if(!Number(str)){
		return result;
	}
	else{
		return unDate(Number(str));//call function that processes unix number
	}
}
	

//processes unix timestamp into natural date and unix timestamp in seconds
function unDate(num){
	var unixDate = new Date(num), day = unixDate.getDate(), month = monthsAnswer[unixDate.getMonth()],year = unixDate.getFullYear();
	
	if(!day){
		return result;
	}
	result.unix = num;
	result.natural = day+' '+month+', '+year;
	
	return result;
	
}

//processes natural time string into natural date and unix timestamp in seconds
function naturalDate(str){
	
	var natDate = new Date(str),day = natDate.getDate(), month = monthsAnswer[natDate.getMonth()],year = natDate.getFullYear(), unix = natDate.getTime()/1000;
	if(!day){
		return result;
	}
	
	result.unix = unix;
	result.natural = day+' '+month+', '+year;
	
	return result;
     
	
}
	module.exports = processDate;
	