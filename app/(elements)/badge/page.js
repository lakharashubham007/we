import BackToTop from "@/app/backToTop";
import BadgePage from "./(badge)";
export const metadata = {
  title: "",
  description: "",
};

const BadgeLayout = () => {
  return (
    <>
      <BadgePage />

      <BackToTop />
    </>
  );
};

export default BadgeLayout;
