import axiosSecure from "./useAxiosSecure";

export const PaymentToken = async (price) => {
    const {data} = await axiosSecure.post(`/api/v1/payment-intent`,{price})
    return data
};
export const SaveInfo = async (info) => {
    const {data} = await axiosSecure.post(`/api/v1/save-participent`,{info})
    return data
};
export const UpdateInfo = async (id,participator) => {
    const {data} = await axiosSecure.put(`/api/v1/contestup/${id}`,{participator})
    return data
};