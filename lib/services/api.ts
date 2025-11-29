// lib/services/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Baza (asosiy) URL'ni belgilaymiz
const BASE_URL = 'https://fintechhub.ziyodev.uz';

export const ReduxApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({

        getCourses: builder.query({
            query: () => '/courses/',
        }),
        getCourseById: builder.query({
            query: (id) => `courses/${id}/`,
        }),
        getTeachers: builder.query({
            query: () => '/teachers/',
        }),
    
        getPartners: builder.query({
            query: () => '/partners/',
        }),
        getFAQ: builder.query({
            query: () => '/faqs/',
        }),
        getBlogs: builder.query({
            query: () => '/blogs/',
        }),
    }),
});

export const { useGetCoursesQuery, useGetCourseByIdQuery, useGetTeachersQuery,
    useGetPartnersQuery, useGetFAQQuery, useGetBlogsQuery
 } = ReduxApi;