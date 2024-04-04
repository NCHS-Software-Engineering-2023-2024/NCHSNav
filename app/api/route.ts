import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'


  export async function GET(
  request: NextRequest,
  { params }: { params: { courseName: string } } )
    {
    const prisma = new PrismaClient();
    const courseName = params.courseName

    try {
      if (!courseName || !Array.isArray(courseName)) {
        throw new Error('Invalid course name');
      }
  
      const courses = await prisma.courses.findMany({
        where: {
          className: {
            contains: courseName,
          }
        }
      });
  
      return NextResponse.json(courses, { status: 200 });
    } catch (error) {
      console.error('Error fetching courses:', error);
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
  }