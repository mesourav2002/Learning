import React from "react";
const MoviesData = [
  {
    name: "Dangal",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
    Released: 2016,
    Language: "Hindi",
    Hero: "Aamir Khan",
    budget: "70 Crore",
  },
  {
    name: "Baahubali 2",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg",
    Released: 2017,
    Language: "Hindi,Telgu",
    Hero: "Prabhas",
    budget: "250 Crore",
  },
  {
    name: "RRR",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/RRR_Poster.jpg/220px-RRR_Poster.jpg",
    Released: 2022,
    Language: "	Telugu",
    Hero: "Ram Charan",
    budget: "400 Crore",
  },
  {
    name: "KGF 2",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d0/K.G.F_Chapter_2.jpg",
    Released: 2022,
    Language: "Kannada",
    Hero: "Yash",
    budget: "100 Crore",
  },

  {
    name: "Jawan",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Jawan_film_poster.jpg/220px-Jawan_film_poster.jpg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Shah Rukh Khan",
    budget: "370 Crore",
  },
  {
    name: "Pathaan",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Pathaan_film_poster.jpg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Shah Rukh Khan",
    budget: "240 Crore",
  },

  {
    name: "Bajwrangi Bhaijaan",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Bajrangi_Bhaijaan_Poster.jpg/220px-Bajrangi_Bhaijaan_Poster.jpg",
    Released: 2015,
    Language: "Hindi",
    Hero: "Salman Khan",
    budget: "90 Crore",
  },
  {
    name: "Animal",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Animal_%282023_film%29_poster.jpg/220px-Animal_%282023_film%29_poster.jpg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Ranbir Kapoor",
    budget: "100 Crore",
  },

  {
    name: "Secret Superstar",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/50/Secret_Superstar_-_Poster_3.jpg",
    Released: 2017,
    Language: "Hindi",
    Hero: "Amir Khan",
    budget: "15 Crore",
  },

  {
    name: "PK",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
    Released: 2014,
    Language: "Hindi",
    Hero: "Amir Khan",
    budget: "122 Crore",
  },

  {
    name: "Salar",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Salaar_Part_1_%E2%80%93_Ceasefire.jpg/220px-Salaar_Part_1_%E2%80%93_Ceasefire.jpg",
    Released: 2023,
    Language: "Telgu",
    Hero: "Prabhas",
    budget: "270 Crore",
  },

  {
    name: "2.0",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cf/2.0_film_poster.jpg",
    Released: 2018,
    Language: "Tamil",
    Hero: "Rajnikant",
    budget: "400 Crore",
  },

  {
    name: "Gadar 2",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Gadar_2_film_poster.jpg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Sunny Deol",
    budget: "60",
  },

  {
    name: "Sultan",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Sultan_film_poster.jpg",
    Released: 2016,
    Language: "Hindi",
    Hero: "Salman Khan",
    budget: "90 Crore",
  },

  {
    name: "Jailer",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/Jailer_2023_Tamil_film_poster.jpg",
    Released: 2023,
    Language: "Tamil",
    Hero: "Rajnikant",
    budget: "200 Crore",
  },

  {
    name: "Sanju",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/8/85/Sanju_poster.jpg",
    Released: 2018,
    Language: "Hindi",
    Hero: "Ranbir Kapoor",
    budget: "96 Crore",
  },

  {
    name: "Leo",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/75/Leo_%282023_Indian_film%29.jpg",
    Released: 2023,
    Language: "Tamil",
    Hero: "Vijay",
    budget: "250 Crore",
  },
  {
    name: "Padmaavat",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/73/Padmaavat_poster.jpg",
    Released: 2018,
    Language: "Hindi",
    Hero: "Ranveer Kapoor",
    budget: "180 Crore",
  },
  {
    name: "Dhoom 3",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f1/Dhoom_3_Film_Poster.jpg",
    Released: 2013,
    Language: "Hindi",
    Hero: "Amir Khan",
    budget: "100 Crore",
  },
  {
    name: "War",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6f/War_official_poster.jpg",
    Released: 2019,
    Language: "Hindi",
    Hero: "Hrithik Roshan",
    budget: "170 Crore",
  },
  {
    name: "Tiger 3",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Tiger_3_poster.jpg/220px-Tiger_3_poster.jpg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Salman Khan",
    budget: "300 Crore",
  },
  {
    name: "DUNKI",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/Dunki_poster.jpg/220px-Dunki_poster.jpg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Shah Rukh Khan",
    budget: "120 Crore",
  },
  {
    name: "Andhadhun",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg",
    Released: 2018,
    Language: "Hindi",
    Hero: "Ayusmann Khurana",
    budget: "32 Crore",
  },
  {
    name: "Ponniyin Selvan",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Ponniyin_Selvan_I.jpg",
    Released: 2022,
    Language: "Tamil",
    Hero: "Vikram",
    budget: "450 Crore",
  },
  {
    name: "Tiger Zinda hai",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Tiger_Zinda_Hai_poster.jpg",
    Released: 2017,
    Language: "Hindi",
    Hero: "Salman Khan",
    budget: "120 Crore",
  },
  {
    name: "Vikram",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Vikram_2022_poster.jpg/220px-Vikram_2022_poster.jpg",
    Released: 2022,
    Language: "Tamil",
    Hero: "Kamal Hasan",
    budget: "120 Crore",
  },
  {
    name: "Sahao",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/6/6b/Saaho_poster.jpg",
    Released: 2019,
    Language: "Telgu",
    Hero: "Prabhas",
    budget: "350 Crore",
  },
  {
    name: "Brahmastra",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Brahmastra_Part_One_Shiva.jpg/220px-Brahmastra_Part_One_Shiva.jpg",
    Released: 2022,
    Language: "Hindi",
    Hero: "Ranveer Kapoor",
    budget: "375 Crore",
  },
  {
    name: "Simmba",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/82/Simmba_poster.jpg/220px-Simmba_poster.jpg",
    Released: 2018,
    Language: "Hindi",
    Hero: "Ranveer Singh",
    budget: "80 Crore",
  },
  {
    name: "# Idiots",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg",
    Released: 2009,
    Language: "Hindi",
    Hero: "Amir Khan",
    budget: "55 Crore",
  },
  {
    name: "Chennai Express",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1b/Chennai_Express.jpg",
    Released: 2013,
    Language: "Hindi",
    Hero: "Shah Rukh Khan",
    budget: "70 Crore",
  },
  {
    name: "Kantara",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg",
    Released: 2022,
    Language: "Kannada",
    Hero: "	Rishab Shetty",
    budget: "16 Crore",
  },
  {
    name: "Krrish 3",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/28/Krrish_3_%282013_film%29_poster.jpg",
    Released: 2013,
    Language: "Hindi",
    Hero: "Hrithik Roshan",
    budget: "95 Crore",
  },
  {
    name: "Kabir Singh",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Kabir_Singh.jpg/220px-Kabir_Singh.jpg",
    Released: 2019,
    Language: "Hindi",
    Hero: "Shahid Kapoor",
    budget: "60 Crore",
  },
  {
    name: "Dilwale",
    imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/Dilwale.jpg",
    Released: 2015,
    Language: "Hindi",
    Hero: "Shah Rukh Khan",
    budget: "75 Crore",
  },
  {
    name: "Tanhaji",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/Tanaji_film_poster.jpg",
    Released: 2020,
    Language: "Hindi",
    Hero: "Ajay Devgn",
    budget: "120 Crore",
  },
  {
    name: "Prem Ratan Dhan Payo",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b2/Prem_Ratan_Dhan_Payo_Release_Poster.jpg",
    Released: 2015,
    Language: "Hindi",
    Hero: "Salman Khan",
    budget: "60 Crore",
  },
  {
    name: "Pushpa",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg/220px-Pushpa_-_The_Rise_%282021_film%29.jpg",
    Released: 2021,
    Language: "Telgu",
    Hero: "Allu Arjun",
    budget: "200 Crore",
  },
  {
    name: "Bajirao Mastani",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/Bajirao_Mastani_poster.jpg",
    Released: 2021,
    Language: "Hindi",
    Hero: "Ranveer Singh",
    budget: "145 Crore",
  },
  {
    name: "Rocky Aur Rani",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/65/Rocky_Aur_Rani_Ki_Prem_Kahani.jpg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Ranveer Kapoor",
    budget: "160 Crore",
  },
  {
    name: "Adipurush",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cf/Adipurush_poster.jpeg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Prabhas",
    budget: "500 Crore",
  },
  {
    name: "KICK",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Kick_%282014_film%29_Official_release_poster.jpg",
    Released: 2014,
    Language: "Hindi",
    Hero: "Salman Khan",
    budget: "140 Crore",
  },
  {
    name: "Happy New Year",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f0/Happy_New_Year_Poster_%282014_film%29.jpg/220px-Happy_New_Year_Poster_%282014_film%29.jpg",
    Released: 2014,
    Language: "Hindi",
    Hero: "Shah Rukh Khan",
    budget: "150 Crore",
  },
  {
    name: "Ponniyin Selvan II",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Ponniyin_Selvan_II.jpg",
    Released: 2023,
    Language: "Tamil",
    Hero: "Vikram",
    budget: "200 Crore",
  },
  {
    name: "HanuMan",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bb/Hanu_Man_film_Release_poster.jpeg",
    Released: 2024,
    Language: "Telgu",
    Hero: "Teja Sajja",
    budget: "40 Crore",
  },
  {
    name: "Drisyam 2",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Drishyam_2_2022_film_poster.jpg/220px-Drishyam_2_2022_film_poster.jpg",
    Released: 2022,
    Language: "Hindi",
    Hero: "Ajay Devgn",
    budget: "50 Crore",
  },
  {
    name: "Uri The Surgical Strike",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg",
    Released: 2019,
    Language: "Hindi",
    Hero: "Vicky Kaushal",
    budget: "342 Crore",
  },
  {
    name: "The Kasmir Files",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/The_Kashmir_Files_poster.jpg/220px-The_Kashmir_Files_poster.jpg",
    Released: 2022,
    Language: "Hindi",
    Hero: "Mithun Chakraborty",
    budget: "340 Crore",
  },
  {
    name: "Fighter",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Fighter_film_teaser.jpg/220px-Fighter_film_teaser.jpg",
    Released: 2023,
    Language: "Hindi",
    Hero: "Hrithik Roshan",
    budget: "330 Crore",
  },
];

export default MoviesData;
