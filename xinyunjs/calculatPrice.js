function qiNiuPrice(stroge,times,liuliang){
	
	var strogePrice = stroge*0.165;
	var timePrice = 0.001*times*10;
	var liuliangPrice = 0;
	
	return strogePrice+timePrice+liuliangPrice;
}

function baiDuPrice(stroge,times,liuliang){
	
	var strogePrice = stroge*0.005*30;
	var timePrice = 0.01*times;
	var liuliangPrice = 0.61*liuliang;
	
	return strogePrice+timePrice+liuliangPrice;
}
function aliPrice(stroge,times,liuliang){
	
	var strogePrice = stroge*0.148;
	var timePrice = 0.01*times;
	var liuliangPrice = 0.5*liuliang;
	
	return strogePrice+timePrice+liuliangPrice;
}
