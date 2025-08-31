"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/lib/fetchPosts";

export default function Home() {
  const postsPerPage = 10;

  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam = 1 }) =>
      fetchPosts({ page: pageParam, limit: postsPerPage }),
    getNextPageParam: (lastPage, allPages) => {
      // If last page has fewer than postsPerPage, no more pages
      return lastPage.length === postsPerPage ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1, // Explicitly set initial page
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="font-sans grid place-content-center min-h-screen p-8 pb-20 sm:p-20">
      <h1 className="text-6xl font-bold py-10">Tanstack Query</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
        {data?.pages.flat().map((post) => (
          <div key={post.id} className="bg-white/5 p-8 rounded">
            <div className="space-y-2">
              <p>ID: {post.id}</p>
              <h1 className="text-2xl font-medium">Title: {post.title}</h1>
              <p>{post.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={() => fetchNextPage()}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isFetchingNextPage || !hasNextPage}
        >
          {isFetchingNextPage
            ? "Loading..."
            : hasNextPage
            ? "Load More Posts"
            : "No More Posts"}
        </button>
      </div>
    </div>
  );
}
