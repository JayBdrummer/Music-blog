import PageLayout from "../components/layout/PageLayout";
import BlogPostCard from "../components/reviews/BlogPostCard";
import { musicPosts } from "../data/musicPosts";

function MusicTalk() {
  return (
    <PageLayout>
      {musicPosts.map(post => (
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

export default MusicTalk;