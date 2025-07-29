import BackToTop from "@/app/backToTop";
import EventSiderbarPage from "./(event-sidebar)";

export const metadata = {
  title: "",
  description: "",
};

const EventSiderbarLayout = () => {
  return (
    <>
      <EventSiderbarPage />

      <BackToTop />
    </>
  );
};

export default EventSiderbarLayout;
