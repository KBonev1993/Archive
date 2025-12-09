document.getElementById('command-line').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleCommand(this.value.trim());
        this.value = '';
    }
});

const welcomeMessage = `
    <p class="output">Welcome to My Terminal Portfolio</p>
    <p class="output">Type 'about' to learn more about me.</p>
    <p class="output">Type 'skills' to list my skills.</p>
    <p class="output">Type 'certificates' to view my certificates.</p>
    <p class="output">Type 'projects' to see my projects.</p>
    <p class="output">Type 'contact' to get in touch with me.</p>
    <p class="output">Type 'cv' to download my CV.</p>
    <p class="output">Type 'GIA' to download my General Intelligence Assessment (GIA).</p>
    <p class="output">Type 'clear' to clear the terminal.</p>
    <p class="output">What would you like to do?</p>
`;

function handleCommand(command) {
    var terminalBody = document.getElementById('terminal-body');
    var commandOutput = document.createElement('div');
    commandOutput.classList.add('output');

    if (command.toLowerCase() === 'clear') {
        terminalBody.innerHTML = welcomeMessage;
        return;
    }

    var userCommand = document.createElement('div');
    userCommand.innerHTML = `<span class="prompt">keyboardninja@terminal: </span> <span class="command">${command}</span>`;
    terminalBody.appendChild(userCommand);

    switch(command.toLowerCase()) {
        case 'about':
            commandOutput.innerHTML = `
                <p>Hello World, I'm Kristiyan Bonev 👋</p>
		<p>Welcome to my profile! I am a dynamic professional with a rich blend of experiences in software support, cybersecurity, penetration testing, and software engineering.<br> 
  		My journey has equipped me with a unique perspective, enabling me to tackle complex challenges across various domains.</p>
		
		<p><span class="highlight">CURRENT POSITION</span><br>
		<span class="highlight">SW/APP/Cloud Tech Support Analyst [Nov 2022 – Current]</span><br>
		Accenture</p>
		<p>Provide comprehensive technical support for various software, applications, and cloud services.<br>
		Collaborate with clients to diagnose and troubleshoot technical problems, ensuring high levels of customer satisfaction.<br>
		Translate complex technical information into clear, understandable terms for non-technical stakeholders.</p>
		
		<p><span class="highlight">EDUCATION AND TRAINING</span><br>
		<span class="highlight">DevSecOps Training at TryHackMe</span><br>
		Mastering securing pipelines and modern security practices in software development, equipped with skills in Infrastructure as Code (IaC) and Containerization security techniques.<br> 
  		Ready to excel in DevSecOps, fortifying digital infrastructure against cyber threats.</p>
		<p><span class="highlight">AWS Certified Cloud Practitioner</span><br>
		Equipped with foundational knowledge and practical skills for navigating the AWS Cloud environment effectively. <br>
  		Ready to drive innovation, scalability, and cost-efficiency for businesses through cloud initiatives.</p>
		<p><span class="highlight">Junior Penetration Tester Certification at TryHackMe</span><br>
		Acquiring core technical skills essential for penetration testing, prepared to enhance organizations' security posture and safeguard digital assets.</p>
		<p><span class="highlight">Google Cybersecurity Professional Certificate on Coursera</span><br>
		Mastery of cybersecurity concepts including risk assessment, threat identification, and vulnerability mitigation. <br>
  		Ready to protect organizations from cyber threats and ensure a secure digital environment.</p>
		<p><span class="highlight">JavaScript Applications Course at Software University (SoftUni)</span><br>
		Gaining a comprehensive understanding of JavaScript for building complex web applications, including HTTP and REST services, asynchronous programming, and client-side rendering.</p>
		<p><span class="highlight">JavaScript Advanced Course at Software University (SoftUni)</span><br>
		Deepening understanding of advanced JavaScript features for building efficient and effective code, covering DOM manipulation, advanced functions, and error handling.</p>
		<p><span class="highlight">Python OOP Course at Software University (SoftUni)</span><br>
		Gaining expertise in object-oriented programming concepts and practical skills for developing efficient and scalable applications.</p>
		<p><span class="highlight">Python Advanced Course at Software University (SoftUni)</span><br>
		Proficiency in advanced Python features for developing efficient and effective applications, including lists, tuples, sets, and error handling.</p>
		<p><span class="highlight">Programming Fundamentals Course at Software University (SoftUni)</span><br>
		Acquiring foundational skills in programming and software development, covering basic syntax, data types, and functions.</p>
		<p><span class="highlight">Programming Basics with Python Course at D. A. Tsenov Academy of Economics</span><br>
		Introduction to programming with Python, covering basic syntax, loops, data types, and functions.</p>
		<p><span class="highlight">Finance Course at D. A. Tsenov Academy of Economics</span><br>
		Studying finance topics, including financial markets, investment analysis, and financial management.</p>
		
		<p><span class="highlight">EXPERTISE</span><br>
		<span class="highlight">Software Support:</span> Providing comprehensive technical support for various software and applications.<br>
		<span class="highlight">Software Engineering:</span> Developing efficient and scalable solutions to meet diverse business needs.<br>
		<span class="highlight">Cybersecurity:</span> Identifying vulnerabilities and implementing security measures to safeguard digital assets.<br>
		<span class="highlight">Penetration Testing:</span> Conducting thorough assessments to enhance organizational security posture.<br>
		<span class="highlight">DevSecOps:</span> Integrating security practices into the software development lifecycle to ensure secure and efficient operations.</p>
		
		<p><span class="highlight">TECHNICAL SKILLS</span><br>
		<span class="highlight">Programming Languages:</span> Proficient in Python, JavaScript, HTML, and CSS.<br>
		<span class="highlight">Scripting & Automation:</span> Experienced in BASH scripting for automation and system tasks.<br>
		<span class="highlight">Object-Oriented Programming:</span> Skilled in creating class hierarchies and implementing inheritance.<br>
		<span class="highlight">Software Testing & Algorithms:</span> Knowledgeable in unit testing, iterators, generators, decorators, and basic algorithms.<br>
		<span class="highlight">Data Structures:</span> Proficient in both linear and two-dimensional data structures.<br>
		<span class="highlight">Web Development:</span> Capable of handling data streams, files, directories, HTTP, and developing simple single-page applications.<br>
		<span class="highlight">Database Management:</span> Experienced with MS SQL, MySQL and MongoDB for efficient data management.<br>
		<span class="highlight">Cloud Platforms:</span> Skilled in deploying and managing applications on AWS and Azure.<br>
		<span class="highlight">Development Tools:</span> Proficient with Visual Studio Code (VSCode) and Jenkins for development and continuous integration.<br>
		<span class="highlight">Operating Systems:</span> Experienced in Linux system administration.<br>
		<span class="highlight">APIs & Networking:</span> Familiar with REST APIs, network protocols, and tools like Postman.<br>
		<span class="highlight">Hardware & IoT:</span> Knowledgeable about Raspberry Pi and IoT applications.<br>
		<span class="highlight">DOM Manipulation & JSON:</span> Adept in information extraction and manipulation using JSON and DOM tree techniques.<br>
		<span class="highlight">Cybersecurity:</span> Well-versed in security principles, risk assessment, threat modeling, and incident response procedures.<br>
		<span class="highlight">Penetration Testing:</span> Skilled in conducting vulnerability assessments, penetration testing, and identifying security weaknesses in systems and networks.<br>
		<span class="highlight">DevSecOps:</span> Proficient in integrating security controls and best practices into CI/CD pipelines, ensuring secure and compliant software delivery.</p>


            `;
            break;
        case 'skills':
            commandOutput.innerHTML = `
                <p><span class="highlight">Languages and Tools:</span></p>
                <div class="skills-icons">
                    <a href="https://skillicons.dev" target="_blank">
                        <img src="https://skillicons.dev/icons?i=python,js,vscode,html,css,bash,linux,mysql,mongodb,aws,azure,postman,raspberrypi,jenkins,docker,kubernetes,terraform" alt="Languages and Tools" />
                    </a>
                </div>
            `;
            break;
        case 'certificates':
             commandOutput.innerHTML = `
				<p>My Certificates:</p>
				<div class="certificates">
    					<a href="images/CyberSecurity.jpeg" target="_blank">
						<img src="images/CyberSecurity.jpeg" alt="CyberSecurity Certificate" class="certificate-thumbnail" />
					</a>
    					<a href="images/DevSecOps.jpg" target="_blank">
						<img src="images/DevSecOps.jpg" alt="DevSecOps Certificate" class="certificate-thumbnail" />
					</a>
    					<a href="images/AWS.jpg" target="_blank">
						<img src="images/AWS.jpg" alt="AWS Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/PenTest.jpg" target="_blank">
						<img src="images/PenTest.jpg" alt="Penetration Testing Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/Google.jpeg" target="_blank">
						<img src="images/Google.jpeg" alt="Google Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/JS.jpg" target="_blank">
						<img src="images/JS.jpg" alt="JavaScript Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/PythonOOP.jpg" target="_blank">
						<img src="images/PythonOOP.jpg" alt="Python OOP Certificate" class="certificate-thumbnail" />
					</a>
					<a href="images/Python.jpg" target="_blank">
						<img src="images/Python.jpg" alt="Python Certificate" class="certificate-thumbnail" />
					</a>
     
				</div>
			`;
            break;
        case 'projects':
            commandOutput.innerHTML = `
                <p>Here are some of my projects:</p>
                <ul>
                    <li><a href="https://github.com/KBonev1993/Information-Security-FreeCodeCamp-/tree/main/Stock%20Price%20Checker" target="_blank" class="project-link">Stock Price Checker</a></li>
                </ul>
                <ul>
                    <li><a href="https://github.com/KBonev1993/BTC-Whale-Tracker-AHAB" target="_blank" class="project-link">BitCoin Whale Tracker</a></li>
                </ul>
                <ul>
                    <li><a href="https://github.com/KBonev1993/Spotify-Song-Scrapper" target="_blank" class="project-link">Spotify Song Scrapper</a></li>
                </ul>
		<ul>
                    <li><a href="https://github.com/KBonev1993/Information-Security-FreeCodeCamp-/tree/main/SHA-1%20Password%20Cracker" target="_blank" class="project-link">SHA-1 Password Cracker</a></li>
                </ul>
		<ul>
                    <li><a href="https://github.com/KBonev1993/Information-Security-FreeCodeCamp-/tree/main/Port%20Scanner" target="_blank" class="project-link">Port Scanner</a></li>
                </ul>
            `;
            break;
        case 'contact':
            commandOutput.innerHTML = `
        <p><span class="highlight">Contact Information:</span></p>
        <p>Email: k.bonev1993@gmail.com</p>
        <div class="social-icons">
            <a href="https://www.linkedin.com/in/kristiyan-bonev-53b374231/" target="_blank"><img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" /></a>
            <a href="https://github.com/kbonev1993" target="_blank"><img src="https://skillicons.dev/icons?i=github" alt="GitHub" /></a>
        </div>
    `;
            break;
		case 'cv':
			commandOutput.innerHTML = `
				<p>You can download my CV <a href="https://raw.githubusercontent.com/KBonev1993/kbonev1993.github.io/main/cv/KristiyanBonevCV.pdf" download="KristiyanBonev_CV" class="cv-link">here</a>.</p>
			`;
			break;
	case 'gia':
			commandOutput.innerHTML = `
				<p>You can download my GIA <a href="https://raw.githubusercontent.com/KBonev1993/kbonev1993.github.io/main/cv/KristiyanBonevGIA.pdf" download="KristiyanBonev_GIA" class="cv-link">here</a>.</p>
			`;
			break;
        default:
            commandOutput.innerHTML = 'Invalid Command!';
            break;
    }

    terminalBody.appendChild(commandOutput);
    terminalBody.scrollTop = terminalBody.scrollHeight; // Scroll to the bottom
}

window.onload = function() {
    var terminalBody = document.getElementById('terminal-body');
    terminalBody.innerHTML = welcomeMessage;
};
