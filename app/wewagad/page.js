import BackToTop from "../backToTop";
import ModernUniversityPage from "./(modern-university)";
import { getAllPostsMeta } from "@/mdx";

export const metadata = {
  title: "We Wagad Association",
  description: "Wagad's biggest celebrity group.",
};

const ModernUniversityLayout = async () => {
  const blog = await getAllPostsMeta();

  return (
    <>
      <ModernUniversityPage getAllBlogs={blog} />
      <BackToTop />
    </>
  );
};

export default ModernUniversityLayout;
