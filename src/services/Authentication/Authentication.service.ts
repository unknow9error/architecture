import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AccountApiConstants } from 'src/utils/constants/api.constants';

// import type { } from ''
export const authenticationService = createApi({
    reducerPath: 'authenticationService',
    baseQuery: fetchBaseQuery({ baseUrl: AccountApiConstants.BASE }),
    endpoints: (builder) => ({
        login: builder.query({
            query: (payload) => ({
                url: AccountApiConstants.LOGIN,
                method: 'POST',
                body: payload
            }),
        }),
        register: builder.query({
            query: (payload) => ({
                url: AccountApiConstants.REGISTER,
                method: 'POST',
                body: payload
            })
        })
    })
})