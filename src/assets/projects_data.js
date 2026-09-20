import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import video1 from "../assets/video1.mp4";

const Projects_Data = [
  {
    p_name: "DermaVision AI",
    p_lang: "Python, Tensorflow, Keras, Javascript, Flask",
    p_img: video1,
    p_det1:
      "As part of a collaborative team of five, we developed an advanced image classification model to identify skin lesions such as Cowpox, HFMD, Measles, Chickenpox, Monkeypox, and Healthy skin conditions. Leveraging Convolutional Neural Networks (CNN), the model was trained using a comprehensive Kaggle dataset, with cross-validation and hyperparameter tuning via random search to enhance accuracy and robustness. This effort ensured reliable classification outcomes, making it a valuable tool for medical reference.",
    p_det2:
      "The trained Keras model was seamlessly integrated into a user-friendly web application built with Flask. This platform allows users to upload skin lesion images, which are processed and classified in real time. By providing accurate predictions, the application serves as a practical reference tool for patients who may not have immediate access to a healthcare provider. This project highlights the potential of AI in delivering accessible medical support and fostering early diagnosis.",
    p_website: "https://github.com/ryanmitchellin/DermaVision-AI",
  },
  {
    p_name: "AI YouTube Shorts Generator",

    p_lang: "Python, Groq API, Cloudflare FLUX API, Edge TTS",

    p_img: project7,

    p_det1:
      "This project focused on developing an end-to-end text-to-video pipeline that converts titles and scripts into vertical YouTube Shorts using AI-generated narration, images, subtitles, and automated video composition. The system streamlines the content creation process by combining multiple AI services into a single workflow.",

    p_det2:
      "The project integrated AI APIs and media-processing tools to automate content generation, synchronize narration with subtitles, and assemble visual elements into ready-to-upload short-form videos. The pipeline also incorporated caching and fallback mechanisms to improve reliability and reduce unnecessary API usage during content generation.",

    p_website: "https://github.com/ryanmitchellin",
  },
  {
    p_name: "Multi-Agent Path Finding with Heuristics",

    p_lang: "Python, CBS, A*, MDD, PuLP",

    p_img: project6,

    p_det1:
      "This project focused on solving Multi-Agent Path Finding (MAPF) problems by coordinating multiple agents to find collision-free paths in a shared environment. Working in a team of 3, we implemented several Conflict-Based Search (CBS) approaches, including Standard CBS, Disjoint CBS, and heuristic-enhanced variants using Cardinality Graphs (CG), Dependency Graphs (DG), and Weighted Dependency Graphs (WDG).",

    p_det2:
      "The project evaluated the effectiveness of different search strategies and admissible heuristics for improving MAPF performance. I specifically implemented the WDG heuristic using Multi-valued Decision Diagrams (MDDs), dependency graphs, and weighted vertex cover optimization with PuLP. The heuristic reduced high-level node expansions and improved runtime compared with standard CBS while preserving optimality.",

    p_website: "https://github.com/ryanmitchellin/MAPF-with-Heuristics",
  },
  {
    p_name: "Chess Prediction Optimization",
    p_lang: "Python, Numpy, Matplotlib",
    p_img: project5,
    p_det1:
      "This project focused on analyzing white player win probabilities in chess matches by leveraging ELO rating differences and applying advanced statistical methods. Using linear optimization through Bayesian Inference, Maximum a Posteriori (MAP) estimation was employed to compute critical parameters such as prior mean, prior covariance, posterior mean, and posterior covariance. This approach allowed for a comprehensive evaluation of model performance and the determination of optimal slopes, shedding light on the relationship between ELO ratings and win probabilities.",
    p_det2:
      "The project also explored non-linear optimization by employing a sigmoid cross-entropy loss function. Optimization methods included manually implemented vanilla gradient descent and the Adam optimizer. While vanilla gradient descent failed to converge to the objective function due to its limitations in handling complex optimization landscapes, the Adam optimizer demonstrated superior performance by achieving successful convergence. This comparison provided valuable insights into the efficacy of different optimization techniques in probabilistic modeling and machine learning.",
    p_website: "https://github.com/ryanmitchellin",
  },
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
    p_website: "https://github.com/ryanmitchellin/voice-based-food-ordering",
  },
];

export default Projects_Data;
