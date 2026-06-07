"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const contact = {
  phoneDisplay: "+66 61-959-7478",
  phoneTel: "+66619597478",
  email: "vanda.umaporn@gmail.com",
  lineId: "@vanda",
  lineUrl: "https://line.me/R/ti/p/@vanda",
  whatsappUrl: "https://wa.me/66619597478",
  facebook: "https://www.facebook.com/kruvanda.me/",
};


const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx3UgcPCRXqb__tJKVOywwgzgbpW6HfCmFf7wAavOXxUIUkHFZCZblxS2PViAeUSdkuFg/exec";

const propertyImageSets = {
  NT207: [
    "images/NT207/NT207_1.jpg",
    "images/NT207/NT207_2.jpg",
    "images/NT207/NT207_3.jpg",
    "images/NT207/NT207_4.jpg",
    "images/NT207/NT207_5.jpg",
  ],
  NT784: [
    "images/NT784/NT784_1.jpg",
    "images/NT784/NT784_2.jpg",
    "images/NT784/NT784_3.jpg",
    "images/NT784/NT784_4.jpg",
    "images/NT784/NT784_5.jpg",
  ],
  NT912: [
    "images/912/912_1.jpg",
    "images/912/912_2.jpg",
    "images/912/912_3.jpg",
    "images/912/912_4.jpg",
    "images/912/912_5.jpg",
  ],
  NT808: [
    "images/808/808_1.jpg",
    "images/808/808_2.jpg",
    "images/808/808_3.jpg",
    "images/808/808_4.jpg",
    "images/808/808_5.jpg",
  ],
  NT001: [
    "images/NT001/NT001_1.jpg",
    "images/NT001/NT001_2.jpg",
    "images/NT001/NT001_3.jpg",
    "images/NT001/NT001_4.jpg",
    "images/NT001/NT001_5.jpg",
  ], 
  NT002: [
    "images/NT002/NT002_1.jpg",
    "images/NT002/NT002_2.jpg",
    "images/NT002/NT002_3.jpg",
    "images/NT002/NT002_4.jpg",
    "images/NT002/NT002_5.jpg",
  ], 
};

const iconPaths = {
  home: "M3 10.5 12 3l9 7.5V21a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5Z",
  mapPin: "M12 22s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  phone: "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z",
  message: "M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5a8.5 8.5 0 1 1 17 0Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-4-10 2.5 2.5L16 9",
  school: "M22 10 12 4 2 10l10 6 10-6ZM6 12.5V17c3.5 2 8.5 2 12 0v-4.5M22 10v6",
  trees: "M7 22v-6M17 22v-8M7 16c-2.5 0-4-1.5-4-3.5C3 10 5 8 7 5c2 3 4 5 4 7.5C11 14.5 9.5 16 7 16Zm10-2c-3 0-5-2-5-4.5C12 6.5 14.5 4 17 1c2.5 3 5 5.5 5 8.5C22 12 20 14 17 14Z",
  waves: "M2 16c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 20c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2M2 12c2 0 2-2 4-2s2 2 4 2 2-2 4-2 2 2 4 2 2-2 4-2",
  check: "M20 6 9 17l-5-5",
  menu: "M4 6h16M4 12h16M4 18h16",
  x: "M18 6 6 18M6 6l12 12",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm18 3-10 7L2 7",
  facebook: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z",
};

function Icon({ name, className = "h-5 w-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={iconPaths[name]} />
    </svg>
  );
}

const content = {
  th: {
    otherLang: "English",
    nav: ["หน้าแรก", "จุดเด่น", "บ้านเช่า", "ทำเล", "ติดต่อ"],
    heroBadge: "Vanda Nichada Homes · ISB Expat Housing",
    heroTitle: "บ้านเช่าพรีเมียม ในนิชดาธานี ใกล้ ISB สำหรับครอบครัวนานาชาติ",
    heroSubtitle: "บ้านพร้อมอยู่ สวนส่วนตัว สระว่ายน้ำบางหลัง และชุมชนคุณภาพ เดินทางสะดวกถึง International School Bangkok",
    primaryCta: "นัดชมบ้าน",
    secondaryCta: "ดูบ้านที่แนะนำ",
    stats: [
      { value: "100–150 ม.", label: "จาก ISB ในบางทำเล" },
      { value: "24 ชม.", label: "ระบบรักษาความปลอดภัย" },
      { value: "Expat", label: "ชุมชนครอบครัวนานาชาติ" },
    ],
    trust: "เชี่ยวชาญบ้านเช่า บ้านขาย และการดูแลบ้านสำหรับครอบครัว Expat       ในนิชดาธานี",
    highlightsTitle: "ทำไมครอบครัว ISB เลือก Vanda Nichada Homes",
    highlightsSubtitle: "คัดเลือกบ้านที่เหมาะกับการใช้ชีวิตจริงของครอบครัวต่างชาติ ทั้งความปลอดภัย พื้นที่ใช้สอย และการเดินทางไปโรงเรียน",
    highlights: [
      { icon: "school", title: "ใกล้ ISB", text: "บ้านหลายทำเลอยู่ในระยะเดินหรือขับรถสั้น ๆ ถึง International School Bangkok" },
      { icon: "trees", title: "สวนส่วนตัว", text: "พื้นที่สนามและสวน เหมาะกับเด็ก ๆ สัตว์เลี้ยง และกิจกรรมครอบครัว" },
      { icon: "waves", title: "สระว่ายน้ำส่วนตัว", text: "บางหลังมีสระว่ายน้ำส่วนตัว เหมาะกับไลฟ์สไตล์ครอบครัว Expat" },
      { icon: "shield", title: "ปลอดภัยและเป็นส่วนตัว", text: "ชุมชนเงียบสงบ พร้อมระบบรักษาความปลอดภัยตลอด 24 ชั่วโมง" },
    ],
    homesTitle: "ตัวอย่างบ้านแนะนำ",
    homesSubtitle: "สามารถดูรูปและรายละเอียดเป็นบ้านจริงจาก Facebook Page หรือรายการล่าสุดได้",
    homes: [
      {
        id: "NT207",
        title: "Nichada Thani (NT207)",
        tag: "Premium",
        images: propertyImageSets.NT207,
        detail: "บ้านสไตล์โมเดิร์น พร้อมสระว่ายน้ำส่วนตัว สวนกว้าง และพื้นที่ครอบครัว",
        specs: ["4–5 ห้องนอน", "สระว่ายน้ำส่วนตัว", "ใกล้ ISB", "เหมาะกับครอบครัว"],
      },
      {
        id: "NT784",
        title: "Nichada Thani (NT784)",
        tag: "Family",
        images: propertyImageSets.NT784,
        detail: "บ้านเดี่ยวสนามกว้าง บรรยากาศเงียบสงบ เหมาะสำหรับเด็กและสัตว์เลี้ยง",
        specs: ["สวนขนาดใหญ่", "พื้นที่ใช้สอยกว้าง", "ชุมชน Expat", "เข้าอยู่ได้เร็ว"],
      },
      {
        id: "NT912",
        title: "Nichada Thani (912)",
        tag: "Private",
        images: propertyImageSets.NT912,
        detail: "บ้านในโซนเงียบ เป็นส่วนตัว ใกล้สิ่งอำนวยความสะดวกใน Nichada Thani",
        specs: ["ทำเลดี", "ปลอดภัย", "ใกล้คลับ", "ใกล้ร้านอาหาร"],
      },
      {
        id: "NT808",
        title: "Nichada Thani (808)",
        tag: "Private",
        images: propertyImageSets.NT808,
        detail: "บ้านในโซนเงียบ เป็นส่วนตัว ใกล้สิ่งอำนวยความสะดวกใน Nichada Thani",
        specs: ["ทำเลดี", "ปลอดภัย", "ใกล้คลับ", "ใกล้ร้านอาหาร"],
      },
      {  
        title: "Nichada Thani (NT001)",
        tag: "Private",
        images: propertyImageSets.NT001,
        detail: "บ้านในโซนเงียบ เป็นส่วนตัว ใกล้สิ่งอำนวยความสะดวกใน Nichada Thani",
        specs: ["ทำเลดี", "ปลอดภัย", "ใกล้คลับ", "ใกล้ร้านอาหาร"],
      },
      {  
        title: "Nichada Thani (NT002)",
        tag: "Private",
        images: propertyImageSets.NT002,
        detail: "บ้านในโซนเงียบ เป็นส่วนตัว ใกล้สิ่งอำนวยความสะดวกใน Nichada Thani",
        specs: ["ทำเลดี", "ปลอดภัย", "ใกล้คลับ", "ใกล้ร้านอาหาร"],
      },
    ],
    locationTitle: "ทำเล Nichada Thani ใกล้ ISB",
    locationText: "Nichada Thani เป็นชุมชนที่ได้รับความนิยมจากครอบครัวต่างชาติ เพราะอยู่ใกล้ International School Bangkok มีสิ่งอำนวยความสะดวกครบ และบรรยากาศเหมาะกับการอยู่อาศัยระยะยาว",
    nearby: ["International School Bangkok (ISB)", "Nichada Club", "ร้านอาหารและคาเฟ่", "ซูเปอร์มาร์เก็ต", "สนามเด็กเล่นและพื้นที่สีเขียว"],
    contactTitle: "สนใจบ้านเช่าหรือบ้านขายใน Nichada Thani?",
    contactText: "ส่งความต้องการของคุณ เช่น จำนวนห้องนอน งบประมาณ วันที่ย้ายเข้า และระยะทางจาก ISB ที่ต้องการ ทีมงานจะช่วยคัดบ้านที่เหมาะสมให้",
    call: "โทร",
    email: "อีเมล",
    line: "Line ID",
    whatsapp: "WhatsApp",
    facebook: "Facebook Page",
    footer: "Vanda Nichada Homes · Helping ISB families feel at home in Nichada Thani",
  },
  en: {
    otherLang: "ไทย",
    nav: ["Home", "Why Us", "Homes", "Location", "Contact"],
    heroBadge: "Vanda Nichada Homes · ISB Expat Housing",
    heroTitle: "Premium rental homes in Nichada Thani near ISB for international families",
    heroSubtitle: "Move-in ready family homes with private gardens, selected private pools, and convenient access to International School Bangkok.",
    primaryCta: "Schedule a Viewing",
    secondaryCta: "View Featured Homes",
    stats: [
      { value: "100–150 m", label: "from ISB in selected locations" },
      { value: "24/7", label: "community security" },
      { value: "Expat", label: "international family community" },
    ],
    trust: "Specializing in rentals, sales, and home care for expat families in Nichada Thani.",
    highlightsTitle: "Why ISB families choose Vanda Nichada Homes",
    highlightsSubtitle: "We help families find practical, safe, and comfortable homes close to school and daily conveniences.",
    highlights: [
      { icon: "school", title: "Close to ISB", text: "Many homes are within walking distance or a short drive to International School Bangkok." },
      { icon: "trees", title: "Private gardens", text: "Spacious lawns and gardens for children, pets, and family activities." },
      { icon: "waves", title: "Selected private pools", text: "Some homes include private swimming pools for a relaxed family lifestyle." },
      { icon: "shield", title: "Safe and private", text: "Quiet neighborhoods with 24-hour security and a strong expat community." },
    ],
    homesTitle: "Featured home examples",
    homesSubtitle: "Replace images and details with actual listings from your Facebook Page or latest available homes.",
    homes: [
      {
        id: "NT207",
        title: "Nichada Thani (NT207)",
        tag: "Premium",
        images: propertyImageSets.NT207,
        detail: "A modern family residence with private pool, spacious garden, and comfortable living areas.",
        specs: ["4–5 bedrooms", "Private pool", "Near ISB", "Family ready"],
      },
      {
        id: "NT784",
        title: "Nichada Thani (NT784)",
        tag: "Family",
        images: propertyImageSets.NT784,
        detail: "A detached home with a generous lawn, peaceful setting, and space for children and pets.",
        specs: ["Large garden", "Spacious layout", "Expat community", "Move-in ready"],
      },
      {
        id: "NT912",
        title: "Nichada Thani (912)",
        tag: "Private",
        images: propertyImageSets.NT912,
        detail: "A private home in a calm Nichada location with convenient access to daily amenities.",
        specs: ["Prime location", "Secure", "Near club", "Near dining"],
      },
      {
        id: "NT808",
        title: "Nichada Thani (808)",
        tag: "Private",
        images: propertyImageSets.NT808,
        detail: "A private home in a calm Nichada location with convenient access to daily amenities.",
        specs: ["Prime location", "Secure", "Near club", "Near dining"],
      },
      {
        id: "NT001",
        title: "Nichada Thani (NT001)",
        tag: "Private",
        images: propertyImageSets.NT001,
        detail: "A private home in a calm Nichada location with convenient access to daily amenities.",
        specs: ["Prime location", "Secure", "Near club", "Near dining"],
      },
      {
        id: "NT002",
        title: "Nichada Thani (NT002)",
        tag: "Private",
        images: propertyImageSets.NT002,
        detail: "A private home in a calm Nichada location with convenient access to daily amenities.",
        specs: ["Prime location", "Secure", "Near club", "Near dining"],
      },



      
    ],
    locationTitle: "Nichada Thani location near ISB",
    locationText: "Nichada Thani is one of the most popular residential communities for international families, offering close access to International School Bangkok, daily conveniences, and a peaceful long-term living environment.",
    nearby: ["International School Bangkok (ISB)", "Nichada Club", "Restaurants and cafés", "Supermarkets", "Playgrounds and green spaces"],
    contactTitle: "Looking for a rental or sale home in Nichada Thani?",
    contactText: "Share your preferred number of bedrooms, budget, move-in date, and desired distance from ISB. We will help shortlist suitable homes for your family.",
    call: "Call",
    email: "Email",
    line: "Line ID",
    whatsapp: "WhatsApp",
    facebook: "Facebook Page",
    footer: "Vanda Nichada Homes · Helping ISB families feel at home in Nichada Thani",
  },
};

function scrollToId(id) {
  if (typeof document === "undefined") return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function PropertyCard({ home, contact, primaryCta }) {
  const [activeImage, setActiveImage] = useState(0);
  const images = home.images?.length ? home.images : ["images/placeholder-house.jpg"];
  const currentImage = images[activeImage] || images[0];

  function showPreviousImage() {
    setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNextImage() {
    setActiveImage((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  return (
    <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        <img
          src={currentImage}
          alt={`${home.title} photo ${activeImage + 1}`}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
          onError={(event) => {
            event.currentTarget.src = images[0];
          }}
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-widest text-stone-700">
          {home.tag}
        </span>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-stone-800 shadow transition hover:bg-white"
              aria-label="Previous property photo"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-lg font-bold text-stone-800 shadow transition hover:bg-white"
              aria-label="Next property photo"
            >
              ›
            </button>
            <div className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
              {activeImage + 1}/{images.length}
            </div>
          </>
        )}
      </div>

      <div className="border-b border-stone-200 bg-white px-4 py-3">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((image, imageIndex) => (
            <button
              key={`${home.id}-${image}`}
              type="button"
              onClick={() => setActiveImage(imageIndex)}
              className={`h-16 w-20 shrink-0 overflow-hidden rounded-xl border-2 bg-stone-100 ${activeImage === imageIndex ? "border-stone-900" : "border-transparent"}`}
              aria-label={`Show ${home.title} photo ${imageIndex + 1}`}
            >
              <img
                src={image}
                alt={`${home.title} thumbnail ${imageIndex + 1}`}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold">{home.title}</h3>
        <p className="mt-3 leading-7 text-stone-600">{home.detail}</p>
        <div className="mt-5 grid gap-2">
          {home.specs.map((spec) => (
            <div key={spec} className="flex items-center gap-2 text-sm text-stone-700">
              <Icon name="check" className="h-4 w-4" /> {spec}
            </div>
          ))}
        </div>
        <a
          href={contact.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
        >
          <Icon name="message" className="h-4 w-4" /> {primaryCta}
        </a>
      </div>
    </article>
  );
}

export default function VandaNichadaWebsite() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    lineId: "",
    bedrooms: "",
    budget: "",
    moveInDate: "",
    preferredProperty: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("");
  const t = content[lang];
  const navIds = useMemo(() => ["home", "why", "homes", "location", "contact"], []);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Vanda Nichada Homes Website",
        }),
      });

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        lineId: "",
        bedrooms: "",
        budget: "",
        moveInDate: "",
        preferredProperty: "",
        message: "",
      });
    } catch (error) {
      setFormStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/50 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <button type="button" onClick={() => scrollToId("home")} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stone-900 text-white shadow-lg">
              <Icon name="home" className="h-7 w-7" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold tracking-wide">Vanda Nichada Homes</p>
              <p className="text-xs text-stone-500">ISB Expat Housing</p>
            </div>
          </button>

          <nav className="hidden items-center gap-7 md:flex">
            {t.nav.map((item, index) => (
              <button key={item} type="button" onClick={() => scrollToId(navIds[index])} className="text-sm font-medium text-stone-600 transition hover:text-stone-950">
                {item}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button type="button" onClick={() => setLang(lang === "en" ? "th" : "en")} className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold transition hover:bg-stone-100">
              {t.otherLang}
            </button>
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-stone-700">
              {t.primaryCta}
            </a>
          </div>

          <button type="button" className="rounded-xl p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <Icon name={menuOpen ? "x" : "menu"} className="h-6 w-6" />
          </button>
        </div>

        {menuOpen && (
          <div className="border-t bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {t.nav.map((item, index) => (
                <button key={item} type="button" onClick={() => { scrollToId(navIds[index]); setMenuOpen(false); }} className="rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-stone-100">
                  {item}
                </button>
              ))}
              <button type="button" onClick={() => setLang(lang === "en" ? "th" : "en")} className="rounded-xl border px-3 py-2 text-left text-sm font-semibold">
                {t.otherLang}
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="home" className="pt-20">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,113,108,0.25),transparent_40%),linear-gradient(135deg,rgba(250,250,249,1),rgba(231,229,228,0.85))]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="flex flex-col justify-center">
              <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
                <Icon name="mapPin" className="h-4 w-4" /> {t.heroBadge}
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-5xl lg:text-6xl">{t.heroTitle}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">{t.heroSubtitle}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white shadow-xl transition hover:bg-stone-700">
                  <Icon name="message" className="h-5 w-5" /> {t.primaryCta}
                </a>
                <button type="button" onClick={() => scrollToId("homes")} className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 bg-white/70 px-6 py-3 font-semibold text-stone-900 transition hover:bg-white">
                  {t.secondaryCta}
                </button>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {t.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/70 bg-white/70 p-5 shadow-sm backdrop-blur">
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-sm text-stone-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75 }} className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200 shadow-2xl">
                <img src={propertyImageSets.NT207[0]} alt="Premium family home near ISB" className="h-full w-full object-cover" />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 rounded-3xl border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-sm font-semibold text-stone-950">{t.trust}</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">Why Vanda</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.highlightsTitle}</h2>
            <p className="mt-4 text-lg leading-8 text-stone-600">{t.highlightsSubtitle}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {t.highlights.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100"><Icon name={item.icon} className="h-6 w-6" /></div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="homes" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">Featured Homes</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.homesTitle}</h2>
                <p className="mt-4 text-lg leading-8 text-stone-600">{t.homesSubtitle}</p>
              </div>
              <a href={contact.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-5 py-3 font-semibold transition hover:bg-stone-100"><Icon name="facebook" className="h-5 w-5" /> Facebook</a>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {t.homes.map((home) => (
                <PropertyCard key={home.id} home={home} contact={contact} primaryCta={t.primaryCta} />
              ))}
            </div>
          </div>
        </section>

        <section id="location" className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-500">Location</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.locationTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">{t.locationText}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.nearby.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"><Icon name="mapPin" className="h-5 w-5 shrink-0" /><span className="font-medium">{item}</span></div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-xl">
            <iframe title="Nichada Thani Map" src="https://www.google.com/maps?q=Nichada%20Thani%20International%20School%20Bangkok&output=embed" className="h-[420px] w-full" loading="lazy" />
          </div>
        </section>

        <section id="contact" className="bg-stone-900 px-4 py-20 text-white sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-stone-400">Contact</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{t.contactTitle}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-300">{t.contactText}</p>
            </div>
            <div className="rounded-[2rem] bg-white p-6 text-stone-900 shadow-2xl">
              <form onSubmit={handleSubmit} className="mb-8 grid gap-3 rounded-[1.5rem] border border-stone-200 bg-stone-50 p-4">
                <div>
                  <p className="text-lg font-bold text-stone-900">
                    {lang === "th" ? "ลงทะเบียนความต้องการบ้าน" : "Register Your Housing Requirement"}
                  </p>
                  <p className="mt-1 text-sm text-stone-500">
                    {lang === "th"
                      ? "กรอกข้อมูลเพื่อให้ทีมงานช่วยคัดบ้านที่เหมาะสม"
                      : "Share your requirements and our team will shortlist suitable homes for you."}
                  </p>
                </div>

                <input
                  required
                  type="text"
                  placeholder={lang === "th" ? "ชื่อ-นามสกุล" : "Full Name"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                />

                <input
                  required
                  type="email"
                  placeholder={lang === "th" ? "อีเมล" : "Email"}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                />

                <input
                  type="text"
                  placeholder={lang === "th" ? "เบอร์โทรศัพท์" : "Phone"}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                />

                <input
                  type="text"
                  placeholder={lang === "th" ? "Line ID" : "Line ID"}
                  value={formData.lineId}
                  onChange={(e) => setFormData({ ...formData, lineId: e.target.value })}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                />

                <select
                  value={formData.preferredProperty}
                  onChange={(e) => setFormData({ ...formData, preferredProperty: e.target.value })}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                >
                  <option value="">{lang === "th" ? "บ้านที่สนใจ" : "Preferred Property"}</option>
                  {t.homes.map((home) => (
                    <option key={home.id || home.title} value={home.title}>
                      {home.title}
                    </option>
                  ))}
                </select>

                <select
                  value={formData.bedrooms}
                  onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                >
                  <option value="">{lang === "th" ? "จำนวนห้องนอน" : "Bedrooms"}</option>
                  <option value="3 Bedrooms">3 Bedrooms</option>
                  <option value="4 Bedrooms">4 Bedrooms</option>
                  <option value="5 Bedrooms">5 Bedrooms</option>
                  <option value="6+ Bedrooms">6+ Bedrooms</option>
                </select>

                <input
                  type="text"
                  placeholder={lang === "th" ? "งบประมาณต่อเดือน" : "Budget per Month"}
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                />

                <label className="text-sm font-medium text-stone-600">
                  {lang === "th" ? "วันที่ต้องการย้ายเข้า" : "Move-in Date"}
                </label>
                <input
                  type="date"
                  value={formData.moveInDate}
                  onChange={(e) => setFormData({ ...formData, moveInDate: e.target.value })}
                  className="rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                />

                <textarea
                  placeholder={lang === "th" ? "รายละเอียดเพิ่มเติม เช่น มีสัตว์เลี้ยง ต้องการใกล้ ISB หรือช่วงราคาที่ต้องการ" : "Additional requirements e.g. pets, walking distance to ISB, preferred budget"}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[120px] rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                />

                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="rounded-xl bg-stone-900 px-5 py-3 font-semibold text-white transition hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {formStatus === "sending"
                    ? lang === "th"
                      ? "กำลังส่งข้อมูล..."
                      : "Sending..."
                    : lang === "th"
                    ? "ส่งข้อมูลลงทะเบียน"
                    : "Register / Submit Inquiry"}
                </button>

                {formStatus === "success" && (
                  <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                    {lang === "th"
                      ? "ขอบคุณครับ/ค่ะ ทีมงานได้รับข้อมูลของคุณแล้ว"
                      : "Thank you. Your inquiry has been submitted."}
                  </p>
                )}

                {formStatus === "error" && (
                  <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {lang === "th"
                      ? "ไม่สามารถส่งข้อมูลได้ กรุณาลองใหม่อีกครั้ง"
                      : "Cannot submit the form. Please try again."}
                  </p>
                )}
              </form>

              <div className="grid gap-4">
                <a href={`tel:${contact.phoneTel}`} className="flex items-center gap-4 rounded-2xl border border-stone-200 p-4 transition hover:bg-stone-50"><Icon name="phone" className="h-6 w-6" /><div><p className="text-sm text-stone-500">{t.call}</p><p className="font-bold">{contact.phoneDisplay}</p></div></a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-4 rounded-2xl border border-stone-200 p-4 transition hover:bg-stone-50"><Icon name="mail" className="h-6 w-6" /><div><p className="text-sm text-stone-500">{t.email}</p><p className="font-bold">{contact.email}</p></div></a>
                <a href={contact.lineUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-stone-200 p-4 transition hover:bg-stone-50"><Icon name="message" className="h-6 w-6" /><div><p className="text-sm text-stone-500">{t.line}</p><p className="font-bold">{contact.lineId}</p></div></a>
                <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-stone-200 p-4 transition hover:bg-stone-50"><Icon name="message" className="h-6 w-6" /><div><p className="text-sm text-stone-500">{t.whatsapp}</p><p className="font-bold">{contact.phoneDisplay}</p></div></a>
                <a href={contact.facebook} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-stone-200 p-4 transition hover:bg-stone-50"><Icon name="facebook" className="h-6 w-6" /><div><p className="text-sm text-stone-500">{t.facebook}</p><p className="font-bold">facebook.com/kruvanda.me</p></div></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-stone-950 px-4 py-8 text-center text-sm text-stone-400">{t.footer}</footer>
    </div>
  );
}
