// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-resume",
          title: "resume",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/resume/Suryansh_Aryan.pdf";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-last-month-i-had-the-opportunity-to-learn-about-the-recent-advancements-on-digital-twins-dt-for-the-lunar-ecosystem-at-the-cislunar-and-lunar-digital-ecosystem-workshop-held-at-nasa-goddard-space-suryansh-aryan",
        
          title: 'Last month, I had the opportunity to learn about the recent advancements on... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Last month, I had the opportunity to learn about the recent advancements on digital twins (DT) for the Lunar ecosystem at the CisLunar and Lunar Digital Ecosystem Workshop held at NASA Goddard Space Flight Center. The event was a treasure trove of insights into the current DT platform capabilities and the exciting future prospects for enhanced collaboration within the Cislunar community.From discussions on NASA Digital Twin strategic framework to existing digital transformation platforms like NVIDIA Omniverse, Siemens Xcelerator and emerging platforms such as Sedaro and Cesium Moon Terrain, the list of available softwares and ongoing constant development of high fidelity models and analysis tools is profound! The information received was highly valuable especially for someone who is actively working on a high fidelity lunar satellite constellation testbed to validate feasibility of a sustainable lunar constellation in near future and determine required measures to be taken for a delay/disruption tolerant network (DTN) based lunar satellite communication and navigation. I would love to discuss more on the recent developments and issues in cislunar digital twin efforts which would help me in my future research. If you are someone who has worked or researched on the cislunar dynamics and the current developments and challenges in lunar communication and navigation, please feel free to reach out and be the part of the community!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/suryansh-aryan-91a035165_last-month-i-had-the-opportunity-to-learn-activity-7283935706698121218-I03h?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdWaeYBGTEWpp_Coe73CjgIfYCiLyrkGEk", "_blank");
          
        },
      },{id: "post-last-week-i-had-a-fantastic-time-at-the-2024-american-astronautical-society-aas-astrodynamics-specialist-conference-in-broomfield-colorado-suryansh-aryan",
        
          title: 'Last week, I had a fantastic time at the 2024 American Astronautical Society... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Last week, I had a fantastic time at the 2024 American Astronautical Society (AAS) Astrodynamics Specialist Conference in Broomfield, Colorado! Connecting with like-minded individuals and delving into the latest #Astrodynamics research was truly inspiring.During the event, I had the privilege of presenting my research work on &amp;quot;Four Body Invariant Structures And Chaos Analysis For Jovian Multi-Moon Ballistic Transfers,&amp;quot; alongside my advisor Dr. Riley Fitzgerald. I immensely look forward to further discussions on orbital stability and perturbation theory with the community soon. Check out my paper here for more details: https://lnkd.in/dRKJBdpg",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/suryansh-aryan-91a035165_astrodynamics-activity-7232407029561098240-hLbh?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdWaeYBGTEWpp_Coe73CjgIfYCiLyrkGEk", "_blank");
          
        },
      },{id: "post-superposition-of-knowledge-about-reality",
        
          title: ' : Superposition of knowledge about Reality <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@suryaryan/superposition-of-knowledge-about-reality-6912464a2c5d?source=rss-d61e91b29c1b------2", "_blank");
          
        },
      },{id: "post-wavefunction-the-realm-of-realism",
        
          title: 'Wavefunction: The Realm of Realism <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@suryaryan/wavefunction-the-realm-of-realism-9d4e21702565?source=rss-d61e91b29c1b------2", "_blank");
          
        },
      },{id: "post-a-new-phase-of-matter-time-crystals-from-impossible-to-reality",
        
          title: 'A new phase of matter — Time Crystals, from Impossible to Reality <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@suryaryan/a-new-phase-of-matter-time-crystals-from-impossible-to-reality-5706221e5ab4?source=rss-d61e91b29c1b------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "projects-4-body-quasi-periodic-tori-amp-transit-trajectories",
          title: '4-Body Quasi-Periodic tori &amp;amp; Transit Trajectories',
          description: "Collocation-based computation of 4 body invariant quasi-periodic orbits for Jovian Moons, Europa &amp; Callisto, finding transit librating trajectories due to Ganymede&#39;s periodicity",
          section: "Projects",handler: () => {
              window.location.href = "/projects/InvariantQP/";
            },},{id: "projects-lunar-network-emulation",
          title: 'Lunar Network Emulation',
          description: "Master&#39;s Thesis on Interoperable Earth-Lunar communication service architecture",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SelenoNet/";
            },},{id: "projects-spacenet-leo-network-emulator",
          title: 'SpaceNet LEO network emulator',
          description: "Two-Phase emulator architecture for realistic Low-Earth-Orbit (LEO) networks capable of providing network performance for satellite constellations like Starlink, Kuiper, OneWeb etc. Due to its modular architecture the testbed is scalable to multi-shell network topologies and allows flexible ISL &amp; GSL grid schemes, static routing schemes, congestion routing and supports standard network test applications, Ping and IPerf.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/SpaceNet-project/";
            },},{id: "projects-multicopter-path-planning-and-mission-designing",
          title: 'Multicopter Path Planning and Mission Designing',
          description: "Design and development of Quadcopter and Hexacopters for level 4 autonomy",
          section: "Projects",handler: () => {
              window.location.href = "/projects/UAV-research/";
            },},{id: "projects-distributed-asteroid-inspection-simulation",
          title: 'Distributed Asteroid Inspection Simulation',
          description: "Distributed GNC Architecture for Optimized Asteroid Inspection",
          section: "Projects",handler: () => {
              window.location.href = "/projects/asteroid_inspection/";
            },},{id: "projects-gsoc-cern-computational-project-task",
          title: 'GSoC CERN Computational Project Task',
          description: "Evaluated code restructuring and profiling of C++ FastJet package for jet reconstruction simulations. Additionally, due to a need for high-fidelity integration while maintaining the particle&#39;s integral of motion, I developed and evaluated three short-listed Symplectic integrators for Geant4 simulations",
          section: "Projects",handler: () => {
              window.location.href = "/projects/codeprofiling/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%73%75%72%79%61%6E%73%68%61%72%79%61%6E%30%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Xploror", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/suryansh-aryan-91a035165", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JGK6NwoAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
