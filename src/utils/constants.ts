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
  {
    id: 5,
    name: "Har Ki Dun Trek",
    duration: "6 Days",
    description: "Trek through sacred valley with pristine alpine meadows and wildflowers",
    state: "Himachal Pradesh",
    price: 9999,
    popularity: "Popular",
    uniqueName: "harkidhun",
  },
  {
    id: 6,
    name: "Balli Pass Trek",
    duration: "5 Days",
    description: "Scenic pass trek with stunning views of Himalayan peaks",
    state: "Himachal Pradesh",
    price: 7499,
    popularity: "Popular",
    uniqueName: "ballipass",
  },
  {
    id: 7,
    name: "Lekha Top Trek",
    duration: "3 Days",
    description: "Short alpine trek with panoramic mountain vistas",
    state: "Uttarakhand",
    price: 5499,
    popularity: "Emerging",
    uniqueName: "lekhattop",
  },
  {
    id: 8,
    name: "Devkayara Bhugya Trek",
    duration: "4 Days",
    description: "Explore the scenic plateau with ancient temple ruins",
    state: "Uttarakhand",
    price: 6999,
    popularity: "Popular",
    uniqueName: "devkayarabhugya",
  },
  {
    id: 9,
    name: "Bharadsar Trek",
    duration: "6 Days",
    description: "High-altitude trek with pristine lakes and alpine meadows",
    state: "Himachal Pradesh",
    price: 8999,
    popularity: "Popular",
    uniqueName: "bharadsartrek",
  },
  {
    id: 10,
    name: "Vijay Top Trek",
    duration: "4 Days",
    description: "Summit trek with 360-degree Himalayan views",
    state: "Himachal Pradesh",
    price: 7299,
    popularity: "Popular",
    uniqueName: "vijaytop",
  },
  {
    id: 11,
    name: "Dhoka Top Trek",
    duration: "5 Days",
    description: "Scenic ridge trek through pine forests and alpine beauty",
    state: "Himachal Pradesh",
    price: 6899,
    popularity: "Popular",
    uniqueName: "dhokatop",
  },
  {
    id: 12,
    name: "Gomukh Tapovan Trek",
    duration: "7 Days",
    description: "Sacred pilgrimage trek to the source of river Bhagirathi",
    state: "Uttarakhand",
    price: 10999,
    popularity: "Trending",
    uniqueName: "gomukhтapovan",
  },
  {
    id: 13,
    name: "Borasu Pass Trek",
    duration: "5 Days",
    description: "High-altitude pass trek with stunning glacial views",
    state: "Himachal Pradesh",
    price: 8699,
    popularity: "Popular",
    uniqueName: "borasupass",
  },
  {
    id: 14,
    name: "Phulara Ridge Trek",
    duration: "5 Days",
    description: "Ridge trek through pristine forests with valley views",
    state: "Himachal Pradesh",
    price: 7199,
    popularity: "Popular",
    uniqueName: "phulararidge",
  },
  {
    id: 15,
    name: "Saru Tak Trek",
    duration: "4 Days",
    description: "Scenic alpine trek through verdant meadows",
    state: "Himachal Pradesh",
    price: 6599,
    popularity: "Emerging",
    uniqueName: "sarutak",
  },
  {
    id: 16,
    name: "Chota Chandarshila Trek",
    duration: "3 Days",
    description: "Short alpine trek with panoramic peak views",
    state: "Uttarakhand",
    price: 5299,
    popularity: "Popular",
    uniqueName: "chotachandarshila",
  },
  {
    id: 17,
    name: "Nag Tibba Trek",
    duration: "2 Days",
    description: "Quick mountain escape with misty meadows and viewpoints",
    state: "Uttarakhand",
    price: 3999,
    popularity: "Popular",
    uniqueName: "nagtibba",
  },
  {
    id: 18,
    name: "Kuari Pass Trek",
    duration: "5 Days",
    description: "High pass trek with views of multiple Himalayan summits",
    state: "Uttarakhand",
    price: 8199,
    popularity: "Popular",
    uniqueName: "kuaripass",
  },
  {
    id: 19,
    name: "Kashmir Great Lakes Trek",
    duration: "8 Days",
    description: "Trek through pristine alpine lakes in the paradise Kashmir",
    state: "Jammu & Kashmir",
    price: 12999,
    popularity: "Trending",
    uniqueName: "kashmirgreaklakes",
  },
  {
    id: 20,
    name: "Sar Pass Trek",
    duration: "5 Days",
    description: "High-altitude pass trek with stunning glacier views",
    state: "Himachal Pradesh",
    price: 8399,
    popularity: "Popular",
    uniqueName: "sarpass",
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

export const KEDARKANTHA_TESTIMONIALS: Testimonial[] = [];

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

export const VALLEY_OF_FLOWERS_TESTIMONIALS: Testimonial[] = [];

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

export const HAR_KI_DUN_TESTIMONIALS: Testimonial[] = [];

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

export const TRIUND_TESTIMONIALS: Testimonial[] = [];

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

export const HAMPTA_PASS_TESTIMONIALS: Testimonial[] = [];

export const HAMPTA_PASS_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
];

// ============================================
// BALLI PASS TREK DATA
// ============================================
export const BALLI_PASS_TREK: TrekDetail = {
  name: 'Balli Pass Trek',
  tagline:
    'Cross scenic alpine passes with panoramic views of snow-capped Himalayan peaks.',
  description:
    'The Balli Pass Trek is a moderate-level trek that takes you through beautiful alpine meadows and dense forests. The trek provides stunning views of multiple Himalayan peaks and offers an authentic mountain experience with minimal crowds. Starting from Tirthan Valley, you traverse through lush green meadows and cross the scenic Balli Pass at 3,580 meters.\n\nThis trek combines natural beauty with cultural experiences, offering opportunities to interact with local shepherds and experience authentic Himalayan hospitality. The landscape shifts dramatically from dense forests to open alpine meadows as you gain altitude.',
  difficulty: 'Moderate',
  duration: '5 Days / 4 Nights',
  distance: '38 km',
  altitude: '3,580 m',
  price: '₹7,499',
  location: 'Himachal Pradesh',
  bestSeason: 'Jun–Oct',
  rating: 4.5,
  reviews: 234,
};

export const BALLI_PASS_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Mandi to Tirthan Valley',
    altitude: '1,200 m',
    distance: '50 km drive',
    desc: 'Drive from Mandi to Tirthan Valley. Explore the charming valley and prepare for the trek.',
  },
  {
    day: 2,
    title: 'Tirthan Valley to Seo Ropa',
    altitude: '2,400 m',
    distance: '10 km',
    desc: 'Trek through dense rhododendron and oak forests. Cross streams and reach Seo Ropa.',
  },
  {
    day: 3,
    title: 'Seo Ropa to Balli Pass',
    altitude: '3,580 m',
    distance: '8 km',
    desc: 'Ascend to the scenic Balli Pass. Experience panoramic views of Himalayan peaks.',
  },
  {
    day: 4,
    title: 'Balli Pass Exploration',
    altitude: '3,580 m',
    distance: '5 km',
    desc: 'Explore the pass and surrounding alpine meadows. Enjoy sunrise/sunset views.',
  },
  {
    day: 5,
    title: 'Descent to Tirthan Valley',
    altitude: '1,200 m',
    distance: '18 km trek + drive',
    desc: 'Trek down to Tirthan Valley. Drive back to Mandi.',
  },
];

export const BALLI_PASS_INCLUSIONS: string[] = [
  'All meals during the trek (vegetarian & non-vegetarian)',
  'Camping in quality mountain tents with sleeping bags',
  'Experienced trek leader & support staff',
  'First aid kit & medical support',
  'All permits and entry fees',
  'Transport: Mandi ↔ Tirthan Valley & return',
];

export const BALLI_PASS_EXCLUSIONS: string[] = [
  'Travel to and from Mandi',
  'Personal trekking gear & clothing',
  'Travel insurance (recommended)',
  'Tips and personal expenses',
  'Meals in Tirthan Valley',
  'Anything not mentioned in inclusions',
];

export const BALLI_PASS_TESTIMONIALS: Testimonial[] = [];

export const BALLI_PASS_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// LEKHA TOP TREK DATA
// ============================================
export const LEKHA_TOP_TREK: TrekDetail = {
  name: 'Lekha Top Trek',
  tagline:
    'A quick alpine escape to verdant meadows with stunning mountain vistas.',
  description:
    'Lekha Top is a short but rewarding trek perfect for weekend getaways and beginners. The trek takes you through beautiful alpine meadows, dense forests, and offers panoramic views of the surrounding peaks. Located in Uttarakhand, this trek is less crowded than other popular routes, making it ideal for those seeking solitude in nature.\n\nThe trek offers excellent opportunities for photography, bird watching, and connecting with nature. The approach through shepherd camps provides insights into local Himalayan lifestyle.',
  difficulty: 'Easy',
  duration: '3 Days / 2 Nights',
  distance: '12 km',
  altitude: '2,300 m',
  price: '₹5,499',
  location: 'Uttarakhand',
  bestSeason: 'May–Oct',
  rating: 4.4,
  reviews: 156,
};

export const LEKHA_TOP_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Munsiyari to Darkot',
    altitude: '1,800 m',
    distance: '4 km trek + drive',
    desc: 'Drive to Munsiyari and trek to Darkot. Explore the area.',
  },
  {
    day: 2,
    title: 'Darkot to Lekha Top',
    altitude: '2,300 m',
    distance: '6 km',
    desc: 'Trek through alpine meadows to Lekha Top. Enjoy panoramic views.',
  },
  {
    day: 3,
    title: 'Lekha Top Descent',
    altitude: '1,800 m',
    distance: '6 km trek + drive',
    desc: 'Trek down to Darkot. Drive back to Munsiyari.',
  },
];

export const LEKHA_TOP_INCLUSIONS: string[] = [
  'All meals during the trek (vegetarian & non-vegetarian)',
  'Camping in comfortable tents',
  'Experienced trek leader',
  'First aid kit & basic medical support',
  'Transport: Munsiyari ↔ Trek start point',
];

export const LEKHA_TOP_EXCLUSIONS: string[] = [
  'Travel to and from Munsiyari',
  'Personal trekking gear & clothing',
  'Tips and personal expenses',
  'Meals before/after trek',
];

export const LEKHA_TOP_TESTIMONIALS: Testimonial[] = [];

export const LEKHA_TOP_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// DEVKAYARA BHUGYA TREK DATA
// ============================================
export const DEVKAYARA_BHUGYA_TREK: TrekDetail = {
  name: 'Devkayara Bhugya Trek',
  tagline:
    'Trek to a sacred plateau adorned with ancient temple ruins and pristine meadows.',
  description:
    'Devkayara Bhugya is a scenic trek to a sacred plateau in Uttarakhand, known for its ancient temple ruins and spiritual significance. The trek offers a unique blend of religious heritage and natural beauty. The plateau is surrounded by dense forests and offers stunning views of the surrounding mountains.\n\nThis trek is ideal for those seeking spiritual connection with nature while exploring historical and cultural heritage. The plateau is a popular pilgrimage site during specific seasons, making it an important cultural destination.',
  difficulty: 'Moderate',
  duration: '4 Days / 3 Nights',
  distance: '20 km',
  altitude: '2,550 m',
  price: '₹6,999',
  location: 'Uttarakhand',
  bestSeason: 'Apr–Nov',
  rating: 4.6,
  reviews: 198,
};

export const DEVKAYARA_BHUGYA_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Deooria Tal to Base Camp',
    altitude: '1,500 m',
    distance: '40 km drive',
    desc: 'Drive from Deooria Tal to the trek base. Acclimatize.',
  },
  {
    day: 2,
    title: 'Trek to Devkayara Bhugya',
    altitude: '2,550 m',
    distance: '8 km',
    desc: 'Trek through forests to the sacred plateau. Visit ancient temple ruins.',
  },
  {
    day: 3,
    title: 'Plateau Exploration',
    altitude: '2,550 m',
    distance: '5 km',
    desc: 'Explore the plateau and surrounding areas. Enjoy spiritual ambiance.',
  },
  {
    day: 4,
    title: 'Descent & Return',
    altitude: '1,500 m',
    distance: '8 km trek + 40 km drive',
    desc: 'Trek down and return to starting point.',
  },
];

export const DEVKAYARA_BHUGYA_INCLUSIONS: string[] = [
  'All meals during the trek',
  'Camping in quality tents',
  'Trek leader & local guide',
  'First aid kit & basic medical support',
  'Transport to trek base',
];

export const DEVKAYARA_BHUGYA_EXCLUSIONS: string[] = [
  'Travel to and from starting point',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const DEVKAYARA_BHUGYA_TESTIMONIALS: Testimonial[] = [];

export const DEVKAYARA_BHUGYA_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// BHARADSAR TREK DATA
// ============================================
export const BHARADSAR_TREK: TrekDetail = {
  name: 'Bharadsar Trek',
  tagline:
    'High-altitude trek to pristine lakes surrounded by alpine beauty.',
  description:
    'The Bharadsar Trek is a challenging high-altitude trek that takes you to pristine glacial lakes in Himachal Pradesh. The trek offers stunning views of multiple peaks and passes through diverse landscapes from forests to alpine meadows. Bharadsar is known for its serene lakes reflecting the surrounding mountains.\n\nThis trek is ideal for experienced trekkers seeking high-altitude adventure. The journey provides opportunities for photography and connecting with raw mountain wilderness.',
  difficulty: 'Hard',
  duration: '6 Days / 5 Nights',
  distance: '48 km',
  altitude: '4,500 m',
  price: '₹8,999',
  location: 'Himachal Pradesh',
  bestSeason: 'Jul–Sep',
  rating: 4.7,
  reviews: 289,
};

export const BHARADSAR_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Kheerganga Base Camp',
    altitude: '1,800 m',
    distance: '50 km drive',
    desc: 'Drive to Kheerganga base. Acclimatize.',
  },
  {
    day: 2,
    title: 'Trek to First Camp',
    altitude: '2,800 m',
    distance: '10 km',
    desc: 'Trek through forests to first camp.',
  },
  {
    day: 3,
    title: 'High Altitude Trek',
    altitude: '3,800 m',
    distance: '12 km',
    desc: 'Ascend to alpine meadows.',
  },
  {
    day: 4,
    title: 'Bharadsar Lake',
    altitude: '4,500 m',
    distance: '10 km',
    desc: 'Reach the pristine Bharadsar Lake. Day for exploration.',
  },
  {
    day: 5,
    title: 'Lake Exploration',
    altitude: '4,500 m',
    distance: '8 km',
    desc: 'Explore the lake and surrounding areas.',
  },
  {
    day: 6,
    title: 'Descent & Return',
    altitude: '1,800 m',
    distance: '16 km trek + drive',
    desc: 'Trek down and return to base.',
  },
];

export const BHARADSAR_INCLUSIONS: string[] = [
  'All meals during the trek',
  'High-altitude camping equipment',
  'Experienced trek leader & guide',
  'First aid kit & medical support',
  'Oxygen support if needed',
];

export const BHARADSAR_EXCLUSIONS: string[] = [
  'Travel to and from base',
  'Personal gear & clothing',
  'Tips and personal expenses',
  'Altitude sickness medication',
];

export const BHARADSAR_TESTIMONIALS: Testimonial[] = [];

export const BHARADSAR_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
];

// ============================================
// VIJAY TOP TREK DATA
// ============================================
export const VIJAY_TOP_TREK: TrekDetail = {
  name: 'Vijay Top Trek',
  tagline:
    'Summit a scenic peak for 360-degree Himalayan views and golden sunrises.',
  description:
    'Vijay Top is a scenic summit trek in Himachal Pradesh offering 360-degree panoramic views of the Himalayas. The trek is perfect for those seeking a moderate challenge with rewarding summit views. The name "Vijay" meaning victory, symbolizes the triumph of reaching the summit.\n\nThe trek passes through beautiful meadows, forests, and offers excellent photography opportunities. Clear days provide views of multiple major peaks in the region.',
  difficulty: 'Moderate',
  duration: '4 Days / 3 Nights',
  distance: '24 km',
  altitude: '3,450 m',
  price: '₹7,299',
  location: 'Himachal Pradesh',
  bestSeason: 'Jun–Oct',
  rating: 4.5,
  reviews: 267,
};

export const VIJAY_TOP_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Base to Camp 1',
    altitude: '2,200 m',
    distance: '6 km',
    desc: 'Trek from base camp through forests.',
  },
  {
    day: 2,
    title: 'Camp 1 to Camp 2',
    altitude: '3,000 m',
    distance: '8 km',
    desc: 'Ascend through alpine meadows.',
  },
  {
    day: 3,
    title: 'Summit Day',
    altitude: '3,450 m',
    distance: '6 km',
    desc: 'Early morning ascent to Vijay Top. Enjoy 360-degree views.',
  },
  {
    day: 4,
    title: 'Descent & Return',
    altitude: '2,200 m',
    distance: '12 km trek',
    desc: 'Trek down to base.',
  },
];

export const VIJAY_TOP_INCLUSIONS: string[] = [
  'All meals during the trek',
  'Camping in mountain tents',
  'Trek leader & guide',
  'First aid support',
];

export const VIJAY_TOP_EXCLUSIONS: string[] = [
  'Travel to and from base',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const VIJAY_TOP_TESTIMONIALS: Testimonial[] = [];

export const VIJAY_TOP_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// DHOKA TOP TREK DATA
// ============================================
export const DHOKA_TOP_TREK: TrekDetail = {
  name: 'Dhoka Top Trek',
  tagline:
    'Ridge trek through pristine forests with valley views and alpine charm.',
  description:
    'Dhoka Top is a scenic ridge trek in Himachal Pradesh offering beautiful views of valleys and surrounding peaks. The trek passes through dense pine and deodar forests, pristine meadows, and offers excellent opportunities for nature lovers and photographers. The ridge provides natural viewpoints and camping locations.',
  difficulty: 'Moderate',
  duration: '5 Days / 4 Nights',
  distance: '30 km',
  altitude: '3,350 m',
  price: '₹6,899',
  location: 'Himachal Pradesh',
  bestSeason: 'May–Oct',
  rating: 4.4,
  reviews: 201,
};

export const DHOKA_TOP_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Base to Forest Camp',
    altitude: '2,000 m',
    distance: '8 km',
    desc: 'Trek through dense forests.',
  },
  {
    day: 2,
    title: 'Forest to Ridge',
    altitude: '2,800 m',
    distance: '7 km',
    desc: 'Ascend to the ridge.',
  },
  {
    day: 3,
    title: 'Ridge Trek to Dhoka Top',
    altitude: '3,350 m',
    distance: '8 km',
    desc: 'Trek along ridge with valley views.',
  },
  {
    day: 4,
    title: 'Exploration Day',
    altitude: '3,350 m',
    distance: '5 km',
    desc: 'Explore the area and enjoy views.',
  },
  {
    day: 5,
    title: 'Descent',
    altitude: '2,000 m',
    distance: '15 km trek',
    desc: 'Trek down to base.',
  },
];

export const DHOKA_TOP_INCLUSIONS: string[] = [
  'All meals during the trek',
  'Camping in quality tents',
  'Trek leader & guide',
  'First aid support',
];

export const DHOKA_TOP_EXCLUSIONS: string[] = [
  'Travel to and from base',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const DHOKA_TOP_TESTIMONIALS: Testimonial[] = [];

export const DHOKA_TOP_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// GOMUKH TAPOVAN TREK DATA
// ============================================
export const GOMUKH_TAPOVAN_TREK: TrekDetail = {
  name: 'Gomukh Tapovan Trek',
  tagline:
    'Sacred pilgrimage trek to the source of river Bhagirathi in the glacier flows.',
  description:
    'Gomukh Tapovan is a sacred pilgrimage trek to the source of the Bhagirathi River, one of the most important Hindu pilgrimage sites. The trek takes you through the Bhagirathi Valley at high altitude, passing through pristine forests, meadows, and finally reaching the Gomukh glacier. This is a spiritual and challenging trekking experience.\n\nThe trek combines religious significance with natural beauty, offering insights into Himalayan ecology and spirituality. This trek is ideal for those seeking spiritual connection and adventure at high altitude.',
  difficulty: 'Hard',
  duration: '7 Days / 6 Nights',
  distance: '56 km',
  altitude: '4,000 m',
  price: '₹10,999',
  location: 'Uttarakhand',
  bestSeason: 'Jun–Oct',
  rating: 4.8,
  reviews: 412,
};

export const GOMUKH_TAPOVAN_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Haridwar to Uttarkashi',
    altitude: '1,158 m',
    distance: '150 km drive',
    desc: 'Drive to Uttarkashi. Explore the sacred town.',
  },
  {
    day: 2,
    title: 'Uttarkashi to Hanauman Chatti',
    altitude: '2,000 m',
    distance: '25 km drive + 4 km trek',
    desc: 'Drive and short trek to base camp.',
  },
  {
    day: 3,
    title: 'Hanauman Chatti to Bhoj Kharak',
    altitude: '2,820 m',
    distance: '10 km',
    desc: 'Trek through Bhagirathi Valley forests.',
  },
  {
    day: 4,
    title: 'Bhoj Kharak to Tapovan',
    altitude: '3,680 m',
    distance: '9 km',
    desc: 'Trek to Tapovan meadows.',
  },
  {
    day: 5,
    title: 'Tapovan to Gomukh',
    altitude: '4,000 m',
    distance: '8 km',
    desc: 'Trek to Gomukh glacier, source of Bhagirathi.',
  },
  {
    day: 6,
    title: 'Gomukh Exploration',
    altitude: '4,000 m',
    distance: '5 km',
    desc: 'Explore sacred sites and offer prayers.',
  },
  {
    day: 7,
    title: 'Descent & Return',
    altitude: '1,158 m',
    distance: '32 km trek + 150 km drive',
    desc: 'Trek down and return to Haridwar.',
  },
];

export const GOMUKH_TAPOVAN_INCLUSIONS: string[] = [
  'All meals during the trek',
  'High-altitude camping equipment',
  'Experienced trek leader & guide',
  'First aid kit & medical support',
  'Oxygen support if needed',
  'Permits and entry fees',
];

export const GOMUKH_TAPOVAN_EXCLUSIONS: string[] = [
  'Travel to and from Haridwar',
  'Personal gear & clothing',
  'Tips and personal expenses',
  'Altitude sickness medication',
];

export const GOMUKH_TAPOVAN_TESTIMONIALS: Testimonial[] = [];

export const GOMUKH_TAPOVAN_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// BORASU PASS TREK DATA
// ============================================
export const BORASU_PASS_TREK: TrekDetail = {
  name: 'Borasu Pass Trek',
  tagline:
    'High-altitude pass trek with panoramic glacier and peak views.',
  description:
    'The Borasu Pass Trek is a challenging high-altitude trek in Himachal Pradesh known for its stunning glacial views and panoramic vistas of major Himalayan peaks. The trek takes you above 4,000 meters, crossing the scenic Borasu Pass. This trek is ideal for experienced trekkers seeking high-altitude adventure.',
  difficulty: 'Hard',
  duration: '5 Days / 4 Nights',
  distance: '42 km',
  altitude: '4,200 m',
  price: '₹8,699',
  location: 'Himachal Pradesh',
  bestSeason: 'Jul–Sep',
  rating: 4.6,
  reviews: 278,
};

export const BORASU_PASS_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Chitkul to Base Camp',
    altitude: '2,600 m',
    distance: '50 km drive + 4 km trek',
    desc: 'Drive to Chitkul and trek to base camp.',
  },
  {
    day: 2,
    title: 'Base to High Camp',
    altitude: '3,600 m',
    distance: '12 km',
    desc: 'Trek through alpine scenery.',
  },
  {
    day: 3,
    title: 'Borasu Pass Summit',
    altitude: '4,200 m',
    distance: '10 km',
    desc: 'Cross the high pass with glacier views.',
  },
  {
    day: 4,
    title: 'Descent & Exploration',
    altitude: '3,200 m',
    distance: '12 km',
    desc: 'Trek down to exploration camp.',
  },
  {
    day: 5,
    title: 'Return',
    altitude: '2,600 m',
    distance: '8 km trek + drive',
    desc: 'Trek down and return to Chitkul.',
  },
];

export const BORASU_PASS_INCLUSIONS: string[] = [
  'All meals during the trek',
  'High-altitude camping equipment',
  'Trek leader & guide',
  'First aid & medical support',
];

export const BORASU_PASS_EXCLUSIONS: string[] = [
  'Travel to and from Chitkul',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const BORASU_PASS_TESTIMONIALS: Testimonial[] = [];

export const BORASU_PASS_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
];

// ============================================
// PHULARA RIDGE TREK DATA
// ============================================
export const PHULARA_RIDGE_TREK: TrekDetail = {
  name: 'Phulara Ridge Trek',
  tagline:
    'Ridge trek through pristine forests with stunning valley vistas.',
  description:
    'The Phulara Ridge Trek is a scenic ridge walk in Himachal Pradesh offering stunning views of valleys and surrounding mountains. The trek passes through dense forests of pine and deodar, providing a serene trekking experience. Phulara Ridge is known for its natural beauty and minimal crowds.',
  difficulty: 'Moderate',
  duration: '5 Days / 4 Nights',
  distance: '35 km',
  altitude: '3,300 m',
  price: '₹7,199',
  location: 'Himachal Pradesh',
  bestSeason: 'May–Oct',
  rating: 4.5,
  reviews: 215,
};

export const PHULARA_RIDGE_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Base to Forest Camp',
    altitude: '2,100 m',
    distance: '8 km',
    desc: 'Trek through dense forests.',
  },
  {
    day: 2,
    title: 'Forest to Ridge',
    altitude: '2,900 m',
    distance: '9 km',
    desc: 'Ascend to Phulara Ridge.',
  },
  {
    day: 3,
    title: 'Ridge Trek',
    altitude: '3,300 m',
    distance: '8 km',
    desc: 'Trek along ridge with valley views.',
  },
  {
    day: 4,
    title: 'Exploration Day',
    altitude: '3,300 m',
    distance: '5 km',
    desc: 'Explore surroundings.',
  },
  {
    day: 5,
    title: 'Descent',
    altitude: '2,100 m',
    distance: '14 km trek',
    desc: 'Trek down to base.',
  },
];

export const PHULARA_RIDGE_INCLUSIONS: string[] = [
  'All meals during the trek',
  'Camping in quality tents',
  'Trek leader & guide',
  'First aid support',
];

export const PHULARA_RIDGE_EXCLUSIONS: string[] = [
  'Travel to and from base',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const PHULARA_RIDGE_TESTIMONIALS: Testimonial[] = [];

export const PHULARA_RIDGE_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// SARU TAK TREK DATA
// ============================================
export const SARU_TAK_TREK: TrekDetail = {
  name: 'Saru Tak Trek',
  tagline:
    'Alpine trek through verdant meadows with wildflowers and mountain charm.',
  description:
    'Saru Tak is a scenic alpine trek in Himachal Pradesh known for its beautiful meadows and minimal crowds. The trek offers stunning views of surrounding peaks and passes through areas rich with wildflowers during monsoon season. Perfect for nature lovers seeking a less crowded trekking experience.',
  difficulty: 'Easy to Moderate',
  duration: '4 Days / 3 Nights',
  distance: '22 km',
  altitude: '3,100 m',
  price: '₹6,599',
  location: 'Himachal Pradesh',
  bestSeason: 'Jun–Oct',
  rating: 4.4,
  reviews: 189,
};

export const SARU_TAK_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Base to Camp 1',
    altitude: '2,200 m',
    distance: '6 km',
    desc: 'Trek from base camp.',
  },
  {
    day: 2,
    title: 'Camp 1 to Saru Tak',
    altitude: '3,100 m',
    distance: '8 km',
    desc: 'Trek through alpine meadows.',
  },
  {
    day: 3,
    title: 'Exploration Day',
    altitude: '3,100 m',
    distance: '5 km',
    desc: 'Explore the area and enjoy views.',
  },
  {
    day: 4,
    title: 'Descent',
    altitude: '2,200 m',
    distance: '8 km trek',
    desc: 'Trek down to base.',
  },
];

export const SARU_TAK_INCLUSIONS: string[] = [
  'All meals during the trek',
  'Camping in mountain tents',
  'Trek leader & guide',
  'First aid support',
];

export const SARU_TAK_EXCLUSIONS: string[] = [
  'Travel to and from base',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const SARU_TAK_TESTIMONIALS: Testimonial[] = [];

export const SARU_TAK_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// CHOTA CHANDARSHILA TREK DATA
// ============================================
export const CHOTA_CHANDARSHILA_TREK: TrekDetail = {
  name: 'Chota Chandarshila Trek',
  tagline:
    'Quick alpine trek through pristine meadows with panoramic peak views.',
  description:
    'Chota Chandarshila is a short but scenic alpine trek in Uttarakhand offering panoramic views of surrounding peaks. The trek is perfect for a quick weekend escape and is suitable for all age groups. The area is known for its pristine meadows and spotless natural environment.',
  difficulty: 'Easy',
  duration: '3 Days / 2 Nights',
  distance: '14 km',
  altitude: '2,680 m',
  price: '₹5,299',
  location: 'Uttarakhand',
  bestSeason: 'Apr–Nov',
  rating: 4.3,
  reviews: 167,
};

export const CHOTA_CHANDARSHILA_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Chani to Camp',
    altitude: '2,100 m',
    distance: '5 km',
    desc: 'Trek from Chani to first camp.',
  },
  {
    day: 2,
    title: 'Camp to Chota Chandarshila',
    altitude: '2,680 m',
    distance: '6 km',
    desc: 'Trek to alpine meadows.',
  },
  {
    day: 3,
    title: 'Descent',
    altitude: '2,100 m',
    distance: '7 km trek',
    desc: 'Trek down to Chani.',
  },
];

export const CHOTA_CHANDARSHILA_INCLUSIONS: string[] = [
  'All meals during the trek',
  'Camping in comfortable tents',
  'Trek leader & guide',
  'First aid support',
];

export const CHOTA_CHANDARSHILA_EXCLUSIONS: string[] = [
  'Travel to and from Chani',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const CHOTA_CHANDARSHILA_TESTIMONIALS: Testimonial[] = [];

export const CHOTA_CHANDARSHILA_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// NAG TIBBA TREK DATA
// ============================================
export const NAG_TIBBA_TREK: TrekDetail = {
  name: 'Nag Tibba Trek',
  tagline:
    'Quick mountain escape with misty meadows and stunning viewpoints.',
  description:
    'Nag Tibba is the quickest mountain trek near Delhi, perfect for weekend adventures. The trek takes you through misty meadows and offers stunning views of the Himalayas. The name "Serpent Peak" refers to the shape of the mountain. This is an ideal trek for beginners and those short on time.',
  difficulty: 'Easy',
  duration: '2 Days / 1 Night',
  distance: '10 km',
  altitude: '2,444 m',
  price: '₹3,999',
  location: 'Uttarakhand',
  bestSeason: 'Oct–May',
  rating: 4.2,
  reviews: 412,
};

export const NAG_TIBBA_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Nag Tibba Village Trek',
    altitude: '2,444 m',
    distance: '5 km',
    desc: 'Trek from Nag Tibba village to the summit. Enjoy views and camping.',
  },
  {
    day: 2,
    title: 'Sunrise & Descent',
    altitude: '1,500 m (base)',
    distance: '5 km trek',
    desc: 'Witness sunrise and trek down.',
  },
];

export const NAG_TIBBA_INCLUSIONS: string[] = [
  'Meals during the trek',
  'Camping equipment',
  'Trek guide',
  'Basic first aid',
];

export const NAG_TIBBA_EXCLUSIONS: string[] = [
  'Travel to and from Nag Tibba',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const NAG_TIBBA_TESTIMONIALS: Testimonial[] = [];

export const NAG_TIBBA_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// KUARI PASS TREK DATA
// ============================================
export const KUARI_PASS_TREK: TrekDetail = {
  name: 'Kuari Pass Trek',
  tagline:
    'Cross a high Himalayan pass with views of multiple snow-capped peaks.',
  description:
    'The Kuari Pass Trek is one of the most spectacular high passes in Uttarakhand, offering views of multiple Himalayan peaks including Nanda Devi and Dronagiri. The trek takes you above 3,600 meters and is known for its stunning panoramic views and pristine alpine meadows. This trek offers an authentic high-altitude mountain experience.',
  difficulty: 'Moderate to Hard',
  duration: '5 Days / 4 Nights',
  distance: '35 km',
  altitude: '3,680 m',
  price: '₹8,199',
  location: 'Uttarakhand',
  bestSeason: 'May–Jun, Sep–Oct',
  rating: 4.7,
  reviews: 356,
};

export const KUARI_PASS_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Auli to Forest Camp',
    altitude: '2,500 m',
    distance: '35 km drive + 5 km trek',
    desc: 'Drive to Auli and trek to forest camp.',
  },
  {
    day: 2,
    title: 'Forest Camp to Alpine Camp',
    altitude: '3,300 m',
    distance: '10 km',
    desc: 'Trek through forests to alpine meadows.',
  },
  {
    day: 3,
    title: 'Alpine Camp to Kuari Pass',
    altitude: '3,680 m',
    distance: '8 km',
    desc: 'Trek to the high pass with peak views.',
  },
  {
    day: 4,
    title: 'Kuari Pass Exploration',
    altitude: '3,680 m',
    distance: '6 km',
    desc: 'Explore the pass and surrounding views.',
  },
  {
    day: 5,
    title: 'Descent & Return',
    altitude: '2,500 m',
    distance: '12 km trek + 35 km drive',
    desc: 'Trek down and return to Auli.',
  },
];

export const KUARI_PASS_INCLUSIONS: string[] = [
  'All meals during the trek',
  'High-altitude camping equipment',
  'Trek leader & guide',
  'First aid & medical support',
  'All permits and entry fees',
];

export const KUARI_PASS_EXCLUSIONS: string[] = [
  'Travel to and from Auli',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const KUARI_PASS_TESTIMONIALS: Testimonial[] = [];

export const KUARI_PASS_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// KASHMIR GREAT LAKES TREK DATA
// ============================================
export const KASHMIR_GREAT_LAKES_TREK: TrekDetail = {
  name: 'Kashmir Great Lakes Trek',
  tagline:
    'Trek through paradise to pristine alpine lakes surrounded by snow-capped peaks.',
  description:
    'The Kashmir Great Lakes Trek is one of the most spectacular treks in India, often called the "trek through paradise." This 8-day journey takes you through multiple pristine alpine lakes including Vishansar, Aharbal, Satsar, and Gadsar. Each lake has its own unique beauty and charm.\n\nThe trek passes through diverse landscapes - dense forests, alpine meadows, and high-altitude lakes reflecting surrounding mountains. This trek is ideal for experienced trekkers seeking the ultimate Himalayan adventure in one of India\'s most beautiful regions.',
  difficulty: 'Hard',
  duration: '8 Days / 7 Nights',
  distance: '70 km',
  altitude: '4,300 m',
  price: '₹12,999',
  location: 'Jammu & Kashmir',
  bestSeason: 'Jul–Sep',
  rating: 4.9,
  reviews: 523,
};

export const KASHMIR_GREAT_LAKES_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Srinagar to Sonamarg',
    altitude: '2,730 m',
    distance: '80 km drive',
    desc: 'Drive to Sonamarg. Acclimatize and prepare.',
  },
  {
    day: 2,
    title: 'Sonamarg to Vishansar Lake',
    altitude: '3,650 m',
    distance: '12 km',
    desc: 'Trek through forests to first lake camp.',
  },
  {
    day: 3,
    title: 'Vishansar to Aharbal Lake',
    altitude: '3,550 m',
    distance: '10 km',
    desc: 'Trek between lakes with stunning views.',
  },
  {
    day: 4,
    title: 'Aharbal to Satsar Lakes',
    altitude: '3,650 m',
    distance: '12 km',
    desc: 'Trek to multiple Satsar lakes.',
  },
  {
    day: 5,
    title: 'Satsar Exploration',
    altitude: '3,650 m',
    distance: '7 km',
    desc: 'Explore the beautiful Satsar cluster.',
  },
  {
    day: 6,
    title: 'Satsar to Gadsar Lake',
    altitude: '3,600 m',
    distance: '11 km',
    desc: 'Trek to the stunning Gadsar lake.',
  },
  {
    day: 7,
    title: 'Gadsar to Marsar',
    altitude: '3,450 m',
    distance: '12 km',
    desc: 'Trek to Marsar with valley views.',
  },
  {
    day: 8,
    title: 'Marsar Descent & Return',
    altitude: '2,730 m',
    distance: '12 km trek + 80 km drive',
    desc: 'Trek down and return to Srinagar.',
  },
];

export const KASHMIR_GREAT_LAKES_INCLUSIONS: string[] = [
  'All meals during the trek (vegetarian & non-vegetarian)',
  'High-altitude camping equipment with quality tents',
  'Experienced trek leader & support staff',
  'First aid kit & medical support',
  'All permits and entry fees',
  'Horse support for carrying luggage',
  'Guide for all days',
];

export const KASHMIR_GREAT_LAKES_EXCLUSIONS: string[] = [
  'Travel to and from Srinagar',
  'Personal trekking gear & clothing',
  'Travel insurance (recommended)',
  'Tips and personal expenses',
  'Meals in Srinagar/Sonamarg',
  'Any personal activities or expenses',
];

export const KASHMIR_GREAT_LAKES_TESTIMONIALS: Testimonial[] = [];

export const KASHMIR_GREAT_LAKES_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1511497584788-876760111969?w=1200&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469022563149-aa64dbd37dba?w=1200&h=600&fit=crop',
];

// ============================================
// SAR PASS TREK DATA
// ============================================
export const SAR_PASS_TREK: TrekDetail = {
  name: 'Sar Pass Trek',
  tagline:
    'High-altitude pass trek with glacial views and panoramic Himalayan scenery.',
  description:
    'The Sar Pass Trek is a popular high-altitude trek in Himachal Pradesh known for its stunning glacial scenery and panoramic views. The trek crosses the Sar Pass at over 4,000 meters and offers spectacular views of surrounding peaks. This trek is ideal for experienced trekkers seeking high-altitude adventure.',
  difficulty: 'Hard',
  duration: '5 Days / 4 Nights',
  distance: '40 km',
  altitude: '4,150 m',
  price: '₹8,399',
  location: 'Himachal Pradesh',
  bestSeason: 'Jul–Sep',
  rating: 4.6,
  reviews: 301,
};

export const SAR_PASS_ITINERARY: ItineraryDay[] = [
  {
    day: 1,
    title: 'Kasol to Base Camp',
    altitude: '2,000 m',
    distance: '40 km drive + 4 km trek',
    desc: 'Drive to Kasol and short trek to base camp.',
  },
  {
    day: 2,
    title: 'Base to High Camp 1',
    altitude: '3,200 m',
    distance: '10 km',
    desc: 'Trek through alpine scenery.',
  },
  {
    day: 3,
    title: 'High Camp 1 to Sar Pass',
    altitude: '4,150 m',
    distance: '10 km',
    desc: 'Cross the high pass with glacier views.',
  },
  {
    day: 4,
    title: 'Sar Pass to High Camp 2',
    altitude: '3,400 m',
    distance: '10 km',
    desc: 'Trek on glacier and descend.',
  },
  {
    day: 5,
    title: 'Return to Base',
    altitude: '2,000 m',
    distance: '10 km trek + drive',
    desc: 'Trek down and return to Kasol.',
  },
];

export const SAR_PASS_INCLUSIONS: string[] = [
  'All meals during the trek',
  'High-altitude camping equipment',
  'Trek leader & guide',
  'First aid & medical support',
];

export const SAR_PASS_EXCLUSIONS: string[] = [
  'Travel to and from Kasol',
  'Personal gear & clothing',
  'Tips and personal expenses',
];

export const SAR_PASS_TESTIMONIALS: Testimonial[] = [];

export const SAR_PASS_GALLERY: string[] = [
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
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
  ballipass: {
    trek: BALLI_PASS_TREK,
    itinerary: BALLI_PASS_ITINERARY,
    inclusions: BALLI_PASS_INCLUSIONS,
    exclusions: BALLI_PASS_EXCLUSIONS,
    testimonials: BALLI_PASS_TESTIMONIALS,
    gallery: BALLI_PASS_GALLERY,
  },
  lekhattop: {
    trek: LEKHA_TOP_TREK,
    itinerary: LEKHA_TOP_ITINERARY,
    inclusions: LEKHA_TOP_INCLUSIONS,
    exclusions: LEKHA_TOP_EXCLUSIONS,
    testimonials: LEKHA_TOP_TESTIMONIALS,
    gallery: LEKHA_TOP_GALLERY,
  },
  devkayarabhugya: {
    trek: DEVKAYARA_BHUGYA_TREK,
    itinerary: DEVKAYARA_BHUGYA_ITINERARY,
    inclusions: DEVKAYARA_BHUGYA_INCLUSIONS,
    exclusions: DEVKAYARA_BHUGYA_EXCLUSIONS,
    testimonials: DEVKAYARA_BHUGYA_TESTIMONIALS,
    gallery: DEVKAYARA_BHUGYA_GALLERY,
  },
  bharadsartrek: {
    trek: BHARADSAR_TREK,
    itinerary: BHARADSAR_ITINERARY,
    inclusions: BHARADSAR_INCLUSIONS,
    exclusions: BHARADSAR_EXCLUSIONS,
    testimonials: BHARADSAR_TESTIMONIALS,
    gallery: BHARADSAR_GALLERY,
  },
  vijaytop: {
    trek: VIJAY_TOP_TREK,
    itinerary: VIJAY_TOP_ITINERARY,
    inclusions: VIJAY_TOP_INCLUSIONS,
    exclusions: VIJAY_TOP_EXCLUSIONS,
    testimonials: VIJAY_TOP_TESTIMONIALS,
    gallery: VIJAY_TOP_GALLERY,
  },
  dhokatop: {
    trek: DHOKA_TOP_TREK,
    itinerary: DHOKA_TOP_ITINERARY,
    inclusions: DHOKA_TOP_INCLUSIONS,
    exclusions: DHOKA_TOP_EXCLUSIONS,
    testimonials: DHOKA_TOP_TESTIMONIALS,
    gallery: DHOKA_TOP_GALLERY,
  },
  gomukhтapovan: {
    trek: GOMUKH_TAPOVAN_TREK,
    itinerary: GOMUKH_TAPOVAN_ITINERARY,
    inclusions: GOMUKH_TAPOVAN_INCLUSIONS,
    exclusions: GOMUKH_TAPOVAN_EXCLUSIONS,
    testimonials: GOMUKH_TAPOVAN_TESTIMONIALS,
    gallery: GOMUKH_TAPOVAN_GALLERY,
  },
  borasupass: {
    trek: BORASU_PASS_TREK,
    itinerary: BORASU_PASS_ITINERARY,
    inclusions: BORASU_PASS_INCLUSIONS,
    exclusions: BORASU_PASS_EXCLUSIONS,
    testimonials: BORASU_PASS_TESTIMONIALS,
    gallery: BORASU_PASS_GALLERY,
  },
  phulararidge: {
    trek: PHULARA_RIDGE_TREK,
    itinerary: PHULARA_RIDGE_ITINERARY,
    inclusions: PHULARA_RIDGE_INCLUSIONS,
    exclusions: PHULARA_RIDGE_EXCLUSIONS,
    testimonials: PHULARA_RIDGE_TESTIMONIALS,
    gallery: PHULARA_RIDGE_GALLERY,
  },
  sarutak: {
    trek: SARU_TAK_TREK,
    itinerary: SARU_TAK_ITINERARY,
    inclusions: SARU_TAK_INCLUSIONS,
    exclusions: SARU_TAK_EXCLUSIONS,
    testimonials: SARU_TAK_TESTIMONIALS,
    gallery: SARU_TAK_GALLERY,
  },
  chotachandarshila: {
    trek: CHOTA_CHANDARSHILA_TREK,
    itinerary: CHOTA_CHANDARSHILA_ITINERARY,
    inclusions: CHOTA_CHANDARSHILA_INCLUSIONS,
    exclusions: CHOTA_CHANDARSHILA_EXCLUSIONS,
    testimonials: CHOTA_CHANDARSHILA_TESTIMONIALS,
    gallery: CHOTA_CHANDARSHILA_GALLERY,
  },
  nagtibba: {
    trek: NAG_TIBBA_TREK,
    itinerary: NAG_TIBBA_ITINERARY,
    inclusions: NAG_TIBBA_INCLUSIONS,
    exclusions: NAG_TIBBA_EXCLUSIONS,
    testimonials: NAG_TIBBA_TESTIMONIALS,
    gallery: NAG_TIBBA_GALLERY,
  },
  kuaripass: {
    trek: KUARI_PASS_TREK,
    itinerary: KUARI_PASS_ITINERARY,
    inclusions: KUARI_PASS_INCLUSIONS,
    exclusions: KUARI_PASS_EXCLUSIONS,
    testimonials: KUARI_PASS_TESTIMONIALS,
    gallery: KUARI_PASS_GALLERY,
  },
  kashmirgreaklakes: {
    trek: KASHMIR_GREAT_LAKES_TREK,
    itinerary: KASHMIR_GREAT_LAKES_ITINERARY,
    inclusions: KASHMIR_GREAT_LAKES_INCLUSIONS,
    exclusions: KASHMIR_GREAT_LAKES_EXCLUSIONS,
    testimonials: KASHMIR_GREAT_LAKES_TESTIMONIALS,
    gallery: KASHMIR_GREAT_LAKES_GALLERY,
  },
  sarpass: {
    trek: SAR_PASS_TREK,
    itinerary: SAR_PASS_ITINERARY,
    inclusions: SAR_PASS_INCLUSIONS,
    exclusions: SAR_PASS_EXCLUSIONS,
    testimonials: SAR_PASS_TESTIMONIALS,
    gallery: SAR_PASS_GALLERY,
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