import Hero from "~/components/hero";
import Header from "~/components/header";
import Footer from "~/components/footer";
import MenuItem from "~/components/menuItem";

export function Welcome() {
  return (
    <main>
      <Header />
      <Hero />
      <Footer />
      <MenuItem />
    </main>
  );
}
