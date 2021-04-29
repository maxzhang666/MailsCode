import axios from "axios"
export const getEmail = (email) => axios.request({
    url: 'http://yhxxc:6888/api/mail/getcode',
    data: {
        email: email
    },
    method: 'POST'
});