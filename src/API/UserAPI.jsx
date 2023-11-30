import axiosSecure from '../API/useAxiosSecure'

export const getToken = async (email) => {
    axiosSecure.post('/api/v1/jwt',{email})
    .then(res=>{
        return res.data
    })
};
export const ClearToken = async () => {
    const {data} = await axiosSecure.post('/api/v1/logout')
    return data
};


export const SaveUser = async (email,name) => {
    const userInfo = {
        name:name,
        email:email,
        role:'user',
        confirm: true
    }
    const {data} = await axiosSecure.post('/api/v1/user',userInfo)
        return data

};

export const AllUser = async () => {
    const {data} = await axiosSecure.get('/api/v1/user')
    return data
};
export const UpdateRole = async (email,role) => {
    console.log('api',email);
    const {data} = await axiosSecure.put(`/api/v1/user?email=${email}`,{role})
    return data
};
export const UserRole = async (email) => {
    console.log('api',email);
    const {data} = await axiosSecure.get(`/api/v1/user/${email}`)
    return data.role
};

export const AllUserCount = async () => {
    const {data} = await axiosSecure.get(`/api/v1/usercount`)
    return data
};