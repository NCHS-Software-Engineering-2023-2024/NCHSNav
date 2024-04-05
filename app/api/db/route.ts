import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'


  export async function GET(
  request: NextRequest,
  )
    {
    const prisma = new PrismaClient();

    try {
      const courses = await prisma.courses.findMany();
  
      return NextResponse.json(courses, { status: 200 });
    } catch (error) {
      console.error('Error fetching courses:', error);
      return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
  }