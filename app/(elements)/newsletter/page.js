import BackToTop from "@/app/backToTop";
import NewsletterPage from "./(newsletter)";

export const metadata = {
  title: "",
  description: "",
};

const NewsletterLayout = () => {
  return (
    <>
      <NewsletterPage />
      <BackToTop />
    </>
  );
};

export default NewsletterLayout;
