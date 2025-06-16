import { GraphQLClient, gql } from "graphql-request";

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
        publishedAt {
          createdBy {
            id
          }
          url
        }
      }
    }
  }
`;
export default function Home() {
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"></main>
    </div>
  );
}
