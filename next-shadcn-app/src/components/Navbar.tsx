import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          MyWebsite
        </Link>
        <nav className="space-x-4">
          <Button variant="link" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="link" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
