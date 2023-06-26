const links = [
  {
    name: "Home",
    url: "./index.html",
  },
  { name: "Menu", url: "./menu.html" },
  { name: "About us", url: "about.html" },
  { name: "Contact", url: "../index.html" },
  { name: "Reservation", url: "../menu.html" },
];

function creatHeader() {
  const header = document.createElement("header");
  header.classList.add("header");
  const nav = document.createElement("nav");

  links.forEach((link) => {
    const ahor = document.createElement("a");
    ahor.textContent = link.name;
    ahor.href = link.url;
    nav.appendChild(ahor);
  });
  header.appendChild(nav);
  document.body.insertBefore(header, document.body.firstChild);
}
creatHeader();
