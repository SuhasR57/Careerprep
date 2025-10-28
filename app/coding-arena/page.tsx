import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const codingPlatforms = [
    {
        name: "LeetCode",
        url: "https://leetcode.com/",
        logo: "leetcode-logo.png",
        description: "Enhance your coding skills with algorithmic challenges"
    },
    {
        name: "HackerRank",
        url: "https://www.hackerrank.com/",
        logo: "hackerrank.jpeg",
        description: "Practice coding, prepare for interviews, and get hired"
    },
    {
        name: "CodeChef",
        url: "https://www.codechef.com/",
        logo: "codechef.jpeg",
        description: "Participate in coding contests and improve your skills"
    },
    {
        name: "Codeforces",
        url: "https://codeforces.com/",
        logo: "codeforces.png",
        description: "Compete in programming contests and solve complex problems"
    },
]

export default function CodingArena() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 py-12">
            <main className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 text-teal-800">Coding Arena</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {codingPlatforms.map((platform) => (
                        <a key={platform.name} href={platform.url} target="_blank" rel="noopener noreferrer" className="block transform transition-transform hover:scale-105">
                            <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader className="flex flex-col items-center">
                                    <Image
                                        src={platform.logo}
                                        alt={`${platform.name} logo`}
                                        width={100}
                                        height={100}
                                        className="mb-4"
                                    />
                                    <CardTitle className="text-xl text-center text-teal-700">{platform.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-center text-gray-600">{platform.description}</CardDescription>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </main>
        </div>
    )
}

