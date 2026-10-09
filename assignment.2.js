//app.js for assignment

const express = require('express');
const mongoose = require('mongoose');
const app = express();

const port = 4555;


app.use(express.json());


const databaseConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/techSchoolApp");
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
  }
}

databaseConnection();


app.get("/", (req, res) => {
  res.send("Hello World");
});

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
  course: String,
  institution: String
});

const Student = mongoose.model("Student", studentSchema);

app.post("/create-student", async (req, res) => {
  const { name, age, email, phone, address, course, institution } = req.body;
try {
  const student = new Student({ name, age, email, phone, address, course, institution });
  await student.save();
  return res.status(200).json({ message: "Student created successfully", student });
} catch (error) {
  return res.status(500).json({ message: "Internal server error" });
}
});


app.get("/get-students", async (req, res) => {
  try {
    const students = await Student.find();
    return res.status(200).json({ message: "Students fetched successfully", students });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
}); 


app.get("/get-student/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    return res.status(200).json({ message: "Student fetched successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});


app.put("/update-student/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, email, phone, address, course, institution } = req.body;
  try {
    const student = await Student.findByIdAndUpdate(id, { name, age, email, phone, address, course, institution }, { new: true });
    return res.status(200).json({ message: "Student updated successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.get('/get-student-by-name', async (req, res) => {
  const { name } = req.query;
  try {
    const student = await Student.find({ name });
    return res.status(200).json({ message: "Student fetched successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/delete-student/:id", async (req, res) => {

  const { id } = req.params;
  try {
    await Student.findByIdAndDelete(id);
    return res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//===================================================


//assignment questions

//Part A — Diagnose (written answers)

//question 1:
//GET /get-student-by-name?name=Ada uses Student.find({ name }).
//If two Adas exist, what is the shape of the JSON the client actually receives?
//Would findOne behave differently? When would you use each?

//Solution:

//const student = await Student.find({ name });
//return res.status(200).json({ message: "Student fetched successfully", student });

// The JSON the client receives would be an array of student objects that match the name "Ada". If two Adas exist, the response would look like this:

// [
//   {
//     "id": "001",
//     "name": "Ada",
//     "age": 20,
//     "email": "ada@sample.com",
//     "phone": "08025946885",
//     "address": "15, idimu street, iyana ipaja, lagos",
//     "course": "Computer Science",
//     "institution": "Tech College"
//   },
//   {
//     "id": "002",
//     "name": "Ada",
//     "age": 22,
//     "email": "ada2@sample.com",
//     "phone": "08164739295",
//     "address": "40, broad street, lagos island, Lagos",
//     "course": "Mathematics",
//     "institution": "Tech College"
//   }
// ]

//
// "findOne" would return only the first student object that matches the name, while "find" returns an array of all matching objects. You would use "findOne" when you expect only one result or when you want to retrieve a single document by its ID. You would use "find" when you want to retrieve multiple documents that match a certain criteria.


//Question 2:
//That same route is case-sensitive and requires an exact name.
//What happens if the admin searches ada or Ada (trailing space)?
//Research how to make a MongoDB/Mongoose name search case-insensitive without fetching every student into Node and filtering in JavaScript.

//Solution:

// If the admin searches for "ada" or "Ada " (with a trailing space), the query will not return any results because the search is case-sensitive and requires an exact match.

// To make the search case-insensitive, you can use a regular expression with the `i` flag:

app.get('/get-student-by-name', async (req, res) => {
  let { name } = req.query;
  if (!name?.trim()) return res.status(400).json({ message: "name query required" });

  name = name.trim(); // "Ada " -> "Ada" fixes trailing space

  const students = await Student.find({
    name: { $regex: `^${name}$`, $options: 'i' } // exact, but case-insensitive
  });

  res.json({ students });
});


//Question 3:
//PUT /update-student/:id uses findByIdAndUpdate(..., { new: true }).
//The admin swears she still sees the old document. Give two possible reasons this can happen:

//one that is about how she is calling the endpoint (params vs body, method, URL)
//one that is about Mongoose update options (research new, runValidators, and what happens to fields she did not send in the body)

//Solution:

// 1. The admin might be calling the endpoint incorrectly, such as using the wrong HTTP method (e.g., GET instead of PUT), not providing the correct ID in the URL, or sending the data in the request body instead of params.

// 2. The admin might not be using the correct Mongoose update options. The `new: true` option should return the updated document, but if `runValidators` is set to `false`, the validators might not be running, leading to unexpected behavior.


//Question 4:
//GET /get-student/:id

//Valid ObjectId, student exists → ?
//Valid ObjectId, student does not exist → what does findById return, and what status does your code send?
//Invalid id such as abc123 → why is this a 500 and not a 404?
//Research: CastError vs "document not found". They are not the same bug.

//Solution:

app.get("/get-student/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const student = await Student.findById(id);
    return res.status(200).json({ message: "Student fetched successfully", student });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Valid ObjectId, student exists → The endpoint will return the student object with a 200 status code. 200 { message: "Student fetched successfully", student: { _id:..., name:"Ada", ... } }

// Valid ObjectId, student does not exist → findById will return null, and the code will send a 200 status code with a message indicating that the student was fetched successfully, but the student object will be null. 200 { message: "Student fetched successfully", student: null }

// Invalid id such as abc123 → This will throw a CastError because the provided ID is not a valid ObjectId. The code will catch this error and send a 500 status code with a message indicating an internal server error. 500 { message: "Internal server error" }

// CastError occurs when Mongoose tries to cast a value to a specific type (in this case, ObjectId) and fails. "Document not found" occurs when the query is valid, but no document matches the criteria. They are different bugs because one is a type casting issue, while the other is a query result issue.

//Question 5:
//mongoose.model("Student", studentSchema)
//What is the actual collection name in MongoDB Compass / mongosh?
//(Hint: it is probably not "Student".) Explain why that matters if someone writes a raw Mongo query against the wrong collection and thinks "the API is empty".

//Solution:

// The actual collection name in MongoDB Compass / mongosh will be "students". Mongoose automatically pluralizes the model name to create the collection name. This matters because if someone writes a raw Mongo query against the wrong collection (e.g., "Student" instead of "students"), they will not find any documents and may incorrectly conclude that the API is empty or not functioning correctly.


//Question 6:
//Why does POST /create-student fail (or save undefined fields) if the client forgets Content-Type: application/json?
//Which one line in app.js is responsible for making req.body work at all?

//Solution:

// If the client forgets to set the Content-Type header to "application/json", the server will not parse the request body as JSON, and req.body will be undefined. As a result, the POST /create-student endpoint will fail or save undefined fields because it relies on req.body to access the student data.
// The one line in app.js responsible for making req.body work at all is:
app.use(express.json());


//Part B — Build (code)

//Question 1:

//GET /search-students
//The current name route is not good enough for a real search box.
//Read the search text from a query parameter named q (not a URL param, not the body).
//Match students whose name or email or course contains q, case-insensitive.
//If q is missing or empty, respond with 400 and a clear message. Do not return the whole database.
//Return an array (even if only one student matches). Status 200.
//If none match, still return 200 with an empty array — not 404. Research why list/search endpoints usually do that.

//Solution:

// GET /search-students?q=Ada
app.get("/search-students", async (req, res) => {
  const { q } = req.query;

  // 1. If q missing or empty, 400 - don't return whole DB
  if (!q || !q.trim()) {
    return res.status(400).json({ 
      message: "Search query 'q' is required. Example: /search-students?q=Ada" 
    });
  }

  const search = q.trim();

  // Escape regex special characters so "a+b" doesn't crash
  const escaped = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  try {
    const students = await Student.find({
      $or: [
        { name: { $regex: escaped, $options: 'i' } },
        { email: { $regex: escaped, $options: 'i' } },
        { course: { $regex: escaped, $options: 'i' } }
      ]
    }).sort({ name: 1 });

    // 2. Always return array, 200 even if 0 results
    return res.status(200).json({
      message: students.length ? "Search results" : "No students match your search",
      count: students.length,
      q: search,
      students // <-- array, even if 1 match
    });

  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});
// List/search endpoints usually return an empty array with a 200 status code when no matches are found because it indicates that the request was successful, but there were simply no results to return. This is a common practice in RESTful APIs to differentiate between a successful request with no results and an error condition.


//Question 2:

//Harden GET /get-student/:id (edit the existing route)
//If the id is not a valid MongoDB ObjectId → 400, message explaining the id is invalid.
//Research mongoose.Types.ObjectId.isValid — and also research why isValid alone is not perfect. Mention that limitation in a code comment.
//If the id is valid but no student exists → 404, not 200 with student: null.
//Only return 200 when a real student is found.

//Solution:

app.get("/get-student/:id", async (req, res) => {
  const { id } = req.params;

  // 1. Check if id is not a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ 
      message: "Invalid student ID format" 
    });
  }

  try {
    const student = await Student.findById(id);

    // 2. If no student found, return 404
    if (!student) {
      return res.status(404).json({ 
        message: "Student not found" 
      });
    }

    // 3. Return the student with 200
    return res.status(200).json({ 
      message: "Student found",
      student
    });

  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});
// Note: mongoose.Types.ObjectId.isValid checks if the string is a valid ObjectId format, but it does not guarantee that the ObjectId exists in the database. It only checks the format, so a valid ObjectId may still not correspond to any document in the collection.


//Question 3:

//PATCH /students/:id/course
//The school does not want a full replace-all-fields update for this.
//Change only the course field.
//Send the new course in the JSON body as { "course": "..." }.
//If course is missing or an empty string → 400.
//If the student does not exist → 404.
//The JSON response must contain the updated student (the new course must be visible). Research which Mongoose option makes that happen.
//Research runValidators. Turn it on for this update. Then add a minlength (or enum) on course in the schema so a 1-character course is rejected. Show that this rejection is 400, not 500.

//Solution:

// Add a minlength validator to the course field in the schema
studentSchema.path('course').validate(function(value) {
  return value.length >= 2; // Minimum length of 2 characters
}, 'Course must be at least 2 characters long');
// PATCH /students/:id/course
app.patch("/students/:id/course", async (req, res) => {
  const { id } = req.params;
  const { course } = req.body;

  // 1. Check if course is missing or an empty string
  if (!course || course.trim() === "") {
    return res.status(400).json({ 
      message: "Course is required and cannot be empty" 
    });
  }

  try {
    // 2. Find the student and update only the course field
    const student = await Student.findByIdAndUpdate(
      id,
      { course },
      { new: true, runValidators: true } // Return the updated document and run validators
    );

    // 3. If no student found, return 404
    if (!student) {
      return res.status(404).json({ 
        message: "Student not found" 
      });
    }

    // 4. Return the updated student with 200
    return res.status(200).json({ 
      message: "Student course updated",
      student
    });

  } catch (error) {
    // Handle validation errors (they will be 400 status)
    if (error.name === "ValidationError") {
      return res.status(400).json({ 
        message: "Validation error", 
        error: Object.values(error.errors).map(err => err.message) 
      });
    }

    // Handle other errors (500 status)
    return res.status(500).json({ message: "Internal server error", error: error.message });
  }
});
// Note: The `runValidators: true` option ensures that the validators defined in the schema are applied during the update operation. If the course field does not meet the validation criteria (e.g., minimum length), a validation error will be thrown, and the response will be a 400 status code with an appropriate error message.
// The `new: true` option ensures that the updated document is returned in the response, allowing the client to see the new course value.


//Question 4:

//Unique email (schema + create route)
//Right now two students can be created with the same email.
//Make email unique in the schema. Research whether just adding unique: true is enough, or whether you also need an index / what error Mongo throws on duplicate key (11000).
//On duplicate email, POST /create-student must respond 409 Conflict, not 500.
//Creating a student with missing name or missing email must be 400, not 200 with empty fields. Put required: true on those two schema paths.

//Solution:

// Update the student schema to make email unique and required
studentSchema.path('email').unique(true).required(true);
studentSchema.path('name').required(true);
// Update the POST /create-student route to handle duplicate email and missing fields
app.post("/create-student", async (req, res) => {
  const { name, age, email, phone, address, course, institution } = req.body;
  // Check for missing required fields
  if (!name || !email) {
    return res.status(400).json({ 
      message: "Name and email are required fields" 
    });
  }
})
// Note: Adding `unique: true` in the schema creates a unique index on the email field. However, it does not automatically handle duplicate key errors. When a duplicate email is attempted to be inserted, MongoDB will throw an error with code 11000. The route should catch this error and respond with a 409 Conflict status code instead of a 500 Internal Server Error.

// The `required: true` option ensures that the name and email fields must be provided when creating a new student. If either field is missing, the server will respond with a 400 Bad Request status code and an appropriate error message.


//Question 5:

//Honest delete
//Edit DELETE /delete-student/:id:
//Invalid id → 400
//Valid id, no student → 404 ("already gone" is not a successful delete)
//Real delete → 200 (or 204 — pick one, and justify the status code in a short comment)

//Solution:

app.delete("/delete-student/:id", async (req, res) => {
  const { id } = req.params;
  // 1. Check if id is not a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid student ID" });
  }
})
// 2. Attempt to find and delete the student
  try {
    const student = await Student.findByIdAndDelete(id);
    // 3. If no student found, return 404
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    // 4. If student found and deleted, return 200
    return res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error", error: error.message });
  };
// Note: A 200 OK status code is returned when a student is successfully deleted, indicating that the request was successful and the resource has been removed. Alternatively, a 204 No Content status code could be used to indicate that the request was successful but there is no content to return. In this case, we chose 200 to provide a message confirming the deletion.
