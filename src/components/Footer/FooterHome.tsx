import { useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRightXL } from "../svgs/ArrowUpRightXL";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface FooterHomeProps {
    albumsAmount: number;
}

export const FooterHome = ({ albumsAmount }: FooterHomeProps) => {
    const parallaxTrigger = useRef() as React.RefObject<HTMLDivElement>;
    const parallaxElement = useRef() as React.RefObject<HTMLDivElement>;
    const [albumsLinkHovered, setAlbumsLinkHovered] = useState(false);

    console.log("albumsLinkHovered = ", albumsLinkHovered);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        let timeline = gsap.timeline();

        timeline.fromTo(
            parallaxElement.current,
            {
                y: 500,
            },
            {
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: parallaxTrigger.current,
                    start: "center center",
                    end: "bottom bottom",
                    scrub: true,
                },
            }
        );
    });

    return (
        <div
            ref={parallaxTrigger && parallaxElement}
            className="footer-scroll--content w-full h-full"
        >
            <div className="container relative w-full h-full flex items-center pt-44 pb-64">
                <div className="w-full flex flex-col gap-20">
                    <div className="link--wrapper translate-x-[6.5%]">
                        <Link
                            href="/albums"
                            className="w-fit flex items-center gap-2 text-white group"
                            onMouseOverCapture={() => {
                                setAlbumsLinkHovered(true);
                            }}
                            onMouseLeave={() => setAlbumsLinkHovered(false)}
                        >
                            <h2 className="text-[160px] leading-[1] font-bold text-white tracking-[-5px] relative">
                                More
                                {albumsAmount && (
                                    <span className="absolute -right-8 top-0 text-[34px] font-bold tracking-tight">
                                        0{albumsAmount}
                                    </span>
                                )}
                            </h2>
                            <ArrowUpRightXL className="-mb-7 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500 ease-in-out" />
                        </Link>
                    </div>

                    <div className="w-full h-full relative overflow-hidden">
                        <svg
                            width="100%"
                            height="100%"
                            viewBox="0 0 1340 288"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="text-[#121212] transition-all duration-500 ease-in-out"
                            preserveAspectRatio="none"
                            style={{
                                filter: `brightness(${
                                    !albumsLinkHovered ? 1 : 1.8
                                })`,
                            }}
                        >
                            <path
                                d="M64.3519 283H0.255327L97.9197 0.0909007H175.001L272.528 283H208.431L137.566 64.7401H135.355L64.3519 283ZM60.3459 171.798H211.746V218.489H60.3459V171.798ZM344.871 0.0909007V283H286.024V0.0909007H344.871ZM373.666 283V0.0909007H432.514V106.458H434.309C436.888 100.748 440.618 94.9465 445.499 89.0526C450.472 83.0665 456.918 78.0935 464.838 74.1335C472.85 70.0814 482.796 68.0554 494.676 68.0554C510.148 68.0554 524.422 72.1075 537.499 80.2116C550.577 88.2237 561.029 100.334 568.857 116.542C576.685 132.658 580.599 152.873 580.599 177.185C580.599 200.853 576.777 220.837 569.133 237.138C561.582 253.346 551.267 265.641 538.19 274.021C525.205 282.309 510.654 286.453 494.538 286.453C483.119 286.453 473.403 284.566 465.391 280.79C457.471 277.014 450.978 272.271 445.913 266.561C440.848 260.76 436.98 254.912 434.309 249.018H431.685V283H373.666ZM431.27 176.909C431.27 189.526 433.02 200.531 436.52 209.924C440.019 219.318 445.084 226.639 451.715 231.888C458.346 237.046 466.404 239.624 475.889 239.624C485.467 239.624 493.571 237 500.202 231.75C506.833 226.409 511.852 219.042 515.259 209.648C518.759 200.163 520.508 189.25 520.508 176.909C520.508 164.661 518.805 153.886 515.397 144.585C511.99 135.283 506.971 128.008 500.34 122.759C493.709 117.509 485.559 114.885 475.889 114.885C466.312 114.885 458.208 117.417 451.577 122.482C445.038 127.547 440.019 134.731 436.52 144.032C433.02 153.333 431.27 164.292 431.27 176.909ZM736.482 192.657V70.8182H795.329V283H738.83V244.459H736.62C731.831 256.892 723.865 266.884 712.722 274.435C701.671 281.987 688.179 285.763 672.247 285.763C658.065 285.763 645.586 282.54 634.812 276.093C624.037 269.647 615.61 260.483 609.532 248.603C603.546 236.723 600.507 222.495 600.415 205.918V70.8182H659.262V195.42C659.354 207.944 662.716 217.844 669.346 225.12C675.977 232.395 684.864 236.033 696.007 236.033C703.098 236.033 709.729 234.421 715.899 231.198C722.07 227.882 727.043 223.002 730.818 216.555C734.686 210.109 736.574 202.143 736.482 192.657ZM822.95 283V70.8182H879.035V108.254H881.521C885.942 95.8214 893.309 86.0135 903.624 78.8302C913.938 71.647 926.278 68.0554 940.645 68.0554C955.196 68.0554 967.582 71.6931 977.804 78.9684C988.027 86.1516 994.842 95.9135 998.249 108.254H1000.46C1004.79 96.0977 1012.62 86.3819 1023.94 79.1065C1035.36 71.7391 1048.85 68.0554 1064.42 68.0554C1084.22 68.0554 1100.29 74.3638 1112.63 86.9805C1125.06 99.5051 1131.28 117.279 1131.28 140.302V283H1072.57V151.906C1072.57 140.118 1069.44 131.277 1063.17 125.383C1056.91 119.489 1049.08 116.542 1039.69 116.542C1029.01 116.542 1020.67 119.95 1014.69 126.765C1008.7 133.487 1005.71 142.374 1005.71 153.425V283H948.657V150.663C948.657 140.256 945.664 131.968 939.678 125.798C933.784 119.627 926.002 116.542 916.332 116.542C909.794 116.542 903.9 118.2 898.651 121.515C893.493 124.739 889.395 129.297 886.356 135.191C883.317 140.993 881.798 147.808 881.798 155.636V283H822.95ZM1334.85 131.323L1280.98 134.638C1280.06 130.034 1278.08 125.89 1275.04 122.206C1272 118.43 1267.99 115.437 1263.02 113.227C1258.14 110.925 1252.29 109.773 1245.48 109.773C1236.36 109.773 1228.67 111.707 1222.41 115.575C1216.15 119.351 1213.01 124.416 1213.01 130.771C1213.01 135.836 1215.04 140.118 1219.09 143.618C1223.14 147.117 1230.1 149.926 1239.95 152.044L1278.35 159.78C1298.98 164.016 1314.36 170.831 1324.49 180.224C1334.62 189.618 1339.69 201.958 1339.69 217.246C1339.69 231.152 1335.59 243.354 1327.39 253.853C1319.29 264.351 1308.15 272.547 1293.96 278.441C1279.87 284.243 1263.62 287.144 1245.2 287.144C1217.11 287.144 1194.73 281.296 1178.06 269.6C1161.49 257.813 1151.77 241.788 1148.92 221.528L1206.8 218.489C1208.55 227.054 1212.78 233.592 1219.51 238.105C1226.23 242.525 1234.84 244.735 1245.34 244.735C1255.65 244.735 1263.94 242.755 1270.2 238.795C1276.56 234.743 1279.78 229.54 1279.87 223.186C1279.78 217.844 1277.52 213.47 1273.1 210.062C1268.68 206.563 1261.87 203.892 1252.66 202.05L1215.91 194.729C1195.19 190.585 1179.77 183.402 1169.64 173.179C1159.6 162.957 1154.58 149.926 1154.58 134.086C1154.58 120.456 1158.26 108.714 1165.63 98.8604C1173.09 89.0065 1183.54 81.4089 1196.99 76.0675C1210.53 70.7261 1226.37 68.0554 1244.51 68.0554C1271.31 68.0554 1292.4 73.7191 1307.78 85.0465C1323.25 96.3739 1332.27 111.799 1334.85 131.323Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <section className="footer-bottom absolute bottom-0 inset-x-0 w-full">
                <div className="container py-10 flex items-center justify-between">
                    <div className="flex items-center gap-14">
                        <div className="flex flex-col gap-2">
                            <p className="text-[14px] text-gray-400">Version</p>
                            <p className="text-white font-semibold">©2024</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-14">
                        <div className="flex flex-col gap-2">
                            <p className="text-[14px] text-right text-gray-400">
                                Socials
                            </p>
                            <div className="flex items-center gap-8 text-white font-semibold">
                                <a href="https://instagram.com/mick.gw">
                                    Instagram
                                </a>
                                <a href="https://www.linkedin.com">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
