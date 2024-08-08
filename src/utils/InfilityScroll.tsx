"use client"
import React, { useState, useEffect, useRef } from 'react';

const InfiniteScroll = ({ children, fetchMore, loadingComponent }:any) => {
    const [items, setItems] = useState<any[]>([]);
    const [offset, setOffset] = useState(1);
    const [hasNextPage, setHasNextPage] = useState(true);
    const observer = useRef<any>();

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };

        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchMore({ nextPage: offset }).then((newItems:any) => {
                    setItems([...items, ...newItems.results]);
                    setHasNextPage(newItems.totalResults > items.length + newItems.results.length);
                    setOffset(offset + 1);
                });
            }
        }, options);
        if (observer.current) {
            observer.current.observe(document.getElementById("sentinel"));
        }

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [fetchMore, items, offset, hasNextPage]);

    return (
        <>
            {children(items)}
            {hasNextPage && <div id="sentinel" />}
            {hasNextPage && loadingComponent}
        </>
    );
};

export default InfiniteScroll;