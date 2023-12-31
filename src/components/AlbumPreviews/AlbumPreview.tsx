import Link from "next/link";

interface AlbumPreviewProps {
    slug: string;
    contents: any;
}

export const AlbumPreview = ({ slug, contents }: AlbumPreviewProps) => {
    return (
        <Link href={`/albums/${slug}`} className="hover:opacity-60">
            <h2 className="font-bold">{contents.title}</h2>
        </Link>
    );
};
