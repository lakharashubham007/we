import BackToTop from "@/app/backToTop";
import ServicePage from "./(service)";

export const metadata = {
  title: "",
  description: "",
};

const ServiceLayout = () => {
  return (
    <>
      <ServicePage />
      <BackToTop />
    </>
  );
};

export default ServiceLayout;
