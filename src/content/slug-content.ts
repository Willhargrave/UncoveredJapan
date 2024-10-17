export const travelTips = [
  {
    name: 'Nightlife',
    slug: 'nightlife',
    image: '/assets/images/nightlife.avif',
  },
  { name: 'Dining', slug: 'dining', image: '/assets/images/dining.avif' },
  {
    name: 'Travelling',
    slug: 'travelling',
    image: '/assets/images/shinkansen.avif',
  },
  {
    name: 'Etiquette',
    slug: 'etiquette',
    image: '/assets/images/etiquette.avif',
  },
  {
    name: 'Accomodation',
    slug: 'accomodation',
    image: '/assets/images/ryokan.avif',
  },
  {
    name: 'Japanese',
    slug: 'japanese',
    image: '/assets/images/caligraphy.avif',
  },
];

export interface ContentData {
  name: string;
  slug: string;
  image: string;
  description: string;
  tips: { title: string; content: string }[];
}
export const contentMapping: Record<string, ContentData> = {
  nightlife: {
    name: 'Nightlife',
    slug: 'nightlife',
    image: '/assets/images/nightlife.avif',
    description:
      "Nightlife in Japan is vibrant and diverse. From karaoke bars to nightclubs, there's something for everyone.",
    tips: [
      {
        title: '🍶 Local Bars',
        content: 'Choose to go to local bars over chains like the Hub.',
      },
      {
        title: '🌃 Location',
        content:
          'The major cities have lots of drinking districts, which can be a lot of fun to jump around in.',
      },
      {
        title: '🍾 Nightclubs',
        content:
          'Nightclubs in Japan stay open very late. Check out Resident Advisor for events.',
      },
      {
        title: '🎶 Live Music',
        content:
          'Japan has an amazing live music scene. Check out Tokyo Gig Guide for listings.',
      },
      {
        title: '🎤 Karaoke',
        content:
          'There are different types of karaoke, from private rooms to bars. One recomendation is maneko-neko which is a chain of karaoke places.',
      },
      // More tips...
    ],
  },
  travelling: {
    name: 'Travelling',
    slug: 'travelling',
    image: '/assets/images/shinkansen.avif',
    description:
      "Japan is a huge country so you're probably going to more than one place. Thankfully Japan has an excellent public transport system, but there are some tips to make things even easier.",
    tips: [
      {
        title: '🎫 Japan Rail Pass',
        content:
          'Previously this would have been a must, but with a significant price increase you should plan ahead and estimate how much you will use the bullet train before booking one. With a JR pass you are more limited on the types of trains you can ride so bare that in mind as well',
      },
      {
        title: '🧳 Luggage Forwarding',
        content:
          'One thing a lot of tourists take advantage of is luggage forwarding. You can send your luggage from one hotel to another for a  very small fee. This is great if you are going to be moving around a lot and do not want to carry your luggage with you.',
      },
      {
        title: '💳 Travelcard',
        content:
          'The metro system in Japan is very good. However buying tickets is a bit confusing as instead of buying a ticket for where you get off you buy a ticket at the value the station you alight at is. Getting a travel card changes this to a tap in tap out system. You can use these all across Japan and even use them in convenience stores, supermarkets and vending machines.',
      },
      // More tips...
    ],
  },
  accomodation: {
    name: 'Accomodation',
    slug: 'accomodation',
    image: '/assets/images/ryokan.avif',
    description:
      'There are many different types of accomidation in Japan. From traditional ryokans to modern hotels, make sure you do not waste money on a shoebox when you could be staying somewhere better.',
    tips: [
      {
        title: '🏨 Hotels',
        content:
          'You can find all types of hotels in Japan. However, the rooms will be smaller than a Western-standard, so you may consider staying at business hotel. They are cheaper and have all the amenities you need, and are a uniquely Japanese experience.',
      },
      {
        title: '👘 Ryokans',
        content:
          'Ryokans are traditional Japanese inns. They are a great way to experience traditional Japanese culture. They are usually more expensive than hotels, but the experience is worth it.',
      },
      {
        title: '🚫 Air-BnB',
        content:
          'Air BNB is not that common in Japan, many of the listings are not legal so you do run the risk of not being able to enter your accomidation.',
      },
      {
        title: '🏩 Love Hotels',
        content:
          'Love hotels are seedy by nature, but they are usually quite cheap and often have fun themes so you might want to give them a try. Unfortunately they are not always available for same-sex couples.',
      },
      // More tips...
    ],
  },
  etiquette: {
    name: 'Etiquette',
    slug: 'etiquette',
    image: '/assets/images/etiquette.avif',
    description:
      'Japan has a lot of customs and traditions that tourists should be aware of. Most of the time just being quiet in public and not being a nuisiance is fine but there are some things to consider.',
    tips: [
      {
        title: '🤫 Be Quiet',
        content:
          'Trains in Japan are very quiet. You should not talk on the phone, and you should not talk loudly to your friends. If you are talking to your friends you should do so quietly. Eating on the train is also considered rude.',
      },
      {
        title: "🗑️ Don't litter",
        content:
          'Japan is a very clean country. You should not litter. If you have rubbish you should take it with you until you find a bin extra tip: if you need to find a bin, head to a convenience store.',
      },
      {
        title: '📸 Taking pictures & filming',
        content:
          'Seems obvious to not take pictures of people without their permission. But that has been a big problem recenetly in Japan, especially people in traditional clothing like kimon, or geishas.',
      },
      {
        title: '🥢 Eating',
        content:
          'If with Japanese people, saying itadakimasu before eating is polite. Slurping food is also polite. However leaving food is quite rude and passing food from chopstick to chopstick is super rude.',
      },
      // More tips...
    ],
  },
  dining: {
    name: 'Dining',
    slug: 'dining',
    image: '/assets/images/dining.avif',
    description:
      'Japan is famous for its food and you spend your whole trip eating and drinking. You can find michellin star restraunts for under £10, you can eat delicately made sushi, and even the convenience store has a great selection.',
    tips: [
      {
        title: '😷 Allergies, intolerances and dietary requirements',
        content:
          'Japan is not as welcoming as some other countries for dietry requirements. Vegetarian or vegan can be hard to find as fish stock is used in a lot of dishes. Any intolerences or allegies should be written in Japanese and show to a waiter.',
      },
      {
        title: '☎️ Booking a table',
        content:
          'Booking a table is not always necessary in Japan. However, if you are going to a popular restraunt or a restraunt that is small, you should book a table. If you do not have access to a hotel conceriege websites like tablelog or gurunavi is where you should book. Also lots of places do not allow foreigners so booking in advance might be necessary.',
      },
      {
        title: '🏮 Izakayas',
        content:
          'Izakayas are Japanese pub style food. Often something like skewered meat (yakitori) but you can usually all types of food. A popular chain torikizoku is a great experience and you can order food from a tablet which makes things easier. They also offer all you can drink for a set price for a set time.',
      },
      {
        title: '👇 Ordering food',
        content:
          'Many restaurants have a ticket machine where you order your food. You can usually find a picture of the food so you can point to what you want. If you are in a restraunt where you order from a person, you should not tip. Tipping is not a thing in Japan and can be seen as rude.',
      },
      // More tips...
    ],
  },
  japanese: {
    name: 'Japanese',
    slug: 'japanese',
    image: '/assets/images/caligraphy.avif',
    description:
      'Learning Japanese is hard. But you should try and learn a few words. Japanese people are very polite and will appreciate the effort. You can get by with just English but it will make your trip a lot easier if you know a few words.',
    tips: [
      {
        title: '📚 Hiragana and Katakana',
        content:
          'Japanese has three writing systems. Hiragana and Katakana are the two phonetic alphabets. You should learn before coming as you might be able to read some signs and menus. Here is a resource: https://www.tofugu.com/japanese/best-hiragana-and-katakana-learning-resources/',
      },
      {
        title: '🗣️ Set Phrases',
        content:
          'Learning to say hello, sorry, excuse me etc can go a long way. Here is a resource: https://boutiquejapan.com/essential-japanese-words-phrases-for-travelers-to-japan/',
      },
      // More tips...
    ],
  },
};

export function fetchDataBasedOnSlug(slug: string) {
  const content = contentMapping[slug];
  if (!content) {
    throw new Error(`No content found for slug: ${slug}`);
  }
  return content;
}
