import BestHotels from "@/components/best-hotels/BestHotels";
import Hero from "@/components/hero/Hero";
import PopularLocations from "@/components/popular-locations/PopularLocations";
import sea from '../../public/assets/sea.jpg'
import hotel_image from '../../public/assets/hr_10.jpg'
import plane_image from "/public/assets/airplane.jpg"
import BestFlights from "@/components/best-flights/BestFlights";
import Features from "@/components/features/Features";

export default function Home() {
  return (
    <>
      <Hero
        image={sea}
        mainHeader="Are you ready for an adventure?"
        secondaryHeader="Browse through the popular locations."
      />
      <PopularLocations />
      <Hero
        image={hotel_image}
        mainHeader="Get the best offer for your hotel!"
        secondaryHeader="Pick your desired place."
      />
      <BestHotels />
      <Hero
        image={plane_image}
        mainHeader="Top Booked Flights for You!"
        secondaryHeader=". . ."
      />
      <BestFlights/>
      <Features/>
    </>
  );
}
