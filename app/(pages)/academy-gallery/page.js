import BackToTop from "@/app/backToTop";
import AcademyGallery from "./(academy-gallery)";

export const metadata = {
  title: "",
  description: "",
};

const AcademyGalleryLayout = () => {
  return (
    <>
      <AcademyGallery />

      <BackToTop />
    </>
  );
};

export default AcademyGalleryLayout;
