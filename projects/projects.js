let projects = [];

let pendingSources = 3;

let onComplete = () => {
  document.getElementById("loading").innerHTML = "";

  let projectsGrid = document.getElementById("projects");

  projects.sort((a, b) => b.last_updated - a.last_updated);

  projects.forEach((repo) => {
    let desc = repo.description ?? "<i>No description</i>";
    let linkHtml =
      repo.url === null
        ? ``
        : `<div class="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5"></path><path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5"></path></svg></div>`;

    let buttonOnClick =
      repo.url === null ? `` : `onclick="location.href='${repo.url ?? ""}'"`;

    projectsGrid.innerHTML += `<div class="flex w-full items-center flex justify-center items-center py-12 px-6" ${buttonOnClick}>
    <div>
      <div class="max-w-xs h-64 flex flex-col justify-between bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg mb-6 py-5 px-4">
        <div>
          <h4 class="focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3">
            ${repo.name}
          </h4>
          <p class="focus:outline-none text-gray-800 dark:text-gray-100 text-sm">
            ${desc}
          </p>
        </div>
        <div>
          <div class="flex items-center justify-between text-gray-800">
            <p tabindex="0" class="focus:outline-none text-sm dark:text-gray-100">
              updated on <b>${repo.last_updated.toDateString()}</b>
            </p>
            ${linkHtml}
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
  });
};

let onReceiveResponse = (response) => {
  pendingSources -= 1;

  response.forEach((repo) => {
    let effectiveName = repo.full_name.replace("rithviknishad/", "");

    if (repo.fork) {
      effectiveName = effectiveName + " (forked)";
    }

    projects.push({
      name: effectiveName,
      description: repo.description,
      url: repo.html_url,
      last_updated: new Date(repo.pushed_at),
    });
  });

  if (pendingSources <= 0) {
    onComplete();
  }
};

let martialArtsSim = {
  full_name: "martial-arts",
  description: "Martial Arts Sim done for WD101 Course @pupilfirst training.",
  html_url: "/martial-arts",
  pushed_at: new Date("2022-01-21"),
};

// TODO: remove entry once repo made public, as it'll automaticall be fetched using GitHub API.
let vaidyutiPrivateProject = {
  full_name: "Vaidyuti",
  description:
    "Vaidyuti is about Decentralized and Autonomous Energy Grid project to provide a framework to manage clusters of DC microgrids.",
  html_url: null, // Private Repo
  pushed_at: new Date("2022-01-20"),
};

onReceiveResponse([martialArtsSim, vaidyutiPrivateProject]);

$.getJSON(
  "https://api.github.com/users/rithviknishad/repos",
  onReceiveResponse
);

$.getJSON("https://api.github.com/orgs/osumpi/repos", onReceiveResponse);
