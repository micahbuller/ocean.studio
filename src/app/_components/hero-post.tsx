import CoverImage from "@/app/_components/cover-image";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Image from "next/image";
import cn from "classnames";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({ title, coverImage, date, excerpt, slug }: Props) {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <div className="hidden sm:block">
          <CoverImage title={title} src={coverImage} slug={slug} />
        </div>
        <Link className="relative sm:hidden flex w-full h-[50vh] bg-white" href={`/posts/${slug}`} aria-label={title}>
          <Image
            src={coverImage}
            alt={`Cover Image for ${title}`}
            className={cn("shadow-sm w-full", {
              "hover:shadow-lg transition-shadow duration-200 object-cover": slug,
            })}
            fill
          />
        </Link>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 ">
        <div>
          <h3 className="font-display mb-4 text-4xl lg:text-5xl leading-tight">
            <Link href={`/posts/${slug}`} className="hover:underline">
              {title}
            </Link>
          </h3>
        </div>
        <div>
          <p className="font-body text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
