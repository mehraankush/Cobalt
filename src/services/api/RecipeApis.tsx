import { useMutation, useQuery } from "@tanstack/react-query";
import AlertAxios from "../AxiosInstance/AxiosInstance";

export const useGetAllRecipies = () => {
    return useQuery({
        queryKey: ["allRecipies"],
        queryFn: fetchAllRecipies
    });
};
export const useGetSingleRecipies = (id:string) => {
    return useQuery({
        queryKey: ["GetSingleRecipies",{id}],
        queryFn: ()=>fetchSingleRecipies(id)
    });
};
export const useGetQueriedRecipies = () => {
    return useMutation({
        mutationKey: ["GetQueriedRecipies"],
        mutationFn:fetchQueriedRecipies
    });
};


const fetchQueriedRecipies = async (data:any) => {
    console.log("Data",data)
    const res = await AlertAxios.get(`/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&query=${data.q}`);

    if (!res) throw new Error("Something went wrong!");
    if (res.status !== 200)
        throw new Error(res.data.message || "Failed to fetch Recipes");
    return res.data;
};
const fetchSingleRecipies = async (id:string) => {
    const res = await AlertAxios.get(`/${id}/information?apiKey=${process.env.NEXT_PUBLIC_API_KEY }`);

    if (!res) throw new Error("Something went wrong!");
    if (res.status !== 200)
        throw new Error(res.data.message || "Failed to fetch Recipes");
    return res.data;
};

export const fetchAllRecipies = async () => {
    const res = await AlertAxios.get(`/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&offset=0&number=20`);

    if (!res) throw new Error("Something went wrong!");
    if (res.status !== 200)
        throw new Error(res.data.message || "Failed to fetch Recipes");
    return res.data;
};
export const fetchAllRecipiesInfinity = async ({ nextPage = 0 }: { nextPage :number}) => {
    console.log(nextPage,"nextpagw")
    const res = await AlertAxios.get(`/complexSearch?apiKey=${process.env.NEXT_PUBLIC_API_KEY}&offset=${nextPage}&number=10`);

    if (!res) throw new Error("Something went wrong!");
    if (res.status !== 200)
        throw new Error(res.data.message || "Failed to fetch Recipes");
    return res.data;
};
