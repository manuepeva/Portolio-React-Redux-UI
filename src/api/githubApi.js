import axios from "axios";

export async function getGithubRepos(username, token) {
  try {
    const headers = {
      Authorization: `Basic ${btoa(`${username}:${token}`)}`,
    };

    const url = `https://api.github.com/users/${username}/repos?per_page=100&sort=asc`;
    const response = await axios.get(url, { headers });

    return response.data;
  } catch (err) {
    console.error("Error fetching GitHub data:", err);
    throw err; 
  }
}
