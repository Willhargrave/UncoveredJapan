export interface TravelData {
  name: string;
  image: string;
  geoName: string;
  description: string;
}

export const TokyoContent: Record<string, TravelData> = {
  metropolitanbuilding: {
    name: 'Tokyo Metropolitan Building: a free alternative to Tokyo Tower & Tokyo Skytree',
    geoName: 'Tokyo Metropolitan Government Building',
    image: '/assets/images/metropolitan.avif',
    description:
      "Tokyo Tower and the Tokyo Skytree are two of the most iconic landmarks in Tokyo. They're also incredibly popular with tourists so getting the best shot can be difficult. The metropolitan building on the other hand is free and whilst still popular has a much larger space for viewing and is less crowded. It also has a great view of the other two towers & Mount fuji.,",
  },
  ShinjukuNiChome: {
    name: 'Shinjuku Ni-Chome: Avoid the scams of Kabukicho',
    geoName: 'Shinjuku Ni-chome',
    image: '/assets/images/nichome.jpeg',
    description:
      'Close by to Kabukicho which is a bit of tourist trap when it comes to nightlife and bars (as well as a touts who can be dangerous). Shinjuku Ni-Chome is the gay area of Tokyo and there is a large vibrant bar scene there which be a lot cheaper than the nearby Kabukicho',
  },
  RainbowKaraoke: {
    name: 'Rainbow Karaoke: An upmarket karaoke experience in Shibuya',
    geoName: 'Rainbow Karaoke Shibuya',
    image: '/assets/images/karaoke.jpeg',
    description:
      "You can't really go wrong with karaoke in Japan and anywhere you go will be fun. Rainbow karaoke is hiding in plain sight in the middle of Shibuya and is a great experience, unlike most chains some rooms also provide instruments and the whole interior is more upmarket than other places. Despite this it's still very cheap with prices being 450 yen (around £2) for an hour.",
  },
  Ikebukuro: {
    name: 'Ikebukuro: a less sweaty Akihabara',
    geoName: 'Ikebukuro Station',
    image: '/assets/images/ikebukuro.jpeg',
    description:
      "Ikebukuro is one of the largest districts in Tokyo  and is a lowkey nerds paradise. Akihabara is often where people go for this sort of thing but it/'s teeming with tourists and a lot of people end up leaving disappointed. Ikebukuro is aiming to replace Akihabara as the mecha of otaku stuff. Super Potato is a store that sells old video games that are still in pristine condition, the largest Pokemon store is in Ikebukuro, and a 9 floor Animate store is also in the area.",
  },
  Shimokitazawa: {
    name: 'Shimokitazawa: The best place to see live music in Tokyo',
    geoName: 'Shimokitazawa Station',
    image: '/assets/images/shimokitazawa.webp',
    description:
      'Shimokitazawa is a small district in Tokyo known for vintage clothes & live music. The vintage clothes scene has exploded in recent years and has become more expensive. The live music however is still thriving and has not lost any of its charm. There will be dozens of clubs and small venues playing shows daily. You can usually wander around the town at night and find somewhere to watch music. Some places will be sold out but often you can buy tickets on the door for around 1000-3000 yen.',
  },
  Koenji: {
    name: 'Koenji: The actual best place for vintage clothes',
    geoName: 'Koenji Station',
    image: '/assets/images/koenji.jpeg',
    description:
      "Koenji is very similar to Shimokitazawa. Both are well known for vintage clothes & live music, so if your interested in either or both of these it's worth going to both places. Koenji is less well-known than Shimokitazawa however so the streets will be quieter and importantly the vintage clothes will be cheaper. As vintage shopping has become trendy so have the prices gone up, the best shop to visit (and this is a chain so you can them all over Japan) is called second street which has a huge selection of clothes and is the cheapest store.",
  },
  Nakano: {
    name: 'Bar hopping in Nakano',
    geoName: 'Nakano Broadway',
    image: '/assets/images/nakano.jpeg',
    description:
      "Nakano is slightly outside the centre of Tokyo and doesn't have the same repuation of the drinking areas like Shinjuku, Shibuya, Roppongi. However much like the famous Golden Gai area in Shinjuku there are dozens of bars and resteraunts in a concentrated area and they all of their own themes and personality. Like a jukebox bar where you can request music free of charge as you drink, an underground nightclub, and a karaoke bar.",
  },
};

export const BeyondTokyoContent: Record<string, TravelData> = {
  kurashiki: {
    name: 'Kurashiki: The Venice of Japan',
    geoName: 'Kurashiki Bikan Historical Quarter',
    image: '/assets/images/kurashiki.jpeg',
    description:
      'Kurashiki is located in Okayama which is famous for denim. There are lots of denim themed shops and you can even get a denim-flavoured ice cream. The main attraction is the canal area which is lined with willow trees and old storehouses. The area is very picturesque and is a great place to take photos. There are also a lot of museums in the area including the Ohara Museum of Art which is the first museum of western art in Japan.',
  },
  ginzanonsen: {
    name: 'Ginzan onsen',
    geoName: 'Ginzan Onsen',
    image: '/assets/images/ginzan-onsen.jpeg',
    description:
      'Nestled in the mountains of Yamagata is the incredibly picturesque Ginzan onsen. A former silver mine turned into ryokan village has a beautiful stream running through it, with woods and caves to explore beyond. It gets very snowy in the winter providing visitors with gorgeous scenery',
  },
  kiso: {
    name: 'Kiso Valley',
    geoName: 'Tsumago-juku',
    image: '/assets/images/kiso.jpeg',
    description:
      'Sitting betweeen the bustling Tokyo and Kyoto Kiso is the perfect stop on your way. A former trading route that still has a few post towns that retain their traditional feel. If you enjoy hiking and need a rest from some of the more congested parts of Japan then staying somewhere in Kiso Valley is recommended',
  },
  geroonsen: {
    name: 'Gero Onsen',
    geoName: 'Gero Onsen',
    image: '/assets/images/gero.jpeg',
    description:
      'Gero Onsen is in Gifu which is about 3 hours away from Tokyo, despite both being onsen towns its very different from the mountainous Ginzan Onsen. Gero Onsen is frog-themed (gero means ribbit in Japanese) and has three public bath houses you can visit for 1500 yen, an open-air musuem of the traditional farmhouses and also a musuem dedicated to a guard dog.',
  },
  nagoro: {
    name: 'Nagoro Scarecrow Village',
    geoName: 'Nagoro, Tokushima Prefecture',
    image: '/assets/images/nagoro.jpeg',
    description:
      "Japan is known for it's weirdness and a lot of that is found in the cities but the weirdness spreads all around the country. In the North-Western prefecure of Tokushima is a town where the straw-filled residents outnumber the human-ones by 10:1. Rural Japan is facing a population crisis and one of the remaining residents of this tiny village created new neighbours for the whole village to enjoy. Unfortunately due to it's remoteness you can only really access the area by car, but could you really live with yourself if you missed out on this?",
  },
  kochi: {
    name: 'Kochi',
    geoName: 'Kochi Castle',
    image: '/assets/images/kochi.jpeg',
    description:
      "There's lots to do in Shikoku an island in the South of Japan. You can visit the famous onsen town Beppu but if you want something less touristy and crowded the city of Kochi could be worth a visit. One of the main attractions is Kochi castle which is one of the few untouced castles left in Japan, and right by it is Hirome Market which is a great tourist-free alternative to Tsukiji market in Tokyo. Shikoku in general is known for its beatiful mountains and scenery so its definetly worth the train ride down if your staying in the west of Japan (Osaka, Kyoto, Hiroshima).",
  },
};

export const travelContent = {
  tokyo: TokyoContent,
  beyondTokyo: BeyondTokyoContent,
};
