import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const emailSend = createApi({
  reducerPath: "emailSend",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://5.78.105.154:8080/api/uniic-app-service/",
  }),
  endpoints: (builder) => ({
    emailSend: builder.mutation({
      query: (message) => ({
        url: "external/user-website-ticket/submit",
        method: "POST",
        body: message,
      }),
    }),
  }),
});
export const { useEmailSendMutation } = emailSend;
