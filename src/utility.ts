export const EnquireNowClick = (trekName?: string) => {
  const phoneNumber = import.meta.env.VITE_MOBILE_NUMBER;
  const message = trekName
    ? `Hi! I'm interested in the ${trekName} trek. Could you share itinerary, cost, and dates?`
    : `Hi! I'm interested in your treks. Could you share itinerary, pricing, and upcoming dates?`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
