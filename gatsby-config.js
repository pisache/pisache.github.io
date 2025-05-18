module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://pisache.github.io/`,
    // Your Name
    name: 'HoJun Lee',
    // Main Site Title
    title: `HoJun Lee | Embedded System / Firmware Engineer`,
    // Description that goes under your name in main bio
    description: `Embedded System and Firmware Engineer at Freshtech`,
    // Optional: Twitter account handle
    //author: ``,
    // Optional: Github account URL
    github: `https://github.com/pisache`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/hojun-lee-16757a1b6/`,
    // Content of the About Me section
    about: `I'm a passionate maker who loves building things with my own hands. This passion led me to become an embedded systems engineer, where I write firmware and solder wires. Currently, I am working on a company project that utilizes ZephyrOS and nRF-based boards to develop a UWB system. In the future, I aim to enhance my skills in PCB design to become a well-rounded embedded systems developer`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'UWB Livestock health monitoring (Current Project)',
        description:
          'A company project that develops a livestock monitoring system using UWB embedded ear tag. We are co-developing the system with Samsung LSI, using their Exynos Connect U100 UWB chip.',
        link: '',
      },
      {
        name: 'Atmosphere Sensor Developments',
        description:
          'Main Job I do at Freshtech. I write firmware for multiple atmospheric sensors for sensor node. I also design the actual product that is manufactured.'
      },
      {
        name: 'Numerical Method Visualizer',
        description:
          'A web-app team project using react to visualize multiple numerical methods. On backend, I have used mathjax to create algorithm to calculate the interpolations including Simpson\'s Rule, Trapezoid Rule and Lagrange Polynomial Interpolations. On the frontend, I have created graphing methods for said formulas and the website footer.',
        link: 'https://sfuosdev.github.io/Macm316/',
      },
      {
        name: 'Harrys Tools',
        description:
          'An outsource project for Harry\'s Education. Harry\'s Education is a private education institution, or Hagwon(학원), which requires a heavy load of paper works to provide catered education for the students. I have created a personalized document automation tools on demand with python and hwp API.',
        link: 'https://github.com/pisache/harrys-tools',
      },
      {
        name: 'University class Projects',
        description:
          'and other number of class projects including \"Diffusion model for enhancing CT images (Machine Learning, Python)\", \"0\\1 Knapsack problem solver(Distributed system, C++)\", \"Bytetools Web Application(Outsource web-app, react)\" and \"Youtube trending video prediction model(Machine Learning, Python)\"',
        link: '',
        }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Freshtech',
        description: 'Emebedded System / Firmware Engineer, January 2025 - Present',
        link: 'https://www.freshtech.kr/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Embedded System',
        description:
          'ZephyrOS, nRF52, ESP32, STM32, C/C++, Assembly(AMD64), Linux',
      },
      {
        name: 'Data Science',
        description: 'Python, NumPy, Pandas, Matlab',
      },
      {
        name: 'Web development',
        description: 'Javascript(es6), Typesrcipt, React, Node.js, Next.js, jest, HTML, CSS',
      },
      {
        name: 'Other',
        description:
          'PostgreSQL, MySQL, SQLite, Docker',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
