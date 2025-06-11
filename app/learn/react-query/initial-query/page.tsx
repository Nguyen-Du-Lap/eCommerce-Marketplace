"use client";

import Container from "@/components/custom/Container";
import { TypeProductModel } from "@/types";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { Fragment, useEffect, useRef } from "react";

const fetchProducts = (page: number) =>
  axios.get(`http://localhost:8080/api/products?page=${page}&size=5&sort=name`);

export default function InitialQueryPage() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam = 0 }) => fetchProducts(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) =>
      lastPage.data.result.last ? undefined : pages.length,
  });

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Observer tự động gọi fetchNextPage khi scroll đến cuối
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    const node = loadMoreRef.current;
    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);
  return (
    <Container>
      <h1>Initial Query Example</h1>
      <Fragment>
        {
          <div>
            {data?.pages.map((page, index) => (
              <Fragment key={index}>
                {page.data.result.content.map((product: TypeProductModel) => (
                  <div key={product.id} className="mb-4 h-20">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p>{product.description}</p>
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        }
      </Fragment>
      <div>
        {/* <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetching}
          className='bg-amber-800 p-2 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
        </button> */}

        <div ref={loadMoreRef} className="text-center p-4">
          {isFetching
            ? "Đang tải..."
            : isFetchingNextPage
            ? "Đang tải thêm..."
            : hasNextPage
            ? "Cuộn để tải thêm"
            : "Đã hết sản phẩm"}
        </div>
      </div>
    </Container>
  );
}
