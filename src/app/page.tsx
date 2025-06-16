import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "./components/BlogCard";

const graphcms = new GraphQLClient(
  "https://us-west-2.cdn.hygraph.com/content/cmbwooyhr03e907wa32n3t5ae/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      datePublished
      slug
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        url
      }
    }
  }
`;

export default async function Home() {
  const { posts } = (await graphcms.request(QUERY)) as any;
  console.log(posts);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {posts.map((post: any) => {
          return <BlogCard
            key={post.id}
            title={post.title}
            author={post.author}
            datePublished={post.datePublished}
            coverPhoto={post.coverPhoto}
            slug={post.slug}
          />;
        })}
      </main>
    </div>
  );
}
