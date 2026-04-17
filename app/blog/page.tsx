import { getAllPosts } from "@/lib/blog";
import BlogPageContent from "@/components/BlogPageContent";

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogPageContent locale="en" posts={posts} />;
}
