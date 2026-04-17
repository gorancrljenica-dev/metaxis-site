import { getAllPosts } from "@/lib/blog";
import BlogPageContent from "@/components/BlogPageContent";

export default function BsBlogPage() {
  const posts = getAllPosts();
  return <BlogPageContent locale="bs" posts={posts} />;
}
