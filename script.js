// CodeDojo Daily - JavaScript

const problems = [
    {
        title: "Two Sum",
        description: "Find two numbers in an array whose sum equals the target value.",
        difficulty: "Easy",
        tag: "Arrays"
    },
    {
        title: "Reverse a String",
        description: "Write a program to reverse the given string.",
        difficulty: "Easy",
        tag: "Strings"
    },
    {
        title: "Maximum Subarray",
        description: "Find the maximum sum of a continuous subarray.",
        difficulty: "Medium",
        tag: "Arrays"
    },
    {
        title: "Longest Common Subsequence",
        description: "Find the longest common subsequence between two strings.",
        difficulty: "Hard",
        tag: "Dynamic Programming"
    }
];

// Display problems
function displayProblems(list = problems) {
    const problemList = document.getElementById("problemList");

    if (!problemList) return;

    problemList.innerHTML = "";

    if (list.length === 0) {
        problemList.textContent = "No problems found.";
        return;
    }

    list.forEach((problem, index) => {
        const item = document.createElement("div");
        item.className = "problem-item";

        const title = document.createElement("h3");
        title.textContent = problem.title;

        const details = document.createElement("p");
        details.textContent = problem.tag + " | " + problem.difficulty;

        item.append(title, details);

        item.addEventListener("click", () => {
            showProblem(problem);
        });

        problemList.appendChild(item);
    });
}

// Show selected problem
function showProblem(problem) {
    document.getElementById("problemTitle").textContent =
        problem.title;

    document.getElementById("problemDescription").textContent =
        problem.description;

    const badge = document.getElementById("difficultyBadge");
    badge.textContent = problem.difficulty;
    badge.className = "badge " + problem.difficulty.toLowerCase();
}

// Filter problems
function filterProblems() {
    const tag = document.getElementById("tagFilter").value;
    const difficulty =
        document.getElementById("difficultyFilter").value;

    const filtered = problems.filter(problem => {
        const tagMatch = tag === "All" || problem.tag === tag;
        const difficultyMatch =
            difficulty === "All" ||
            problem.difficulty === difficulty;

        return tagMatch && difficultyMatch;
    });

    displayProblems(filtered);
}

// Demo test runner
function runTests() {
    const code = document.getElementById("codeEditor").value;
    const results = document.getElementById("testResults");

    results.innerHTML = "";

    if (code.trim() === "") {
        results.textContent = "Please write your code first!";
        return;
    }

    const message = document.createElement("div");
    message.className = "test-result";
    message.textContent =
        "Code received. Demo mode: actual code execution is not connected yet.";

    results.appendChild(message);

    const cases = [
        "Sample Test Case 1: Input - [2, 7, 11, 15], Target - 9",
        "Sample Test Case 2: Input - [3, 2, 4], Target - 6",
        "Sample Test Case 3: Input - [3, 3], Target - 6"
    ];

    cases.forEach(test => {
        const item = document.createElement("div");
        item.className = "test-result";
        item.textContent = test + " | Ready for evaluation";
        results.appendChild(item);
    });
}

// Team data
let teams = [
    { name: "Binary Beasts", score: 120 },
    { name: "Code Warriors", score: 100 },
    { name: "Debug Masters", score: 80 }
];

// Display teams
function displayTeams() {
    const teamList = document.getElementById("teamList");
    const leaderboard = document.getElementById("leaderboard");

    if (!teamList || !leaderboard) return;

    teamList.innerHTML = "";
    leaderboard.innerHTML = "";

    teams.forEach(team => {
        const item = document.createElement("div");
        item.className = "team-item";
        item.textContent = team.name;
        teamList.appendChild(item);
    });

    const sortedTeams = [...teams].sort(
        (a, b) => b.score - a.score
    );

    sortedTeams.forEach((team, index) => {
        const item = document.createElement("div");
        item.className = "leaderboard-item";
        item.textContent =
            (index + 1) + ". " + team.name +
            " - " + team.score + " points";

        leaderboard.appendChild(item);
    });
}

// Create a new team
function createTeam() {
    const input = document.getElementById("teamNameInput");
    const teamName = input.value.trim();

    if (teamName === "") {
        alert("Please enter a team name!");
        return;
    }

    const exists = teams.some(
        team => team.name.toLowerCase() === teamName.toLowerCase()
    );

    if (exists) {
        alert("This team already exists!");
        return;
    }

    teams.push({
        name: teamName,
        score: 0
    });

    input.value = "";
    displayTeams();

    alert("Team created successfully!");
}

// Connect buttons and filters
document.addEventListener("DOMContentLoaded", () => {

    displayProblems();
    displayTeams();

    document.getElementById("tagFilter")
        ?.addEventListener("change", filterProblems);

    document.getElementById("difficultyFilter")
        ?.addEventListener("change", filterProblems);

    document.getElementById("runTestsBtn")
        ?.addEventListener("click", runTests);

    document.getElementById("createTeamBtn")
        ?.addEventListener("click", createTeam);

});