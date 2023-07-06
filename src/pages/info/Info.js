import React from "react";
import InformationText from "../../components/informationText/InformationText";

function Info() {
    return (
        <div>
            <h1>Informações</h1>
            <InformationText
                h2Content="Sobre Nós"
                pContent=" Na Top 10 Movie, Estamos entusiasmados em apresentar nosso novo
                    serviço de anúncio dos filmes mais recentes lançados. Estamos aqui
                    para manter você atualizado com os filmes mais populares e emocionantes
                    que chegam às telas de cinema."
            />
            <br/>
            <InformationText
                h2Content="O que oferecemos"
                pContent="Aqui, você encontrará detalhes completos sobre os filmes,
                    incluindo sinopses envolventes, trailers emocionantes e informações
                    relevantes sobre elenco, direção e muito mais. Queremos garantir que
                    você tenha todas as informações necessárias para fazer escolhas informadas
                    ao planejar sua próxima ida ao cinema"
            />
            <br/>
            <InformationText
                h2Content="Explore nossa página web"
                pContent="Nossa página web é o seu destino confiável para descobrir os filmes mais
                    recentes que estão fazendo sucesso no momento. Estamos comprometidos em
                    tornar sua experiência conosco agradável e gratificante."
            />
        </div>
    );
}

export default Info;
