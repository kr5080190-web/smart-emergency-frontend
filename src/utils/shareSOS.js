export const createSOSMessage = (lat, lng) => {
  const mapLink = `https://www.google.com/maps?q=${lat},${lng}`;

  return {
    text: `🚨 EMERGENCY ALERT!\n\nMy live location:\n${mapLink}\n\nPlease help ASAP!`,
    link: mapLink,
  };
};

export const shareViaWhatsApp = (message) => {
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};