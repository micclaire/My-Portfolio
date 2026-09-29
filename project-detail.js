/* ============================================
   PROJECT DETAIL JS
   ============================================
   HOW TO ADD/EDIT YOUR PROJECTS:
   - Find the `projects` array below
   - Each object = one project
   - The `id` must match the ?id= in your card links
   - Replace image URLs with your own (put images in an /images folder)
   ============================================ */

   const projects = [
    {
      id: 1,
      title: "Sun Life CPMA",
      figmaLink: "https://www.figma.com/proto/5yBnp9vHaAolaG4YtAJs8k/AHO---VUL-Prototypes-Copy?node-id=135-19356&t=kvJEszoQBQpkDIYz-0&scaling=min-zoom&content-scaling=fixed&page-id=44%3A36470&starting-point-node-id=62%3A26767",
      category: "UI/UX",
      type: "Internship",
      year: "2026",
      tools: ["Figma", "Miro"],
      role: "UI/UX Designer",
      coverImage: "images/Sun Life cover 2.png",
      intro: "I contributed to the Experience Design team by designing and prototyping interfaces for internal and client-facing digital applications. My work primarily focused on CPMA, Client Portal, and Advisor experiences using Figma and the Helios Design System.",
      overview: "I worked on various features including Login & Registration, Tiered Registration, Orphan Management, VUL Fund Switch & Allocation, and CCO – Auto Charge Arrangement. My responsibilities involved creating UI designs, interactive prototypes, user flows, and revisions based on stakeholder feedback and business requirements.",
      process: "I translated requirements and existing user flows into high-fidelity Figma designs, applying Helios components and UX principles to maintain consistency and usability. I collaborated with designers, supervisors, and stakeholders through design reviews, meetings, and UAT preparation, continuously refining the designs based on feedback.",
      outcome: "Through these projects, I gained hands-on experience designing for real-world enterprise applications and working within an established design system. I strengthened my skills in UI design, prototyping, user-centered design, collaboration, and adapting designs to changing business requirements.",
      images: [
        "images/VUL 1.png",
        "images/VUL 2.png",
        "images/VUL 3.png",
        "images/AHO 1.png",
        "images/AHO 2.png",
        "images/AHO 3.png",
        "images/AHO 4.png",
        "images/AHO 5.png",
      ],
      prevId: 7,
      nextId: 2,
    },
    {
      id: 2,
      title: "ikigai. — Promotional Posters",
      category: "Graphic Design",
      type: "Personal Project",
      year: "2023-2026",
      tools: ["Canva", "Adobe Photoshop", "Figma"],
      role: "Designer",
      coverImage: "images/posters cover.png",
      intro: "A passion project where I created a brand identity for 'ikigai'. This let me explore design, color pallettes, and styles from scratch.",
      overview: "‘ikigai.’ started as a simple senior high school project — a coffee and pastry brand concept brought to life through a single poster. Instead of leaving it as a one-time output, I revisited the idea and turned it into a personal creative playground where I could continuously practice and improve my graphic design skills. Over time, it evolved into a growing collection of promotional posters exploring different visual styles, layouts, and branding approaches.",
      process: "I treated each poster as an experiment — testing different aesthetics, from minimalist coffee ads to more expressive and playful pastry visuals. I explored typography pairings, color moods, and composition techniques while keeping the ‘ikigai’ identity loosely consistent. Most designs started from references and inspiration boards, then translated into my own interpretations using tools like Canva, Photoshop, and Figma. This iterative process helped me understand what works visually and how to communicate a brand through design.",   
      outcome: "This project became a key part of my growth as a designer. It allowed me to build confidence, develop my visual style, and practice creating cohesive yet diverse promotional materials. More than just a school project, ‘ikigai.’ represents my willingness to keep learning, experimenting, and turning small ideas into meaningful creative work.",      
      images: [
        "images/ikigai..png",
        "images/matcha.png",
        "images/bibimbap.png",
        "images/strawberry.png",
        "images/ilocos.png",
        "images/ikigai iced.png",
        "images/ikigais cup.png",
        "images/dubai.png",
        "images/skin.png",
      ],
      prevId: 1,
      nextId: 3,
    },
    {
      id: 3,
      title: "Web-based Catering and Management System",
      figmaLink: "https://www.figma.com/proto/QI6MOwGMDcUz6IgoFi32RG/GASS-UCSS?node-id=287-1731&t=xxW85eheOEn0b28Z-0&scaling=min-zoom&content-scaling=fixed&page-id=274%3A2506&starting-point-node-id=287%3A1731",
      category: "UI/UX",
      type: "School Project",
      year: "2025-2026",
      tools: ["Figma", "C#", "JavaScript", "CSS"],
      role: "UI Designer & Frontend Developer",
      coverImage: "images/1.png",
      intro: "A web-based catering reservation and management system developed as a school project for the PUP University Catering Services Section (UCSS). I focused on designing user-friendly interfaces and building responsive front-end components to improve how users browse, reserve, and manage catering services.",
      overview: "The project aims to streamline the reservation process for UCSS by providing a centralized platform for viewing menu packages, checking availability, and managing bookings. It addresses common issues such as manual scheduling, lack of real-time updates, and inefficient communication between clients and administrators.",
      process: "I started by identifying user needs and pain points based on typical reservation workflows. I created wireframes and high-fidelity designs in Figma, focusing on clarity, accessibility, and ease of navigation. On the development side, I implemented the front-end using HTML, CSS, JavaScript, and integrated it with backend functionalities using C#. Key features include reservation forms, menu browsing, availability tracking, and an admin dashboard for managing requests and reports.",
      outcome: "The system resulted in a more organized and efficient reservation experience, making it easier for users to book services and for administrators to manage requests. Through this project, I strengthened my skills in UI/UX design, front-end development, and working with real-world system requirements. It also gave me hands-on experience in building a functional system from concept to implementation.",      images: [
        "images/Website Laptop Mockup Instagram Post.png",
        "images/login.png",
        "images/available date - homepage (before).png",
        "images/Client Side, My Reservation.png",
        "images/view menu packages - breakfast.png",
        "images/view details - generated orf (page).png",
        "images/Client Side, ORF.png",
        "images/Admin Dashboard (Reports).png",
      ],
      prevId: 2,
      nextId: 4,
    },
    {
      id: 4,
      title: "Academic Publication Materials",
      category: "Graphic Design",
      type: "School Project",
      year: "2023-2026",
      tools: ["Figma", "Adobe Photoshop", "Canva"],
      role: "Graphic Designer",
      coverImage: "images/pubmats.png",
      intro: "A collection of publication materials created for our block section from 2nd to 4th year. As the assigned graphic designer, I developed visuals for various events, announcements, and initiatives, adapting each design to match our evolving block identity.",
      overview: "This project showcases a range of pubmats made for academic and extracurricular activities, including event promotions, reminders, and internal announcements. Each batch of designs reflects our block’s branding at the time — from clean and minimal layouts to more expressive and themed visuals depending on the occasion.",
      process: "For each pubmat, I started by understanding the purpose, audience, and required information. I explored different styles, color palettes, and typography based on our block’s current branding and the nature of the event. I used tools like Figma, Photoshop, and Canva to execute the designs, balancing creativity with clarity to ensure the message was easy to understand while still visually engaging.",
      outcome: "This collection highlights my versatility as a designer and my ability to adapt to different styles while maintaining consistency within a given brand. It also strengthened my skills in layout, typography, and visual communication under real deadlines, as these pubmats were actively used within our block.",      images: [
        "images/542711633_122168016248544468_2801242879017883381_n.png",
        "images/383241222_122100955184052774_3109969363187194855_n.jpg",
        "images/Screenshot 2026-01-15 233856.png",
        "images/473568418_122180066126052774_6552438471075895879_n.jpg",
        "images/BIRTHDAY POSTING.png",
        "images/image.png",
        "images/Congratulatory Post.png",
        "images/Screenshot 2026-01-16 000338.png",
        "images/471136457_122127478388544468_1824369654339189627_n.jpg",
        "images/Screenshot 2026-01-15 234013.png",
        "images/CNCP - New Year PubMat.png",
      ],
      prevId: 3,
      nextId: 5,
    },
    {
      id: 5,
      title: "PUP HanapHub",
      figmaLink: "https://www.figma.com/proto/9vXYYtVQpA2QKVOI9u6rlm/PUP-Hanap-Hub?node-id=185-184&t=NRstjD75oSwcV3JS-0&scaling=scale-down&content-scaling=fixed&page-id=185%3A8&starting-point-node-id=185%3A184",
      category: "UI/UX",
      type: "School Project",
      year: "2025",
      tools: ["Figma"],
      role: "UI/UX Designer",
      coverImage: "images/HH cover.png",
      intro: "The PUP HanapHub is a web-based platform for PUP Main Campus students and faculty to report, track, and claim lost and found items. It provides a centralized system to reduce the time and effort needed to locate misplaced belongings while ensuring items are returned to their rightful owners.",
      overview: "PUP HanapHub is a proposed web-based platform where users can report lost or found items, search through listings, and submit claims with proof of ownership. The concept uses a peer-to-peer claiming process with notifications and structured item information to help reduce false claims and improve the recovery process.",
      process: "As the UI/UX Designer, I focused on translating the proposed system requirements into a clear and user-friendly interface, from organizing user flows and information architecture to designing the main screens and interactions. I worked with the team to understand the problem, define key user needs, and create mockups that support reporting, searching, and claiming items.",
      outcome: "The project resulted in a high-fidelity UI/UX concept demonstrating how a centralized lost-and-found experience could work within PUP Main Campus. While the system was not implemented, the prototype presents a structured user experience and visual direction that could serve as a foundation for future development.",
      images: [
        "images/HH 1.png",
        "images/HH 2.png",
        "images/HH 3.png",
      ],
      prevId: 4,
      nextId: 6,
    },
    {
      id: 6,
      title: "Editorial Posters",
      category: "Graphic Design",
      type: "Personal Project",
      year: "2023-2026",
      tools: ["Adobe Photoshop", "Canva", "Figma"],
      role: "Graphic Designer",
      coverImage: "images/Screenshot 2026-03-22 000802.png",
      intro: "A collection of personal graphic design works inspired by pop culture, featuring edited visuals of celebrities and movie scenes. This project serves as a creative outlet where I explore different styles, especially Y2K and Gen Z-inspired aesthetics.",
      overview: "This collection includes a variety of social media-style edits and posters that reinterpret existing images through my own design perspective. The focus is on experimenting with bold typography, layered compositions, and trendy visual elements commonly seen in modern digital culture.",
      process: "Each design starts with selecting a strong visual — usually a celebrity photo or a movie still — then building around it using typography, textures, and graphic elements. I explored styles like Y2K (chrome effects, glitch textures, vibrant colors) and Gen Z aesthetics (playful layouts, stickers, mixed media). I used tools like Photoshop, Canva, and Figma to experiment freely and refine my visual direction.",
      outcome: "This project helped me develop my creative confidence and define my personal design style. It showcases my ability to work with existing visuals and transform them into engaging, trend-driven designs. It also allowed me to stay updated with current design trends while continuously improving my technical and creative skills.",      images: [
        "images/hanni.jpg",
        "images/If You Want To.png",
        "images/fit.png",
        "images/magazine.jpg",
      ],
      prevId: 5,
      nextId: 7,
    },
    {
      id: 7,
      title: "Quizmaster",
      category: "UI/UX",
      type: "School Project",
      year: "2024-2025",
      tools: ["HTML", "CSS", "JavaScript"],
      role: "Frontend Developer",
      coverImage: "images/2.png",
      intro: "A web-based quiz application developed as a school project for our Web Development subject during 3rd year. Quizmaster allows users to test their knowledge across different subjects through interactive quizzes.",
      overview: "The goal of Quizmaster was to create a simple and accessible platform where students can engage in self-assessment and practice their understanding of various topics. The app features multiple quizzes categorized by subject, making it easy for users to choose and answer questions based on their interests or needs.",
      process: "I focused on building the front-end interface using HTML, CSS, and JavaScript. I worked on structuring the quiz flow — from selecting a quiz, answering questions, to displaying results. I ensured the layout was clean and intuitive so users could navigate easily without confusion. Basic interactivity, such as answer selection and score calculation, was implemented using JavaScript.",
      outcome: "The project resulted in a functional and user-friendly quiz platform that supports interactive learning. It strengthened my front-end development skills, especially in handling user input, dynamic content, and creating smooth user flows. It also gave me experience in building a complete web app as part of a team project.",      images: [
        "images/Screenshot 2026-03-21 190645.png",
        "images/Screenshot 2026-03-21 190754.png",
        "images/Screenshot 2026-03-21 190709.png",
        "images/Screenshot 2026-03-21 190813.png",
      ],
      prevId: 6,
      nextId: 1,
    },
  ];
  
  /* ---- Render the project ---- */
  function renderProject() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));
    const project = projects.find((p) => p.id === id);
    const page = document.getElementById("projectPage");
  
    if (!project) {
      page.innerHTML = `
        <div class="container" style="padding:120px 24px; text-align:center;">
          <h2 style="font-family:var(--font-display); margin-bottom:16px;">Project not found 😢</h2>
          <p style="color:var(--text-muted); margin-bottom:32px;">This project doesn't exist yet. Go back and pick another!</p>
          <a href="index.html#portfolio" class="btn btn-primary">← Back to Portfolio</a>
        </div>`;
      return;
    }
  
    // Update page title
    document.title = `${project.title} — Your Portfolio`;
  
    // Find prev/next projects
    const prev = projects.find((p) => p.id === project.prevId);
    const next = projects.find((p) => p.id === project.nextId);
  
    // Build gallery HTML
    const galleryHTML = project.images
      .map((src, i) =>
        `<img src="${src}" alt="${project.title} detail ${i + 1}" loading="lazy" class="${i === 0 ? 'wide' : ''}" />`
      )
      .join("");
  
    // Build tools HTML
    const toolsHTML = project.tools
      .map((t) => `<span class="detail-tool-tag">${t}</span>`)
      .join("");

      const figmaButtonHTML = project.figmaLink
      ? `<a href="${project.figmaLink}" target="_blank" rel="noopener noreferrer" class="btn btn-primary full-width">View on Figma →</a>`
      : "";

    page.innerHTML = `
      <div class="container">
        <a href="index.html#portfolio" class="detail-back" id="backToPortfolio">
          <span>←</span> Back to all projects
        </a>
  
        <!-- Cover image -->
        <div class="detail-hero reveal">
          <img src="${project.coverImage}" alt="${project.title}" />
          <div class="detail-hero-overlay"></div>
          <div class="detail-hero-label">
            <span class="detail-badge">${project.category}</span>
            <span class="detail-badge">${project.type}</span>
          </div>
        </div>
  
        <!-- Main layout: content + sidebar -->
        <div class="detail-layout">
  
          <!-- Left: main content -->
          <div class="detail-main">
            <h1 class="detail-title reveal">${project.title}</h1>
            <p class="detail-intro reveal">${project.intro}</p>
  
            <div class="detail-section reveal">
              <h3>Overview</h3>
              <p>${project.overview}</p>
            </div>
  
            <div class="detail-gallery ${project.category === 'UI/UX' ? 'gallery-single-col' : ''} reveal">${galleryHTML}</div>  

            <div class="detail-section reveal">
              <h3>Process</h3>
              <p>${project.process}</p>
            </div>
  
            <div class="detail-section reveal">
              <h3>Outcome & Learnings</h3>
              <p>${project.outcome}</p>
            </div>
  
            <!-- Prev / Next navigation -->
            <div class="detail-nav-row reveal">
              ${prev ? `<a href="project-detail.html?id=${prev.id}" class="detail-nav-link">← ${prev.title}</a>` : '<span></span>'}
              <a href="index.html#portfolio" class="detail-nav-link back-all">All Projects ✦</a>
              ${next ? `<a href="project-detail.html?id=${next.id}" class="detail-nav-link">${next.title} →</a>` : '<span></span>'}
            </div>
          </div>
  
          <!-- Right: sidebar info -->
          <aside class="detail-sidebar reveal">
            <div class="sidebar-card">
              <h4>Project Info</h4>
              <div class="detail-meta-item">
                <span class="meta-label">Type</span>
                <span class="meta-value">${project.type}</span>
              </div>
              <div class="detail-meta-item">
                <span class="meta-label">Category</span>
                <span class="meta-value">${project.category}</span>
              </div>
              <div class="detail-meta-item">
                <span class="meta-label">Year</span>
                <span class="meta-value">${project.year}</span>
              </div>
              <div class="detail-meta-item">
                <span class="meta-label">My Role</span>
                <span class="meta-value">${project.role}</span>
              </div>
            </div>
  
            <div class="sidebar-card">
              <h4>Tools Used</h4>
              <div class="detail-tools">${toolsHTML}</div>
            </div>
  
            ${figmaButtonHTML}

            <a href="index.html#contact" class="btn btn-primary full-width" style="text-align:center; margin-top:12px;">
              Work with me →
            </a>

          </aside>
  
        </div>
      </div>`;
  
    // Trigger scroll-reveal on freshly injected elements
    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });
    
    document.addEventListener("click", (e) => {
      const backLink = e.target.closest("#backToPortfolio");
      if (backLink) {
        sessionStorage.setItem("skipLoader", "true");
      }
    });
  }
  
  // Run on page load
  renderProject();