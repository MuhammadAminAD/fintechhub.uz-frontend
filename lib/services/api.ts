// lib/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Baza (asosiy) URL'ni belgilaymiz
const BASE_URL = 'https://fintechhub.ziyodev.uz';

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

        getCourses: builder.query({
            query: () => '/courses/',
        }),
        getCourseById: builder.query({
            query: (id) => `courses/${id}`,
        }),
        getTeachers: builder.query<any[], void>({
            query: () => '/teachers/',
        }),
    
        getPartners: builder.query<any[], void>({
            query: () => '/partners/',
        }),
        getFAQ: builder.query<any[], void>({
            query: () => '/faqs/',
        }),
    }),
});

export const { useGetCoursesQuery } = ReduxApi;