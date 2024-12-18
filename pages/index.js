import { ArticleLink } from "@components/ArticleLink";
import { getAllMarkdownData } from "@util/docs";


export async function getStaticProps() {
  // fetches all posts within this system
  const data = getAllMarkdownData("/_posts/");
  return { props: { data } }
}

export default function index({ data }) {
  return (
    <main className="max-w-6xl mx-auto">

      {data.map((item, index) => (
        <ArticleLink
          key={index}
          href={item.slug}
          date={item.metadata.date}
        >
          {item.metadata && item.metadata.title && item.metadata.title}
        </ArticleLink>
      ))}
    </main>
  );
}