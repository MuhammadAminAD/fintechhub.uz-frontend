// lib/services/api.ts
import { IForm } from '@/types/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Baza (asosiy) URL'ni belgilaymiz
const BASE_URL = 'https://form-api.fintechhub.uz/api/';

export const FormApi = createApi({
    reducerPath: 'formApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        sendRegisterData: builder.mutation<unknown, IForm>({
            query: (data: IForm) => ({
                url: 'register/',
                method: 'POST',
                body: data,
            }),
        }),
    }),
});

export const { useSendRegisterDataMutation } = FormApi;