import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Home() {
  return (
    <main className="min-h-screen p-8 md:p-24 bg-gradient-to-b from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b">
          <div className="flex items-center gap-4">
            <Avatar className="h-12 w-12">
              <AvatarImage src="/avatar.png" alt="Avatar" />
              <AvatarFallback>SN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-2xl font-bold">Simple Next.js App</h1>
              <p className="text-neutral-500 dark:text-neutral-400">
                Built with Next.js 14.2.7 and shadcn/ui
              </p>
            </div>
          </div>
          <Button>Get Started</Button>
        </header>

        {/* Hero Section */}
        <section className="py-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4">
            Welcome to My Simple Webpage
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-8">
            This is a demonstration of a clean, modern UI built with Next.js App
            Router and shadcn/ui components.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Learn More</Button>
            <Button size="lg" variant="outline">
              View Docs
            </Button>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Next.js 14.2.7",
                description:
                  "Using the latest App Router for improved routing and layouts.",
                icon: "🚀",
              },
              {
                title: "shadcn/ui",
                description:
                  "Beautiful, accessible UI components built with Radix UI and Tailwind CSS.",
                icon: "✨",
              },
              {
                title: "TypeScript",
                description:
                  "Type-safe code for better developer experience and fewer bugs.",
                icon: "🛡️",
              },
            ].map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm">
                    Learn more
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t pt-6 text-center text-neutral-500 dark:text-neutral-400">
          <p>
            © 2024 Simple Next.js App. Built with Next.js 14.2.7, TypeScript,
            and shadcn/ui.
          </p>
        </footer>
      </div>
    </main>
  );
}
