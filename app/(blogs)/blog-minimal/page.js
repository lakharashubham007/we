import BackToTop from "@/app/backToTop";
import BlogGridMinimalPage from "./(blog-minimal)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "Blog Grid - WeWagad",
  description: "WeWagad Digital Platform",
};

const BlogGridMinimalLayout = async () => {
  const blog = await getAllPostsMeta();
  return (
    <>
      <BlogGridMinimalPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default BlogGridMinimalLayout;
