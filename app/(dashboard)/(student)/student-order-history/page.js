import BackToTop from "@/app/backToTop";
import StudentStory from "./(order-history)";

export const metadata = {
  title: "",
  description: "",
};

const OrderHistoryLayout = () => {
  return (
    <>
      <StudentStory />

      <BackToTop />
    </>
  );
};

export default OrderHistoryLayout;
