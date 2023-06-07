import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

const API_BASE_URL = 'https://api.github.com';

const queryClient = new QueryClient();

function useGithubFollowAPI<T>(path: string) {
  return useQuery<T, Error>(['data', path], () => fetch(`${API_BASE_URL}${path}`).then(res => res.json()));
}

export { QueryClientProvider, useGithubFollowAPI, queryClient };
