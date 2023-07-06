import InformationText from "../../components/informationText/InformationText"


function Home() {

    return (
        <div>
            <h1>Bem-vindo(a) à Top 10 Movie!</h1>
            <InformationText
                h2Content="Sobre o Site"
                pContent="Estamos empolgados em apresentar a você uma experiência
                 cinematográfica única e divertida. Nosso serviço de catálogo de 
                 filmes é projetado para alimentar sua imaginação e levá-lo(a) a 
                 uma jornada cinematográfica repleta de aventuras fictícias."
            />
            <br/>
            <InformationText
                pContent="Nosso catálogo apresenta uma vasta gama de lançamentos,
                 cuidadosamente criados por nossos talentosos trabalhadores. 
                 Essas obras cinematográficas irão cativar sua mente e levá-lo(a) 
                 a mundos incríveis e personagens fascinantes."
            />
            <br/>
            <InformationText
                pContent="Mais uma vez, seja bem-vindo(a) à Top 10 Movie! 
                Estamos ansiosos para embarcar nesta jornada empolgante com você. 
                Prepare-se para dar vida às nossas histórias e tornar a ficção ainda mais fascinante!"
               
            />
        </div>
    )

}
export default Home