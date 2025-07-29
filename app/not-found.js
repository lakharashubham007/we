import NotFound from "@/components/NotFound/NotFound";

export const metadata = {
  title: "Page not found - WeWagad",
  description: "Wewaga Not Found",
};

const ErrorPage = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default ErrorPage;
