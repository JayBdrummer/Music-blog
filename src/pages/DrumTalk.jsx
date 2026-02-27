import PageLayout from "../components/layout/PageLayout";
import BlogPostCard from "../components/reviews/BlogPostCard";
import { drumPosts } from "../data/drumPosts";

function DrumTalk() {
  return (
    <PageLayout>
      {drumPosts.map(post => (
        <BlogPostCard
          key={post.id}
          image={post.image}
          title={post.title}
          specs={post.specs}
        >
          {post.content}
        </BlogPostCard>
      ))}
    </PageLayout>
  );
}

export default DrumTalk;