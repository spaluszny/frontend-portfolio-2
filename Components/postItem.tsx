import Link from "next/link";
import Image from "next/image";

interface PostItemProps {
    slug: string;
    title: string;
    // date: string;
    description: string;
    picture: string;
    alt: string;
}


export function PostItem({ slug, title, description, picture, alt }: PostItemProps) {
    return <article>
        <div className="w-80 md:w-100">
            <div className="border-2 overflow-hidden transition-all duration-300 grayscale-0 hover:grayscale md:w-100">
                <Image
                    src={picture}
                    alt={alt}
                    width={400}
                    height={300}
                    className="w-full h-auto object-cover" />
            </div>
            <div className="pt-5 pb-5">
                <Link href={slug} className="font-serif text-2xl hover:underline hover:underline-offset-2">{title}</Link>
            </div>
            <hr className="w-30 h-0.5 bg-black"></hr>
            <p className="pt-5 pb-2 font-serif">{description}</p>

            <Link
                href={slug}
                className="hover:opacity-70 transition-all duration-150 font-sans group"
            >
                Read More <span className="group-hover:translate-x-1 inline-block transition-transform duration-150">→</span>
            </Link>
        </div>
    </article>

}