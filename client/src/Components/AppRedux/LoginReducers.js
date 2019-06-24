


function loginreducer (state = { login: false }, action){

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
		case 'SET_LOGIN':
				return Object.assign({},state, {login:true})	
			 break;
		case 'SET_LOGOUT' :
			   return Object.assign({},state,{login:false})
		default: return state;
		}
}

export default loginreducer;