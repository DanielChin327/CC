document.addEventListener("DOMContentLoaded", function () {
  const searchButton = document.getElementById("search-button");
  const searchResultsContainer = document.getElementById("search-results");

  searchButton.addEventListener("click", function () {
    // Fake job results data
    const fakeJobs = [
      {
        title: "Software Engineer",
        company: "Tech Corp",
        location: "Seoul, South Korea",
      },
      {
        title: "Frontend Developer",
        company: "Web Solutions",
        location: "Tokyo, Japan",
      },
      {
        title: "Data Analyst",
        company: "Analytics Inc.",
        location: "San Francisco, USA",
      },
    ];

    // Clear previous results
    searchResultsContainer.innerHTML = "";

    // Display fake results
    fakeJobs.forEach((job) => {
      const jobDiv = document.createElement("div");
      jobDiv.classList.add("job-result");

      jobDiv.innerHTML = `
        <h3>${job.title}</h3>
        <p>${job.company} - ${job.location}</p>
      `;

      searchResultsContainer.appendChild(jobDiv);
    });
  });
});
