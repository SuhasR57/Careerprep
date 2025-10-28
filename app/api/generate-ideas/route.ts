import { NextResponse } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(req: Request) {
    try {
        const { academicBackground, technicalSkills, interests } = await req.json()

        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `Based on the following information, suggest 2-3 project ideas that align with current market trends:

    Academic Background:
    - Major/Field of Study: ${academicBackground.majorFieldOfStudy}
    - Year of Study: ${academicBackground.yearOfStudy}
    - Relevant Courses: ${academicBackground.relevantCourses}

    Technical Skills:
    - Programming Languages: ${technicalSkills.programmingLanguages}
    - Frameworks/Libraries: ${technicalSkills.frameworksLibraries}
    - Databases: ${technicalSkills.databases}
    - Cloud Platforms: ${technicalSkills.cloudPlatforms}
    - Other Tools/Technologies: ${technicalSkills.otherTools}

    Interests:
    - General Areas of Interest: ${interests.generalInterests}
    - Specific Interests: ${interests.specificInterests}

    For each project idea, provide:
    1. A brief description
    2. Technologies required/used
    3. A basic roadmap to build it
    4. How it aligns with current market trends`

        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();

        return NextResponse.json({ ideas: text })
    } catch (error) {
        console.error('Error generating ideas:', error)
        return NextResponse.json({ error: 'Failed to generate ideas' }, { status: 500 })
    }
}

