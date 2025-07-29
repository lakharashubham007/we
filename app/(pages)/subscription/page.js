import BackToTop from "@/app/backToTop";
import SubscriptionPage from "./(subscription)";
export const metadata = {
  title: "",
  description: "",
};

const SubscriptionLayout = () => {
  return (
    <>
      <SubscriptionPage />

      <BackToTop />
    </>
  );
};

export default SubscriptionLayout;
