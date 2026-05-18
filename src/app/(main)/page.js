import FetaruedBooksPage from "@/app/(main)/books/featuredbooks/page";
import Hero from "@/components/homepage/Hero";
import NewArivals from "@/components/homepage/NewArivals";
import ReaderReviews from "@/components/homepage/Reviews";
import Footer from "@/components/shared/Footer";


export default function Home() {
  return (
    <>
      <Hero/>
      <NewArivals/>
      <FetaruedBooksPage/>
      <ReaderReviews/>
      <Footer/>
    </>
  );
}
