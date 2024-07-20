import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

const Projects_Data = [
  {
    p_name: "2D Haunted Hospital Maze",
    p_lang: "Java, Maven, Junit, JaCoCo, Swing, AWT",
    p_img: project1,
    p_det1:
      "In collaboration with a team of four, I played a key role in developing a captivating 2D maze game, 'Haunted Hospital Maze,' using Java. Our game features an engaging main character navigating through a maze filled with enemies, rewards, and traps, all designed to enhance player engagement. To streamline our development process, we utilized Apache Maven for building and managing the game's automation, ensuring efficient and smooth progress.",
    p_det2:
      "To maintain high code quality, we implemented JUnit testing and used JaCoCo for measuring code coverage. This rigorous testing framework allowed us to identify and fix issues early, resulting in a more robust game. For the user interface, we leveraged Java Swing and AWT to create a dynamic and visually appealing experience, ensuring that players would find the game both interactive and visually stimulating.",
    p_website: "https://github.com/ryanmitchellin/Haunted-Hospital",
    },
  {
    p_name: "Crime Reporting Website",
    p_lang: "TypeScript, HTML/CSS, Angular, Bootstrap",
    p_img: project2,
    p_det1:
      "I designed and developed a dynamic crime reporting website using Angular, aimed at enabling users to report suspicious activities efficiently. The project involved creating an intuitive user interface by leveraging Angular components, directives, pipes, and services, ensuring a seamless and efficient data flow between the user and the server. This approach facilitated a user-friendly experience, making it easy for users to navigate and report incidents.",
    p_det2:
      "To enhance data visualization and user engagement, I integrated the Leaflet API, which allowed us to visualize reported incidents on an interactive map. This feature provided users with a clear and immediate understanding of reported activities in their area, significantly improving the usability and impact of the website.",
    p_website: "https://github.com/ryanmitchellin/Crime-Reporting-Website",
    },
  {
    p_name: "Simple Talk",
    p_lang: "C, Sockets, POSIX Threads",
    p_img: project3,
    p_det1:
      "I created a C-based chat application called 'Simple Talk' that facilitates real-time messaging through the use of multithreading and sockets. To ensure thread-safe access and efficient message handling, I implemented mutexes and condition variables. This setup allowed for seamless and reliable communication between users, enhancing the overall user experience.",
    p_det2:
      "To further optimize the application, I incorporated POSIX Threads for managing keyboard input and screen output. By customizing the List Abstract Data Type (ADT) to achieve O(1) complexity operations, I significantly improved the performance and responsiveness of the message handling system, making 'Simple Talk' a robust and efficient chat solution.",
    p_website: "https://github.com/ryanmitchellin/s-talk",
    },
  {
    p_name: "Voice-Based Food Ordering System Prototype",
    p_lang: "Figma, Sketch",
    p_img: project4,
    p_det1:
      "Collaborating with four other members, we developed a user-centered design (UCD) prototype for a voice-based food ordering system, utilizing Figma for the design process and integrating Siri for UberEats. The system features AI-driven food recommendations tailored to user behavior, providing a personalized and intuitive ordering experience.",
    p_det2:
      "To ensure a high-quality user experience, we conducted Nielsen heuristic evaluations, usability testing, and cognitive walkthroughs with other students. By iteratively refining the design based on user feedback, we were able to enhance the overall usability and effectiveness of the prototype, making it a user-friendly and efficient solution for voice-based food ordering.",
    p_website: "https://github.com/ryanmitchellin/voice-based-food-ordering"
    },
];

export default Projects_Data;
