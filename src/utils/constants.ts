// ============================================
// TREK LIST DATA
// ============================================
export const TREK_DATA: Trek[] = [
  {
    id: 1,
    name: "Kedarkantha Trek",
    duration: "6 Days",
    description: "Summit at 12,500 ft with panoramic snow-capped views",
    state: "Uttarakhand",
    price: 8499,
    popularity: "Popular",
    uniqueName: "kedarkanthatrek",
  },
  {
    id: 2,
    name: "Valley of Flowers Trek",
    duration: "5 Days",
    description: "Explore vibrant alpine meadows and rare flora",
    state: "Uttarakhand",
    price: 7999,
    popularity: "Trending",
    uniqueName: "valleyofflowerstrek",
  },
  {
    id: 3,
    name: "Hampta Pass Trek",
    duration: "5 Days",
    description: "Experience the beauty of the Himalayas with stunning mountain views",
    state: "Himachal Pradesh",
    price: 6999,
    popularity: "Popular",
    uniqueName: "hamptapass",
  },
  {
    id: 4,
    name: "Triund Trek",
    duration: "3 Days",
    description: "Short trek with panoramic views of the Dhauladhar range",
    state: "Himachal Pradesh",
    price: 4999,
    popularity: "Popular",
    uniqueName: "triund",
  },
];

export interface Trek {
  id: number;
  name: string;
  duration: string;
  description: string;
  state: string;
  price: number;
  popularity: string;
  uniqueName: string;
}

// ============================================
// TREK DETAILS INTERFACES
// ============================================
export interface ItineraryDay {
  day: number;
  title: string;
  altitude: string;
  distance: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  date: string;
}

export interface TrekDetail {
  name: string;
  tagline: string;
  description: string;
  difficulty: string;
  duration: string;
  distance: string;
  altitude: string;
  price: string;
  location: string;
  bestSeason: string;
  rating: number;
  reviews: number;
}

// ============================================
// KEDARKANTHA TREK DATA
// ============================================
export const KEDARKANTHA_TREK: TrekDetail = {
  name: 'Kedarkantha Trek',
  tagline:
    'Summit snowcapped peaks with panoramic 360-degree views of the Himalayas at 12,500 feet.',
  description:
    'Kedarkantha is one of the most popular summer trekking destinations in Uttarakhand. This trek combines adventure with accessibility, offering snow-capped peaks, dense forests, and stunning alpine meadows. Starting from Sankri village, the trek takes you through thick forests of oak and pine trees, wildflower-carpeted meadows, and finally to the snow-covered summit at 3,810 meters.\n\nThe trek is known for its moderate difficulty and exceptional photography opportunities. Clear blue skies and crisp mountain air make this a perfect trek for adventure enthusiasts. The summit provides breathtaking views of the snow-clad Himalayas on clear days.\n\nThis trek is ideal for those seeking an authentic mountain experience with a rewarding summit finish.',
  difficulty: 'Moderate',
  duration: '6 Days / 5 Nights',
  distance: '32 km',
  altitude: '3,810 m',
  price: '₹8,499',
  location: 'Uttarakhand',
  bestSeason: 'May–Jun, Sep–Oct',
  rating: 4.6,
  reviews: 456,
};

export const KEDARKANTHA_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Delhi to Sankri',
    altitude: '1,590 m',
    distance: '260 km drive',
    desc: 'Drive from Delhi to Sankri village. Explore the charming hill station and acclimatize to the Himalayan environment.',
  },
  {
    day: 2,
    title: 'Sankri to Juda Ka Talab',
    altitude: '2,610 m',
    distance: '8 km',
    desc: 'Trek through forests of oak and pine. Cross streams and enjoy mountain vistas. Camp at Juda Ka Talab.',
  },
  {
    day: 3,
    title: 'Juda Ka Talab to Kedarkantha Base',
    altitude: '3,250 m',
    distance: '6 km',
    desc: 'Continue through alpine meadows full of wildflowers. Reach the base camp with views of snow-capped peaks.',
  },
  {
    day: 4,
    title: 'Summit Day - Kedarkantha Peak',
    altitude: '3,810 m',
    distance: '8 km',
    desc: 'Early morning ascent to the snow-covered summit. Enjoy 360-degree Himalayan views. Take memorable photos before descending to base camp.',
  },
  {
    day: 5,
    title: 'Kedarkantha Base to Juda Ka Talab',
    altitude: '2,610 m',
    distance: '14 km',
    desc: 'Trek down through meadows and forests. Enjoy the scenic descent.',
  },
  {
    day: 6,
    title: 'Juda Ka Talab to Sankri & Drive Back',
    altitude: '1,590 m',
    distance: '8 km trek + 260 km drive',
    desc: 'Final trek to Sankri. Drive back to Delhi with memories of snowcapped peaks.',
  },
];

export const KEDARKANTHA_INCLUSIONS: string[] = [
  'All meals during the trek (vegetarian & non-vegetarian)',
  'Camping in quality mountain tents with sleeping bags',
  'Experienced trek leader & support staff',
  'First aid kit & medical support',
  'All permits and forest entry fees',
  'Transport: Delhi ↔ Sankri & return',
];

export const KEDARKANTHA_EXCLUSIONS: string[] = [
  'Travel to and from Delhi city',
  'Personal trekking gear & clothing',
  'Travel insurance (recommended)',
  'Tips and personal expenses',
  'Meals in Sankri (before/after trek)',
  'Anything not mentioned in inclusions',
];

export const KEDARKANTHA_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Amit Sharma',
    location: 'Delhi',
    rating: 5,
    text: 'Amazing trek with incredible summit views! The snow was pristine and the trek was well-organized. Highly recommended for all adventure lovers!',
    avatar: 'AS',
    date: 'Jun 2024',
  },
  {
    name: 'Divya Gupta',
    location: 'Noida',
    rating: 5,
    text: 'Breathtaking experience! The guides were knowledgeable and the camping experience was comfortable. Worth every penny!',
    avatar: 'DG',
    date: 'May 2024',
  },
  {
    name: 'Ravi Patel',
    location: 'Gurgaon',
    rating: 4,
    text: 'Great trek with amazing views of snow-capped peaks. The difficulty level is moderate which made it enjoyable for me.',
    avatar: 'RP',
    date: 'Jun 2024',
  },
];

export const KEDARKANTHA_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
];

// ============================================
// VALLEY OF FLOWERS TREK DATA
// ============================================
export const VALLEY_OF_FLOWERS_TREK: TrekDetail = {
  name: 'Valley of Flowers Trek',
  tagline:
    'Walk through nature\'s paradise adorned with vibrant alpine flowers and pristine Himalayan meadows.',
  description:
    'The Valley of Flowers is a UNESCO World Heritage Site and one of the most spectacular trekking destinations in India. This trek is famous for its stunning alpine meadows carpeted with rare and exotic wildflowers. The valley blooms with incredible biodiversity during the monsoon season, creating a mesmerizing landscape of colors.\n\nStarting from Govindghat, the trek takes you through dense forests and alongside the Alaknanda River before reaching the enchanting Valley of Flowers at 3,660 meters. This trek is perfect for nature lovers and photographers looking to capture the raw beauty of the Himalayas.\n\nThe trek combines natural beauty with moderate physical challenge, making it accessible for trekkers of various experience levels.',
  difficulty: 'Moderate',
  duration: '5 Days / 4 Nights',
  distance: '14 km',
  altitude: '3,660 m',
  price: '₹7,999',
  location: 'Uttarakhand',
  bestSeason: 'Jul–Sep',
  rating: 4.9,
  reviews: 523,
};

export const VALLEY_OF_FLOWERS_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Delhi to Govindghat',
    altitude: '1,890 m',
    distance: '300 km drive',
    desc: 'Drive from Delhi to Govindghat village. Settle in and prepare for the trek ahead.',
  },
  {
    day: 2,
    title: 'Govindghat to Pulna Village',
    altitude: '2,320 m',
    distance: '7 km',
    desc: 'Trek alongside the Alaknanda River. Pass through small villages and forests. Camp at Pulna village.',
  },
  {
    day: 3,
    title: 'Pulna to Valley of Flowers',
    altitude: '3,660 m',
    distance: '7 km',
    desc: 'Enter the magnificent Valley of Flowers. Experience nature\'s paradise with blooming wildflowers and rare alpine flora.',
  },
  {
    day: 4,
    title: 'Exploration Day at Valley',
    altitude: '3,660 m',
    distance: '5 km (optional)',
    desc: 'Explore different sections of the valley. Visit nearby waterfalls and enjoy the surreal beauty of the landscape.',
  },
  {
    day: 5,
    title: 'Valley to Govindghat & Drive Back',
    altitude: '1,890 m',
    distance: '14 km trek + 300 km drive',
    desc: 'Trek down to Govindghat. Drive back to Delhi with unforgettable memories.',
  },
];

export const VALLEY_OF_FLOWERS_INCLUSIONS: string[] = [
  'All meals during the trek (vegetarian & non-vegetarian)',
  'Camping in quality mountain tents with sleeping bags',
  'Experienced trek leader & local guide',
  'First aid kit & basic medical support',
  'All permits and entry fees (includes Valley of Flowers National Park)',
  'Transport: Govindghat & return',
];

export const VALLEY_OF_FLOWERS_EXCLUSIONS: string[] = [
  'Travel to and from Delhi',
  'Personal trekking gear & clothing',
  'Travel insurance (recommended)',
  'Tips for guides and staff',
  'Meals in Govindghat (before/after trek)',
  'Any personal expenses',
];

export const VALLEY_OF_FLOWERS_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Priya Jain',
    location: 'Bangalore',
    rating: 5,
    text: 'Simply magical! The valley was full of flowers and the natural beauty was breathtaking. Best trek experience of my life!',
    avatar: 'PJ',
    date: 'Aug 2024',
  },
  {
    name: 'Arun Nair',
    location: 'Kerala',
    rating: 5,
    text: 'A paradise on earth! The wildflowers, the clean air, and the experienced guides made this trek unforgettable.',
    avatar: 'AN',
    date: 'Jul 2024',
  },
  {
    name: 'Meera Desai',
    location: 'Pune',
    rating: 5,
    text: 'Absolutely stunning! The colors, the fragrance, everything is perfect. I recommend this to everyone who loves nature.',
    avatar: 'MD',
    date: 'Aug 2024',
  },
];

export const VALLEY_OF_FLOWERS_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// HAR KI DUN TREK DATA
// ============================================
export const HAR_KI_DUN_TREK: TrekDetail = {
  name: 'Har Ki Dun Trek',
  tagline:
    'Trek through mystical pine forests, alpine meadows, and pristine valleys to reach the sacred Har Ki Dun valley — a hidden Himalayan gem untouched by time.',
  description:
    'The Har Ki Dun trek is a masterpiece of Himalayan beauty. You begin walking through verdant oak and pine forests, wildflowers carpeting the ground beneath your feet. As you ascend, the landscape transforms dramatically into pristine alpine meadows. The journey culminates at the sacred Har Ki Dun valley at 3,570 meters, one of the most spiritual and least crowded trekking destinations in India.\n\nThis valley has been a sacred pilgrimage site for centuries, known to locals as the "Abode of God." The trek offers an authentic Himalayan experience with minimal crowds, pristine nature, and warm hospitality from local shepherds and villagers.\n\nThis trek is ideal for those seeking spiritual connection with nature while experiencing true Himalayan wilderness at a manageable altitude and difficulty level.',
  difficulty: 'Moderate',
  duration: '6 Days / 5 Nights',
  distance: '42 km',
  altitude: '3,570 m',
  price: '₹9,999',
  location: 'Himachal Pradesh',
  bestSeason: 'May–Oct',
  rating: 4.8,
  reviews: 342,
};

export const HAR_KI_DUN_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Dehradun to Sankri',
    altitude: '1,590 m',
    distance: '230 km drive',
    desc: 'Drive from Dehradun to Sankri village. Explore the charming hill station with stone cottages and lush surroundings. Acclimatize to the Himalayan environment.',
  },
  {
    day: 2,
    title: 'Sankri to Taluka',
    altitude: '2,650 m',
    distance: '12 km',
    desc: 'Trek through thick oak and pine forests. Cross streams and enjoy panoramic views. Camp at Taluka with mountain vistas.',
  },
  {
    day: 3,
    title: 'Taluka to Har Ki Dun',
    altitude: '3,570 m',
    distance: '10 km',
    desc: 'Enter the sacred Har Ki Dun valley. Walk through alpine meadows full of wildflowers (seasonal). Reach the breathtaking valley camp.',
  },
  {
    day: 4,
    title: 'Exploration Day at Har Ki Dun',
    altitude: '3,570 m',
    distance: '6 km',
    desc: 'Explore the valley, visit nearby viewpoints, and experience the spiritual essence. Optional short hikes around the campsite.',
  },
  {
    day: 5,
    title: 'Har Ki Dun to Taluka',
    altitude: '2,650 m',
    distance: '10 km',
    desc: 'Trek down through wildflower meadows. Encounter local shepherds and their grazing herds. Camp at Taluka again.',
  },
  {
    day: 6,
    title: 'Taluka to Sankri & Drive Back',
    altitude: '1,590 m',
    distance: '12 km trek + 230 km drive',
    desc: 'Final trek to Sankri. Drive back to Dehradun. Trek complete with unforgettable memories!',
  },
];

export const HAR_KI_DUN_INCLUSIONS: string[] = [
  'All meals during the trek (vegetarian & non-vegetarian)',
  'Camping in quality mountain tents with sleeping bags',
  'Experienced trek leader & support staff',
  'First aid kit & medical support',
  'All permits and forest entry fees',
  'Transport: Dehradun ↔ Sankri & return',
];

export const HAR_KI_DUN_EXCLUSIONS: string[] = [
  'Travel to and from Dehradun',
  'Personal trekking gear & clothing',
  'Travel insurance (recommended)',
  'Tips and personal expenses',
  'Meals in Sankri (Dehradun)',
  'Anything not mentioned in inclusions',
];

export const HAR_KI_DUN_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Ananya Verma',
    location: 'Delhi',
    rating: 5,
    text: 'Har Ki Dun is pure magic! The valley completely stole my heart. Less crowded than other treks, with pristine beauty. Highly recommended!',
    avatar: 'AV',
    date: 'Oct 2024',
  },
  {
    name: 'Rohan Tiwari',
    location: 'Bangalore',
    rating: 5,
    text: 'Perfect trek for someone looking to escape crowds. The forests are dense and beautiful, and the locals are incredibly warm and welcoming.',
    avatar: 'RT',
    date: 'Sep 2024',
  },
  {
    name: 'Priya Singh',
    location: 'Pune',
    rating: 4,
    text: 'Stunning valley with spiritual vibes. The altitude is manageable and the trek is well-organized. Will definitely come back to explore more!',
    avatar: 'PS',
    date: 'Aug 2024',
  },
];

export const HAR_KI_DUN_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
];

// ============================================
// TRIUND TREK DATA
// ============================================
export const TRIUND_TREK: TrekDetail = {
  name: 'Triund Trek',
  tagline:
    'Experience thrilling mountain views from the majestic Dharamshala ridge with your feet surrounded by clouds and snow-capped peaks.',
  description:
    'The Triund Trek is a popular weekend getaway offering panoramic views of the Dhauladhar mountain range. This trek combines adventure with accessibility, making it perfect for beginners and experienced trekkers alike. The trek is known for its moderate difficulty and stunning sunrise/sunset vistas from the ridge.\n\nStarting from McLeod Ganj, one of the most scenic towns in Himachal Pradesh, the trek takes you through beautiful pine and deodar forests, alongside rushing mountain streams, and finally to the iconic Triund plateau at 2,875 meters.\n\nThis trek is ideal for those seeking a quick mountain escape without compromising on scenic beauty. The trek offers excellent opportunities for photography, meditation, and connecting with nature.',
  difficulty: 'Easy to Moderate',
  duration: '3 Days / 2 Nights',
  distance: '19 km',
  altitude: '2,875 m',
  price: '₹4,999',
  location: 'Himachal Pradesh',
  bestSeason: 'Mar–Jun, Sep–Nov',
  rating: 4.7,
  reviews: 287,
};

export const TRIUND_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'McLeod Ganj to Triund Ridge',
    altitude: '2,875 m',
    distance: '9 km',
    desc: 'Trek starts early from McLeod Ganj. Climb through dense pine forests with occasional views of the valley. Reach Triund Ridge by afternoon. Set up camp and enjoy breathtaking sunset views over the Dhauladhar range.',
  },
  {
    day: 2,
    title: 'Triund Exploration Day',
    altitude: '2,875 m',
    distance: '5 km (optional)',
    desc: 'Wake up early to witness the magical sunrise. Spend the day exploring the ridge, visiting nearby peaks, and enjoying 360-degree mountain vistas. Relax at camp, enjoy local cuisine, and prepare for the memorable sunset.',
  },
  {
    day: 3,
    title: 'Triund to McLeod Ganj & Departure',
    altitude: '1,760 m (McLeod Ganj)',
    distance: '9 km trek + drive',
    desc: 'Final morning at Triund with last-minute photos. Trek down through the forests. Return to McLeod Ganj by afternoon. Drive back or explore the charming town.',
  },
];

export const TRIUND_INCLUSIONS: string[] = [
  'All meals during the trek (breakfast, lunch, dinner)',
  'Camping in comfortable mountain tents with sleeping bags',
  'Experienced trek leader & local guide',
  'First aid kit & basic medical support',
  'All permits and entry fees',
  'Transport: McLeod Ganj ↔ Trek start point',
];

export const TRIUND_EXCLUSIONS: string[] = [
  'Travel to and from Dharamshala',
  'Personal trekking gear & clothing',
  'Travel insurance (recommended)',
  'Tips for guides and staff',
  'Meals in McLeod Ganj (before/after trek)',
  'Any personal expenses',
];

export const TRIUND_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Vikram Singh',
    location: 'Delhi',
    rating: 5,
    text: 'Triund exceeded all my expectations! The sunrise view was absolutely magical. The trek is perfect for beginners and the guides were super friendly and informative.',
    avatar: 'VS',
    date: 'Nov 2024',
  },
  {
    name: 'Neha Patel',
    location: 'Mumbai',
    rating: 5,
    text: 'Best weekend getaway! The views are incredible, the camping experience was comfortable, and the food was delicious. Will definitely come back!',
    avatar: 'NP',
    date: 'Oct 2024',
  },
  {
    name: 'Arjun Kumar',
    location: 'Bangalore',
    rating: 4,
    text: 'Great trek with amazing views. A bit crowded during peak season but absolutely worth it. The McLeod Ganj town is also very charming to explore.',
    avatar: 'AK',
    date: 'Sep 2024',
  },
];

export const TRIUND_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=600&fit=crop',
];

// ============================================
// HAMPTA PASS TREK DATA (PLACEHOLDER)
// ============================================
export const HAMPTA_PASS_TREK: TrekDetail = {
  name: 'Hampta Pass Trek',
  tagline:
    'Experience contrasting landscapes as you trek from lush green valleys to barren high-altitude deserts.',
  description:
    'The Hampta Pass Trek is a unique journey that showcases the dramatic change in landscape and climate. Starting from the verdant Kullu Valley, the trek takes you through dense forests, alongside gushing streams, and over the scenic Hampta Pass at 4,270 meters to reach the stark, beautiful Spiti Valley.\n\nThis trek is perfect for those seeking diversity in Himalayan experience. On one side you have thick vegetation and flowing water, on the other side, you have barren mountains and cold desert landscape. The contrast is striking and absolutely mesmerizing.\n\nThe trek offers excellent photography opportunities and a chance to experience two completely different ecosystems in one journey.',
  difficulty: 'Moderate',
  duration: '5 Days / 4 Nights',
  distance: '35 km',
  altitude: '4,270 m',
  price: '₹6,999',
  location: 'Himachal Pradesh',
  bestSeason: 'Jul–Sep',
  rating: 4.5,
  reviews: 198,
};

export const HAMPTA_PASS_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Manali to Jobri',
    altitude: '2,400 m',
    distance: '50 km drive',
    desc: 'Drive from Manali to Jobri. Acclimatize and prepare for the trek.',
  },
  {
    day: 2,
    title: 'Jobri to Chika',
    altitude: '2,600 m',
    distance: '9 km',
    desc: 'Trek through dense forests alongside streams. Camp at Chika.',
  },
  {
    day: 3,
    title: 'Chika to Hampta Pass Base',
    altitude: '3,700 m',
    distance: '8 km',
    desc: 'Ascending gradually towards the pass. Landscape transforms from green to semi-arid.',
  },
  {
    day: 4,
    title: 'Hampta Pass Summit & Descent',
    altitude: '4,270 m',
    distance: '12 km',
    desc: 'Cross the Hampta Pass and experience the stark desert beauty of Spiti Valley.',
  },
  {
    day: 5,
    title: 'Trek End & Return',
    altitude: '3,000 m',
    distance: '6 km trek + drive',
    desc: 'Final descent and return journey to Manali.',
  },
];

export const HAMPTA_PASS_INCLUSIONS: string[] = [
  'All meals during the trek (vegetarian & non-vegetarian)',
  'Camping in quality mountain tents with sleeping bags',
  'Experienced trek leader & support staff',
  'First aid kit & medical support',
  'All permits and entry fees',
  'Transport from Manali',
];

export const HAMPTA_PASS_EXCLUSIONS: string[] = [
  'Travel to and from Manali',
  'Personal trekking gear & clothing',
  'Travel insurance',
  'Tips and personal expenses',
  'Restaurant meals before/after trek',
  'Any personal expenses',
];

export const HAMPTA_PASS_TESTIMONIALS: Testimonial[] = [
  {
    name: 'Kabir Singh',
    location: 'Chandigarh',
    rating: 4,
    text: 'Amazing trek with unique landscape changes. The contrast between the green valley and desert is striking!',
    avatar: 'KS',
    date: 'Aug 2024',
  },
  {
    name: 'Simran Kaur',
    location: 'Punjab',
    rating: 5,
    text: 'Best trek for experiencing two different ecosystems. Highly recommend to adventure enthusiasts!',
    avatar: 'SK',
    date: 'Jul 2024',
  },
];

export const HAMPTA_PASS_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
];

// ============================================
// TREK COMPLETE DATA MAPPING
// ============================================
export interface TrekCompleteData {
  trek: TrekDetail;
  itinerary: ItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  testimonials: Testimonial[];
  gallery: string[];
}

export const TREK_DETAILS_MAP: Record<string, TrekCompleteData> = {
  kedarkanthatrek: {
    trek: KEDARKANTHA_TREK,
    itinerary: KEDARKANTHA_ITINERARY,
    inclusions: KEDARKANTHA_INCLUSIONS,
    exclusions: KEDARKANTHA_EXCLUSIONS,
    testimonials: KEDARKANTHA_TESTIMONIALS,
    gallery: KEDARKANTHA_GALLERY,
  },
  valleyofflowerstrek: {
    trek: VALLEY_OF_FLOWERS_TREK,
    itinerary: VALLEY_OF_FLOWERS_ITINERARY,
    inclusions: VALLEY_OF_FLOWERS_INCLUSIONS,
    exclusions: VALLEY_OF_FLOWERS_EXCLUSIONS,
    testimonials: VALLEY_OF_FLOWERS_TESTIMONIALS,
    gallery: VALLEY_OF_FLOWERS_GALLERY,
  },
  harkidhun: {
    trek: HAR_KI_DUN_TREK,
    itinerary: HAR_KI_DUN_ITINERARY,
    inclusions: HAR_KI_DUN_INCLUSIONS,
    exclusions: HAR_KI_DUN_EXCLUSIONS,
    testimonials: HAR_KI_DUN_TESTIMONIALS,
    gallery: HAR_KI_DUN_GALLERY,
  },
  triund: {
    trek: TRIUND_TREK,
    itinerary: TRIUND_ITINERARY,
    inclusions: TRIUND_INCLUSIONS,
    exclusions: TRIUND_EXCLUSIONS,
    testimonials: TRIUND_TESTIMONIALS,
    gallery: TRIUND_GALLERY,
  },
  hamptapass: {
    trek: HAMPTA_PASS_TREK,
    itinerary: HAMPTA_PASS_ITINERARY,
    inclusions: HAMPTA_PASS_INCLUSIONS,
    exclusions: HAMPTA_PASS_EXCLUSIONS,
    testimonials: HAMPTA_PASS_TESTIMONIALS,
    gallery: HAMPTA_PASS_GALLERY,
  },
};

/**
 * Fetches trek details by trek name (case-insensitive, with hyphens/underscores support)
 * @param trekName - Trek name from query parameter
 * @returns Trek complete data or null if not found
 */
export function getTrekDetailsByName(trekName: string | null): TrekCompleteData | null {
  if (!trekName) return null;

  // Normalize the trek name: convert to lowercase and replace spaces/hyphens with nothing
  const normalizedName = trekName.toLowerCase().replace(/[\s-_]/g, '');

  return TREK_DETAILS_MAP[normalizedName] || null;
}