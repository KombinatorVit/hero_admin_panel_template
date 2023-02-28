import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Hero} from "../type/mainType";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    tagTypes: ['Heroes'],
    endpoints: builder => ({
        getHeroes: builder.query<Hero[], number>({
            query: (limit: number = 5) => ({
                url: '/heroes', params: {
                    _limit: limit
                }
            }),
            providesTags: ['Heroes']
        }),
        createHero: builder.mutation<Hero[], Hero>({
            query: hero => ({
                url: '/heroes',
                method: 'POST',
                body: hero
            }),
            invalidatesTags: ['Heroes']
        }),
        deleteHero: builder.mutation<Hero[], string>({
            query: id => ({
                url: `/heroes/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Heroes']
        })
    })
});

export const {useGetHeroesQuery, useCreateHeroMutation, useDeleteHeroMutation} = apiSlice;