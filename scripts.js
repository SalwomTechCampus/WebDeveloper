
	 	function getRandomColor(){
	 		var letter='0123456789ABCDEF'.split('');
	 		var color='#';
	 		for (var i=0;i<6;i++){
	 			color+=letter[Math.round(Math.random()*15)];
	 		}
	 		return color;
	 	}
	 	
		var clickTime; var createdTime; var reaction;
	function boxcalled(){
		var x = Math.random();
			x=x*1000;
		setTimeout(function(){
			if(Math.random()>.5){
				document.getElementById("circle").style.borderRadius="100px";}
			else{
				document.getElementById("circle").style.borderRadius="0px";
			}

			document.getElementById("circle").style.backgroundColor=getRandomColor();
				document.getElementById("circle").style.display="block";
			createdTime=Date.now();
		}, x);

	}
	document.getElementById("circle").onclick=function(){
			clickTime=Date.now();

			reaction=(clickTime-createdTime)/1000;
			document.getElementById("dateTime").innerHTML=(clickTime-createdTime)/1000;

		this.style.display="none";


		boxcalled();
		}
		boxcalled();
		
		

	