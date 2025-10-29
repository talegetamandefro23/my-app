import PublicLayout from '@/components/web/layout/page'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {  // Capitalize for convention (optional)
  return (
    <PublicLayout>
      {/* Your page content goes here as children */}
      <div className="space-y-6 text-foreground">
        {/* Example: Welcome Section */}
        {/* <Card className="bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-card-foreground">Welcome to Your Page</CardTitle>
            <CardDescription className="text-muted-foreground">
              This is the content rendered inside the PublicLayout's main section.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link href="/products">Explore Products</Link>
            </Button>
          </CardContent>
        </Card> */}

        {/* Add more sections as needed */}
        <p>Custom page logic or dynamic data can go here!</p>
      </div>
    </PublicLayout>
  )
}
