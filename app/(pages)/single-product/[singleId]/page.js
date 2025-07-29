import SingleProductPage from "../index";

export const metadata = {
  title: "",
  description: "",
};

const SingleProductLayout = ({ params }) => {
  return (
    <>
      <SingleProductPage getParams={params} />
    </>
  );
};

export default SingleProductLayout;
