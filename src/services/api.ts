import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export type YogaClass = {
    id: number
    title: string
    body: string
}

export type Rule = {
    id: number
    name: string
    email: string
    body: string
}

export type BookClassRequest = {
    classId: number
    title: string
    description: string
}

export type BookClassResponse = {
    id: number
    classId: number
    title: string
    description: string
}

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getClasses: builder.query<YogaClass[], void>({
            query: () => '/posts',
        }),
        getRules: builder.query<Rule[], void>({
            query: () => '/comments',
        }),
        bookClass: builder.mutation<BookClassResponse, BookClassRequest>({
            query: (body) => ({
                url: "/posts",
                method: "POST",
                body,
            }),
        }),
    }),
})

export const {
    useGetClassesQuery,
    useGetRulesQuery,
    useBookClassMutation,
} = api


