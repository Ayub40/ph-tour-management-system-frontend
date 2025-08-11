import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTourType: builder.mutation({
            query: (tourTypeName) => ({
                url: "/tour/create-tour-type",
                method: "POST",
                data: tourTypeName,
            }),
            //   invalidatesTags: ["TOUR"],
        }),
        getTourTypes: builder.query({
            query: () => ({
                url: "/tour/tour-types",
                method: "GET",
            }),
            //   providesTags: ["TOUR"],
            // eta dile backend er ( message, statusCode, success ) egolo asbe na
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useGetTourTypesQuery, useAddTourTypeMutation } = tourApi;