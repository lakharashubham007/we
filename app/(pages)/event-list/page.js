import BackToTop from "@/app/backToTop";
import EventListPage from "./(event-list)";

export const metadata = {
  title: "",
  description: "",
};

const EventListLayout = () => {
  return (
    <>
      <EventListPage />

      <BackToTop />
    </>
  );
};

export default EventListLayout;
