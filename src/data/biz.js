// ✏️ פרטי העסק — כל השאר נגזר מכאן
export const BIZ = {
  name: "Zulatech",
  owner: "נתנאל זולאית",
  tagline: "מחשוב, תקשורת וחשמל חכם",
  phone: "+972544202284",
  phoneShow: "054-420-2284",
  whatsapp: "972544202284",
  waText: "היי נתנאל, הגעתי דרך כרטיס הביקור הדיגיטלי ואשמח לפרטים",
  facebook: "https://www.facebook.com/zulatech9/",
  instagram: "https://www.instagram.com/zulatech_/",
  address: "השושנים 6, חדרה",
  website: "https://www.zulatech.co.il",
  email: "",
};

export const waHref = `https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(BIZ.waText)}`;
export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BIZ.name + " " + BIZ.address)}`;
export const wazeHref = `https://waze.com/ul?q=${encodeURIComponent(BIZ.name + " " + BIZ.address)}&navigate=yes`;
export const telHref = "tel:" + BIZ.phone;
