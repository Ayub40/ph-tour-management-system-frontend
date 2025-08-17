import { baseApi } from "@/redux/baseApi";

export const divisionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addDivision: builder.mutation({
            query: (divisionData) => ({
                url: "/division/create",
                method: "POST",
                data: divisionData,
            }),
            invalidatesTags: ["DIVISION"],
        }),

        removeDivision: builder.mutation({
            query: (divisionId) => ({
                url: `/division/delete-division/${divisionId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["DIVISION"],
        }),

        getDivisions: builder.query({
            // ekhane params ta division name ta _id theke name e convert korar kaje lagtese
            query: (params) => ({
                url: "/division",
                method: "GET",
                params
            }),
            providesTags: ["DIVISION"],
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useAddDivisionMutation, useRemoveDivisionMutation, useGetDivisionsQuery } = divisionApi;
