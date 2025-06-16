import React from "react";
import Link from "next/link";

type Props = {
  title: string;
  author: string;
  datePublished: string;
  coverPhoto: any;
  slug: string;
};

const BlogCard = ({
  title,
  author,
  datePublished,
  coverPhoto,
  slug,
}: Props) => {
  return (
    <div>
      {title}
      <Link href={"/posts/" + slug}>
        <div>
          <img src={coverPhoto.url} />
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
