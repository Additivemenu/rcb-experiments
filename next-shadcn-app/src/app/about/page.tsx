import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = {
  title: "About | My Simple Website",
  description: "Learn more about us and our team",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Learn more about our team and our mission to create amazing web
          experiences.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Story</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              Founded in 2023, our company was born out of a passion for
              creating beautiful, functional, and user-friendly websites. We
              believe that a well-designed website is essential for businesses
              and individuals alike in the digital age.
            </p>
            <p className="mb-4">
              Our mission is to provide high-quality web development services
              using the latest technologies and best practices. We specialize in
              Next.js, React, TypeScript, and modern UI frameworks to deliver
              exceptional digital experiences.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-bold mb-2">Our Values</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Innovation and continuous learning</li>
              <li>Quality and attention to detail</li>
              <li>User-centered design and development</li>
              <li>Transparency and honest communication</li>
              <li>Collaboration and teamwork</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TeamMember
            name="Jane Doe"
            role="Founder & CEO"
            bio="Jane has over 10 years of experience in web development and design."
            initials="JD"
          />
          <TeamMember
            name="John Smith"
            role="Lead Developer"
            bio="John specializes in Next.js and TypeScript development with a focus on performance."
            initials="JS"
          />
          <TeamMember
            name="Emily Chen"
            role="UI/UX Designer"
            bio="Emily creates beautiful and intuitive user interfaces that delight users."
            initials="EC"
          />
        </div>
      </section>
    </div>
  );
}

function TeamMember({
  name,
  role,
  bio,
  initials,
}: {
  name: string;
  role: string;
  bio: string;
  initials: string;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src="" alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg">{name}</CardTitle>
          <CardDescription>{role}</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <p>{bio}</p>
      </CardContent>
    </Card>
  );
}
