import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emailSend = createApi({
  reducerPath: "emailSend",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.uniic.app/api/uniic-app-service/",
  }),
  endpoints: (builder) => ({
    emailSend: builder.mutation({
      query: (message) => ({
        url: "external/user-website-ticket",
        method: "POST",
        body: message,
      }),
    }),
  }),
});
export const { useEmailSendMutation } = emailSend;
