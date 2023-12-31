import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@/components/svgs/ArrowUpRight";

export const NavButton = () => {
    return (
        <Link id="nav-button-wrapper" href="/albums" className="hidden">
            <motion.div
                whileTap={{ scale: 0.9 }}
                className="nav-button min-w-[220px] bg-white flex gap-1 items-center justify-center text-black w-fit py-3 text-[18px] px-8 rounded-full border-[1px] border-solid border-black font-semibold hover:bg-black hover:text-white transition-colors duration-300 ease-in-out"
            >
                <span>EXPLORE</span>
                <ArrowUpRight className="-mb-[2px]" width={30} height={30} />
            </motion.div>
        </Link>
    );
};
