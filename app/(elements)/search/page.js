import BackToTop from "@/app/backToTop";
import SearchPage from "./(search)";

export const metadata = {
  title: "",
  description: "",
};

const SearchLayout = () => {
  return (
    <>
      <SearchPage />

      <BackToTop />
    </>
  );
};

export default SearchLayout;
