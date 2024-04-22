"use client"

export default function Classroom({ data }: { data: any[] }) {
    return (
        <div className="bg-white">
            <p>Period: {data.period}</p>
            <p>Course ID: {data.courseID}</p>
            <p>Section: {data.section}</p>
            <p>Class Name: {data.className}</p>
            <p>Last Name: {data.lastName}</p>
            <p>First Name: {data.firstName}</p>
            <p>Email: {data.email}</p>
            <p>Room: {data.room}</p>
        </div>
    )
}