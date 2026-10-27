import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const principles = [
  { title: "Trust", text: "We value open communication and dependable relationships in every part of our work." },
  { title: "Quality", text: "We aim to deliver with care, consistency and attention to the needs of our partners." },
  { title: "Progress", text: "We believe responsible trade can create opportunity for businesses and communities." },
];

export default function AboutPage() {
  return <div className="site-page">
    <section className="page-hero"><div className="section-wrap"><p className="eyebrow">ABOUT WEYN AMBA</p><h1>Trade built on relationships and a sense of purpose.</h1><p>Weyn Amba Trading PLC is an Ethiopian company working across coffee export, agriculture and logistics. We are committed to building lasting partnerships and contributing to sustainable economic growth.</p></div></section>
    <section className="content-section"><div className="section-wrap">
      <div className="content-grid"><div className="content-photo"><Image src="/about/images.jpg" alt="Weyn Amba Trading company image" fill sizes="(max-width: 650px) 100vw, 50vw" /></div><div className="content-copy"><p className="eyebrow">WHO WE ARE</p><h2>Local knowledge. Long-term thinking.</h2><p>Our work is grounded in Ethiopia and shaped by the needs of customers, suppliers and partners. We bring a practical approach to trading, with a focus on clear communication, quality and responsible business relationships.</p><p>As our company grows, we remain focused on creating value throughout the supply chain and supporting the communities connected to our work.</p><Link href="/web/contact" className="text-link">Connect with us <ArrowRight size={16} /></Link></div></div>
      <div className="values-grid">{principles.map(item => <article className="value-card" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
    </div></section>
    <section className="cta-band"><div className="section-wrap cta-content"><div><p className="eyebrow eyebrow-light">WORK WITH US</p><h2>Let’s make a connection.</h2><p>Reach out to discuss a partnership or business inquiry.</p></div><Link className="button button-light" href="/web/contact">Contact our team <ArrowRight size={17} /></Link></div></section>
  </div>;
}
