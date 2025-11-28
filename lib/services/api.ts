// lib/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Baza (asosiy) URL'ni belgilaymiz
const BASE_URL = 'http://project-main.fintechhub.uz';

export const ReduxApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        // getPosts: builder.query<any[], void>({
        //   query: () => 'posts', 
        // }),
        // getPostById: builder.query<any, number>({
        //   query: (id) => `posts/${id}`, 
        // }),
        // createPost: builder.mutation<any, { title: string, body: string, userId: number }>({
        //   query: (newPost) => ({
        //     url: 'posts',
        //     method: 'POST',
        //     body: newPost,
        //   }),
        // }),

        getCourses: builder.query<any[], void>({
            query: () => '/courses/',
        }),
        getCourseById: builder.query<any[], void>({
            query: (id) => `courses/${id}`,
        }),
    }),
});

export const { useGetCoursesQuery } = ReduxApi;