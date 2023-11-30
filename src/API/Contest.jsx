import axiosSecure from "./useAxiosSecure";

export const AllContestData = async (email) => {
    const {data} = await axiosSecure.get(`/api/v1/allcontest/${email}`)
    return data
};
export const ContestDataAdmin = async () => {
    const {data} = await axiosSecure.get(`/api/v1/allcontestadmin`)
    return data
};
export const DeleteContest = async (id) => {
    const {data} = await axiosSecure.delete(`/api/v1/allcontest/${id}`)
    return data
};
export const UpdateContest = async (id) => {
    const UpdatedInfo = {
        status: "approved"
    }
    const {data} = await axiosSecure.put(`/api/v1/allcontestadmin/${id}`,UpdatedInfo)
    return data
};

export const AllContestDataHome = async () => {
    const {data} = await axiosSecure.get(`/api/v1/allcontesthome`)
    return data
};
export const AllContestCount = async () => {
    const {data} = await axiosSecure.get(`/api/v1/contestcount`)
    return data
};

export const BestContest = async () => {
    const {data} = await axiosSecure.get(`/api/v1/bestcontest`)
    return data
};

export const GetOneContest = async (id) => {
    const {data} = await axiosSecure.get(`/api/v1/contest/${id}`)
    return data
};

export const GetWinner = async (id) => {
    const {data} = await axiosSecure.get(`/api/v1/contestwinner/${id}`)
    return data
};

export const UpdateWinner = async (email,id) => {
    console.log(email,id);
    const {data} = await axiosSecure.put(`/api/v1/contestwinneremail/${id}`,{email})
    return data
};