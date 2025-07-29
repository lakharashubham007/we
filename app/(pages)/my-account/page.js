import BackToTop from "@/app/backToTop";
import MyAccountPage from "./(my-account)";

export const metadata = {
  title: "",
  description: "",
};

const MyAccountLayout = () => {
  return (
    <>
      <MyAccountPage />

      <BackToTop />
    </>
  );
};

export default MyAccountLayout;
