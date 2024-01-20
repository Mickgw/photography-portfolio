import Link from "next/link";
import React from "react";

interface BreadcrumbsProps {
    title?: string;
}

export const Breadcrumbs = ({ title }: BreadcrumbsProps) => {
    return (
        <section className="container flex gap-1 items-center">
            <Link href="/albums" className="text-blue-500">
                Albums
            </Link>
            <span>/</span> <span className="font-bold">{title}</span>
        </section>
    );
};
