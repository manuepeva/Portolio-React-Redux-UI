import axios from "axios";

export async function getGithubRepos(username) {
  try {
    const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=asc`;
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    // eslint-disable-next-line
    console.error("Error fetching GitHub data:", err);
    throw err;
  }
}
