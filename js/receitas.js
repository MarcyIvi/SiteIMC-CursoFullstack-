const cardData = [
{
    title: "Salada Colorida com Quinoa",
    description: "Uma salada leve e nutritiva, rica em fibras e proteínas, feita com quinoa, legumes frescos e temperada com azeite e limão. Ideal para uma refeição rápida e saudável.",
    imgeURL: "https://images.mrcook.app/recipe-image/01918161-d6a9-70b7-9889-60ab60a2ce84",
    buttonText: "Saiba Mais",
    link: "https://www.saboresajinomoto.com.br/receita/salada-colorida-com-quinoa"
},

{
    title: "Frango Grelhado com Abacate e Manga",
    description: "Uma combinação deliciosa de frango grelhado com o frescor do abacate e a doçura da manga, criando um prato equilibrado e saboroso, perfeito para o almoço.",
    imgeURL: "https://img.freepik.com/fotos-premium/salada-com-frango-grelhado-manga-alface-abacate-tomate-rucula-queijo-sause-em-um-prato-branco_120962-1582.jpg",
    buttonText: "Saiba Mais" ,
    link:"https://thewholecook.com/avocado-mango-chicken/"
},

{
    title: "Smoothie de Frutas Vermelhas",
    description: "Uma bebida refrescante e cheia de antioxidantes, feita com morangos, framboesas e banana, ideal para um café da manhã rápido ou um lanche saudável.",
    imgeURL: "https://boomi.b-cdn.net/wp-content/uploads/2021/09/VT145.png",
    buttonText: "Saiba Mais",
    link: "https://www.tudogostoso.com.br/receita/143871-smoothie-de-frutas-vermelhas.html"
}, 

{
    title: "Wrap Integral de Atum com Abacate",
    description: "Um wrap prático e saboroso, recheado com atum, abacate, alface e tomate, criando uma refeição leve, nutritiva e rica em gorduras saudáveis.",
    imgeURL: "https://claudia.abril.com.br/wp-content/uploads/2021/05/Claudia-Fev201401614.tif-e1621978147633.jpg",
    buttonText: "Saiba Mais",
    link:"https://claudia.abril.com.br/receitas/wrap-de-atum-com-guacamole"

},

{
    title: "Panquecas de Aveia e Banana",
    description: "Panquecas saudáveis feitas com aveia e banana, que oferecem uma ótima fonte de energia e são perfeitas para o café da manhã ou lanche da tarde.",
    imgeURL: "https://runnersbrasil.com/wp-content/uploads/2023/09/Panquecas-de-Banana-e-Aveia.png",
    buttonText: "Saiba Mais",
    link:"https://www.tudogostoso.com.br/receita/189500-panqueca-saudavel-de-aveia-e-banana.html"
},

{
    title: "Sopa de Abóbora com Gengibre",
    description: "Uma sopa cremosa e reconfortante, com o sabor suave da abóbora e o toque picante do gengibre. É uma opção deliciosa e saudável para aquecer nos dias mais frios.",
    imgeURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVjsTLPVnDkhP5DEApRJkhpTKP70_5BEA0nQ&s",
    buttonText: "Saiba Mais",
    link:"https://www.tudogostoso.com.br/receita/89243-sopa-de-abobora-com-gengibre.html"
}]

function criarCards(){
    const conteiner = document.getElementById('Cards');

    cardData.forEach(data =>{

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = data.imgeURL;
        img.alt = data.title;

        const title = document.createElement('h3');
        title.textContent = data.title;

        const description = document.createElement('p');
        description.textContent = data.description;

        const button = document.createElement('button');
        button.textContent = data.buttonText;

        button.addEventListener('click', () => {
            window.open(data.link, '_blank');
        })

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(button);

        conteiner.appendChild(card);
    });

}

criarCards();