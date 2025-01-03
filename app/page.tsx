import Link from 'next/link'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Lightbulb, Code, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center mb-8 text-teal-800">Welcome to CareerPrep</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4 text-teal-700">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            CareerPrep is dedicated to empowering students and aspiring professionals with the tools and resources they need to excel in their tech careers. We provide a comprehensive platform for project ideation, coding practice, and access to valuable learning resources.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-8 text-teal-700 text-center">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/project-generator" className="block transform transition-transform hover:scale-105">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <Lightbulb className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-xl text-center text-teal-700">Project Idea Generator</CardTitle>
                  <CardDescription className="text-center text-gray-600">Brainstorm new ideas for your next project</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/coding-arena" className="block transform transition-transform hover:scale-105">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <Code className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl text-center text-teal-700">Coding Arena</CardTitle>
                  <CardDescription className="text-center text-gray-600">Practice coding on popular platforms</CardDescription>
                </CardHeader>
              </Card>
            </Link>
            <Link href="/resources" className="block transform transition-transform hover:scale-105">
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <BookOpen className="w-12 h-12 text-green-500 mb-4" />
                  <CardTitle className="text-xl text-center text-teal-700">Resources</CardTitle>
                  <CardDescription className="text-center text-gray-600">Access educational websites and tutorials</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

