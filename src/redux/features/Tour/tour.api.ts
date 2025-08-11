import { baseApi } from "@/redux/baseApi";

export const tourApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addTourType: builder.mutation({
            query: (tourTypeName) => ({
                // url ta backend er sathe milte hobe
                url: "/tour/create-tour-type",
                method: "POST",
                data: tourTypeName,
            }),
            // // eta ( invalidatesTags ) dile reload na diai data cole asbe,,, state change hole, noton kore data add hoye jabe
            invalidatesTags: ["TOUR"],
        }),
        getTourTypes: builder.query({
            query: () => ({
                url: "/tour/tour-types",
                method: "GET",
            }),
            // eta ( providesTags ) dile reload na diai data cole asbe
            providesTags: ["TOUR"],
            // eta dile backend er ( message, statusCode, success ) egolo asbe na
            transformResponse: (response) => response.data,
        }),
    }),
});

export const { useGetTourTypesQuery, useAddTourTypeMutation } = tourApi;