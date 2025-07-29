import BackToTop from "@/app/backToTop";
import AnnouncementsPage from "./(announcements)";

export const metadata = {
  title: "",
  description: "",
};

const AnnouncementsLayout = () => {
  return (
    <>
      <AnnouncementsPage />
      <BackToTop />
    </>
  );
};

export default AnnouncementsLayout;
