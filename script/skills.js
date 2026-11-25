const skills = [
  {
    name: "JavaScript",
    icon: "ph-file-js",
  },
  {
    name: "TypeScript",
    icon: "ph-code",
  },
  {
    name: "Python",
    icon: "ph-file-py",
  },
  {
    name: "SQL",
    icon: "ph-database",
  },
  {
    name: "React.js",
    icon: "ph-atom",
  },
  {
    name: "Node.js",
    icon: "ph-tree-structure",
  },
  {
    name: "MongoDB",
    icon: "ph-leaf",
  },
  {
    name: "Git",
    icon: "ph-git-branch",
  },
  {
    name: "GitHub",
    icon: "ph-github-logo",
  },
  {
    name: "Tailwind CSS",
    icon: "ph-wind",
  },
  {
    name: "CCNA",
    icon: "ph-network",
  },
  {
    name: "Palo Alto",
    icon: "ph-shield-check",
  },
  {
    name: "Firewall",
    icon: "ph-fire",
  },
  {
    name: "TCP/IP",
    icon: "ph-globe",
  },
  {
    name: "Routing & Switching",
    icon: "ph-arrows-left-right",
  },
  { name: "Network Security", icon: "ph-shield-check" },
];

const techGrid = document.querySelector("#tech-grid");

function displaySkills() {
  if (!techGrid) return;

  techGrid.innerHTML = skills
    .map((skill, index) => {
      return `
        <div
          class="tech-card"
          style="animation-delay: ${index * 0.05}s"
        >
          <i class="ph ${skill.icon}" aria-hidden="true"></i>
          <span>${skill.name}</span>
        </div>
      `;
    })
    .join("");
}

displaySkills();
