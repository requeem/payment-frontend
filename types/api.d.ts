type ApiRequestFunction = (...args: never[]) => unknown

interface MutationSettings<Params = void, Func extends ApiRequestFunction = ApiRequestFunction> {
   config?: ApiRequestConfig
   options?: import('@tanstack/react-query').UseMutationOptions<
      Awaited<ReturnType<Func>>,
      import('axios').AxiosError<{ message: string }>,
      Params,
      unknown
   >
}

interface QuerySettings<Func extends ApiRequestFunction = ApiRequestFunction> {
   config?: ApiRequestConfig
   options?: Omit<
      import('@tanstack/react-query').UseQueryOptions<
         Awaited<ReturnType<Func>>,
         import('axios').AxiosError<unknown>,
         Awaited<ReturnType<Func>>,
         import('@tanstack/react-query').QueryKey
      >,
      'queryKey'
   >
}

interface SuspenseQuerySettings<Func extends ApiRequestFunction = ApiRequestFunction> {
   config?: ApiRequestConfig
   options?: Omit<
      import('@tanstack/react-query').UseSuspenseQueryOptions<
         Awaited<ReturnType<Func>>,
         import('axios').AxiosError<unknown>,
         Awaited<ReturnType<Func>>,
         import('@tanstack/react-query').QueryKey
      >,
      'queryKey'
   >
}

type SuspenceQuerySettings<Func extends ApiRequestFunction = ApiRequestFunction> =
   SuspenseQuerySettings<Func>

interface InfiniteQuerySettings<
   Func extends ApiRequestFunction = ApiRequestFunction,
   PageParam = unknown
> {
   config?: ApiRequestConfig
   options?: Omit<
      import('@tanstack/react-query').UseInfiniteQueryOptions<
         Awaited<ReturnType<Func>>,
         import('axios').AxiosError<unknown>,
         import('@tanstack/react-query').InfiniteData<Awaited<ReturnType<Func>>, PageParam>,
         import('@tanstack/react-query').QueryKey,
         PageParam
      >,
      'queryKey'
   >
}

type ApiRequestConfig = import('axios').AxiosRequestConfig

type RequestConfig<Params = undefined> = Params extends undefined
   ? { config?: ApiRequestConfig }
   : { params: Params; config?: ApiRequestConfig }
