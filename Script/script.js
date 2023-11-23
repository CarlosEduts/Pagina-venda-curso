const reviewsText = document.querySelector('.reviewsText');
const aboutCourseImg = document.querySelector('#aboutImg');
let passComments = 0;

const comments = [
  `<p>
    <br />
    <b>Maria S.</b>
    <br />
    <br />
    "Este curso foi incrível! Aprendi técnicas que nunca imaginei serem
    possíveis. Agora, sou uma cabeleireira confiante e estou recebendo
    elogios de todos os meus clientes. Obrigada, equipe do curso!"
    <br />
    <br />
    ⭐⭐⭐⭐⭐
    <br />
    <br />
  </p>`,
  `<p>
  <br />
  <b>Pedro R.</b>
  <br />
  <br />
  "Como alguém que sempre teve interesse em cortes de cabelo, este curso 
   superou todas as minhas expectativas. Os vídeos práticos foram
   especialmente úteis. Eu definitivamente recomendo!"
  <br />
  <br />
  ⭐⭐⭐⭐
  <br />
  <br />
</p>`,
  `<p>
<br />
<b>Ana L.</b>
<br />
<br />
"O certificado deste curso abriu portas para mim no mercado de beleza.
 Estou trabalhando em um salão de renome agora e tudo graças a este 
 curso de corte de cabelo fantástico!"
<br />
<br />
⭐⭐⭐⭐⭐
<br />
<br />
</p>`,
];

const imgLinks = [
  `url(../Images/Course/Vl3foqQxwcuzFklL.jpg)`,
  `url(../Images/Course/lXFA6bhMOau.jpg)`,
  `url(../Images/Course/Image02.jpeg)`,
];

const alternateImg01 = () =>
  (aboutCourseImg.style.backgroundImage = imgLinks[0]);
const alternateImg02 = () =>
  (aboutCourseImg.style.backgroundImage = imgLinks[1]);
const alternateImg03 = () =>
  (aboutCourseImg.style.backgroundImage = imgLinks[2]);

reviewsText.innerHTML = comments[0];
setInterval(() => {
  reviewsText.innerHTML = comments[passComments];
  passComments = (passComments + 1) % comments.length;
}, 5000);

const buyPage = () => window.open('https://carlosdev.xyz/');
