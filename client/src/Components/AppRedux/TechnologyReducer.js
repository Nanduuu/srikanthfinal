
let initState = {
	tech_num : 1,
	technology : "CyberArk",
	questions : [],
}


function TechnologyReducer (state = initState, action){

	switch (action.type){
		case "REDUCER_SET_TECHNOLOGY" :
					
					console.log(action)
				return	Object.assign({}, state, {
							        tech_num: action.payload.tech_num,
							        technology : action.payload.technology,
							      })
				
				
			 
			 break;

		case "REDUCER_SET_QUESTIONS" :
					console.log(action)
				return Object.assign({},state, {
					questions : action.payload,
				})
			break;

		default: return state;
		}
}

export default TechnologyReducer;