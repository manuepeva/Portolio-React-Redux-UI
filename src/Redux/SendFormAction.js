import {
    SEND_FORM
} from './types'
import {axiosClient} from '../Components/AxiosClient/AxiosClient'

export const sendFormData = (data) => async (dispatch) => {
    try {
        const url = await axiosClient.post("/contact", data)
        console.log(url.config.data)
        let info = url.config.data
        dispatch({
            type: SEND_FORM,
            payload: info
        })
    } catch (error) {
        console.log(error.response)
    }
}
