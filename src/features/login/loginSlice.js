import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const login = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dev.4pay.cash/api/v2/",
  }),
  endpoints: (builder) => ({
    loginTrader: builder.mutation({
      query: (credentials) => ({
        url: "auth/login/",
        method: "POST",
        body: credentials,
      }),
      onQuerySuccess: (response) => {
        const { accessToken, refreshToken } = response;
        if (accessToken) {
          localStorage.setItem("accessToken", accessToken);
        }
        if (refreshToken) {
          localStorage.setItem("refreshToken", refreshToken);
        }
      },
    }),
  }),
});

export const { useLoginTraderMutation } = login;
