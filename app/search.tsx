"use client"
import Link from "next/link";
import Classroom from './classroom-info';
import { useState, useEffect} from "react";

export interface Class {
    id: number;
    period: string;
    courseID: string
    section: string;
    className: string;
    lastName: string;
    firstName: string;
    email: string;
    room: string;
  }

export default function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [classroom, setClassroom] = useState<Class | null>(null);
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
    }
    fetchDataFromApi();
  }, []);

  const handleInputChange = async (event: { target: { value: any; }; }) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (data) {
      const filteredResults = []
      if (query.length > 0) {
        for (const result of data) {
          const className = result["className"]
          if (className.toLowerCase().includes(query.toLowerCase())) {
            filteredResults.push(result);
          }
        }
      }
      else {
        setClassroom(null);
      }
      setSearchResults(filteredResults);
    }
  }

  
  return (
    <div>
      <div className="p-2 pr-0 rounded-lg border border-gray-300 focus:outline-none bg-white">
        <input
          type="text"
          placeholder="Search Classroom"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <Link href="/api/auth/signin" className="border border-gray-300 rounded-lg p-2">
          Sign in
        </Link>
      </div>

      {searchResults.length > 0 &&
        <div
          className=" p-2 rounded-lg border border-gray-300 focus:outline-none bg-white max-h-96 overflow-y-scroll "
        >
          <div className="divide-y divide-gray-300 ">
            {searchResults.map((result: Class, index) => (
              <div className="hover:bg-gray-200 ">
                <Link key={index} href="#" onClick={(e) => setClassroom(result)} >
                  <p className="text-gray-800">{result.className}</p>
                  <p className="text-gray-400">{result.firstName} {result.lastName}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      }
      {classroom &&
        <div className="p-2 rounded-lg border border-gray-300 bg-white relative">
          <button className="absolute border border-gray-300 rounded-full p-2 right-2" onClick={(e) => setClassroom(null)}>❌</button>
          <Classroom data={classroom} />
        </div>
      }
    </div>
  );
}