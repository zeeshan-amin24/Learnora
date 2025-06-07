const mathChapters = [
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-1-number-systems',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-2-polynomials',
  'http://vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-3-coordinate-geometry',
  'http://vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-4-linear-equations-in-two-variables',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-5-introduction-to-euclids-geometry',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-6-lines-and-angles',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-7-triangles',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-8-quadrilaterals',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-9-circles',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-10-herons-formula',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-11-surface-areas-and-volumes',
  'https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-maths-chapter-12-statistics'
];

const scienceChapters = [
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-1",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-2",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-3",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-4",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-5",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-6",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-7",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-8",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-9",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-10",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-11",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-science-chapter-12",
];



const historyChapters = [
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-india-and-the-contemporary-world-chapter-1",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-india-and-the-contemporary-world-chapter-2",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-india-and-the-contemporary-world-chapter-3",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-india-and-the-contemporary-world-chapter-4",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-india-and-the-contemporary-world-chapter-5",

];

const geographyChapters = [
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-contemporary-india-chapter-1",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-contemporary-india-chapter-2",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-contemporary-india-chapter-3",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-contemporary-india-chapter-4",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-contemporary-india-chapter-5",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-contemporary-india-chapter-6"
];


const civicsChapters = [
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-democratic-politics-chapter-1",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-democratic-politics-chapter-2",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-democratic-politics-chapter-3",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-democratic-politics-chapter-4",
  "https://www.vedantu.com/ncert-solutions/ncert-solutions-class-9-social-science-democratic-politics-chapter-5"
];

const civicsChapterNames = [
  "What is Democracy? Why Democracy?",
  "Constitutional Design",
  "Electoral Politics",
  "Working of Institutions",
  "Democratic Rights"
];

const mathChapterNames = [
  "Number Systems",
  "Polynomials",
  "Coordinate Geometry",
  "Linear Equations in Two Variables",
  "Introduction to Euclid’s Geometry",
  "Lines and Angles",
  "Triangles",
  "Quadrilaterals",
  "Circles",
  "Heron's Formula",
  "Surface Areas and Volumes",
  "Statistics"
];

const scienceChapterNames = [
  "Matter in Our Surroundings",
  "Is Matter Around Us Pure?",
  "Atoms and Molecules",
  "Structure of the Atom",
  "The Fundamental Unit of Life",
  "Tissues",
  "Motion",
  "Force and Laws of Motion",
  "Gravitation",
  "Work and Energy",
  "Sound",
  "Improvement in Food Resources"
];

const historyChapterNames = [
  "The French Revolution",
  "Socialism in Europe and the Russian Revolution",
  "Nazism and the Rise of Hitler",
  "Forest Society and Colonialism",
  "Pastoralists in the Modern World",
];


const geographyChapterNames = [
  "India - Size and Location",
  "Physical Features of India",
  "Drainage",
  "Climate",
  "Natural Vegetation and Wildlife",
  "Population"
];



const axios = require('axios');
const express = require('express');
const cheerio = require('cheerio');
const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => {
  res.render('home');
});
app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/science', (req, res) => {
  res.render('science', { chapters: scienceChapterNames }); 
});

app.get('/maths', (req, res) => {
  res.render('maths', { chapters: mathChapterNames });
});

app.get('/history', (req, res) => {
  res.render('history', { chapters: historyChapterNames });
});

app.get('/geo', (req, res) => {
  res.render('geo', { chapters: geographyChapterNames });
});

app.get('/civics', (req, res) => {
  res.render('civics', { chapters: civicsChapterNames });
});
app.get('/maths/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  axios.get(mathChapters[id - 1]).then((response) => {
    let $ = cheerio.load(response.data);

    $("*").each(function () {
      const text = $(this).text().trim();
      if (
        text ===
        "Given below are the chapter-wise NCERT Solutions for Class 9 Maths. Go through these chapter-wise solutions to be thoroughly familiar with the concepts."
      ) {
        $(this).remove();
      }
    });

    $('table').each(function () {
      if ($(this).find('a').length > 0) {
        $(this).prev().remove();
        $(this).remove();
      }
    });

    for (let i = 1; i <= 13; i++) {
      const text = `Other Study Material for CBSE Class 9 Maths Chapter ${i}`;
      $(`h2:contains('${text}')`).next().remove();
      $(`h2:contains('${text}')`).remove();
    }

    $("h2:contains('Important Study Materials for CBSE Class 9 Maths')").remove();
    $("h2:contains('Important Study Materials for Class 9 Maths')").remove();

    for (let i = 1; i <= 12; i++) {
      const text = `Other Related Links for CBSE Class 9 Maths Chapter ${i}`;
      $(`h2:contains('${text}')`).next().remove();
      $(`h2:contains('${text}')`).remove();
    }

    for (let i = 1; i <= 12; i++) {
      const text = `Other Study Materials of CBSE Class 9 Maths Chapter ${i}`;
      $(`h2:contains('${text}')`).next().remove();
      $(`h2:contains('${text}')`).remove();
    }

    $("h2:contains('Chapter-Specific NCERT Solutions for Class 9 Maths')").remove();
    $("h2:contains('Other Related Links')").next().remove();
    $("h2:contains('Other Related Links')").remove();

    $("h2:contains('NCERT Solutions for Class 9 Maths - Chapter-wise List')").next().remove();
    $("h2:contains('NCERT Solutions for Class 9 Maths - Chapter-wise List')").remove();

$("*:contains('Vedantu')").each(function () {
  const updatedHtml = $(this).html().replace(/Vedantu/g, "Learnora");
  $(this).html(updatedHtml);
});



let bodyMain= $('div#footerDiv')
   bodyMain.find("a").each(function () {
        const anchorText = $(this).text();  
        $(this).replaceWith(`<span>${anchorText}</span>`); 
      });
    let body = bodyMain.html();
body = body.replace(/\$(.+?)\$/g, (_, math) => `\\(${math.trim()}\\)`).replace(/Free PDF Download/gi, "")





    res.render('index', { 
      chapter: [{ body }],
      chapterId: id,
      chapterName: mathChapterNames[id - 1]
    });
  });
});

app.get('/science/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  axios.get(scienceChapters[id - 1]).then((response) => {
    let $ = cheerio.load(response.data);

    $('table').each(function () {
      if ($(this).find('a').length > 0) {
        $(this).prev().remove();
        $(this).remove();
      }
    });

    $("h2:contains('Chapter-Specific NCERT Solutions for Class 9 Science')").remove();
    $("h2:contains('NCERT Solutions for Class 9 Science - Other Chapter-Wise Links')").next().remove();
    $("h2:contains('NCERT Solutions for Class 9 Science - Other Chapter-Wise Links')").remove();
    $("h2:contains('NCERT Solutions for Class 9 Science - Chapter-Wise Links')").remove();

    $("h2:contains('NCERT Study Resources for Class 9 Science')").next().remove();
    $("h2:contains('NCERT Study Resources for Class 9 Science')").remove();

    $("h2:contains('Related Study Materials for Class 9 Chemistry Chapter 5 NCERT Solutions')").next().remove();
    $("h2:contains('Related Study Materials for Class 9 Chemistry Chapter 5 NCERT Solutions')").remove();

    $("h2:contains('NCERT Solutions Class 9 Chemistry | Chapter-wise Links')").next().remove();
    $("h2:contains('NCERT Solutions Class 9 Chemistry | Chapter-wise Links')").remove();

    $("h2:contains('NCERT Other Study Resources for Class 9 Science')").next().remove();
    $("h2:contains('NCERT Other Study Resources for Class 9 Science')").remove();

    $("h2:contains('Related Study Materials For Chapter 1 Matter In Our Surroundings Class 9')").next().remove();
    $("h2:contains('Related Study Materials For Chapter 1 Matter In Our Surroundings Class 9')").remove();

    $("h2:contains('Important Study Materials for Class 9 Chemistry Chapter 10 Work and Energy')").next().remove();
    $("h2:contains('Important Study Materials for Class 9 Chemistry Chapter 10 Work and Energy')").remove();

    $("h2:contains('Important Study Materials for Chapter 6 Tissues Class 9 Science')").remove();
    $("h2:contains('Related Important Links for Class 9 Science')").remove();

    $("h2:contains('Important Links for Class 9 Science Chapter 8 - Force and Laws of Motion')").remove();
    $("h2:contains('Other Related Links')").next().remove();

    $("h2:contains('Important Links for Science Class 9 Chapter 3 Atoms and Molecules')").remove();

    $("h2:contains('Important Study Material Links for Class 9 Science')").remove();

    $("h2:contains('Important Study Material Links for Class 9 Chapter 4 Science')").remove();
    $("h2:contains('Related Study Materials for Class 9 Science Ch 9 Gravitation')").remove();
    $("h2:contains('Important Study Material Links for Class 9 Chapter 12 Science: Improvement in Food Resources')").remove();

    $("h2:contains('NCERT Solutions for Class 9 Science - Other Chapter-wise Links')").next().remove();
    $("h2:contains('NCERT Solutions for Class 9 Science - Other Chapter-wise Links')").remove();

    $("h2:contains('Important Study Materials For Class 9 Chemistry Chapter 2: Is Matter around us Pure?')").next().remove();
    $("h2:contains('Important Study Materials For Class 9 Chemistry Chapter 2: Is Matter around us Pure?')").remove();

    $("h2:contains('Chapter-wise NCERT Solutions Class 9 Science')").remove();

    $("p:contains('Students can access extra study materials on Is Matter Around Us Pure? These resources are available for download, offering additional support for your studies.')").remove();

$("*:contains('Vedantu')").each(function () {
  const updatedHtml = $(this).html().replace(/Vedantu/g, "Learnora");
  $(this).html(updatedHtml);
});

let bodyMain= $('div#footerDiv')
   bodyMain.find("a").each(function () {
        const anchorText = $(this).text();  
        $(this).replaceWith(`<span>${anchorText}</span>`); 
      });
    let body = bodyMain.html();
body = body.replace(/\$(.+?)\$/g, (_, math) => `\\(${math.trim()}\\)`);

   
        
    res.render('index', { 
      chapter: [{ body }],
      chapterId: id,
      chapterName: scienceChapterNames[id - 1]
    });
  });
});






app.get('/history/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  axios.get(historyChapters[id - 1]).then((response) => {
    let $ = cheerio.load(response.data);

    $('table').each(function () {
      if ($(this).find('a').length > 0) {
        $(this).prev().remove();
        $(this).remove();
      }
    });
    $("p:contains('Students can check and refer to Class 9 The French Revolution Revision Notes and The French Revolution Important Questions to learn effectively for their exams.')").remove();
        $("h2:contains('NCERT Solutions for Class 9 History Other Chapter-Wise Links - Download the FREE PDF')").remove();


    $("h2:contains('Related Important Links for Class 9 History')").remove()

$("*:contains('Vedantu')").each(function () {
  const updatedHtml = $(this).html().replace(/Vedantu/g, "Learnora");
  $(this).html(updatedHtml);
});
 for (let i = 1; i <= 13; i++) {
      const text = `Important Study Material Links for Class 9 History Chapter ${i}`;
      $(`h2:contains('${text}')`).next().remove();
      $(`h2:contains('${text}')`).remove();
    }

    $("h2:contains('NCERT Solutions for Class 9 History - Other Chapter-wise Links for FREE PDF')").next().remove();
    $("h2:contains('NCERT Solutions for Class 9 History - Other Chapter-wise Links for FREE PDF')").remove();

        $("h2:contains('CBSE Class 9 Social Science Important Questions for Different Books')").next().remove();
    $("h2:contains('CBSE Class 9 Social Science Important Questions for Different Books')").remove();


    $("p:contains('Dive into our FREE PDF links offering Chapter-wise NCERT solutions prepared by Learnora Experts, to help you understand and master the social concepts.')").remove();

  $("h2:contains('NCERT Solutions for Class 9 History Other Chapter-wise Links - Download the FREE PDF')").remove();

    $("p:contains('Along with NCERT Solutions Class 9 History Chapter 4, students can refer to Class 9 Forest Society and Colonialism Revision Notes and Forest Society & Colonialism Important Questions for effective preparation.')").remove();

let bodyMain= $('div#footerDiv')
   bodyMain.find("a").each(function () {
        const anchorText = $(this).text();  
        $(this).replaceWith(`<span>${anchorText}</span>`); 
      });
    let body = bodyMain.html();
body = body.replace(/\$(.+?)\$/g, (_, math) => `\\(${math.trim()}\\)`);

   
        
    res.render('index', { 
      chapter: [{ body }],
      chapterId: id,
      chapterName: historyChapterNames[id - 1]
    });
  });
});


app.get('/geo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  axios.get(geographyChapters[id - 1]).then((response) => {
    let $ = cheerio.load(response.data);

    $('table').each(function () {
      if ($(this).find('a').length > 0) {
        $(this).prev().remove();
        $(this).remove();
      }
    });

    $("h2:contains('Related Important Links for Class 9 Geography')").remove()

$("*:contains('Vedantu')").each(function () {
  const updatedHtml = $(this).html().replace(/Vedantu/g, "Learnora");
  $(this).html(updatedHtml);
});
 for (let i = 1; i <= 13; i++) {
      const text = `Important Study Material Links for Class 9 Geography Chapter ${i}`;
      $(`h2:contains('${text}')`).next().remove();
      $(`h2:contains('${text}')`).remove();
    }

        $("h2:contains('NCERT Solutions for Class 9 Geography - Other Chapter-wise Links for FREE PDF')").next().remove();
    $("h2:contains('NCERT Solutions for Class 9 Geography - Other Chapter-wise Links for FREE PDF')").remove();

    
        $("h2:contains('NCERT Class 9 Social Science Contemporary India Chapter wise Solutions')").next().remove();
    $("h2:contains('NCERT Class 9 Social Science Contemporary India Chapter wise Solutions')").remove();


    
        $("h2:contains('NCERT Class 9 Social Science Books Available for:')").next().remove();
    $("h2:contains('NCERT Class 9 Social Science Books Available for:')").remove();

      $("h2:contains('Related Important Links for Class 9 Social Science')").remove();

      
      $("h2:contains('NCERT Solutions For Class 9 Geography Other Chapter-Wise Links - Download the FREE PDF')").remove();

    $("p:contains('Apart from NCERT Solutions for Class 9 Chapter 1, students can refer to Class 9 India Size And Location Revision Notes and India Size And Location Important Questions for effective preparation.')").remove();

    $("p:contains('Students can also check and refer to Class 9 Physical Features Of India Revision Notes and Physical Features Of India Important Questions to learn effectively for their exams.')").remove();

        $("p:contains('Dive into our FREE PDF links, which offer chapter-wise NCERT solutions prepared by Learnora Experts to help you understand and master social concepts.')").remove();

            $("p:contains('For better preparation, you can refer to Learnora’s additional study materials, like Revision Notes for Class 9 Drainage, and Important Questions for Class 9 Drainage along with the NCERT Solutions.')").remove();

             $("p:contains('Along with Class 9 Geography NCERT Solutions, you can also refer to Class 9 Climate Revision Notes and Climate Important Questions.')").remove();

                 $("p:contains('Along with Class 9 Geography NCERT Solutions, you can also refer to Class 9 Natural Vegetation And Wildlife Revision Notes and Natural Vegetation And Wildlife Important Questions.')").remove();


  $("h2:contains('NCERT Solutions for Class 9 Geography Other Chapter-Wise Links - Download the FREE PDF')").remove();

  $("h2:contains('Related Important Links for Class 9 Social Science Geography')").remove();



let bodyMain= $('div#footerDiv')
   bodyMain.find("a").each(function () {
        const anchorText = $(this).text();  
        $(this).replaceWith(`<span>${anchorText}</span>`); 
      });
    let body = bodyMain.html();
body = body.replace(/\$(.+?)\$/g, (_, math) => `\\(${math.trim()}\\)`);

   
        
    res.render('index', { 
      chapter: [{ body }],
      chapterId: id,
      chapterName: geographyChapterNames[id - 1]
    });
  });
});





app.get('/civics/:id', (req, res) => {
  const id = parseInt(req.params.id);
  
  axios.get(civicsChapters[id - 1]).then((response) => {
    let $ = cheerio.load(response.data);

    $('table').each(function () {
      if ($(this).find('a').length > 0) {
        $(this).prev().remove();
        $(this).remove();
      }
    });

    $("h2:contains('Related Important Links for Class 9 Civics')").remove()

$("*:contains('Vedantu')").each(function () {
  const updatedHtml = $(this).html().replace(/Vedantu/g, "Learnora");
  $(this).html(updatedHtml);
});
 for (let i = 1; i <= 13; i++) {
      const text = `Important Study Material Links for Class 9 Civics Chapter ${i}`;
      $(`h2:contains('${text}')`).next().remove();
      $(`h2:contains('${text}')`).remove();
    }

        $("h2:contains('NCERT Solutions for Class 9 Civics - Other Chapter-wise Links for FREE PDF')").next().remove();
    $("h2:contains('NCERT Solutions for Class 9 Civics - Other Chapter-wise Links for FREE PDF')").remove();

    
        $("h2:contains('NCERT Class 9 Social Science Contemporary India Chapter wise Solutions')").next().remove();
    $("h2:contains('NCERT Class 9 Social Science Contemporary India Chapter wise Solutions')").remove();


    
        $("h2:contains('NCERT Class 9 Social Science Books Available for:')").next().remove();
    $("h2:contains('NCERT Class 9 Social Science Books Available for:')").remove();

            $("h2:contains('NCERT Solutions for Class 9 Civics - Other Chapter-wise Links - FREE PDF')").next().remove();
    $("h2:contains('NCERT Solutions for Class 9 Civics - Other Chapter-wise Links - FREE PDF')").remove();

      $("h2:contains('Related Important Links for Class 9 Social Science')").remove();

      
      $("h2:contains('NCERT Solutions For Class 9 Civics Other Chapter-Wise Links - Download the FREE PDF')").remove();



        $("p:contains('Dive into our FREE PDF links, which offer chapter-wise NCERT solutions prepared by Learnora Experts to help you understand and master social concepts.')").remove();

            $("p:contains('For better preparation, you can refer to Learnora’s additional study materials, like Revision Notes for Class 9 Drainage, and Important Questions for Class 9 Drainage along with the NCERT Solutions.')").remove();

                  
      $("p:contains('Students can also refer to Class 9 Constitutional Design Revision Notes and Constitutional Design Important Questions for a better understanding of the Class 9 civics chapter 2 constitutional design.')").remove();
      
      $("p:contains('Along with the NCERT Solutions, You can also download the FREE PDF of Class 9 What Is Democracy? Why Democracy? Revision Notes. and What Is Democracy? Why Democracy? Important Questions')").remove();

      
      $("p:contains('Students can also check and refer to Class 9 Electoral Politics Revision Notes and Electoral Politics Important Questions available on the official website, to practise and learn effectively.')").remove();

      
      $("p:contains('Students can also refer to Class 9 Working of Institutions Revision Notes and Working of Institutions Important Questions for a better understanding of Class 9 Civics Chapter 4.')").remove();

  $("h2:contains('NCERT Solutions for Class 9 Civics Other Chapter-Wise Links - Download the FREE PDF')").remove();

  $("h2:contains('Related Important Links for Class 9 Social Science Civics')").remove();



let bodyMain= $('div#footerDiv')
   bodyMain.find("a").each(function () {
        const anchorText = $(this).text();  
        $(this).replaceWith(`<span>${anchorText}</span>`); 
      });
    let body = bodyMain.html();
body = body.replace(/\$(.+?)\$/g, (_, math) => `\\(${math.trim()}\\)`);

   
        
    res.render('index', { 
      chapter: [{ body }],
      chapterId: id,
      chapterName: civicsChapterNames[id - 1]
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

