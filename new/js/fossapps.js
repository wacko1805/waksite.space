let userName = "wacko1805"; // User name of the repository
let repoName = "fossapps"; // Repository name
let releaseTag = "latest"; // Using tag 'latest' for latest released download count
let url = `https://api.github.com/repos/${userName}/${repoName}/releases/${releaseTag}`;
let request = new XMLHttpRequest();
request.open('GET', url, true);
request.onload = function () {
    let users = JSON.parse(this.response);
    let output = users['assets'][0]["download_count"];
    console.log(output);
    document.getElementById('download').innerHTML = output;
};
request.send();