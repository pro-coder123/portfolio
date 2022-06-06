import emoji from "react-easy-emoji";

export const greetings = {
	name: "Varun Mukundhan",
	title: "Hi all, I'm Varun",
	description:
		"Welcome to my corner of the internet! I am a seasoned backend developer with a focus on distributed systems.",
	resumeLink:
		"https://drive.google.com/file/d/1Jj4QvvMMhRZQrxngrvlhmuTLhgcisaAp/view?usp=sharing",
};

export const openSource = {
	githubUserName: "pro-coder123",
};

export const contact = {};

export const socialLinks = {
	github: "https://github.com/1hanzla100",
	linkedin: "https://www.linkedin.com/in/varun-mukundhan/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"I work on high scale distributed systems",
	data: [
		{
			title: "Programming and software development",
			lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
			skills: [
				emoji(
					"⚡ Building backend applications using several popular frameworks"
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
				emoji("⚡ Have hands on experience in rapid scaling up of an application through async processing, message queues and adding caching mechanisms"),
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
		descBullets: [
			"Founded the algorithms club",
		],
	},
];

export const experience = [
	{
		role: "Software development engineer",
		company: "Razorpay (YCombinator '15)",
		link: "https://www.ycombinator.com/companies/razorpay",
		link_desc: "YC link",
		companylogo: "/img/icons/common/rzp.svg",
		date: "June 2021 – Jule 2022",
		desc: "I worked as a backend engineer for the notifications team. My team was responsible for the delivery of every kind of notification from Razorpay. This included SMSes, Emails directly to end users containing OTPs, invoices, etc along with payment confirmation webhooks to the merchants' servers. My team was one of the most crucial teams at Razorpay and as a result, we have aggressive NFR goals, such as availability of five nines.",
		descBullets: [
			"I implemented async DB writes of our notification attempts using kafka streams. This led to enormous horizontal scalability of worker pods. What used to be previously capped at ~190 pods could now be scaled to 1000 and more based on the load. Controlling the rate at which ingestion is happening in the DB made sure the DB did not go down due to unprecedented load, thus improving the reliability of our system.",
			"I implemented quality of service based flow control for webhooks based on the merchant server's response time using Apache Pinot as the data source. Essentially, what this would do is stream merchant response time details to Pinot after each webhook attempt. Then in our Web pods, we would query Pinot to find out merchants that have a response time greater than some predefined value and route such merchants' webhooks to a lower priority queue. This tremendouesly improved the p99 webhooks delivery time (over 50% reduction in time taken was seen).",
			"I worked on and helped deliver the webhooks flow control as well as rate limiting feature. I drove this feature end to end, did tech solutioning and execution. Did numerous performance tests and consulted with various stakeholders. This protected our service from DDOS attacks"
		],
	},
	{
		role: "Full Stack Developer",
		company: "Bleed-AI",
		companylogo: "/img/icons/common/bleedAI.jpg",
		date: "Sept 2021 - Oct 2021",
		desc: "Worked as django web developer to create a website in which I integrated computer vision AI model (built by the team of BleedAI) to process YouTube URLs and show Real Time processing on Website using Django Channels WebSockets , threading for running multiple instances of AI Model, jQuery for UI rendering and deployed it on Heroku server.",
	},
	{
		role: "Backend Developer",
		company: "Wapidu",
		companylogo: "/img/icons/common/wapidu.jpg",
		date: "Sept 2021",
		desc: "Worked as a Django Developer to integrate Stripe payment gateway in wapidu.com and Created REST APIs using Django REST Framework to integrate Django Stripe backend to Vue.js Frontend and Deployed it on Azure based Docker container registry.",
	},
];

export const projects = [
	{
		name: "AtlasMart",
		desc: "With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.",
		link: "https://atlasmart.netlify.app/",
	},
	{
		name: "Technota (Forum)",
		desc: "Get hands-on experience in technical skills with Technota",
		link: "https://technota.netlify.app/",
	},
	{
		name: "Shopaza (Ecommerce)",
		desc: "Now your reach to all your favorite entertainment and luxury items is just one touch apart",
		link: "https://shopaza.herokuapp.com/",
	},
	{
		name: "MMFmelody (Blog)",
		desc: "Here you will find amazing tips about health, beauty, and modern-day life.",
		// github: "https://github.com/1hanzla100",
		link: "https://mmfmelody.herokuapp.com/",
	},
	{
		name: "Developer-Portfolio",
		desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
		github: "https://github.com/1hanzla100/developer-portfolio",
		link: "https://developer-portfolio-1hanzla100.vercel.app/",
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
