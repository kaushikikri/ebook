import { useTitle } from "../../hook";

import { Hero, Testimonials, Faq, FeatureProduct } from "./components";


export const Homepage = () => {

  useTitle("Access Latest Computer Science eBook -React App");

  return (
    <main className="mt-4">
      <Hero />
      <FeatureProduct />
      <Testimonials />
      <Faq />
    </main>
  )
}
