import React from "react";
import Event from './Event';

const Card = () => {
    return (
        <div className="container"> 
            {/*Create 10 div of className Card to create 10 card props*/}
            <div className = "Card">
                <img className="image" src = "../src/assets/AI.jpg"/>
                {/*Call on Event component to use React Props for Name of CS Field and Programming languages*/}
                <Event event = 'Artificial Intelligence' location = "Languages: Python, Java, R"/> 
                {/*Button that can be clicked and send user to link*/}
                <a href="https://www.oracle.com/artificial-intelligence/what-is-ai/#:~:text=About%20Artificial%20Intelligence-,Artificial%20Intelligence%20Terms,(ML)%20and%20deep%20learning.">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/SWE.jpeg"/>
                <Event event = 'Software Engineering' location = "Languages: Python, Java, C++, SQL, Ruby"/> 
                <a href="https://www.mtu.edu/cs/undergraduate/software/what/#:~:text=Software%20engineering%20is%20the%20branch,and%20maintenance%20of%20software%20applications.">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/DataScience.png"/>
                <Event event = 'Data Science' location = "Languages: R, Python, MATLAB, Java"/> 
                <a href="https://aws.amazon.com/what-is/data-science/#:~:text=Data%20science%20is%20the%20study,analyze%20large%20amounts%20of%20data.">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/WebDev.png"/>
                <Event event = 'Web Development' location = "Languages: HTML, CSS, JavaScript, React"/> 
                <a href="https://brainstation.io/career-guides/what-is-web-development">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/IT.png"/>
                <Event event = 'Information Tech' location = "Languages: PHP, Python, SQL"/> 
                <a href="https://www.comptia.org/content/articles/what-is-information-technology#:~:text=Information%20technology%20(IT)%20is%20the,much%20of%20our%20daily%20activities.">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/EE.jpg"/>
                <Event event = 'Electrical Engineering' location = "Languages: C, C++, Python, Dart"/> 
                <a href="https://tryengineeringinstitute.ieee.org/what-is-electrical-engineering/">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/UIUX.jpg"/>
                <Event event = 'UI/UX' location = "Languages: HTML, CSS, JavaScript"/> 
                <a href="https://careerfoundry.com/en/blog/ux-design/the-difference-between-ux-and-ui-design-a-laymans-guide/">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/Game.jpg"/>
                <Event event = 'Game Development' location = "Languages: C++ and C#"/> 
                <a href="https://www.freecodecamp.org/news/what-is-game-development/">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/Cyber.jpeg"/>
                <Event event = 'Cybersecurity' location = "Languages: Java, JavaScript, Python, PHP, SQL, C"/> 
                <a href="https://usa.kaspersky.com/resource-center/definitions/what-is-cyber-security">
                    <button>View Field</button>
                </a>
            </div>
            <div className = "Card">
                <img className="image" src = "../src/assets/Cloud.jpeg"/>
                <Event event = 'Cloud Computing' location = "Languages: Ruby, C++, Go"/> 
                <a href="https://ca.indeed.com/hire/c/info/cloud-computing?gclid=Cj0KCQjw9rSoBhCiARIsAFOiplk-PDHj397niwDaxh1HaDN8i8KSZhqLTqdia55S88jn-NY30c8rop4aAgEMEALw_wcB&aceid=&gclsrc=aw.ds">
                    <button>View Field</button>
                </a>
            </div>
        </div>
    )
}

export default Card;
