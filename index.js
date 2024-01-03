import express, { json } from "express";
import morgan from "morgan";

morgan.token("body", function (req, res) {
    return JSON.stringify(req.body)
});

const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json
    ());



app.use(morgan (":method :url :status :body"));


let jobLists =  [
    {
        id:1,
        postedOn: '2023-11-24',
        title: 'Virtual assistance',
        company: 'TaskUs',
        type: 'Full-time',
        experience: 'Entry-level',
        location: 'Remote',
        skills: ["Microsoft Application","Data-Entry","Web-research", "Data-Scapping"], 
        Job_link: "https://www.upwork.com/jobs/Executive-Assistant_~01c0e0f3efacd5b3b4/?referrer_url_path=find_work_home",
    },
    {
        id:2,
        postedOn: '2024-01-01',
        title: "Product research/ blog writer",
        company: 'BelleFord',
        type: "Part-time",
        experience: 'Entry-level',
        location: 'Remote',
        skills: ['Asministrative Support', 'Google Calendar', 'Database','Data Extraction'],
        Job_link: 'https://www.upwork.com/jobs/Product-research-blog-writer_~01eb6cd1fa8de22be3/?referrer_url_path=find_work_home',
    },
    {
        id:3,
        postedOn: '2023-12-10',
        title: 'Frontend Developer',
        company: 'Techno Hub',
        type: 'Full-time',
        experience: 'Intermediate',
        location: 'Office',
        skills: ['Javacript','nextJS','Tailwind'],
        Job_link: 'https://www.jobstreet.com.ph/job/72489412?type=standout&ref=search-standalone#sol=ecc17a3e59df00dbd907657823e1f17784f4b48c'
    },
    {
        id:4,
        postedOn: '2023-12-01',
        title: 'Software Developer',
        company: 'MoveUp Corp',
        type: 'Full-time',
        experience: 'Intermediate',
        location: 'Office',
        skills: ['PHP','Python','HTML','Javascript','Git'],
        Job_link: 'https://www.jobstreet.com.ph/job/72445538?type=standout&ref=search-standalone#sol=404f8257e3695b908367383958c9361544d33c09',
    },
    
    ];


function generateId() {
    const maxID = jobLists.length > 0 ? Math.max(...jobLists.map((j) => j.id)) : 0 ;

    return maxID + 1;
}

function unknownEndpoint (req, res) {
    res.status(404).send({error: "Unknown Endpoint"});
}


app.get("/",(req,res) => {
    res.send("Hello From express JS");
}
);

app.get("/jobLists",(req,res) => {
    res.json(jobLists);    
    }
);

app.get("/info", (req, res) => {

     const totalNumOfJob = jobLists.length;
    return res.send(`The total number of jobs on the list is ${totalNumOfJob}`);
}
);

app.get("/jobLists/:id",(req,res) => {
    const id = Number(req.params.id);

         const job = jobLists.find((job) => job.id === id);
         res.json(job);
}
);

app.delete("/jobLists/:id", (req, res) => {
    const id = Number(req.params.id);
    console.log(id);

    jobLists = jobLists.filter((job) => job.id !== id);

    res.status(204).end();
});

app.post("/jobLists", (req, res) => {
    const body = req.body;

    if (!body.title) {
                return res.status(400).json({error: "content missing"});
            }
    
    const job = {
        
        postedOn: body.postedOn,
        title: body.title,
        company: body.company,
        type: body.type,
        experience: body.experience,
        location: body.location,
        skills: body.skills,
        Job_link: body.Job_link,
        id: generateId(),
    };
    
    jobLists = jobLists.concat(job);
    res.status(201).json(job);

}



);
// {
//     const maxID = jobLists.length > 0 ? Math.max(...jobLists.map((j) => j.id)) : 0 ;
//     const job = req.job;
//     const body = req.body;
//     job.id = maxID + 1;

//     jobLists = jobLists.concat(job);

//     // res.json(job);
//     if (!body.title) {
//         return res.status(400).json({error: "content missing"});
//     }

//     res.json(job);
// });

app.use(unknownEndpoint);


app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);
});
