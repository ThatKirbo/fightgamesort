dataSetVersion = "2021-05-09"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Game",
    key: "series",
    tooltip: "Check this to restrict to certain games.",
    checked: false,
    sub: [ 
      { name: "GUILTY GEAR Xrd", key: "ggxrd" },
      { name: "GUILTY GEAR -STRIVE-", key: "ggst" },
      { name: "BlazBlue Central Fiction", key: "bb" },
      { name: "Melty Blood Type Lumina", key: "mbtl" },
      { name: "Melty Blood Actress Again Current Code", key: "mbaa" },
      { name: "Under Night In-Birth", key: "unib" },
      { name: "Persona 4 Arena Ultimax", key: "pa" },
      { name: "GUILTY GEAR Accent Core +R", key: "ggr" },     
      { name: "BlazBlue Cross Tag Battle", key: "bbtag" },
    ]
  },
  {
    name: "Remove Xrd Counterparts",
    key: "old",
    tooltip: "Check this to remove counterparts from Xrd",
    checked: false
  },
  {
    name: "Remove Actress Again Counterparts",
    key: "again",
    tooltip: "Check this to remove counterparts from Actress Again (including Seifuku)",
    checked: false
  },
  {
    name: "Remove Crossover Characters",
    key: "crossover",
    tooltip: "Check this to remove Saber, Ryougi, Eltnum, Akatsuki)",
    checked: false
  },
  {
    name: "Remove Anji Mito",
    key: "anji",
    tooltip: "Check this to kill Anji Mito",
    checked: false
  },
  {
    name: "Remove Neco-Arc",
    key: "neco",
    tooltip: "Check this to remove Neco Arc and Neco Arc Chaos",
    checked: false
  },
  {
    name: "Remove Luffy",
    key: "luffy",
    tooltip: "Check this to remove Monkey D. Luffy",
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Monkey D. Luffy",
    img: "xcR1Dbw.png",
    opts: {
      series: ["ggst", "ggxrd", "ggr", "bb", "mbtl", "mbaa", "unib", "bbtag", "pa", "mvc", "dbfc"],
      luffy: true
    }
  },
  {
    name: "Sol Badguy (Strive)",
    img: "fFyHQKf.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Ky Kiske (Strive)",
    img: "hSubO3U.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "May (Strive)",
    img: "bb65BxD.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Axl Low (Strive)",
    img: "iekyJzP.png",
    opts: {
      series: ["ggst"],
    },
  },
  {
    name: "Chipp Zanuff (Strive)",
    img: "iKHJvYT.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Potemkin (Strive)",
    img: "JfhZvtV.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Faust (Strive)",
    img: "b9GqGlp.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Millia Rage (Strive)",
    img: "VrrgEeH.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Zato-ONE (Strive)",
    img: "NdExJVW.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Ramlethal Valentine (Strive)",
    img: "gf83nRV.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Leo Whitefang (Strive)",
    img: "CI7SZ8T.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Nagoriyuki",
    img: "FINzjNw.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Giovanna",
    img: "hjiAbdR.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Anji Mito",
    img: "m1qAn1T.png",
    opts: {
      series: ["ggst"],
      anji: true
    }
  },
  {
    name: "I-No (Strive)",
    img: "JvKwjHA.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Goldlewis Dickinson",
    img: "kJfTCzD.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Jack-O (Strive)",
    img: "SMjpFOt.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Happy Chaos",
    img: "QZ8ZZ2A.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Baiken (Strive)",
    img: "u9ca6Ul.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Testament",
    img: "znolvft.png",
    opts: {
      series: ["ggst"],
    }
  },
  {
    name: "Kum Haehyun",
    img: "mVZ5SSt.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Elphelt Valentine",
    img: "xMoXwP4.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Sol Badguy (Xrd)",
    img: "dtqpBbF.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Ky Kiske (Xrd)",
    img: "Ll2WoRO.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Ramlethal Valentine (Xrd)",
    img: "sadOtws.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Raven",
    img: "QhqSW61.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Sin Kiske",
    img: "Jtuq9sZ.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Johnny",
    img: "BSrenCU.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "May (Xrd)",
    img: "EbLh63R.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Leo Whitefang (Xrd)",
    img: "lTPK5ef.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Chipp Zanuff (Xrd)",
    img: "t76NcQd.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Millia Rage (Xrd)",
    img: "BMJB0y3.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Baiken (Xrd)",
    img: "9nbMcRc.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Answer",
    img: "odtHD9H.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Zato-ONE (Xrd)",
    img: "OrVI9gp.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Potemkin (Xrd)",
    img: "sDWZVEu.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "I-No (Xrd)",
    img: "l2Q3uoC.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Slayer",
    img: "BTCGZeQ.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Venom",
    img: "7SJqdlJ.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Axl Low (Xrd)",
    img: "4iIJRpZ.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Dizzy",
    img: "IFQjus8.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Faust (Xrd)",
    img: "ycELKrA.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Bedman",
    img: "WC9PHSZ.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Jack-O (Xrd)",
    img: "MYBBt6N.png",
    opts: {
      series: ["ggxrd"],
      old: true
    }
  },
  {
    name: "Jam Kuradoberi",
    img: "xdrZbJQ.png",
    opts: {
      series: ["ggxrd"],
    }
  },
  {
    name: "Es",
    img: "2uCrLYV.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Hazama",
    img: "j44YhzC.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Naoto Kurogane",
    img: "wmUTZ2H.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Susano'o",
    img: "hdFGxTm.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Hibiki Kohaku",
    img: "ccOmIq0.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Tsubaki Yayoi",
    img: "Jwcbl19.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Mai Natsume",
    img: "LsjDji4.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Nu-13",
    img: "Oq8Xz7s.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Kagura Mutsuki",
    img: "RdMU8zQ.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Ragna the Bloodedge",
    img: "vVknKfj.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Jubei",
    img: "vAH8706.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Jin Kisaragi",
    img: "OzHq0L1.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Kokonoe",
    img: "8KsElzz.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Lambda-11",
    img: "FD6LnMQ.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Bullet",
    img: "ugCepWh.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Celica A. Mercury",
    img: "8kax04J.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Noel Vermillion",
    img: "gXm269D.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Izanami",
    img: "yOT3QES.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Rachel Alucard",
    img: "NsCcCAK.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Izayoi",
    img: "ilEsuYF.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Azrael",
    img: "SbYSpJT.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Iron Tager",
    img: "1TE6w4Q.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Litchi Faye Ling",
    img: "9IKpnXu.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Makoto Nanaya",
    img: "8NYPFUU.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Nine The Phantom",
    img: "cNJBqea.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Hakumen",
    img: "qowyuFK.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Arakune",
    img: "huGdjpF.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Amane Nishiki",
    img: "jdZxfDB.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Platinum The Trinity",
    img: "aquVH6u.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Relius Clover",
    img: "PQJ6CW7.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Mu-12",
    img: "fnWuX5r.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Carl Clover",
    img: "bPsEdUr.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Bang Shishigami",
    img: "WPTwMEr.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Valkenhayn R. Hellsing",
    img: "GbHs6Uj.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Taokaka",
    img: "DFTXXQp.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Yuuki Terumi",
    img: "UVAhGf6.png",
    opts: {
      series: ["bb"],
    }
  },
  {
    name: "Shiki Tohno (Tsuki:Re)",
    img: "bgkHhn8.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Arcueid Brunestud (Tsuki:Re)",
    img: "ktlnN95.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Akiha Tohno (Tsuki:Re)",
    img: "Y3D7z7d.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Ciel (Tsuki:Re)",
    img: "6LoYI1N.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Hisui (Tsuki:Re)",
    img: "Q5YNtNY.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Kohaku (Tsuki:Re)",
    img: "gp0izRG.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Miyako Arima (Tsuki:Re)",
    img: "8hBRF1f.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Kouma Kishima (Tsuki:Re)",
    img: "towoqmN.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Noel",
    img: "9lIlMeL.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Michael Roa Valdamjong (Tsuki:Re)",
    img: "p5vzKEL.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Vlov Arkhangel",
    img: "EZlsh9y.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Red Arcueid (Tsuki:Re)",
    img: "Z1YF28a.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Saber",
    img: "HZPIuWJ.png",
    opts: {
      series: ["mbtl"],
      crossover: true
    }
  },
  {
    name: "Dead Apostle Noel",
    img: "UpYAesk.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Aoko Aozaki (Tsuki:Re)",
    img: "BAJeD1V.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Powered Ciel (Tsuki:Re)",
    img: "SfRG2xB.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Mario Gallo Bestino",
    img: "QUoOQV7.png",
    opts: {
      series: ["mbtl"],
    }
  },
  {
    name: "Neco Arc (Tsuki:Re)",
    img: "9hRLPkV.png",
    opts: {
      series: ["mbtl"],
      neco: true
    }
  },
  {
    name: "Mash Kyrielight",
    img: "GkHheL5.png",
    opts: {
      series: ["mbtl"],
      crossover: true
    }
  },
  {
    name: "Aoko Aozaki (Tsukihime)",
    img: "vtPMF6B.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Shiki Tohno (Tsukihime)",
    img: "brOvRua.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Archetype: Earth",
    img: "0OKIUEv.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Shiki Nanaya",
    img: "nCxPQCh.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Kouma Kishima (Kagetsu Tohya/ACT Series)",
    img: "LiXTBtd.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Miyako Arima (Tsukihime)",
    img: "P9RXiCa.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Ciel (Tsukihime)",
    img: "Mi2W1fV.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Sion Eltnam Atlasia",
    img: "ujJ9aH6.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Riesbyfe Stridberg",
    img: "kD1u41d.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Sion TATARI",
    img: "fCmECxw.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Warachia",
    img: "pZkihRk.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Michael Roa Valdamjong (Tsukihime)",
    img: "thhJxdC.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Akiha Tohno (Tsukihime)",
    img: "BDPn2QP.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Arcueid Brunestud (Tsukihime)",
    img: "j8Qa1mP.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Powerd Ciel (Tsukihime)",
    img: "EpEarur.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Red Arcueid (ACT Series)",
    img: "96Rj5gE.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Akiha Vermillion",
    img: "3YN35Ni.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Mech-Hisui",
    img: "NrvRoRf.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Akiha Tohno (Seifuku)",
    img: "nKNkn1d.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Satsuki Yumizuka",
    img: "y54r253.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Len",
    img: "RScwOUO.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Shiki Ryougi",
    img: "Xnfng48.png",
    opts: {
      series: ["mbaa"],
      crossover: true
    }
  },
  {
    name: "White Len",
    img: "RNfugvM.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "NRVNQSR Chaos",
    img: "PQ0raYz.png",
    opts: {
      series: ["mbaa"],
    }
  },
  {
    name: "Neco-Arc Chaos",
    img: "qEXdu7j.png",
    opts: {
      series: ["mbaa"],
      neco: true
    }
  },
  {
    name: "Hisui (Tsukihime)",
    img: "U3RA6uT.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Neco-Arc (Tsukihime)",
    img: "qS44xie.png",
    opts: {
      series: ["mbaa"],
      neco: true,
      again: true
    }
  },
  {
    name: "Kohaku (Tsukihime)",
    img: "V80LKLf.png",
    opts: {
      series: ["mbaa"],
      again: true
    }
  },
  {
    name: "Hyde",
    img: "B6WCMG6.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Linne",
    img: "CgmPDQi.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Waldstein",
    img: "7Snp7DJ.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Carmine",
    img: "WgcEvzm.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Orie",
    img: "tlCV8CF.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Gordeau",
    img: "JpoyaPy.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Merkava",
    img: "FaADcz5.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Vatista",
    img: "4R2GEG4.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Seth",
    img: "4Jj8wmc.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Yuzuriha",
    img: "TGfRq2W.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Hilda",
    img: "hVd9rGL.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Chaos",
    img: "CB2bw2C.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Nanase",
    img: "Qe6vuqP.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Byakuya",
    img: "DE2cDFD.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Phonon",
    img: "fR12uS5.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Mika",
    img: "ClVjJxO.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Wagner",
    img: "Cv8n2uQ.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Enkidu",
    img: "qncCGpG.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Londrekia",
    img: "MNc78Vc.png",
    opts: {
      series: ["unib"],
    }
  },
  {
    name: "Eltnum",
    img: "oZS9Md1.png",
    opts: {
      series: ["unib"],
      crossover: true
    }
  },
  {
    name: "Akatsuki",
    img: "oRatRqS.png",
    opts: {
      series: ["unib"],
      crossover: true
    }
  },
  {
    name: "Kliff Undersn",
    img: "HVpPTIL.png",
    opts: {
      series: ["ggr"],
    }
  },
  {
    name: "A.B.A",
    img: "j9RjMhl.png",
    opts: {
      series: ["ggr"],
    }
  },
  {
    name: "Bridget",
    img: "qG93v2L.png",
    opts: {
      series: ["ggr"],
    }
  },
  {
    name: "Robo-Ky",
    img: "ECmXrHu.png",
    opts: {
      series: ["ggr"],
    }
  },
  {
    name: "Justice",
    img: "XWrRGjL.png",
    opts: {
      series: ["ggr"],
    }
  },
  {
    name: "Zappa",
    img: "g5HmLg4.png",
    opts: {
      series: ["ggr"],
    }
  },
  {
    name: "Heart Aino",
    img: "3AAXmr7.png",
    opts: {
      series: ["bbtag"],
    }
  },
  {
    name: "Yumi",
    img: "3gyklfd.png",
    opts: {
      series: ["bbtag"],
    }
  },
  {
    name: "Blitztank",
    img: "s1W94f2.png",
    opts: {
      series: ["bbtag"],
    }
  },
  {
    name: "Ruby Rose",
    img: "LXQ88Ud.png",
    opts: {
      series: ["bbtag"],
    }
  },
  {
    name: "Blake Belladonna",
    img: "9sezNrw.png",
    opts: {
      series: ["bbtag"],
    }
  },
  {
    name: "Weiss Schnee",
    img: "gqN9ILY.png",
    opts: {
      series: ["bbtag"],
    }
  },
  {
    name: "Yang Xiao Long",
    img: "Io2qkGK.png",
    opts: {
      series: ["bbtag"],
    }
  },
  {
    name: "Neo Politan",
    img: "UdicKE8.png",
    opts: {
      series: ["bbtag"],
    }
  },
  {
    name: "Margaret",
    img: "G8uag0i.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "SHO Minazuki",
    img: "26z6Vgw.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Naoto Shirogane",
    img: "cHlcCfX.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Teddie",
    img: "dWh8ZqY.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Yukiko Amagi",
    img: "QJRzSOU.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Yu Narukami",
    img: "zdisUuX.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Yosuke Hanamura",
    img: "voY4wJV.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Chie Satonaka",
    img: "SaDLAOI.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Kanji Tatsumi",
    img: "xugMdp4.png",
    opts: {
      series: ["pa"],
    }
  },
   {
    name: "Sho MINAZUKI",
    img: "lXATfbk.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Marie",
    img: "DVbngre.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Ken Amada",
    img: "khX1UiO.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Yukari Takeba",
    img: "NnXOMix.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Labrys",
    img: "HDHBWYa.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Mitsuru Kirijo",
    img: "lVWpPaM.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Aigis",
    img: "NVAZIAR.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Tohru Adachi",
    img: "hmP1mnG.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Elizabeth",
    img: "rHcyYAf.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Akihiko Sanada",
    img: "cCueHva.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Shadow Labrys",
    img: "apqPpbc.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Junpei Iori",
    img: "mW62rd6.png",
    opts: {
      series: ["pa"],
    }
  },
  {
    name: "Rise Kujikawa",
    img: "sieuYeq.png",
    opts: {
      series: ["pa"],
    }
  },
];
