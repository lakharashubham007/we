import SingleProfile from "../index";

export const metadata = {
  title: "",
  description: "",
};

const SingleProfileLayout = ({ params }) => {
  return (
    <>
      <SingleProfile getParams={params} />
    </>
  );
};

export default SingleProfileLayout;
