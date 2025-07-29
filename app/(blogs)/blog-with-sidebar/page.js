import BackToTop from "@/app/backToTop";
import { getAllPostsMeta } from "@/mdx";
import BlogWithSidebarPage from "./(blog-sidebar)";

export const metadata = {
  title: "Blog With Sidebar- WeWagad",
  description: "sidebar WeWagad",
};

const BlogWithSidebarLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogWithSidebarPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogWithSidebarLayout;
