const options = document.querySelectorAll(".option");
const textbox = document.querySelector(".textbox");
let activeOption = null;

const bioHTML = `
    <div>
        <h2>Biography</h2>
        <p>Hi, I'm Oli and I'm a recently graduated software developer from Guildford who enjoys creating projects in my spare time. I have
        experience in writing full stack projects, and I am comfortable with both front and back end development. I am currently most interested
        in <b>artificial intelligence</b> and <b>cyber security</b>, the former of which I carried out my dissertation on. My strongest
        programming languages are: <p>
        <ul>
            <li>
                <img src="images/langs/python.png" alt="python">
                <a>Python</a>
            </li>
            <li>
                <img src="images/langs/java.png" alt="java">
                <a>Java</a>
            </li>
            <li>
                <img src="images/langs/csharp.png" alt="csharp">
                <a>C#</a>
            </li>
            <li>
                <img src="images/langs/html.png" alt="html">
                <a>HTML/CSS</a>
            </li>
        </ul>
        <style>
            ul {
                list-style-type: none;
                padding: 0;
            }

            li {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }

            li img {
                width: 30px;
                margin-right: 10px;
            }

            a {
                text-decoration: none;
                color: black;
                font-weight: bold;
            }
        </style>
`;

const educationHTML = `
    <div>
        <h2>Education History</h2>
        <h3 style="color:black"><b>University of Exeter</b></h3>
        <ul>
        <li><i>Degree:</i><b style="color:black"> BSc Computer Science</b><br></li>
        <li><i>Grade:</i><b style="color:black"> 2:1</b></li>
        </ul>
        <h3 style="color:black"><b>George Abbot School</b></h3>
        <b><i>A Level's</i></b>
        <ul>
            <li>Maths: <b style="color:black"> A</b></li>
            <li>Computer Science: <b style="color:black">B</b></li>
            <li>Further Maths: <b style="color:black"> B</b></li>
        </ul>
        <b><i>GCSE's</i></b>
        <ul>
            <li><b style="color:black"> Two 9's</b>: (Maths, Physics)</li>
            <li><b style="color:black"> Four 8's</b>: (Computer Science, German, English Literature, Religious Education)</li>
            <li><b style="color:black"> Four 7's</b>: (English Language, Chemistry, Biology, Photography) </li>
        </ul>
    </div>
`;

const workHTML = `
    <div>
        <h2>Work History</h2>
        <h3 style="color:white"><b style="color:black">Delivery Courier- <i>Deliveroo</i></b><i> (09/2021-07/2023)</i></h3>
        <p> Online food delivery platform connecting consumers and local restaurants to enable ordering and delivery. </p>
        <h3 style="color:white"><b style="color:black">Services Assistant- <i>Sainsburys</i></b><i> (01/2018-06/2018)</i></h3>
        <p> Multi-channel retailer that offers groceries, general merchandise, and clothing products. </p>

        <p> 
    </div>
`;

const contactHTML = `
    <div>
        <p>Useful Links:</p>   
        <ul>
            <li>
                <img src="images/contacts/linkedin.png" alt="linkedIn">
                <a href="https://www.linkedin.com/in/oli-cieplinski/" target="_blank">Oliver Cieplinski</a>
            </li>
            <li>
                <img src="images/contacts/github.png" alt="gitHub">
                <a href="https://github.com/oliciep" target="_blank">oliciep</a>
            </li>
            <li>
                <img src="images/contacts/email.png" alt="email">
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=olivercieplinski@gmail.com&su=Website%20Inquiry&tf=cm" target="_blank">olivercieplinski@gmail.com</a>
            </li>
            <li>
                <img src="images/contacts/pdf.png" alt="overleaf">
                <a href="files/dissertation.pdf" target="_blank">My Dissertation</a>
            </li>
            <li>
                <img src="images/contacts/resume.png" alt="resume">
                <a href="files/resume.pdf" target="_blank">My Resume</a>
            </li>
        </ul>
        <style>
            ul {
                list-style-type: none;
                padding: 0;
            }

            li {
                display: flex;
                align-items: center;
                margin-bottom: 10px;
            }

            li img {
                width: 30px;
                margin-right: 10px;
            }

            a {
                text-decoration: none;
                color: #fffefe;
                transition: color 0.5s;
            }
            
            a:hover {
                color: #222
            }
        </style>
    </div>
`;

options.forEach((option, index) => {
    option.addEventListener("click", () => {
        // Hide the textbox
        setTimeout(() => {
            textbox.style.opacity = 0;
        }, 0);
        if (activeOption) {
            activeOption.classList.remove("active");
        }
        // Set the unique text for the selected option
        const texts = [
            bioHTML,
            educationHTML,
            workHTML,
            contactHTML
        ];

        // Show the selected text
        setTimeout(() => {
            textbox.innerHTML = texts[index];
            textbox.style.opacity = 1;
        }, 250);
        option.classList.add("active");

        // Store the active option for future reference
        activeOption = option;
    });
});