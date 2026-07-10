import Link from "next/link";

export function GetADemoButton({ href = "", text = "Get a demo", className = "" }: { href?: string, text?: string, className?: string }) {
    return (
        <Link href={href} className={`py-3 px-6 rounded-full bg-black text-white mt-4 cursor-pointer border shadow-md hover:shadow-lg ${className}`}>{text}</Link>
    )
}