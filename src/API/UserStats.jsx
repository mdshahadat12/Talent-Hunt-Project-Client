import axiosSecure from "./useAxiosSecure";

export const Winnerlist = async (email) => {
    const {data} = await axiosSecure.get(`/api/v1/winner/${email}`)
    return data
};
export const Perticipatelist = async (email) => {
    const {data} = await axiosSecure.get(`/api/v1/perticipat/${email}`)
    return data
};