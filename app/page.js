import BackToTop from "./backToTop";
import HomePage from "./wewagad/page";

export const metadata = {
  title: "Home - WeWagad",
  description: "wewagad celebrity club.",
};

export default function Home() {
  return (
    <main>
      <HomePage />

      <BackToTop />
    </main>
  );
}
