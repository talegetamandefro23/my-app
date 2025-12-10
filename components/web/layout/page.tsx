import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  const baseNavLink =
    "bg-transparent border-0 p-0 rounded-none text-white hover:text-gray-200 hover:bg-gray transition-colors";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 left-0 right-0 bg-gray-700/95 text-white shadow-md backdrop-blur-md z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Weyn Amba Trading</h1>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6 text-white">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(navigationMenuTriggerStyle(), baseNavLink)}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* About Us Menu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(baseNavLink)}>
                  About Us
                </NavigationMenuTrigger>

                <NavigationMenuContent className="bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[600px] md:grid-cols-3">
                    {[
                      {
                        title: "About Weyn Amba",
                        desc: "Description for Weyn Amba",
                        href: "/web/about", // <-- main about page
                      },
                      {
                        title: "About Clusters",
                        desc: "Description for Clusters",
                        href: "/web/about/clusters", // <-- clusters page
                      },
                      {
                        title: "About Our Services",
                        desc: "Description for Our Services",
                        href: "/web/about/services", // <-- services page
                      },
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="rounded-md p-3 hover:bg-gray-600 transition-colors"
                      >
                        <Link
                          href={item.href} // ✅ dynamic link
                          className="block text-sm font-semibold text-white"
                        >
                          {item.title}
                        </Link>
                        <p className="text-xs text-gray-300">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products & Services */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className={cn(baseNavLink)}>
                  Products & Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-700 text-white border border-gray-600 rounded-md shadow-lg">
                  <ul className="grid w-[700px] gap-4 p-4 md:grid-cols-3">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <li
                        key={num}
                        className="rounded-md p-3 hover:bg-gray-600 transition-colors"
                      >
                        <Link
                          href={`/products/product${num}`}
                          className="block text-sm font-semibold text-white"
                        >
                          Product {num}
                        </Link>
                        <p className="text-xs text-gray-300 mb-2">
                          Description for Product {num}.
                        </p>
                        <ul className="ml-4 space-y-1 text-sm text-gray-200">
                          {["Features", "Pricing", "Demo"].map((sub, i) => (
                            <li key={i}>
                              <Link
                                href={`/products/product${num}/${sub.toLowerCase()}`}
                                className="hover:underline"
                              >
                                {sub}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Static Links */}
              {[
                { name: "News", href: "/web/news" },
                { name: "Contacts", href: "/web/contact" },
                { name: "Gallery", href: "/web/gallery" },
                { name: "Admin Dashboard", href: "/auth/login" },
              ].map((item, i) => (
                <NavigationMenuItem key={i}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={item.href}
                      className={cn(navigationMenuTriggerStyle(), baseNavLink)}
                    >
                      {item.name}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-0 py-0">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-6 text-center space-y-4">
          <p className="text-sm text-gray-200">
            &copy; {currentYear} Weyn Amba Trading PLC. All rights reserved.
          </p>

          <div className="flex justify-center space-x-6">
            <Link href="/privacy" className="text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </div>

          <div className="flex justify-center space-x-6 text-gray-300">
            <Link href="https://www.linkedin.com">LinkedIn</Link>
            <Link href="https://www.facebook.com">Facebook</Link>
            <Link href="https://www.twitter.com">Twitter</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
