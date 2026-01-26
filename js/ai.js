const responses = {
  background:
    "I am a computer science graduate student with a strong interest in data analysis, systems, and web technologies. My academic background combines computer science and business, allowing me to approach problems from both technical and analytical perspectives.",

  projects:
    "I have worked on data-focused projects involving relational data modeling, ETL pipelines, and SQL analytics. These projects emphasize transforming raw datasets into structured systems and extracting meaningful insights.",

  skills:
    "My technical skill set includes Python, Java, SQL, MySQL, HTML, CSS, R, and data modeling techniques. I enjoy working across the data stack, from schema design to analysis.",

  focus:
    "I am particularly interested in data and systems because they combine logical structure with real-world impact. Designing reliable and scalable data systems is both challenging and rewarding."
};

const buttons = document.querySelectorAll(".ai-btn");
const responseBox = document.getElementById("ai-response");

let typingTimeout;

function typeText(text, speed = 25) {
  clearTimeout(typingTimeout);
  responseBox.innerHTML = `<p class="typing-cursor"></p>`;

  const paragraph = responseBox.querySelector("p");
  let index = 0;

  function typeNextChar() {
    if (index < text.length) {
      paragraph.textContent += text.charAt(index);
      index += 1;
      typingTimeout = setTimeout(typeNextChar, speed);
    } else {
      paragraph.classList.remove("typing-cursor");
    }
  }

  typeNextChar();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.question;
    const text = responses[key];
    typeText(text);
  });
});
