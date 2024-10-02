import { PROJECTS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const projectsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProjects: builder.query({
            query: () => ({
                url: PROJECTS_URL ,
             
            }),
            providesTags: ['Projects'],
            keepUnusedDataFor: 5
        }),
        getProjectDetails: builder.query({
            query: (projectId) => ({
                url: `${PROJECTS_URL}/${projectId}`
            }),
            keepUnusedDataFor: 5,
        }),
})
});

export const { useGetProjectsQuery, useGetProjectDetailsQuery } = projectsApiSlice;