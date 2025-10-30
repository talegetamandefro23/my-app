import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  NavigationMenuContent,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear(); // Dynamic year
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header - Now sticky/fixed on scroll */}
      <header className="sticky top-0 left-0 right-0 bg-gray-600 text-white shadow-lg z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-white">Weyn Amba Trading</h1>
          <NavigationMenu>
            <NavigationMenuList className="text-white flex space-x-6">
              {" "}
              {/* Added space-x-6 for inline spacing */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent border-0 p-0 rounded-none text-white hover:text-gray-200 hover:bg-transparent" // Fully remove bg, border, padding, radius
                    )}
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent border-0 p-0 rounded-none text-white hover:text-gray-200 hover:bg-transparent" // Fully remove bg, border, padding, radius
                  )}
                >
                  About Us
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-700 text-white border-gray-500">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px]">
                    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-600 focus:bg-accent">
                      <Link
                        href="/about"
                        className="block leading-[25px] text-sm font-normal text-white"
                      >
                        About Weyn Amba
                      </Link>
                      <p className="text-sm text-muted-foreground leading-snug">
                        description for Weyn Amba
                      </p>
                    </li>
                    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-600 focus:bg-accent">
                      <Link
                        href="/about"
                        className="block leading-[25px] text-sm font-normal text-white"
                      >
                        About Clusters
                      </Link>
                      <p className="text-sm text-muted-foreground leading-snug">
                        description for Clusters
                      </p>
                    </li>
                    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-600 focus:bg-accent">
                      <Link
                        href="/about"
                        className="block leading-[25px] text-sm font-normal text-white"
                      >
                        About Our Services
                      </Link>
                      <p className="text-sm text-muted-foreground leading-snug">
                        description for our Service
                      </p>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent border-0 p-0 rounded-none text-white hover:text-gray-200 hover:bg-transparent" // Styles without asChild
                  )}
                >
                  Products and Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-gray-700 text-white border-gray-500">
                  {" "}
                  {/* Dark theme to match header */}
                  <ul className="grid w-[500px] gap-4 p-4 md:w-[600px] md:grid-cols-2 lg:w-[700px] lg:grid-cols-3">
                    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-600 focus:bg-accent">
                      <Link
                        href="/products/product1"
                        className="block leading-[25px] text-sm font-normal text-white"
                      >
                        Product 1
                      </Link>
                      <p className="text-sm text-muted-foreground leading-snug">
                        Description for Product 1.
                      </p>
                      {/* Sub-navigation list for Product 1 */}
                      <ul className="mt-2 ml-4 space-y-1 text-sm text-white">
                        <li>
                          <Link
                            href="/products/product1/features"
                            className="hover:underline"
                          >
                            Features
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product1/pricing"
                            className="hover:underline"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product1/demo"
                            className="hover:underline"
                          >
                            Demo
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-600 focus:bg-accent">
                      <Link
                        href="/products/product2"
                        className="block leading-[25px] text-sm font-normal text-white"
                      >
                        Product 2
                      </Link>
                      <p className="text-sm text-muted-foreground leading-snug">
                        Description for Product 2.
                      </p>
                      {/* Sub-navigation list for Product 2 */}
                      <ul className="mt-2 ml-4 space-y-1 text-sm text-white">
                        <li>
                          <Link
                            href="/products/product2/features"
                            className="hover:underline"
                          >
                            Features
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product2/pricing"
                            className="hover:underline"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product2/demo"
                            className="hover:underline"
                          >
                            Demo
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-600 focus:bg-accent">
                      <Link
                        href="/products/product3"
                        className="block leading-[25px] text-sm font-normal text-white"
                      >
                        Product 3
                      </Link>
                      <p className="text-sm text-muted-foreground leading-snug">
                        Description for Product 3.
                      </p>
                      {/* Sub-navigation list for Product 3 */}
                      <ul className="mt-2 ml-4 space-y-1 text-sm text-white">
                        <li>
                          <Link
                            href="/products/product3/features"
                            className="hover:underline"
                          >
                            Features
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product3/pricing"
                            className="hover:underline"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product3/demo"
                            className="hover:underline"
                          >
                            Demo
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-600 focus:bg-accent">
                      <Link
                        href="/products/product4"
                        className="block leading-[25px] text-sm font-normal text-white"
                      >
                        Product 4
                      </Link>
                      <p className="text-sm text-muted-foreground leading-snug">
                        Description for Product 4.
                      </p>
                      {/* Sub-navigation list for Product 4 */}
                      <ul className="mt-2 ml-4 space-y-1 text-sm text-white">
                        <li>
                          <Link
                            href="/products/product4/features"
                            className="hover:underline"
                          >
                            Features
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product4/pricing"
                            className="hover:underline"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product4/demo"
                            className="hover:underline"
                          >
                            Demo
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-600 focus:bg-accent">
                      <Link
                        href="/products/product5"
                        className="block leading-[25px] text-sm font-normal text-white"
                      >
                        Product 5
                      </Link>
                      <p className="text-sm text-muted-foreground leading-snug">
                        Description for Product 5.
                      </p>
                      {/* Sub-navigation list for Product 5 */}
                      <ul className="mt-2 ml-4 space-y-1 text-sm text-white">
                        <li>
                          <Link
                            href="/products/product5/features"
                            className="hover:underline"
                          >
                            Features
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product5/pricing"
                            className="hover:underline"
                          >
                            Pricing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/product5/demo"
                            className="hover:underline"
                          >
                            Demo
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent border-0 p-0 rounded-none text-white hover:text-gray-200 hover:bg-transparent" // Fully remove bg, border, padding, radius
                    )}
                  >
                    News
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>{" "}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/about"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent border-0 p-0 rounded-none text-white hover:text-gray-200 hover:bg-transparent" // Fully remove bg, border, padding, radius
                    )}
                  >
                    Contacts
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/auth/login"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent border-0 p-0 rounded-none text-white hover:text-gray-200 hover:bg-transparent" // Fully remove bg, border, padding, radius (uniform)
                    )}
                  >
                    Gallery
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/auth/login"
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "bg-transparent border-0 p-0 rounded-none text-white hover:text-gray-200 hover:bg-transparent" // Fully remove bg, border, padding, radius
                    )}
                  >
                    Admin Dashboard
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      {/* Body - Main Content (added pt-20 to offset header height ~5rem=80px) */}
      <main className="flex-1 container mx-auto px-4 py-8 text-foreground pt-2">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white">
            &copy; Weyn Amba Trading PLC | {currentYear}. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white hover:text-gray-200"
            >
              <Link href="/privacy">Privacy Policy</Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="text-white hover:text-gray-200"
            >
              <Link href="/terms">Terms of Service</Link>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
