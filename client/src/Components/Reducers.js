
let state = {
	login : ""
}


function loginreducer (state = state , action){

	switch (action.type){
		case "doLogin" :
				console.log(action.payload)
				if (action.payload === "success"){
					console.log(state.login)
					return  Object.assign({},state,{login:"loggedin"});

					}else{
						return state;
					}
			 
			 break;
		default: return state;
		}
}

export default loginreducer;





