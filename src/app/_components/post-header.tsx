import Avatar from "./avatar";
import CoverImage from "./cover-image";
import CoverVideo from "./cover-video";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_components/post-title";
import { type Author } from "@/interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  coverVideo?: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, coverVideo, date, author }: Props) {
  return (
    <>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      <div className="mb-8 md:mb-16 max-w-5xl mx-auto">
        {}
        <PostTitle>{title}</PostTitle>
        {coverVideo != undefined ? <CoverVideo title={title} src={coverVideo} /> : <CoverImage title={title} src={coverImage} />}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
