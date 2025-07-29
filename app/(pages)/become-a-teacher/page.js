import BackToTop from "@/app/backToTop";
import TeacherPage from "./(become-a-teacher)";

export const metadata = {
  title: "",
  description: "",
};
const TeacherLayout = () => {
  return (
    <>
      <TeacherPage />

      <BackToTop />
    </>
  );
};

export default TeacherLayout;
