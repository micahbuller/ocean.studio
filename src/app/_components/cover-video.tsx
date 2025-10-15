"use client";
import Link from "next/link";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverVideo = ({ title, src, slug }: Props) => {
  const video = (
    <iframe className="w-full aspect-video self-stretch md:min-h-96" src={src} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {video}
        </Link>
      ) : (
        video
      )}
    </div>
  );
};

export default CoverVideo;
