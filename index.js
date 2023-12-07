// Function to simulate fetching match data from a backend/API
function fetchMatchData() {
    return new Promise((resolve) => {
      // Simulate asynchronous fetching after 1 second
      setTimeout(() => {
        const matchData = [
          { id: 1, teams: ['Team A', 'Team B'], score: '2 - 1', date: '2023-12-15' },
          { id: 2, teams: ['Team C', 'Team D'], score: '0 - 0', date: '2023-12-17' },
          // Add more match objects as needed
        ];
        resolve(matchData);
      }, 1000); // Simulated delay of 1 second
    });
  }
  
  // Function to display match schedule based on fetched data
  async function displayMatchSchedule() {
    const matchScheduleContainer = document.getElementById('match-schedule');
  
    try {
      const matchData = await fetchMatchData(); // Fetch match data asynchronously
  
      // Generate HTML for match schedule
      const matchScheduleHTML = matchData.map(match => `
        <div class="match-item">
          <h3>${match.teams[0]} vs ${match.teams[1]}</h3>
          <p>Score: ${match.score}</p>
          <p>Date: ${match.date}</p>
        </div>
      `).join('');
  
      // Update the UI with match schedule
      matchScheduleContainer.innerHTML = matchScheduleHTML;
    } catch (error) {
      console.error("Error fetching match data:", error);
      matchScheduleContainer.innerHTML = "<p>Failed to fetch match data.</p>"; // Display error message
    }
  }
  
  // Function to initialize the app
  function init() {
    displayMatchSchedule(); // Display match schedule after fetching data
    // Other initialization tasks like fetching live scores, team info, etc.
  }
  
  // Call the init function when the DOM content is loaded
  document.addEventListener('DOMContentLoaded', init);
  