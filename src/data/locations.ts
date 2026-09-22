export interface GymLocation {
  name: string;
  address: string;
  coach: string;
  phone: string;
  years: string[];
}

export interface DistrictGroup {
  district: string;
  gyms: GymLocation[];
}

export const locations: DistrictGroup[] = [
  {
    "district": "Centras",
    "gyms": [
      {
        "name": "Kauno Senamiesčio progimnazija",
        "address": "Nemuno g. 12, Kaunas",
        "coach": "Armandas Sinkevičius",
        "phone": "+370 684 137 10",
        "years": [
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"
        ]
      }
    ]
  },
  {
    "district": "Gričiupis",
    "gyms": [
      {
        "name": "Kauno Kovo 11-osios gimnazija",
        "address": "Kovo 11-osios g. 50, Kaunas",
        "coach": "Edgaras Čižinauskas",
        "phone": "+370 653 387 78",
        "years": [
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"
        ]
      },
      {
        "name": "Kauno B. Brazdžionio mokykla-daugiafunkcis centras",
        "address": "Radvilėnų pl. 7, Kaunas",
        "coach": "Lukas Šaulevičius",
        "phone": "+370 626 197 29",
        "years": [
          "2014",
          "2015",
          "2016",
          "2017",
          "2018"
        ]
      },
      {
        "name": "Kauno Nemuno vidurinė mokykla",
        "address": "A. ir J. Gravrogkų g. 9, Kaunas",
        "coach": "Karolis Matviejevas",
        "phone": "+370 695 454 91",
        "years": [
          "2014",
          "2015",
          "2016",
          "2017",
          "2018"
        ]
      },
      {
        "name": "Kauno Varpelio pradinė mokykla",
        "address": "Vakarų g. 15, Kaunas",
        "coach": "Martynas Valančius",
        "phone": "+370 645 564 35",
        "years": [
          "2017",
          "2018",
          "2019",
          "2020"
        ]
      },
      {
        "name": "Kauno mokykla-darželis „Šviesa“",
        "address": "Rimvydo g. 20, Kaunas",
        "coach": "Adomas Rybelis",
        "phone": "+370 677 159 18",
        "years": [
          "2018",
          "2019",
          "2020"
        ]
      }
    ]
  },
  {
    "district": "Eiguliai",
    "gyms": [
      {
        "name": "„Kauno Švara“ sporto salė (Berniukai ir Mergaitės)",
        "address": "Statybininkų g. 3, Kaunas",
        "coach": "Martynas Valančius",
        "phone": "+370 645 564 35",
        "years": [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017"
        ]
      },
      {
        "name": "Kauno Martyno Mažvydo progimnazija",
        "address": "Šiaurės pr. 55, Kaunas",
        "coach": "Ugnius Bandžiulis",
        "phone": "+370 676 845 58",
        "years": [
          "2015",
          "2016",
          "2017",
          "2018",
          "2019"
        ]
      }
    ]
  },
  {
    "district": "Rokai",
    "gyms": [
      {
        "name": "Kauno Antano Smetonos gimnazija",
        "address": "Vijūnų g. 2, Kaunas",
        "coach": "Domas Čepaitis",
        "phone": "+370 689 066 20",
        "years": [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018"
        ]
      }
    ]
  },
  {
    "district": "Šančiai",
    "gyms": [
      {
        "name": "Vytauto Didžiojo universiteto klasikinio ugdymo mokykla",
        "address": "Vokiečių g. 164, Kaunas",
        "coach": "Tomas Mockus",
        "phone": "+370 690 908 65",
        "years": [
          "2015",
          "2016",
          "2017",
          "2018",
          "2019"
        ]
      },
      {
        "name": "KTU Vaižganto progimnazija",
        "address": "Skuodo g. 27, Kaunas",
        "coach": "Lukas Šitkauskas",
        "phone": "+370 616 086 18",
        "years": [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014",
          "2015",
          "2016"
        ]
      },
      {
        "name": "Kauno Montesori mokykla–darželis „Žiburėlis“",
        "address": "Verkių g. 36, Kaunas",
        "coach": "Tautvydas Stankus",
        "phone": "+370 623 189 14",
        "years": [
          "2018",
          "2019",
          "2020"
        ]
      },
      {
        "name": "Motiejaus Valančiaus mokykla-darželis",
        "address": "Kranto 5–oji g. 7, Kaunas",
        "coach": "Domas Čepaitis",
        "phone": "+370 689 066 20",
        "years": [
          "2017",
          "2018",
          "2019",
          "2020"
        ]
      }
    ]
  },
  {
    "district": "Šilainiai",
    "gyms": [
      {
        "name": "Kauno Santaros gimnazija (Berniukai ir Mergaitės)",
        "address": "Baltų pr. 51, Kaunas",
        "coach": "Kajus Lapienis",
        "phone": "+370 606 130 25",
        "years": [
          "2013",
          "2014",
          "2015",
          "2016",
          "2017",
          "2018"
        ]
      },
      {
        "name": "Šv. Kazimiero progimnazija",
        "address": "Vandžiogalos pl. 51, Kaunas",
        "coach": "Lukas Januškevičius",
        "phone": "+370 670 123 74",
        "years": [
          "2014",
          "2015",
          "2016",
          "2017",
          "2018",
          "2019"
        ]
      }
    ]
  },
  {
    "district": "Vilijampolė",
    "gyms": [
      {
        "name": "Kauno Suzuki progimnazija",
        "address": "A. Stulginskio g. 61 A, Kaunas",
        "coach": "Gustas Virbalis",
        "phone": "+370 679 968 39",
        "years": [
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"
        ]
      },
      {
        "name": "Kauno Vešvų gimnazija",
        "address": "Mūšos g. 6, Kaunas",
        "coach": "Ugnius Bandžiulis",
        "phone": "+370 676 845 58",
        "years": [
          "2015",
          "2016",
          "2017",
          "2018"
        ]
      }
    ]
  },
  {
    "district": "Žaliakalnis",
    "gyms": [
      {
        "name": "Kauno mokykla-darželis „Rūtelė“",
        "address": "Kalniečių g. 167, Kaunas",
        "coach": "Tautvydas Stankus",
        "phone": "+370 623 189 14",
        "years": [
          "2018",
          "2019",
          "2020"
        ]
      },
      {
        "name": "Kauno Gedimino sporto ir sveikatinimo gimnazija",
        "address": "Aukštaičių g. 78, Kaunas",
        "coach": "Rokas Mileris / Adomas Rybelis",
        "phone": "+370 646 717 98",
        "years": [
          "2014",
          "2015",
          "2016",
          "2017",
          "2018"
        ]
      }
    ]
  },
  {
    "district": "Freda",
    "gyms": [
      {
        "name": "Mokykla – darželis „Pažinimo medis“",
        "address": "Vilties g. 2, Kaunas",
        "coach": "Lukas Šitkauskas",
        "phone": "+370 616 086 18",
        "years": [
          "2017",
          "2018",
          "2019",
          "2020"
        ]
      }
    ]
  },
  {
    "district": "Kauno rajonas",
    "gyms": [
      {
        "name": "Domeikavos gimnazija",
        "address": "Bažnyčios g. 3, Domeikava",
        "coach": "Lukas Januškevičius",
        "phone": "+370 670 123 74",
        "years": [
          "2014",
          "2015",
          "2016",
          "2017",
          "2018"
        ]
      },
      {
        "name": "Ežerėlio pagrindinė mokykla",
        "address": "Kauno g. 19, Ežerėlis",
        "coach": "Edgaras Čižinauskas",
        "phone": "+370 653 387 78",
        "years": [
          "2012",
          "2013",
          "2014",
          "2015",
          "2016"
        ]
      },
      {
        "name": "Raudondvario A. ir A. Kriauzų pradinė mokykla",
        "address": "Instituto g. 20, Raudondvaris",
        "coach": "Gytis Vyšniauskas",
        "phone": "+370 601 162 83",
        "years": [
          "2016",
          "2017",
          "2018",
          "2019",
          "2020"
        ]
      },
      {
        "name": "Vilkijos dienos centras",
        "address": "Saulėtekių g. 89, Vilkija",
        "coach": "Lukas Šaulevičius",
        "phone": "+370 626 197 29",
        "years": [
          "2010",
          "2011",
          "2012",
          "2013",
          "2014"
        ]
      }
    ]
  }
];
