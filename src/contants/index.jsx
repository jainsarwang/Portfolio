export const technologiesIcon = {
	html: { name: "HTML", image: "/assets/technologies/html.png" },
	css: { name: "CSS", image: "/assets/technologies/css.png" },
	javascript: { name: "JavaScript", image: "/assets/technologies/javascript.png" },
	php: { name: "PHP", image: "/assets/technologies/php.png" },
	jwt: { name: "JWT", image: "/assets/technologies/jwt.png" },
	mysql: { name: "MySQL", image: "/assets/technologies/mysql.png" },
	mongodb: { name: "MongoDB", image: "/assets/technologies/mongodb.png" },
	expressjs: { name: "Express.JS", image: "/assets/technologies/expressjs.png" },
	reactjs: { name: "React.JS", image: "/assets/technologies/reactjs.svg" },
	nodejs: { name: "Node.JS", image: "/assets/technologies/nodejs.png" },
	java: { name: "Java", image: "/assets/technologies/java.png" },
	api: { name: "API", image: "/assets/technologies/api.png" },
	postman: { name: "Postman", image: "/assets/technologies/postman.png" },
	tailwindcss: { name: "TailwindCSS", image: "/assets/technologies/tailwindcss.png" },
	typescript: { name: "TypeScript", image: "/assets/technologies/typescript.png" },
	github: { name: "GitHub", image: "/assets/technologies/github.png" },
	git: { name: "Git", image: "/assets/technologies/git.png" },
};

// Done
export const navLinks = [
	{
		name: "Home",
		href: "#home",
	},
	{
		name: "About",
		href: "#about",
	},
	{
		name: "Work",
		href: "#work",
	},
	{
		name: "Contact",
		href: "#contact",
	},
	{
		name: "Get Resume",
		href: "https://drive.google.com/file/d/1hHIHKeuiEWuNZ2qyriAXuBQjjSYDsVQV/view?usp=sharing",
		isButton: true,
		target: "_new",
	},
];

// Done
export const clientReviews = [
	{
		id: 1,
		name: "Navnit K.",
		position: "Freelancer Client",
		img: "assets/clients/NavnitK_freelancer.webp",
		review: (
			<>
				Sarwang knows his work and a good command over PHP MYSQL. I recommend him@will allot more work.He worked
				like pro, a fast coder, a good listener and solved complex query instantly.
				<br />
				Saved my time.
			</>
		),
	},
	// {
	// 	id: 2,
	// 	name: "Siddharth Tomar",
	// 	position: "Founder of BAOIAM Innovation Pvt. Ltd.",
	// 	img: "assets/review2.png",
	// 	review: "",
	// },
	// {
	// 	id: 3,
	// 	name: "Rounak Dubey",
	// 	position: "Founder of SpreeSync & Co-Founder of GearFi",
	// 	img: "assets/review3.png",
	// 	review: "",
	// },
	{
		id: 4,
		name: "Aadarsh Armil",
		position: "Co-Founder of GearFi & Central DAO",
		img: "assets/clients/AadarshArmil_gearFi.webp",
		review: "Sarwang Jain is an outstanding UI/UX Developer with strong React skills and a commitment to delivering top-notch user experiences. His eagerness to learn, quick execution, and collaborative mindset have made a lasting impact on our team. I highly recommend him for any role.",
	},
];

export const myProjects = [
	/* {
		title: "YouTube Clone",
		desc: "YouTube Clone is built using actual YouTube Data API, which is used to fetch data about the YouTube, its video, channels, playlist, and other. Also, it have Google OAuth2 Integration to login user in this platform.",
		liveLink: "https://youtube-clone2715.vercel.app",
		githubLink: "",
		tags: ["reactjs", "nodejs", "git", "github", "api"],

		subdesc:
			"Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
		texture: "/textures/project/project1.mp4",
		logo: "/assets/projects/youtube_clone_logo.png",
		logoStyle: {
			backgroundColor: "#2A1816",
			border: "0.2px solid #36201D",
			boxShadow: "0px 0px 60px 0px #AA3C304D",
		},
		spotlight: "/assets/projects/youtube_spotlight.png",
	}, */
	{
		title: "Jain Server - Web Server",
		desc: "A Java-based web server was developed to handle HTTP requests, send requested files, and support chunked data transfer for large files. It can be configured for any subdomain, making it versatile for hosting multiple websites and managing domain-based routing. This design provides flexibility, scalability, and efficient file handling.",
		subdesc:
			"A web server was developed using Java and Java socket programming, capable of serving HTTP requests and sending requested files. The server handles traffic efficiently through socket connections and is integrated with chunked data transfer to serve large files seamlessly. It can be configured for any subdomain, making it versatile for hosting multiple websites, managing domain-based routing, and handling file requests. This design ensures scalability, customization, and robust file-serving capabilities, making it ideal for various web applications.",
		githubLink: "https://github.com/jainsarwang/Jain-Server",
		tags: ["java"],

		texture: "/textures/project/project2.mp4",
		logo: "/assets/projects/web_server_logo.png",
		logoStyle: {
			backgroundColor: "#13202F",
			border: "0.2px solid #17293E",
			boxShadow: "0px 0px 60px 0px #2F6DB54D",
		},
		spotlight: "/assets/projects/web_server_spotlight.png",
	},
	{
		title: "SunnySW - A Messenger",
		desc: "Sunnysw is a comprehensive messaging platform that enables seamless communication through chat and video calling. It offers features like follow, block, and a secure vault for storing sensitive information, ensuring user privacy and control over interactions in a user-friendly environment.",
		subdesc:
			"With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
		liveLink: "",
		githubLink: "",
		tags: ["html", "css", "javascript", "php", "mysql"],
		texture: "/textures/project/project3.mp4",
		logo: "/assets/projects/messenger_logo.png",
		logoStyle: {
			backgroundColor: "#60f5a1",
			background:
				"linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
			border: "0.2px solid rgba(208, 213, 221, 1)",
			boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
		},
		spotlight: "/assets/projects/messenger_spotlight.png",
	},
	{
		title: "SunnyAuth - OAuth API",
		desc: "OAuth API provides secure, token-based access for third-party applications to user data without exposing user credentials, enabling SSO, limited permissions, and supporting standard flows like authorization code and token refresh. ",
		subdesc:
			"Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
		texture: "/textures/project/project4.mp4",
		logo: "/assets/projects/oauth_logo.png",
		logoStyle: {
			backgroundColor: "#0E1F38",
			border: "0.2px solid #0E2D58",
			boxShadow: "0px 0px 60px 0px #2F67B64D",
		},
		spotlight: "/assets/projects/oauth_spotlight.png",
		tags: ["html", "css", "javascript", "php", "mysql", "jwt"],
	},
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
	return {
		deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.063,
		deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
		cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
		reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
		ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
		javaPosition: isSmall ? [-5, -9, -10] : isMobile ? [-7, -9, -10] : isTablet ? [-11, -10, -10] : [-13, -10, -10],
	};
};

// Done
export const workExperiences = [
	{
		id: 1,
		name: "Freelance",
		pos: "MERN Stack Developer",
		duration: "Nov 2023 - Present",
		title: "As a freelancer, I have worked with the MERN and WAMP stacks, focusing on full-stack development, bug hunting, and managing servers. I also provide scripts for specific tasks and assist with a wide range of IT-related work to deliver efficient solutions.",
		icon: "/assets/work/freelancer.png",
		animation: "waving",
	},
	{
		id: 1,
		name: "Google DSC",
		pos: "Technical Head",
		duration: "Aug 2023 - Aug 2024",
		title: "As the Technical Head at Google Developer Student Clubs (DSC), I led and facilitated a range of technical events, including the Google Cloud Study Jams and Gen AI campaigns. I worked closely with teams to organize workshops and hands-on sessions, providing students with practical experience in Google technologies and empowering them to enhance their technical skills.",
		icon: "/assets/work/GDSC.png",
		animation: "victory",
	},
	{
		id: 2,
		name: "Central DAO",
		pos: "MERN Stack Developer",
		duration: "Jan 2024 - Apr 2024",
		title: "I worked as a Web Developer for Central DAO, a web3 community, where I developed their website, ensuring it was functional, user-friendly, and aligned with the community's decentralized ethos. My role involved integrating web3 technologies to enhance the platform's features and overall user experience.",
		icon: "/assets/work/centralDao.png",
		animation: "cards",
	},
	{
		id: 3,
		name: "GearFi",
		pos: "MERN Stack Intern",
		duration: "Jul 2023 - Nov 2023",
		title: "At GearFi, I worked as a MERN stack developer, building a seamless NFT transfer system by integrating blockchain technologies with the MERN stack. I also set up wallet connections and managed different states of the application, ensuring smooth NFT transactions and an optimized user experience.",
		icon: "/assets/work/gearfi.png",
		animation: "sillydance",
	},
	{
		id: 5,
		name: "BAOIAM Innovation Pvt. Ltd.",
		pos: "Lead Web Developer",
		duration: "Jun 2023 - Sept 2023",
		title: "At BAOIAM, I led a multidisciplinary team of 10 developers, researchers, content writers, and graphic designers. I was responsible for overseeing project development, managing GitHub repositories, and ensuring smooth collaboration across all departments to deliver high-quality results.",
		icon: "/assets/work/baoiam.png",
		animation: "salute",
	},
	{
		id: 6,
		name: "Digilearning Pvt. Ltd.",
		pos: "Web Developer Intern",
		duration: "Apr 2022 - Dec 2023",
		title: "At DigiLearning, I developed the Fatafat Books platform for selling e-books, ensuring the best user interface (UI) and user experience (UX) to create a smooth and intuitive digital reading platform.",
		icon: "/assets/work/fatafatbooks.png",
		animation: "clapping",
	},
];
