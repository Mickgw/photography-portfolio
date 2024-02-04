import Image from "next/image";

interface AlbumImagesColumnProps {
    images: Array<any>;
    albumFolder: string;
    className?: string;
}

export const AlbumImagesColumn = ({
    images,
    albumFolder,
    className,
}: AlbumImagesColumnProps) => {
    return (
        <div className={`${className ? className : ""} flex flex-col gap-12`}>
            {images?.map((image: any, index: number) => {
                return (
                    <div
                        key={index}
                        className="relative rounded-lg overflow-hidden"
                    >
                        <Image
                            src={`/images/${albumFolder}/${image}`}
                            alt=""
                            width={100}
                            height={100}
                            priority
                            placeholder="blur"
                            blurDataURL={`/images/${albumFolder}/${image}`}
                            sizes="(max-width: 768px) 45vw, 25vw"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                );
            })}
        </div>
    );
};
