import React from 'react';
export default function Projects() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        <h3>Checkmate App</h3>
        <p>
          "Checkmate" is an app idea I came up with to track tasks and budgets in a group or alone.
          This project includes the design process leading up to the high fidelity prototype I created in Figma.
        </p>
        <a href="https://www.figma.com/proto/04GzaMfstqn6M2CUBF0kgI/Checkmate-Prototype?node-id=1-2&t=MQpJqq952STe7rD4-1&starting-point-node-id=1%3A2" target="_blank" rel="noreferrer">
          View Prototype
        </a>
        <br />
        <img src="/src/assets/checkmate.png" alt="Checkmate App Screenshot" width="300" />
      </div>
      <hr />
      <div>
        <h3>Serengeti Web Page</h3>
        <p>
          This is a webpage that I built using HTML and CSS. It was made to be a sort of advertisement
          for traveling to the Serengeti and going on a safari. All photos were taken by me in my time
          on a safari in the Serengeti.
        </p>
        <img src="/src/assets/serengeti1.png" alt="Serengeti Webpage 1" width="300" />
        <img src="/src/assets/serengeti2.png" alt="Serengeti Webpage 2" width="300" />
      </div>
      <hr />
      <div>
        <h3>Personality Survey Web Page</h3>
        <p>
          This is a web page I created using HTML, CSS, and JavaScript. The purpose of this survey
          is to guess if the user is more likely an introvert, extrovert, or ambivert. It uses JavaScript
          validation for all of the information submitted.
        </p>
        <img src="/src/assets/personalitysurvey.png" alt="Personality Survey Screenshot" width="300" />
      </div>
    </section>
  );
}