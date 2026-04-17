export const TREK_DATA : Trek[] = [
{
    id: 1,
    name: "Kedarkantha Trek",
    duration: "6 Days",
    description: "Summit at 12,500 ft with panoramic snow-capped views",
    state: "Uttarakhand",
    price: 8499,
    popularity: "Popular",
    uniqueName:"kedarkanthatrek"
},
{
    id: 2,
    name: "Valley of Flowers Trek",
    duration: "5 Days",
    description: "Explore vibrant alpine meadows and rare flora",
    state: "Uttarakhand",
    price: 7999,
    popularity: "Trending",
    uniqueName:"valleyofflowerstrek"
},
{
    id: 3,
    name: "Hampta Pass Trek",
    duration: "5 Days",
    description: "Experience the beauty of the Himalayas with stunning mountain views",
    state: "Himachal Pradesh",
    price: 6999,
    popularity: "Popular",
    uniqueName:"hamptapass"
},
{
    id: 4,  
    name: "Triund Trek",
    duration: "3 Days",
    description: "Short trek with panoramic views of the Dhauladhar range",
    state: "Himachal Pradesh",
    price: 4999,
    popularity: "Popular",
    uniqueName:"triund"
}
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