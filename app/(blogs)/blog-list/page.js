import BackToTop from "@/app/backToTop";
import BlogListPage from "./(blog-list)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog List - WeWagad",
  description: "Blog list WeWagad",
};

const BlogListLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <BlogListPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogListLayout;
