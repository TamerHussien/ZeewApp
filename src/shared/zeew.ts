export interface Zeew 
{
    session : string;
    zuuid :0;
    pickUp :{
	         address :{ country : string , latitude :string, longitude :string, locality : string , postal_code : string , route : string , street_number: string },
	         businessName : string , email : string , phone : string ,
	         website : string };
	dropOff :{
		         firstName : string , lastName : string , businessName : string , phone : string, email : string , instructions : string,
		         address :{
			     route : string , locality : string , country : string , latitude :string, longitude :string}, apt_no : string };
	orderInfo :
			{ 
            id : string , memo : string , when : string ,
			    delivery_date :{ date : string , hours : string , minutes : string },
			                    small :string, medium :string, large :string};
			
	status : 'PENDING' }