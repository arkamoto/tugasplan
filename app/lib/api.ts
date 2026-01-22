const FALLBACK_API_URL = "https://be-sporton.agunacourse.com/api";
const FALLBACK_API_ROOT = "https://be-sporton.agunacourse.com";

export async function fetchAPI<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || FALLBACK_API_URL;
  const res = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    cache: options?.cache || "no-store",
  });

  if (!res.ok) {
    let errorMessage = `Failed to fetch data from ${endpoint}`;
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || errorData.error || errorMessage;
    } catch (e) {
      console.log(e);
    }

    throw new Error(errorMessage);
  }

  return res.json();
}

export function getImageUrl(path: string) {
  if (path.startsWith("http")) return path;

  const apiRoot = process.env.NEXT_PUBLIC_API_ROOT || FALLBACK_API_ROOT;
  return `${apiRoot}/${path}`;
}
