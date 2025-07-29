import BackToTop from "@/app/backToTop";
import EventGridPage from "./(event-grid)";

export const metadata = {
  title: "",
  description: "",
};

const EventGridLayout = () => {
  return (
    <>
      <EventGridPage />

      <BackToTop />
    </>
  );
};

export default EventGridLayout;
