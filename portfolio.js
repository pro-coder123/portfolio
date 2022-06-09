import emoji from "react-easy-emoji";

export const greetings = {
	name: "Varun Mukundhan",
	title: "Hi there, I'm Varun",
	description:
		"Welcome to my corner of the internet! I am a backend developer with a focus on distributed systems. I am really passionate about\n" +
		"programming and problem solving in general. I have over 3 years of industry experience in building and scaling applications in production.",
	resumeLink:
		"https://drive.google.com/file/d/1xyMv0p9cIvd3aQEUHZQ5im101mq7undt/view?usp=sharing",
};

export const openSource = {
	githubUserName: "pro-coder123",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/pro-coder123",
	linkedin: "https://www.linkedin.com/in/varun-mukundhan/",
	stackoverflow: "https://stackoverflow.com/users/10994745/varun-mukundhan",
	leetcode: "https://leetcode.com/codezer/"
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"I build software that runs on production",
	data: [
		{
			title: "Programming and software development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building backend microservices using several popular frameworks"
				),
				emoji("⚡ Focus on delivering complete working product including but not limited to solutioning, design, development and infrastructure provisioing"),
				emoji(
					"⚡ Familiar with an array of languages and frameworks including Springboot (Java), Django (Python), Ruby on Rails, Javascript and Golang"
				),
			],
			softwareSkills: [
				{
					skillName: "Golang",
					fontAwesomeClassname: "fa6-brands:golang",
				},
				{
					skillName: "JavaScript",
					fontAwesomeClassname: "logos:javascript",
				},
				{
					skillName: "Ruby",
					fontAwesomeClassname: "logos:ruby",
				},
				{
					skillName: "Java",
					fontAwesomeClassname: "logos:java",
				},
				{
					skillName: "Python",
					fontAwesomeClassname: "logos:python",
				},
				{
					skillName: "Django",
					fontAwesomeClassname: "vscode-icons:file-type-django",
				},
			],
		},
		{
			title: "Systems architecture and infrastructure",
			lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
			skills: [
				emoji("⚡ Experienced with building high scale applications that can handle thousands of requests per second"),
				emoji("⚡ Have worked with a vast set of SQL and NoSQL databases including MySQL, MongoDB, PosgresQL, Redis"),
				emoji("⚡ Have experience scaling systems using streaming platforms such as kafka, kinesis and message queues such as SQS"),
				emoji(
					"⚡ Highly experienced in working with major cloud providers such as AWS and Heroku. Have also worked in provisioning codified infrastructure using terraform"
				),
				emoji(
					"⚡ Have built deployment pipelines using docker, kubernetes and spinnakar"
				),
			],
			softwareSkills: [
				{
					skillName: "AWS",
					fontAwesomeClassname: "logos:aws",
				},
				{
					skillName: "Heroku",
					fontAwesomeClassname: "logos:heroku-icon",
				},
				{
					skillName: "MySQL",
					fontAwesomeClassname: "logos:mysql",
				},
				{
					skillName: "Redis",
					fontAwesomeClassname: "logos:redis",
				},
				{
					skillName: "MongoDB",
					fontAwesomeClassname: "vscode-icons:file-type-mongo",
				},
				{
					skillName: "PostgreSQL",
					fontAwesomeClassname: "logos:postgresql",
				},
				{
					skillName: "Docker",
					fontAwesomeClassname: "logos:docker-icon",
				},
				{
					skillName: "Kubernetes",
					fontAwesomeClassname: "logos:kubernetes",
				},
				{
					skillName: "Terraform",
					fontAwesomeClassname: "logos:terraform-icon",
				},
			],
		},
	],
};

export const SkillBars = [
	{
		Stack: "Problem solving",
		progressPercentage: "90",
	},
	{
		Stack: "System Architecture", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Data structures and algorithms",
		progressPercentage: "100",
	},
	{
		Stack: "Databases",
		progressPercentage: "60",
	},
];

export const educationInfo = [
	{
		schoolName: "BITS Pilani",
		subHeader: "Bachelor's degree in chemical engineering",
		duration: "August 2015 - July 2019",
		desc: "Graduated in first division",
		pic: "/img/icons/common/bits.png",
	},
];

export const experience = [
	{
		role: "Software development engineer",
		company: "Razorpay (YCombinator '15)",
		link: "https://www.ycombinator.com/companies/razorpay",
		link_desc: "YC link",
		companylogo: "/img/icons/common/rzp.svg",
		date: "June 2021 – Present",
		desc: "I worked as a backend engineer for the notifications team. My team was responsible for the delivery of every kind of notification from Razorpay. This included SMSes, Emails directly to end users containing OTPs, invoices, etc along with payment confirmation webhooks to the merchants' servers. My team was one of the most crucial teams at Razorpay and as a result, we have aggressive NFR goals, such as availability of five nines.",
		descBullets: [
			"I implemented async DB writes of our notification attempts using kafka streams. This led to enormous horizontal scalability of worker pods. What used to be previously capped at ~190 pods could now be scaled to 1000 and more based on the load. Controlling the rate at which ingestion is happening in the DB made sure the DB did not go down due to unprecedented load, thus improving the reliability of our system.",
			"I implemented quality of service based flow control for webhooks based on the merchant server's response time using Apache Pinot as the data source. Essentially, what this would do is stream merchant response time details to Pinot after each webhook attempt. Then in our Web pods, we would query Pinot to find out merchants that have a response time greater than some predefined value and route such merchants' webhooks to a lower priority queue. This tremendouesly improved the p99 webhooks delivery time (over 50% reduction in time taken was seen).",
			"I worked on and helped deliver the webhooks flow control as well as rate limiting feature. I drove this feature end to end, did tech solutioning and execution. Did numerous performance tests and consulted with various stakeholders. This protected our service from DDOS attacks"
		],
	},
	{
		role: "Software development engineer",
		company: "Chronus",
		companylogo: "/img/icons/common/chronus.png",
		link: "https://chronus.com/about-us",
		link_desc: "Link",
		date: "Feb 2020 - June 2021",
		desc: "I worked as a ruby on rails developer for the mentorship application. ",
		descBullets: [
			"Over my tenure of\n" +
			"1.5 years at Chronus as a software developer, my contributions to the company were to add various features\n" +
			"to help with customer retainment.",
			"My work at Chronus involved heavy use of algorithms. One notable algorithm that I used was\n" +
			"LCA(least common ancestor) to find the common mentor who mentored two given mentees.",
			"In addition to development, the infrastructure auto-scaling functionality I designed and implemented saved the\n" +
			"company $0.07 per service call in infrastructure cost and ensured maximum availability and traffic readiness. This was implemented using AWS autoscaling groups and lambda functions",
			],
	},
	{
		role: "Software engineer",
		company: "CGI",
		companylogo: "/img/icons/common/cgi.png",
		link: "https://www.cgi.com/en",
		link_desc: "Link",
		date: "April 2019 - Feb 2020",
		desc: "I worked as a backend developer in the Communications, Media and Utilities (CMU) business unit",
		descBullets: [
			"Created production level web applications using spring-boot\n" +
			"micro-services and angular.",
		],
	},
	{
		role: "Software engineering intern",
		company: "Blue Yonder",
		companylogo: "/img/icons/common/bt.jpeg",
		link: "https://blueyonder.com/",
		link_desc: "Link",
		date: "Jan 2019 - April 2019",
		desc: "I worked as a backend developer intern in the supply chain unit",
		descBullets: [
			"Created dashboards for alert automation and managed file transfers using powershell and ASP.NET.",
			"Used powershell to automate several parts of server build and\n" +
			"validation."
		],
	},
];

export const projects = [
	{
		name: "Fastcar",
		desc: "Created a fully functional car game using C++.\n" +
			"The game utilizes the C++ graphics library and creates an animated\n" +
			"road with various obstacles the car has to overcome.\n" +
			"\n" +
			"The scores are calculated based on the number of obstacles over-\n" +
			"come and stored",
		github: "https://github.com/pro-coder123/FastCar",
	},
	{
		name: "Chat application",
		desc: "Created a simple chat application using Golang",
		github: "https://github.com/pro-coder123/goChat",
	},
	{
		name: "Contently (Content sharing platform)",
		desc: "Created a complete production level web application using spring-\n" +
			"boot micro-services and angular.\n" +
			"\n" +
			"This is a platform where anyone can share their stories, opinion,\n" +
			"essays, poetry, research, ideas or reflections without constraints\n" +
			"on topic, genre, or length of publication.\n" +
			"Uses multiple databases such as MySQL, MongoDB, Neo4j.\n" +
			"Dockerized, deployed and hosted in AWS.",
		github: "https://github.com/pro-coder123/contently_new",
	},
	{
		name: "University timetable booking system",
		desc: "Created a modern timetable and class booking system using ruby on rails.",
		github: "https://github.com/pro-coder123/University",
	},
];

export const feedbacks = [
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
	{
		name: "John Smith",
		feedback:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.",
	},
];
