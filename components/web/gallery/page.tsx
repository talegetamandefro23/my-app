import Image from "next/image";

const images = [
  { src: "/1.jpeg", alt: "Ethiopian landscape", caption: "Ethiopia" },
  { src: "/image.jpeg", alt: "Coffee and agricultural products", caption: "Coffee & agriculture" },
  { src: "/image1.jpeg", alt: "Weyn Amba Trading company image", caption: "Weyn Amba Trading" },
  { src: "/team1.jpg", alt: "Weyn Amba team", caption: "Our people" },
  { src: "/team2.jpg", alt: "Weyn Amba team", caption: "Working together" },
  { src: "/2.jpg", alt: "Weyn Amba Trading company image", caption: "Our work" },
];

export default function GalleryPage() {
  return <div className="site-page"><section className="page-hero"><div className="section-wrap"><p className="eyebrow">GALLERY</p><h1>A closer look at our world.</h1><p>Images from Ethiopia and the people and products connected to Weyn Amba Trading.</p></div></section><section className="content-section"><div className="section-wrap"><div className="gallery-grid">{images.map(image => <figure className="gallery-tile" key={image.src}><Image src={image.src} alt={image.alt} fill sizes="(max-width: 650px) 100vw, (max-width: 900px) 50vw, 33vw" /><figcaption><span>{image.caption}</span></figcaption></figure>)}</div></div></section></div>;
}
