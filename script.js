gsap.registerPlugin(ScrollTrigger);

//bar-menu
const openMenu = document.querySelector(".bar-container");
const closeMenu = document.querySelector(".close-menu");
const links = document.querySelector(".links");

function openMenuFun() {
  gsap.set(links, { display: "flex" }); 
  gsap.fromTo(
    links,
    { opacity: 0, y: -20 },
    { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
  );
}

function closeMenuFun() {
  gsap.to(links, {
    opacity: 0,
    y: -20,
    duration: 0.4,
    ease: "power3.in",
    onComplete: () => {
      gsap.set(links, { display: "none" });
    }
  });
}

document.querySelectorAll('.links li a').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 730) {
      closeMenuFun();
    }
  });
});


openMenu.addEventListener("click", openMenuFun);
closeMenu.addEventListener("click", closeMenuFun);

//Home-Section 
gsap.from(".photo1 img", {
  x: 200,
  opacity: 0,
  duration: 2,
  ease: "power4.out",
});
gsap.to(".photo1 img", {
  y: -12.5,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

gsap.from(".photo2 img", {
  x: 200,
  opacity: 0,
  duration: 2,
  ease: "power4.out",
});
gsap.to(".photo2 img", {
  y: -12.5,
  duration: 3,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
});

const tl = gsap.timeline();
tl.to("h1 span", {
  opacity: 1,
  y: 0,
  duration: 0.5,
  ease: "power3.out",
  stagger: 0.25,
}).to(
  ".buttons a",
  {
    opacity: 1,
    duration: 0.1,
    ease: "power3.out",
    stagger: 0.2,
  },
  "-=0.1"
);

//About-Section 

const teamMembers = [
  { img: "IMG/cards/35.webp", name: "Mariam El Desouky", job: "Team Leader, Quality Control" },
  { img: "IMG/cards/36.webp", name: "Raghda Abo Hindi", job: "HR" },
  { img: "IMG/cards/3.webp", name: "Mohamed Elkhashab", job: "Media Buyer" },
  { img: "IMG/cards/4.webp", name: "Omar Kilani", job: "Media Buyer" },
  { img: "IMG/cards/34.webp", name: "Aya El Sharkawy", job: "Content Creator" },
  { img: "IMG/cards/16.webp", name: "Salma El Kady", job: "Content Creator" },
  { img: "IMG/cards/17.webp", name: "Heba Ramadan", job: "Content Creator" },
  { img: "IMG/cards/28.webp", name: "Rahaf Ehab", job: "Content Creator" },
  { img: "IMG/cards/38.webp", name: "Heba Fouad", job: "Content Creator" },
  { img: "IMG/cards/14.webp", name: "Reem Zahra", job: "Content Creator" },
  { img: "IMG/cards/37.webp", name: "Haneen Gamal", job: "Content Creator" },
  { img: "IMG/cards/5.webp", name: "Mahmoud Morad", job: "Quality Control" },
  { img: "IMG/cards/21.webp", name: "Rawan Alawi", job: "Team Leader, Graphic Designer" },
  { img: "IMG/cards/22.webp", name: "Catherine Saad", job: "Graphic Designer" },
  { img: "IMG/cards/18.webp", name: "Ebtehal Magdy", job: "Graphic Designer" },
  { img: "IMG/cards/24.webp", name: "Rana Gharib", job: "Graphic Designer" },
  { img: "IMG/cards/20.webp", name: "Mariam El Sebaey", job: "Graphic Designer" },
  { img: "IMG/cards/19.webp", name: "Nada Ashraf", job: "Graphic Designer" },
  { img: "IMG/cards/29.webp", name: "Lely Emad", job: "Graphic Designer" },
  { img: "IMG/cards/6.webp", name: "Mahmoud Fouad", job: "Videographer" },
  { img: "IMG/cards/26.webp", name: "Nour Osama", job: "Videographer" },
  { img: "IMG/cards/7.webp", name: "Belal Ayman", job: "Video Editor" },
  { img: "IMG/cards/25.webp", name: "Taif Mounir", job: "Video Editor" },
  { img: "IMG/cards/27.webp", name: "Jumana Hudayb", job: "Video Editor" },
  { img: "IMG/cards/23.webp", name: "Salma Abedin", job: "Video Editor" },
  { img: "IMG/cards/15.webp", name: "Rawan Hamdy", job: "Video Editor" },
  { img: "IMG/cards/30.webp", name: "Menna El Ziny", job: "Team Leader, Moderation" },
  { img: "IMG/cards/10.webp", name: "Yomna El Abd", job: "Moderation" },
  { img: "IMG/cards/33.webp", name: "Salma Mahrous", job: "Moderation" },
  { img: "IMG/cards/31.webp", name: "Nancy El Shafey", job: "Moderation" },
  { img: "IMG/cards/9.webp", name: "Shahd Gaber", job: "Moderation" },
  { img: "IMG/cards/11.webp", name: "Salma Atlam", job: "Moderation" },
  { img: "IMG/cards/12.webp", name: "Taqa El Shazly", job: "Moderation" },
  { img: "IMG/cards/13.webp", name: "Mariam Abo Hindi", job: "Moderation" },
  { img: "IMG/cards/32.webp", name: "Sara Ahmed", job: "Moderation" },
  { img: "IMG/cards/39.webp", name: "Ahmed Abdelaziz", job: "Financial Manager" }
];

const aboutItems = document.querySelectorAll(".about-item");
aboutItems.forEach((item) => {
  item.querySelector(".about-header").addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

gsap.from(".photo3 img", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 60%",
    toggleActions: "play none none none",
  },
  y: -200,
  rotation: -15,
  opacity: 0,
  duration: 1.5,
  ease: "back.out(1.7)",
  onComplete: () => {
    gsap.to(".photo3 img", {
      rotation: 6,
      y: -5,
      transformOrigin: "top center",
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  },
});

gsap.from(".container-founders", {
  opacity: 0,
  x: -100,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".found",
    start: "top 75%",
    toggleActions: "play none none none",
    once: true,
  },
});

gsap.from(".txt-fo", {
  opacity: 0,
  x: 100,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".found",
    start: "top 75%",
    toggleActions: "play none none none",
    once: true,
  },
});


 const container = document.querySelector(".cards");

  teamMembers.forEach(member => {
    const card = `
      <div class="card">
        <img src="${member.img}" alt="${member.name}" loading="lazy" width="300" height="300" />
        <h4>${member.name}</h4>
        <p>${member.job}</p>
      </div>
    `;
    container.innerHTML += card;
  });


gsap.utils.toArray(".cards .card").forEach((card) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none none",
      once: true,
    },
    opacity: 0,
    y: 60,
    scale: 0.95,
    rotateX: -5,
    duration: 1,
    ease: "power4.out",
  });
});

//Services-Section 
gsap.from(".service-card", {
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".services-section",
    start: "top 50%",
    toggleActions: "play none none none",
  },
});

//Projects-Section 
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    autoHeight: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});

const projectSlides = document.querySelectorAll("#Projects .swiper-slide");
projectSlides.forEach((slide) => {
  const projectImg = slide.querySelector("img");
  const projectTitle = slide.querySelector("h1");
  const headSpans = slide.querySelectorAll(".head-slider");
  const paragraphs = slide.querySelectorAll(".paragraph");

  paragraphs.forEach((paragraph) => {
    const words = paragraph.innerText.split(" ").filter((w) => w.trim() !== "");
    paragraph.innerHTML = words
      .map((w) => `<span class="word">${w}</span>`)
      .join(" ");
  });

  const words = slide.querySelectorAll(".word");

  gsap.set([projectImg, projectTitle, headSpans, words], {
    opacity: 0,
    y: 30,
  });

  const tlProjects = gsap.timeline({
    scrollTrigger: {
      trigger: slide,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  tlProjects
    .to(projectImg, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power4.out",
    })
    .to(
      projectTitle,
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.5"
    );

  headSpans.forEach((head, i) => {
    const relatedWords = paragraphs[i].querySelectorAll(".word");

    tlProjects
      .to(head, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        relatedWords,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.04,
          ease: "power3.out",
        },
        "-=0.3"
      );
  });
});
//Contact-Section 
let contactTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".contact-us",
    start: "top 60%",
    once: true,
  },
});

contactTl.from(".mapback", {
  x: -150,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

contactTl.from(
  ".map",
  {
    y: 100,
    opacity: 0,
    duration: 1.4,
    ease: "power3.out",
  },
  "-=0.6"
);

contactTl.from(
  ".contact-form",
  {
    x: 150,
    opacity: 0,
    duration: 1.6,
    ease: "power3.out",
  },
  "-=0.8"
);

gsap.utils.toArray(".contact-cards .cardCo").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      once: true,
      onEnter: () => console.log("Card animation started:", i),
    },
    y: 100,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out",
  });
});

gsap.utils.toArray(".social-Media a").forEach((icon, i) => {
  gsap.from(icon, {
    scrollTrigger: {
      trigger: icon,
      start: "top 95%",
      once: true,
      onEnter: () => console.log("Social icon animation started:", i),
    },
    y: 50,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out",
  });
});

gsap.to(".map", {
  yPercent: -13,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".contact-us",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault(); 

    const request = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      phone: document.getElementById("phone").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    try {
      const response = await fetch("http://localhost:5000/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "faressamer1907@gmail.com",
          subject: `New message from ${request.name}`,
          body: `
Name: ${request.name}
Email: ${request.email}
Phone: ${request.phone}
Message: ${request.message}
Date: ${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}
          `
        })
      });

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: " Your message has been sent!",
          background: "#000",
          color: "#fff",
          confirmButtonColor: "#333"
        });
        contactForm.reset(); 
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed to send message. Please try again later.",
          background: "#000",
          color: "#fff",
          confirmButtonColor: "#333"
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "warning",
        title: "An error occurred while sending your message.",
        background: "#000",
        color: "#fff",
        confirmButtonColor: "#333"
      });
    }
  });
});

