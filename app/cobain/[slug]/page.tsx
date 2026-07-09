import { Metadata } from "next";
import Link from "next/link";

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const formattedTitle = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
    return {
        title: formattedTitle,
    };
}

export default async function DetailCobain({params}: {params: Promise<{slug: string}>}){
    const {slug} = await params;

    return (
        <div>
            Detail: {slug}
            <br />
            <Link href={'/cobain'}>Kembali</Link>
        </div>
    )
}