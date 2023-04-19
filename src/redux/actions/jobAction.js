import { JOB_LOAD_FAIL, JOB_LOAD_REQUEST, JOB_LOAD_SUCCESS } from "../constants/jobConstant"
import axios from 'axios'


export const jobLoadAction = (pageNumber,keyword='',cat='',loc='') => async (dispatch) => {
    dispatch({type: JOB_LOAD_REQUEST});
    try {
        const {data} = await axios.get(`http://localhost:8000/job/alljobs/?pageNumber=${pageNumber}&keyword=${keyword}
        &cat=${cat}&loc=${loc}`)

        dispatch({type: JOB_LOAD_SUCCESS
        ,
        payload: data
    });
//,

    } catch (error) {
        dispatch({type: JOB_LOAD_FAIL,
            payload: error.reponse.data.error
        });
    }
}
