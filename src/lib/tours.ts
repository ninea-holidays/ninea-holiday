import tourStonetown from "@/assets/tour-stonetown.jpg";
import tourSpice from "@/assets/tour-spice.jpg";
import tourJozani from "@/assets/tour-jozani.jpg";
import tourSandbank from "@/assets/tour-sandbank.jpg";

export type Tour = {
  slug: string;
  tag: string;
  title: string;
  blurb: string;
  description: string;
  duration: string;
  price: string;
  image: string;
  alt: string;
  highlights: string[];
};

export const tours: Tour[] = [
  {
    slug: "stone-town",
    tag: "Heritage · 1 day",
    title: "Stone Town Walk",
    blurb: "Carved doors, spice bazaars, Freddie Mercury's street",
    description:
      "A slow walk through the coral-stone alleys of Zanzibar's oldest quarter — palaces, bazaars, the old slave market memorial and the seafront at sunset.",
    duration: "1 day",
    price: "from $75 per person",
    image: tourStonetown,
    alt: "Narrow coral stone alley in Stone Town at golden hour",
    highlights: ["Guided old town walk", "Spice bazaar & palaces", "Sunset at Forodhani"],
  },
  {
    slug: "spice-farm",
    tag: "Culture · 1 day",
    title: "Spice Farm Journey",
    blurb: "Cloves, vanilla and cinnamon straight from the vine",
    description:
      "Taste and smell your way through a working spice farm with a local grower, followed by a home-cooked Swahili lunch.",
    duration: "1 day",
    price: "from $60 per person",
    image: tourSpice,
    alt: "Hands holding cloves and vanilla pods on a Zanzibar spice farm",
    highlights: ["Working spice farm", "Swahili lunch", "Fresh fruit tasting"],
  },
  {
    slug: "jozani-forest",
    tag: "Nature · 1 day",
    title: "Jozani Forest",
    blurb: "Red colobus monkeys and the mangrove boardwalk",
    description:
      "Zanzibar's last patch of ancient forest — home to the endemic red colobus monkey, giant mahogany trees and a quiet mangrove boardwalk.",
    duration: "1 day",
    price: "from $70 per person",
    image: tourJozani,
    alt: "Red colobus monkey on a branch in Jozani forest",
    highlights: ["Red colobus tracking", "Mangrove boardwalk", "Butterfly centre"],
  },
  {
    slug: "safari-blue",
    tag: "Ocean · 1 day",
    title: "Sandbank & Safari Blue",
    blurb: "Dhow sailing, snorkelling and a seafood lunch",
    description:
      "Sail out by dhow to Nakupenda sandbank, snorkel the reef, then a grilled seafood lunch on the sand before an evening sail home.",
    duration: "1 day",
    price: "from $95 per person",
    image: tourSandbank,
    alt: "Aerial view of a white sandbank in turquoise Zanzibar water",
    highlights: ["Traditional dhow sail", "Reef snorkelling", "Seafood lunch on the sand"],
  },
];
