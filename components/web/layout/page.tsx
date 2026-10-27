import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";

const navLinks = [
  { label: "About", href: "/web/about" },
  { label: "Our work", href: "/web/about/clusters" },
  { label: "Services", href: "/web/about/services" },
  { label: "News", href: "/web/news" },
  { label: "Gallery", href: "/web/gallery" },
];

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="public-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Weyn Amba Trading home"><span className="brand-mark">W</span><span className="brand-name">WEYN AMBA<small>TRADING PLC</small></span></Link>
        <nav className="desktop-nav" aria-label="Main navigation">{navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}</nav>
        <Link className="header-contact" href="/web/contact">Let’s talk <ArrowRight size={16} /></Link>
        <details className="mobile-nav"><summary aria-label="Open navigation"><Menu size={23} /></summary><div className="mobile-menu">{navLinks.map(link => <Link key={link.href} href={link.href}>{link.label}</Link>)}<Link href="/web/contact">Contact</Link></div></details>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="footer-main section-wrap"><div className="footer-brand"><Link className="brand brand-footer" href="/"><span className="brand-mark">W</span><span className="brand-name">WEYN AMBA<small>TRADING PLC</small></span></Link><p>Rooted in Ethiopia. Connected to opportunity.</p></div><div className="footer-links"><p className="footer-label">EXPLORE</p><Link href="/web/about">About us</Link><Link href="/web/about/clusters">Our work</Link><Link href="/web/about/services">Services</Link><Link href="/web/news">News</Link></div><div className="footer-links"><p className="footer-label">GET IN TOUCH</p><a href="mailto:admin@weynamaba.com.et">admin@weynamaba.com.et</a><a href="tel:+251937922229">+251 937 922 229</a><span>Addis Ababa, Ethiopia</span></div><Link className="footer-cta" href="/web/contact">Start a conversation <ArrowRight size={16} /></Link></div>
        <div className="footer-bottom section-wrap"><span>© {new Date().getFullYear()} Weyn Amba Trading PLC</span><span>Built on trust. Moving forward together.</span></div>
      </footer>
    </div>
  );
}
