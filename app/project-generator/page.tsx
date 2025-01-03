'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function ProjectGenerator() {
    const [majorFieldOfStudy, setMajorFieldOfStudy] = useState('')
    const [yearOfStudy, setYearOfStudy] = useState('')
    const [relevantCourses, setRelevantCourses] = useState('')
    const [programmingLanguages, setProgrammingLanguages] = useState('')
    const [frameworksLibraries, setFrameworksLibraries] = useState('')
    const [databases, setDatabases] = useState('')
    const [cloudPlatforms, setCloudPlatforms] = useState('')
    const [otherTools, setOtherTools] = useState('')
    const [generalInterests, setGeneralInterests] = useState('')
    const [specificInterests, setSpecificInterests] = useState('')
    const [generatedIdeas, setGeneratedIdeas] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const response = await fetch('/api/generate-ideas', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    academicBackground: {
                        majorFieldOfStudy,
                        yearOfStudy,
                        relevantCourses,
                    },
                    technicalSkills: {
                        programmingLanguages,
                        frameworksLibraries,
                        databases,
                        cloudPlatforms,
                        otherTools,
                    },
                    interests: {
                        generalInterests,
                        specificInterests,
                    },
                }),
            })
            const data = await response.json()
            setGeneratedIdeas(data.ideas)
        } catch (error) {
            console.error('Error generating ideas:', error)
            setGeneratedIdeas('An error occurred while generating ideas. Please try again.')
        }
        setIsLoading(false)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 py-12">
            <main className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-12 text-teal-800">Project Idea Generator</h1>
                <Card className="max-w-3xl mx-auto bg-white shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl text-teal-700">Generate Project Ideas</CardTitle>
                        <CardDescription>Enter your details to get personalized project suggestions</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-teal-700">Academic Background</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="majorFieldOfStudy" className="block text-sm font-medium text-gray-700">
                                            Major/Field of Study
                                        </label>
                                        <Input
                                            id="majorFieldOfStudy"
                                            value={majorFieldOfStudy}
                                            onChange={(e) => setMajorFieldOfStudy(e.target.value)}
                                            placeholder="e.g., Computer Science, Engineering, Data Science"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-700">
                                            Year of Study
                                        </label>
                                        <Input
                                            id="yearOfStudy"
                                            value={yearOfStudy}
                                            onChange={(e) => setYearOfStudy(e.target.value)}
                                            placeholder="e.g., First year, Second Year, Graduated"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="relevantCourses" className="block text-sm font-medium text-gray-700">
                                            Relevant Courses
                                        </label>
                                        <Textarea
                                            id="relevantCourses"
                                            value={relevantCourses}
                                            onChange={(e) => setRelevantCourses(e.target.value)}
                                            placeholder="e.g., Data Structures, Machine Learning, Web Development"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-teal-700">Technical Skills</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="programmingLanguages" className="block text-sm font-medium text-gray-700">
                                            Programming Languages
                                        </label>
                                        <Input
                                            id="programmingLanguages"
                                            value={programmingLanguages}
                                            onChange={(e) => setProgrammingLanguages(e.target.value)}
                                            placeholder="e.g., Python, Java, JavaScript, C++, Go"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="frameworksLibraries" className="block text-sm font-medium text-gray-700">
                                            Frameworks/Libraries
                                        </label>
                                        <Input
                                            id="frameworksLibraries"
                                            value={frameworksLibraries}
                                            onChange={(e) => setFrameworksLibraries(e.target.value)}
                                            placeholder="e.g., React, Angular, Django, Flask, TensorFlow"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="databases" className="block text-sm font-medium text-gray-700">
                                            Databases
                                        </label>
                                        <Input
                                            id="databases"
                                            value={databases}
                                            onChange={(e) => setDatabases(e.target.value)}
                                            placeholder="e.g., MySQL, PostgreSQL, MongoDB"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cloudPlatforms" className="block text-sm font-medium text-gray-700">
                                            Cloud Platforms
                                        </label>
                                        <Input
                                            id="cloudPlatforms"
                                            value={cloudPlatforms}
                                            onChange={(e) => setCloudPlatforms(e.target.value)}
                                            placeholder="e.g., AWS, Azure, Google Cloud"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="otherTools" className="block text-sm font-medium text-gray-700">
                                            Other Tools/Technologies
                                        </label>
                                        <Input
                                            id="otherTools"
                                            value={otherTools}
                                            onChange={(e) => setOtherTools(e.target.value)}
                                            placeholder="e.g., Git, Docker, Linux, APIs"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-teal-700">Interests</h3>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="generalInterests" className="block text-sm font-medium text-gray-700">
                                            General Areas of Interest
                                        </label>
                                        <Input
                                            id="generalInterests"
                                            value={generalInterests}
                                            onChange={(e) => setGeneralInterests(e.target.value)}
                                            placeholder="e.g., AI, Web Development, Mobile Apps, Game Development"
                                            required
                                            className="mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="specificInterests" className="block text-sm font-medium text-gray-700">
                                            Specific Interests (if any)
                                        </label>
                                        <Textarea
                                            id="specificInterests"
                                            value={specificInterests}
                                            onChange={(e) => setSpecificInterests(e.target.value)}
                                            placeholder="e.g., NLP, computer vision, or a particular area in web dev or data science"
                                            className="mt-1"
                                        />
                                    </div>
                                </div>
                            </div>
                            <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white" disabled={isLoading}>
                                {isLoading ? 'Generating Ideas...' : 'Generate Ideas'}
                            </Button>
                        </form>
                    </CardContent>
                    {generatedIdeas && (
                        <CardFooter>
                            <div className="mt-4 w-full">
                                <h3 className="text-lg font-semibold mb-2 text-teal-700">Generated Project Ideas:</h3>
                                <div className="whitespace-pre-wrap bg-gray-100 p-4 rounded-md">{generatedIdeas}</div>
                            </div>
                        </CardFooter>
                    )}
                </Card>
            </main>
        </div>
    )
}

