import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export default interface UserInterface {
    organisation: any
    status: string
    success: boolean
    data: {
        user: {
            email: string,
            phone: number,
            username: string,
            dateJoined: Date,
            status: string,
            isDeleted: false
        }[]

    }
}

export const allUsers = createApi({
    reducerPath: 'allUsers',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000',
    }),
    endpoints: (builder) => ({
        users: builder.query<UserInterface[], void>({
            query: () => `/lendUsers`
        }),
    })
})

export const { useUsersQuery } = allUsers