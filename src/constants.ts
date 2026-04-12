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
  },
  {
    id: 2,
    name: "Valley of Flowers Trek",
    duration: "5 Days",
    description: "Explore vibrant alpine meadows and rare flora",
    state: "Uttarakhand",
    price: 7999,
    popularity: "Trending",
  },
  {
    id: 3,
    name: "Hampta Pass Trek",
    duration: "5 Days",
    description: "Experience the beauty of the Himalayas with stunning mountain views",
    state: "Himachal Pradesh",
    price: 6999,
    popularity: "Popular",
  },
  {
    id: 4,
    name: "Triund Trek",
    duration: "3 Days",
    description: "Short trek with panoramic views of the Dhauladhar range",
    state: "Himachal Pradesh",
    price: 4999,
    popularity: "Popular",
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
}

// ============================================
// TREK DETAILS DATA
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