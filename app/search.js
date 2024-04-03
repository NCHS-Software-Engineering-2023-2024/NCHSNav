const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
//Connects to the server


    async function searchCourse(query){
        //take the search
        //NEEDS TO BE PUT INTO THE SEARCH BAR
        const courses = await prisma.courses.findMany({
            where:{
                OR: [
                  { period: { contains: query } },
                  { courseID: { contains: query } },
                  { section: { contains: query } },
                  { className: { contains:query } },
                  { lastName: { contains: query }},
                  { firstName: { contains: query }},
                  { email: { contains: query }},
                  { room: { contains: query } }
                ]
              }
            });
            return courses;
          }



    const searchQuery = "Math"; //Replace with search bar input 
    searchCourses(searchQuery)
    .then(courses => {
    console.log("Search Results:", courses);
  })
  .catch(error => {
    console.error("Error fetching search results:", error);
  });
        
    
    

//


