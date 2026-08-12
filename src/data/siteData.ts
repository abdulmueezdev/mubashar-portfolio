export const SITE_DATA = {
  profile: {
    name: "Muhammad Mubashar Murtaza",
    title: "Junior Data Analyst",
    location: "Lahore, Pakistan",
    phone: "+92 345 4415405",
    email: "mubasharmurtaza008@gmail.com",
    linkedin: "https://www.linkedin.com/in/muhammad-mubashar-murtaza",
  },
  education: {
    degree: "BS Economics with Data Science",
    university: "COMSATS University Islamabad, Lahore",
    period: "2024 — Present (Expected 2028)",
    cgpa: "3.33 / 4.0",
    coursework: [
      "Statistics & Probability",
      "Economics Principles",
      "Object Oriented Programming (Python)",
      "DSA (Python)",
      "Programming Fundamentals (C++)",
    ],
  },
  skills: {
    languages: ["Python (Pandas, NumPy, Matplotlib)", "SQL"],
    spreadsheet: ["Excel (PivotTables, VLOOKUP, XLOOKUP, Index Matching)", "Google Sheets"],
    tools: ["Google Colab", "VS Code", "Jupyter Notebook"],
    other: ["Data Cleaning", "Exploratory Data Analysis (EDA)", "Data Visualization"],
  },
  projects: [
    {
      title: "Typing Speed Analysis",
      subtitle: "MonkeyType Data",
      tech: ["Python", "Pandas", "Matplotlib"],
      bullets: [
        "Collected personal typing performance data (CSV) from MonkeyType platform over multiple sessions",
        "Performed exploratory data analysis using Pandas to identify performance trends and patterns",
        "Visualized typing speed progression and session distribution using Matplotlib",
        "Achieved a personal best of 84 WPM in the 15-second test format",
      ],
      highlight: "84 WPM",
    },
    {
      title: "Coffee Sales Data Analysis & Dashboard",
      subtitle: "Excel",
      tech: ["Excel"],
      bullets: [
        "Integrated multiple datasets (Orders, Customers, Products) using XLOOKUP and INDEX MATCH to build a comprehensive relational database",
        "Performed EDA utilizing PivotTables to extract key metrics including total sales by coffee type and regional performance",
        "Developed a dynamic dashboard featuring country and customer bar charts, leveraging data storytelling for actionable business insights",
      ],
      highlight: "Dynamic Dashboard",
    },
  ],
  certifications: [
    { name: "Introduction to SQL", provider: "Solo Learn" },
    { name: "SQL Intermediate", provider: "Solo Learn" },
    { name: "Excel Skills for Business: Essentials", provider: "Coursera" },
  ],
  languages: [
    { name: "English", level: "Professional" },
    { name: "Urdu", level: "Native" },
  ],
  softSkills: ["Analytical Thinking", "Data Storytelling", "Attention to Detail"],
};
