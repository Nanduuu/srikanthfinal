import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import axios from 'axios';


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUser(action) {
   
}

function* setTechnology(action){

	const data = "What is cyber arc"

	const response = yield call(axios.post, '/api/getquestions/' , {tech_num : action.payload.tech_num,key:action.payload.key})

	if (response){

		yield put ({
			type : "REDUCER_SET_QUESTIONS",
			payload : response.data.questions,
		})

	}


	yield put ({

		type : 'REDUCER_SET_TECHNOLOGY',
		payload : action.payload
	})

}


function* mySaga() {

  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
  yield takeLatest("SET_TECHNOLOGY", setTechnology);

}

export default mySaga;