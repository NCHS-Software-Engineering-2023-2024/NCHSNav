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
      if (query.length > 0) {
        for (const result of data) {
          console.log()
          const className = result["className"]
          if (className.toLowerCase().includes(query.toLowerCase())) {
            filteredResults.push(result);
          }
        }
      }
      setSearchResults(filteredResults);
      console.log(filteredResults)
    }

  }
  
  return (
    <div>
      <div className="p-2 rounded-lg border border-gray-300 focus:outline-none bg-white">
        <input
          type="text"
          placeholder="Search Classroom"
          value={classroom}
          onChange={handleInputChange}
        />
        <Link href="/api/auth/signin" className="border border-gray-300 rounded-lg p-2">
          Sign in
        </Link>
      </div>

      <div 
        className="p-2 rounded-lg border border-gray-300 focus:outline-none bg-white max-h-96 overflow-y-scroll "
      >
        {searchResults.map((result, index) => (
          <div key={index}>
            <p>{result.className}</p>
            <p>{result.firstName} {result.lastName}</p>
            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
}