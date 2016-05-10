
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
		var count=1;
		var flag=0;
		$("#start").click(function(){
				flag=1;
				document.getElementById('counter').innerHTML='';
				document.getElementById("counter").style.left = "35%";
				document.getElementById("start").style.visibility= "hidden" ;
				document.getElementById("loading").style.visibility= "hidden" ;
				navigator.proximity.enableSensor();
				document.getElementById("counter").style.visibility= "visible" ;
				document.getElementById("reset").style.visibility= "visible" ;
			});
	
		$("#reset").click(function(){
				navigator.proximity.disableSensor();
				document.getElementById("counter").style.visibility= "hidden" ;
				document.getElementById("reset").style.visibility= "hidden" ;
				document.getElementById("start").style.visibility= "visible" ;
				document.getElementById("loading").style.visibility= "visible" ;
				count=1;
				flag=0;
			});
        function onSuccess(state) {
			if(state==1 && flag==1)
				{
					if(count>9)
					{
						document.getElementById("counter").style.left = "17%";
						var data = document.getElementById('counter');
						texttospeech.speak(count);
						data.innerHTML=count;
						switch(count)
						{
							case 10:texttospeech.speak('You have completed'+count+'pushups');
									count++;
									break;
							
							case 20:texttospeech.speak('You have completed'+count+'pushups five more to go');
									count++;
									break;
									
							case 25:texttospeech.speak('You have completed'+count+'pushups Now Take a break and come back.');
									completed();
									break;
									
							default:count++;
										break;
						}
					}
					else{
						var data = document.getElementById('counter');
						texttospeech.speak(count);
						data.innerHTML=count;
						count++;
					}
					
				}
			else{

			}
		
		};
		function completed() {
			navigator.proximity.disableSensor();
			document.getElementById("counter").style.visibility= "hidden" ;
			document.getElementById("reset").style.visibility= "hidden" ;
			document.getElementById("start").style.visibility= "visible" ;
			document.getElementById("loading").style.visibility= "visible" ;
			count=1;
			flag=0;
		}
		setInterval(function(){
		navigator.proximity.getProximityState(onSuccess);
		}, 800);

    }

$(document).ready(function(){
});




