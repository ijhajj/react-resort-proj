import {createClient} from 'contentful';
export default createClient({
    space: process.env.REACT_APP_API_RESORT,
    accessToken:process.env.REACT_APP_ACCESS_TOKEN
})