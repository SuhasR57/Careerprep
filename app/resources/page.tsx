import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const educationalWebsites = [
    {
        name: "GeeksforGeeks",
        url: "https://www.geeksforgeeks.org/",
        logo: "/gfg.png",
        description: "A computer science portal for geeks with a wide range of resources"
    },
    {
        name: "JavaTpoint",
        url: "https://www.javatpoint.com/",
        logo: "/javatpoint.png",
        description: "The Best Portal to Learn Technologies with simple and easy tutorials"
    },
    {
        name: "W3Schools",
        url: "https://www.w3schools.com/",
        logo: "/w3schools.png",
        description: "The world's largest web developer site with tutorials and references"
    },
    {
        name: "TutorialsPoint",
        url: "https://www.tutorialspoint.com/",
        logo: "/tutorialspoint.png",
        description: "Learn new skills with a wide variety of online tutorials"
    },
    {
        name: "Programiz",
        url: "https://www.programiz.com/",
        logo: "/programiz.png",
        description: "Learn to code with free tutorials, examples, and references"
    },
    {
        name: "HackerEarth",
        url: "https://www.hackerearth.com/",
        logo: "/hackerearth.png",
        description: "Improve your coding skills, practice programming, and participate in coding competitions"
    },
]

export default function Resources() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 py-12">
            <main className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 text-teal-800">Resources</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {educationalWebsites.map((website) => (
                        <a key={website.name} href={website.url} target="_blank" rel="noopener noreferrer" className="block transform transition-transform hover:scale-105">
                            <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader className="flex flex-col items-center">
                                    <Image
                                        src={website.logo}
                                        alt={`${website.name} logo`}
                                        width={100}
                                        height={100}
                                        className="mb-4"
                                    />
                                    <CardTitle className="text-xl text-center text-teal-700">{website.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-center text-gray-600">{website.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    )
}

