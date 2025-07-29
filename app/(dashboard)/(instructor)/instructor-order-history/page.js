import BackToTop from "@/app/backToTop";
import OrderHistoryPage from "./(order-history)";

export const metadata = {
  title: "",
  description: "",
};

const OrderHistoryLayout = () => {
  return (
    <>
      <OrderHistoryPage />

      <BackToTop />
    </>
  );
};

export default OrderHistoryLayout;
