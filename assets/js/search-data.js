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
        },{id: "post-wsri26-wolfram-sitnikov-suryansh-aryan",
        
          title: '#wsri26 #wolfram #sitnikov | Suryansh Aryan <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Last week, I finished a time-intensive project in the Wolfram Summer Research Institute (#WSRI26) titled “Inverting the Sitnikov Problem.” It was a unique effort in exploring the computational approaches in inverting a restricted version of the three-body problem using the #Wolfram language. I am incredibly grateful to my mentors, Pavel Hájek and Jesús Adrián Montesinos Correa, for their constant guidance, late-night discussions, and support throughout the program.The #Sitnikov problem is a classic example of the emergent chaotic dynamics of a particle under the gravitational influence of two orbiting primary bodies. While traditional research on the problem has identified initial condition sensitivity and invariances in the phase space, my project focused on inverting the Sitnikov theorem (https://lnkd.in/gjBbu9wT): determining computable initial conditions for a desired dynamical behavior. By using concepts from symbolic dynamics, partitioning discrete phase space, and finite-time Lyapunov exponent analysis, this project developed a database for over 1 million sample points and built the inverting technique to identify initial conditions associated with prescribed crossing sequences in the chaotic Sitnikov system.Find my computational essay here: https://lnkd.in/gHW44btgI would like to sincerely thank all the mentors, organizers, and Wolfram staff for some of the most amazing theoretical concepts I learned from countless lectures and workshops, making this program such a rewarding experience. Special thanks to Stephanie Bowyer for creating an environment that encouraged collaboration, learning, and exploration, and to Stephen Wolfram for supporting initiatives that bring together researchers around the world to tackle interesting computational problems. I am grateful for the opportunity to be part of this community and for everything I learned throughout the program.",
        section: "Posts",
        handler: () => {
          
            window.open("https://lnkd.in/p/eBSQTxZS", "_blank");
          
        },
      },{id: "post-aerospace-selenonet-lunanet-graduated-virginiatech-vthokies-aerospaceengineering-spacesystems-lunarexploration-delaytolerantnetworking-navigationsystems-suryansh-aryan-11-comments",
        
          title: '#aerospace #selenonet #lunanet #graduated #virginiatech #vthokies #aerospaceengineering #spacesystems #lunarexploration #delaytolerantnetworking #navigationsystems | Suryansh... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "I am grateful to share that I have officially graduated with a Master of Science in #Aerospace Engineering from Virginia Tech. These past three years have been an incredible experience, allowing me to engage with a wide range of research challenges while working alongside outstanding teams. This journey would not have been possible without the guidance and support of my advisor, Dr. Samantha Parry Kenyon, Ph.D. ; my co-advisor, Dr. Riley Fitzgerald; and my committee members, Dr. Shane Ross  and Ms. Cheryl Gramling. They have been the constant supporters of my research on LunaNet-compliant lunar communication and navigation architecture designs, a topic that is still in its early stages of development within the field. This work represents a preliminary effort toward answering an important question: What quality-of-service (QoS) margins are required for a reliable lunar communication and positioning system? Such infrastructure may eventually become as essential to the Moon as GPS and the internet are to life on Earth today.As part of this research, I developed #SelenoNet, a high-fidelity, data-driven simulation framework for evaluating future lunar communication and navigation architectures based on the #LunaNet concept being developed primarily by NASA, ESA, and JAXA. This framework integrates high-fidelity orbital dynamics, signal modeling, delay-tolerant networking, and navigation modeling to assess how future lunar infrastructure can remain reliable, scalable, and fault-tolerant for both surface assets and orbiting spacecraft. Following the ongoing code refactoring and documentation efforts, the current plan is to release SelenoNet Version 1 as an open-access tool for both industry and academia before next year.I&#39;m also honored that my thesis was nominated amongst the top 10 best graduate research recognized across the college of engineering, as part of the 2026 Paul E. Torgersen Research Excellence Award (https://lnkd.in/emZEgX9t)!As I begin the next chapter of my career, I am actively seeking opportunities in space systems modeling and simulation, and navigation positions to continue pursuing my interest in developing system-level physics engines for aerospace dynamical systems. While different roles have different requirements, I am open to relocation for full-time positions and DO NOT require work sponsorship, for any. I would be excited to connect with researchers and industry leaders working on similar challenges related to the future of space exploration. I look forward to exchanging ideas contributing to technologies that will help shape humanity&#39;s return to the Moon and beyond.Please feel free to reach out and connect with me!Masters Thesis: https://lnkd.in/gGAYCR5hPersonal website: https://xploror.github.io/GitHub: https://github.com/Xploror#graduated #VirginiaTech #VThokies #AerospaceEngineering #SpaceSystems #LunarExploration #DelayTolerantNetworking #NavigationSystems | 11 comments on LinkedIn",
        section: "Posts",
        handler: () => {
          
            window.open("https://lnkd.in/p/eUMmmFEy", "_blank");
          
        },
      },{id: "post-virginia-tech-presents-spacenet-at-smallsat-conference-suryansh-aryan-posted-on-the-topic-linkedin",
        
          title: 'Virginia Tech presents SpaceNet at SmallSat Conference | Suryansh Aryan posted on the... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This week at the Small Satellite Conference (SmallSat), Salt Lake City, Utah, I will be presenting on the latest capabilities and findings from Virginia Tech&#39;s LEO space network emulator called SpaceNet. It serves as a digital twin, simulating delay-tolerant networks for LEO mega-constellations like #Starlink, #Kuiper, and #Iridium, while capable of incorporating link budgets for custom terrestrial device types and satellite comm modules. Its unique two-phase simulation-emulation architecture allows enhanced scalability and resource management without compromising the high fidelity of the entire digital system.To all SmallSat attendees at the conference, please do visit booth E8 in the poster section for further details on our project or to just connect with us. We are also open to collaborating with people in satellite communication fields and get in-touch with emerging small satellite communication technologies that could enhance our digital emulation performance.Explore our Github codebase: https://lnkd.in/epnRAzum Poster access: https://lnkd.in/e86k4UHn#smallsat2025 #spacetech #digitaltwin #networkemulation #SpaceNet",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/suryansh-aryan-91a035165_starlink-kuiper-iridium-activity-7360555069563437057-_2Qz?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdWaeYBGTEWpp_Coe73CjgIfYCiLyrkGEk", "_blank");
          
        },
      },{id: "post-last-month-i-had-the-opportunity-to-learn-about-the-recent-advancements-on-digital-twins-dt-for-the-lunar-ecosystem-at-the-cislunar-and-lunar-digital-ecosystem-workshop-held-at-nasa-goddard-space-suryansh-aryan",
        
          title: 'Last month, I had the opportunity to learn about the recent advancements on... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Last month, I had the opportunity to learn about the recent advancements on digital twins (DT) for the Lunar ecosystem at the CisLunar and Lunar Digital Ecosystem Workshop held at NASA Goddard Space Flight Center. The event was a treasure trove of insights into the current DT platform capabilities and the exciting future prospects for enhanced collaboration within the Cislunar community.From discussions on NASA Digital Twin strategic framework to existing digital transformation platforms like NVIDIA Omniverse, Siemens Xcelerator and emerging platforms such as Sedaro and Cesium Moon Terrain, the list of available softwares and ongoing constant development of high fidelity models and analysis tools is profound! The information received was highly valuable especially for someone who is actively working on a high fidelity lunar satellite constellation testbed to validate feasibility of a sustainable lunar constellation in near future and determine required measures to be taken for a delay/disruption tolerant network (DTN) based lunar satellite communication and navigation. I would love to discuss more on the recent developments and issues in cislunar digital twin efforts which would help me in my future research. If you are someone who has worked or researched on the cislunar dynamics and the current developments and challenges in lunar communication and navigation, please feel free to reach out and be the part of the community!",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/posts/suryansh-aryan-91a035165_last-month-i-had-the-opportunity-to-learn-activity-7283935706698121218-I03h?utm_source=share&utm_medium=member_desktop&rcm=ACoAACdWaeYBGTEWpp_Coe73CjgIfYCiLyrkGEk", "_blank");
          
        },
      },{id: "post-astrodynamics-suryansh-aryan",
        
          title: '#astrodynamics | Suryansh Aryan <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Last week, I had a fantastic time at the 2024 American Astronautical Society (AAS) Astrodynamics Specialist Conference in Broomfield, Colorado! Connecting with like-minded individuals and delving into the latest #Astrodynamics research was truly inspiring.During the event, I had the privilege of presenting my research work on &quot;Four Body Invariant Structures And Chaos Analysis For Jovian Multi-Moon Ballistic Transfers,&quot; alongside my advisor Dr. Riley Fitzgerald. I immensely look forward to further discussions on orbital stability and perturbation theory with the community soon. Check out my paper here for more details: https://lnkd.in/dRKJBdpg",
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
            },},{id: "projects-lunar-network-digital-twin",
          title: 'Lunar Network Digital Twin',
          description: "Master&#39;s Thesis on sustainable Earth-Lunar communication &amp; navigation service architecture",
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
