import axios from 'axios';


export const getProjects = () => {

    axios.get('/api/projects/')
        .then(res => {
            console.log(res)
        })
}