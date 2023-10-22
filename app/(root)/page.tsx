import Image from 'next/image';
import NavBar from '@/components/NavBar';
import LoadingCounter from '@/components/LoadingCounter';
import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';
import OurNewItem from '@/components/OurNewItem';
import PopularItem from '@/components/popularItem';
// import PopularItem from '@/save/popularItem';
import Carousel from '@/components/Carousel';
import MenuList from '@/components/MenuList';
import BestOffer from '@/components/BestOffer';
import Testimonials from '@/components/Testimonials';
import Experties from '@/components/Experties';
import Gallery from '@/components/Gallery';
import RecentNews from '@/components/RecentNews';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex bg-gradient-to-r w-full overflow-hidden from-[#1C1F17] via-[#0C0C06] to-black   flex-col items-center  ">
      {/* <LoadingCounter /> */}
      <NavBar />
      <Hero />
      <Introduction />
      <OurNewItem />
      <PopularItem />
      <MenuList />
      <BestOffer />
      <Testimonials />
      <Experties />
      <Gallery />
      <RecentNews />
      <Footer />
    </main>
  );
}
