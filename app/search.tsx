"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [classroom, setClassroom] = useState("");
  const [data, setData] = useState(null);
  
  const fetchData = async () => {
    const response = await fetch('/api/db');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  };

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
      console.log("data fetched.")
    }
    fetchDataFromApi();
  }, []);

  const handleInputChange = async (event: { target: { value: any; }; }) => {
    const query = event.target.value;
    setClassroom(query);
    console.log("Searching for classroom:", query);
    if (data) {
      // const filteredResults = data.filter((result: { className: any; }) => result.className === query);
      const filteredResults = []
      for (const result of data)
      {
        console.log(result["className"])
        if (result["className"].toLowerCause().includes(query.toLowerCase()))
        {
          filteredResults.push(result);
        }
      }
      setSearchResults(filteredResults);
      console.log(filteredResults)
    }

  }
  
  return (
    <div>
      <input
        type="text"
        placeholder="Search Classroom"
        value={classroom}
        onChange={handleInputChange}
        className="p-2 rounded-lg border border-gray-300 focus:outline-none"
      />
      <div>
        {searchResults.map((result, index) => (
          <div key={index}>
            {/* Display search results here */}
            <p>Period: {result.period}</p>
            <p>Course ID: {result.courseID}</p>
            <p>Section: {result.section}</p>
            <p>Class Name: {result.className}</p>
            <p>Last Name: {result.lastName}</p>
            <p>First Name: {result.firstName}</p>
            <p>Email: {result.email}</p>
            <p>Room: {result.room}</p>
          </div>
        ))}
      </div>
      <Link href="/api/auth/signin" className="p-2 rounded-lg border border-gray-300 focus:outline-none">
        Sign in
      </Link>
    </div>
  );
}