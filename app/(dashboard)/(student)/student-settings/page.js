import BackToTop from "@/app/backToTop";
import SettingPage from "./(settings)";

export const metadata = {
  title: "",
  description: "",
};

const SettingLayout = () => {
  return (
    <>
      <SettingPage />

      <BackToTop />
    </>
  );
};

export default SettingLayout;
