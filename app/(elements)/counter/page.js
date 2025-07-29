import BackToTop from "@/app/backToTop";
import CounterPage from "./(counter)";

export const metadata = {
  title: "",
  description: "",
};

const CounterLayout = () => {
  return (
    <>
      <CounterPage />

      <BackToTop />
    </>
  );
};

export default CounterLayout;
