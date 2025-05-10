// composables/useApi.ts
export function useApi<T = any>(url: string, opts = {}) {
  const token = useCookie("token");

  return useFetch<T>(url, {
    ...opts,
    headers: {
      ...(opts as any).headers,
      Authorization: `Bearer ${token.value}`,
    },
  });
}
