var x;

function check(get x)
{
	switch(x){
		case '0':
		x = x;
		
		case '1':
		if(x%13){
			x = 13*x;
		}
		else if(x%13 !=0){
			x = 3*x+1;
		}
		
		case '2':
		if(x%2==0){
			x=2*x;
		}
		else if(x%2==1){
			x = 3*x+1;
		}
	}
	
	return new Array[x];
}