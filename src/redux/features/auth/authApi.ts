import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints : (builder)=> ({
        getLogin: builder.mutation({
            query : (userInfo)=> ({
                url: '/auth/login',
                method : 'POST',
                body : userInfo
            })
        })
    })
})

export const {useGetLoginMutation} = authApi;