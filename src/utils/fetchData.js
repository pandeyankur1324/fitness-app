export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "f31760274dmsh138392306918ad3p168c25jsn591a80b894b1",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  url: "https://youtube-search-and-download.p.rapidapi.com/channel/about",
  params: {
    id: "UCE_M8A5yxnLfW0KghEeajjw",
  },
  headers: {
    "X-RapidAPI-Key": "f31760274dmsh138392306918ad3p168c25jsn591a80b894b1",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
