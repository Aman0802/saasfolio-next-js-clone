import Hero from "../components/sections/Hero";
import Problems from "../components/sections/Problems";
import Details from "../components/sections/Details";
import CTA from "../components/sections/CTA";
import Testimonials from "../components/sections/Testimonials";
import ProductBenefits from "../components/sections/ProductBenefits";
import Pricing from "../components/sections/Pricing";
import SolutionProblem from "../components/sections/SolutionProblem";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Problems />
      <Details />
      <CTA />
      <Testimonials />
      <ProductBenefits />
      <Pricing />
      <SolutionProblem />
      <Footer />
    </>
  );
}
