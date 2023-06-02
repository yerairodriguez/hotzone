import axios from 'axios'

export default function handlerTeam (req, res) {
  const headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    'X-RapidAPI-Key': 'caf3723320msh5ac7fb188d5477bp124f9ejsn7db4fda13700'
  }

  axios
    .get('https://nba-latest-news.p.rapidapi.com/articles', {
      method: 'GET',
      headers: headersList
    })
    .then(response => {
      res.status(200).json(response.data)
    })
}
