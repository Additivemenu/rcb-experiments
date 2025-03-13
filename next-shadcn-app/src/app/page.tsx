import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Simple Website
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          A clean and modern website built with Next.js, TypeScript, and shadcn
          UI components.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Modern Design</CardTitle>
            <CardDescription>Sleek and responsive interface</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Our website uses modern design principles to create a beautiful
              and functional user experience.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>TypeScript</CardTitle>
            <CardDescription>Type-safe development</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Built with TypeScript for improved developer experience and code
              reliability.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="https://www.typescriptlang.org/" target="_blank">
                TypeScript Docs
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>shadcn UI</CardTitle>
            <CardDescription>Beautiful UI components</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Leveraging the power of shadcn UI components for a consistent and
              professional look.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" asChild>
              <Link href="https://ui.shadcn.com/" target="_blank">
                shadcn UI
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="text-center">
        <Button size="lg" asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
      </section>
    </div>
  );
}
