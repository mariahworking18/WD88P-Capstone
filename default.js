import http  from "http";

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


const app = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(JSON.stringify(jobLists));

});

const PORT = 3000;
app.listen(PORT);
console.log(`Server is now running on port ${PORT}`);
