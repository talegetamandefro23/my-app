import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Coffee, Globe2, Leaf, Truck } from "lucide-react";

const focusAreas = [
  { icon: Coffee, title: "Coffee & export", text: "Connecting Ethiopian products with partners and markets beyond our borders." },
  { icon: Leaf, title: "Agriculture", text: "Working across agricultural value chains with a focus on quality and long-term relationships." },
  { icon: Truck, title: "Trade & logistics", text: "Supporting the movement of goods through practical trading and logistics services." },
];

export default function HomePage() {
  return (
    <div className="site-page">
      <section className="home-hero">
        <Image src="/1.jpeg" alt="A view of Ethiopia's landscape" fill priority sizes="100vw" className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow eyebrow-light">WEYN AMBA TRADING PLC · ETHIOPIA</p>
          <h1>Rooted in Ethiopia.<br /><span>Connected to opportunity.</span></h1>
          <p className="hero-lede">We bring together trade, agriculture and logistics to help Ethiopian products and businesses move forward.</p>
          <div className="hero-actions">
            <Link className="button button-light" href="/web/about">Get to know us <ArrowRight size={17} /></Link>
            <Link className="text-link-light" href="/web/contact">Talk with our team <ArrowRight size={16} /></Link>
          </div>
        </div>
        <a className="scroll-cue" href="#company"><ArrowDown size={16} /> Discover Weyn Amba</a>
        <span className="hero-index">01 / 03</span>
      </section>

      <section id="company" className="intro-section section-wrap">
        <div className="intro-kicker"><span className="kicker-line" /> A trading company with a local foundation</div>
        <div className="intro-grid">
          <h2>Building meaningful connections across the value chain.</h2>
          <div><p className="body-large">Weyn Amba Trading PLC is an Ethiopian company working across coffee export, agriculture and logistics. We aim to build dependable partnerships and create lasting value through thoughtful, responsible trade.</p><Link className="text-link" href="/web/about">More about Weyn Amba <ArrowRight size={16} /></Link></div>
        </div>
      </section>

      <section className="focus-section">
        <div className="section-wrap">
          <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Trade that moves with purpose.</h2></div><p>Our work spans connected areas of the Ethiopian economy, grounded in partnership and a practical understanding of the journey from source to destination.</p></div>
          <div className="focus-grid">{focusAreas.map(({ icon: Icon, title, text }, i) => <article className="focus-card" key={title}><div className="focus-top"><span>0{i + 1}</span><Icon size={22} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><Link href="/web/about/clusters" aria-label={`Learn about ${title}`}><ArrowRight size={18} /></Link></article>)}</div>
        </div>
      </section>

      <section className="story-section section-wrap">
        <div className="story-image"><Image src="/image.jpeg" alt="Ethiopian coffee and agricultural produce" fill sizes="(max-width: 768px) 100vw, 50vw" /></div>
        <div className="story-copy"><p className="eyebrow">OUR APPROACH</p><h2>Good business begins with trust.</h2><p>We believe strong trade is built on clear communication, reliable service and respect for the people and products behind every transaction. We keep those principles at the center of how we work with customers, suppliers and partners.</p><Link className="button button-dark" href="/web/about">Our company <ArrowRight size={17} /></Link></div>
      </section>

      <section className="cta-band"><div className="section-wrap cta-content"><div><p className="eyebrow eyebrow-light">LET’S BUILD A CONNECTION</p><h2>Have a business inquiry?</h2><p>We’d be glad to hear what you’re looking for and explore how we can work together.</p></div><Link className="button button-light" href="/web/contact">Contact Weyn Amba <ArrowRight size={17} /></Link></div></section>
    </div>
  );
}
