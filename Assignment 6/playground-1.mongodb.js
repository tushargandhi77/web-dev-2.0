    use('cseb')


    // 1
    // db.createCollection("studentInfo")
    // db.createCollection("studentAcedemicInfo")


    // 2

    // db.studentInfo.insertOne({"name":"Rahul Sharma"})
    // db.studentAcedemicInfo.insertOne({"name":"Rahul Sharma"})

    //3
    // db.studentAcedemicInfo.insertMany([
    //     {
    //         "rollno": 101,
    //         "program": "B.Tech",
    //         "branch": "Computer Science",
    //         "cgpa": 8.8
    //     },
    //     {
    //         "rollno": 102,
    //         "program": "B.Tech",
    //         "branch": "Mechanical Engineering",
    //         "cgpa": 9.5
    //     },
    //     {
    //         "rollno": 103,
    //         "program": "B.Tech",
    //         "branch": "Electrical Engineering",
    //         "cgpa": 8.9
    //     },
    //     {
    //         "rollno": 104,
    //         "program": "B.Tech",
    //         "branch": "Civil Engineering",
    //         "cgpa": 7.7
    //     },
    //     {
    //         "rollno": 105,
    //         "program": "B.Tech",
    //         "branch": "Electrical Engineering",
    //         "cgpa": 9.0
    //     },
    //     {
    //         "rollno": 106,
    //         "program": "B.Tech",
    //         "branch": "Information Technology",
    //         "cgpa": 9.6
    //     },
    //     {
    //         "rollno": 107,
    //         "program": "M.Tech",
    //         "branch": "Aerospace Engineering",
    //         "cgpa": 9.9
    //     },
    //     {
    //         "rollno": 108,
    //         "program": "M.Tech",
    //         "branch": "Biotechnology",
    //         "cgpa": 8.8
    //     },
    //     {
    //         "rollno": 109,
    //         "program": "B.Tech",
    //         "branch": "Computer Science",
    //         "cgpa": 9.7
    //     },
    //     {
    //         "rollno": 110,
    //         "program": "B.Tech",
    //         "branch": "Computer Science",
    //         "cgpa": 9.0
    //     }
    // ])

// db.studentInfo.insertMany(
//     [
//         {
//             "name": "Rahul Sharma",
//             "rollno": 101,
//             "mobile": "9876543210",
//             "email": "rahul.sharma@example.com",
//             "address": {
//                 "city": "Bhubaneswar",
//                 "state": "Odisha",
//                 "pin": "400001"
//             }
//         },
//         {
//             "name": "Priya Patel",
//             "rollno": 102,
//             "mobile": "8765432109",
//             "email": "priya.patel@example.com",
//             "address": {
//                 "city": "Ahmedabad",
//                 "state": "Gujarat",
//                 "pin": "380001"
//             }
//         },
//         {
//             "name": "Sandeep Singh",
//             "rollno": 103,
//             "mobile": "7654321098",
//             "email": "sandeep.singh@example.com",
//             "address": {
//                 "city": "Delhi",
//                 "state": "Delhi",
//                 "pin": "110001"
//             }
//         },
//         {
//             "name": "Neha Gupta",
//             "rollno": 104,
//             "mobile": "6543210987",
//             "email": "neha.gupta@example.com",
//             "address": {
//                 "city": "Bangalore",
//                 "state": "Karnataka",
//                 "pin": "560001"
//             }
//         },
//         {
//             "name": "Rajesh Verma",
//             "rollno": 105,
//             "mobile": "5432109876",
//             "email": "rajesh.verma@example.com",
//             "address": {
//                 "city": "Chennai",
//                 "state": "Tamil Nadu",
//                 "pin": "600001"
//             }
//         },
//         {
//             "name": "Anita Sharma",
//             "rollno": 106,
//             "mobile": "4321098765",
//             "email": "anita.sharma@example.com",
//             "address": {
//                 "city": "Kolkata",
//                 "state": "West Bengal",
//                 "pin": "700001"
//             }
//         },
//         {
//             "name": "Amit Patel",
//             "rollno": 107,
//             "mobile": "3210987654",
//             "email": "amit.patel@example.com",
//             "address": {
//                 "city": "Hyderabad",
//                 "state": "Telangana",
//                 "pin": "500001"
//             }
//         },
//         {
//             "name": "Deepa Singh",
//             "rollno": 108,
//             "mobile": "2109876543",
//             "email": "deepa.singh@example.com",
//             "address": {
//                 "city": "Pune",
//                 "state": "Maharashtra",
//                 "pin": "411001"
//             }
//         },
//         {
//             "name": "Rajat Verma",
//             "rollno": 109,
//             "mobile": "1098765432",
//             "email": "rajat.verma@example.com",
//             "address": {
//                 "city": "Jaipur",
//                 "state": "Rajasthan",
//                 "pin": "302001"
//             }
//         },
//         {
//             "name": "Pooja Gupta",
//             "rollno": 110,
//             "mobile": "9876543210",
//             "email": "pooja.gupta@example.com",
//             "address": {
//                 "city": "Lucknow",
//                 "state": "Uttar Pradesh",
//                 "pin": "226001"
//             }
//         }
//     ]
// )

//4

// db.studentAcedemicInfo.find()
// db.studentInfo.find()

//5 
// db.studentAcedemicInfo.find({"rollno":102})


//Q6)
// db.studentInfo.updateOne({"rollno":103 },{$set :{"mobile":"9876432111"}})
// db.studentInfo.find({"rollno":103})




