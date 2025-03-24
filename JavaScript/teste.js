function exibirInfo(campeao) {
    let mensagem = '';
    switch(campeao) {
        case 'Ahri':
            mensagem = 'A ligação de Ahri com a magia do mundo espiritual é inata. Ela é uma vastaya com traços de raposa, capaz de manipular as emoções de sua presa e consumir sua essência, devorando também as memórias e as percepções de cada alma absorvida. Outrora uma predadora poderosa, porém rebelde, Ahri agora viaja pelo mundo em busca de vestígios dos seus antepassados enquanto tenta substituir as memórias roubadas por novas de sua própria autoria.';
            break;
        case 'Akali':
            mensagem = 'Abandonando a Ordem Kinkou e seu título de Punho das Sombras, Akali agora ataca sozinha, pronta para ser a arma mortal que seu povo precisa. Embora ela mantenha tudo o que aprendeu com seu mestre Shen, ela se comprometeu a defender Ionia de seus inimigos, um assassinato de cada vez. Akali pode atacar em silêncio, mas sua mensagem será ouvida em voz alta e clara: “Temam a assassina sem mestre”.';
            break;
        case 'Aphelios':
            mensagem = 'Emergindo da sombra do luar com suas armas em mãos, Aphelios abate os inimigos de sua fé em absoluto silêncio, comunicando-se apenas pela destreza de sua mira e pelo disparo de cada arma. Embora viva sob o efeito de um veneno que o emudeceu, ele é guiado por sua irmã Alune, que habita um santuário distante de onde invoca um arsenal de armas de pedra da lua para ajudá-lo. Enquanto a lua brilhar no céu, Aphelios nunca estará sozinho.';
            break;
        case 'Evelynn':
            mensagem = 'Nas ruelas sombrias de Runeterra, a criatura demoníaca Evelynn busca sua próxima vítima. Ela atrai presas com sua voluptuosa aparência de fêmea humana, mas assim que a vítima sucumbe ao seu charme, a verdadeira forma de Evelynn é revelada. A criatura então sujeita suas vítimas a um tormento inenarrável, gratificando-se com a dor alheia. Para ela, esses contatos são casinhos inocentes; Para o resto de Runeterra, são histórias macabras de encontros lascivos que deram errado e lembretes terríveis sobre o custo do desejo desenfreado.';
            break;
        case 'Gwen':
            mensagem = 'Uma boneca que ganhou vida por magia, Gwen empunha as mesmas ferramentas que um dia a criaram. Valorizando todo instante, ela carrega a força do amor de sua criadora a cada passo e comanda a Névoa Sagrada, uma magia protetora ancestral que abençoou a tesoura, as agulhas e a linha de costura que ela usa. Tudo é novidade para Gwen, mas ela continua alegre e determinada a lutar pelo bem que ainda resta nesse mundo abatido.';
            break;
        case 'Hwei':
            mensagem = 'Hwei é um pintor melancólico que cria obras de arte geniais para combater os criminosos de Ionia e trazer conforto às vítimas deles. Por trás de sua melancolia, esconde-se uma mente emocionalmente dilacerada, assombrada pelas visões vibrantes de sua imaginação e pelas memórias horríveis do massacre em seu templo. Hwei busca entender a dualidade entre a luz e as trevas, e isso o leva inevitavelmente em direção ao artista que o desvendou. Com um pincel e uma paleta em mãos, Hwei molda possibilidades infinitas, à medida que se aproxima cada vez mais da plenitude ou do total desespero.';
            break;
        case 'Irelia':
            mensagem = 'A ocupação noxiana de Ionia produziu muitos heróis, mas nenhum era mais improvável do que a jovem Irelia de Navori. Treinada nas antigas danças de Ionia, ela adaptou sua arte à guerra, usando movimentos graciosos e cuidadosamente executados para levitar uma série de lâminas fatais. Após provar seu valor como guerreira, ela foi nomeada líder e representante da resistência e até hoje se dedica à preservação de sua terra natal.';
            break;
        case 'Lillia':
            mensagem = 'Extremamente tímida, Lillia, a faunesa feérica, percorre saltitante as florestas de Ionia. Sempre escondida a pouca distância dos humanos — cuja misteriosa natureza lhe causa fascínio e, ao mesmo tempo, receio — Lillia espera descobrir por que os sonhos deles não chegam mais à Árvore dos Sonhos. Agora, ela percorre Ionia com um cajado mágico nas mãos em busca dos sonhos não realizados das pessoas. Somente assim, a própria Lillia poderá florescer e ajudar os humanos a resolverem seus medos e encontrarem seu brilho interior. Iiip!';
            break;
        case 'Lux':
            mensagem = 'Luxanna Stemmaguarda nasceu em Demacia, um reino insular onde habilidades mágicas são vistas com medo e desconfiança. Capaz de dobrar a luz à sua vontade, ela cresceu temendo ser descoberta e exilada, e foi forçada a manter seus poderes em segredo a fim de preservar o status de nobreza de sua família. Apesar de tudo, o otimismo e resiliência de Lux a levaram a aceitar seus talentos únicos e agora ela os utiliza em segredo a serviço de sua terra natal.';
            break;
        case 'Morgana':
            mensagem = 'Dividida entre sua natureza mortal e celestial, Morgana prendeu as asas para preservar sua humanidade e inflige sua dor e amargura nos desonestos e corruptos. Ela rejeita as leis e tradições que considera injustas e luta pela verdade nas sombras de Demacia com escudos e correntes de fogo sombrio, ainda que alguns tentem reprimi-la. Acima de tudo, Morgana acredita que até os banidos e exilados podem, um dia, se erguer.';
            break;
        case 'Nilah':
            mensagem = 'Nilah, uma guerreira asceta de uma terra distante, busca os oponentes mais gigantescos e mortais do mundo para poder desafiá-los e destruí-los. Tendo conquistado seu poder após enfrentar o demônio da alegria, que estava aprisionado há muito tempo, ela não sente outra emoção senão um júbilo incessante — um preço pequeno a ser pago pela força vasta que possui agora. Canalizando a forma líquida do demônio numa lâmina de poder inigualável, a combatente desafia antigas ameaças esquecidas no tempo.';
            break;
        case 'Samira':
            mensagem = 'Samira encara a morte nos olhos com confiança inabalável, procurando diversão e adrenalina aonde quer que vá. Depois que seu lar em Shurima foi destruído quando ainda era criança, ela encontrou sua verdadeira vocação em Noxus, onde conquistou fama como a guerreira valente e estilosa que aceitava missões arriscadas do mais alto calibre. Empunhando pistolas de pólvora negra e uma espada personalizada, Samira prospera em circunstâncias de vida ou morte, eliminando – com estilo e rapidez – qualquer um que cruze seu caminho.';
            break;
        case 'Senna':
            mensagem = 'Amaldiçoada desde a infância a ser perseguida pelo fenômeno sobrenatural da Névoa Negra, Senna se juntou à ordem dos Sentinelas da Luz e lutou bravamente contra seu destino. Ela acabou sendo morta e teve sua alma aprisionada em uma lanterna pelo cruel espectro Thresh. No entanto, por se recusar a perder as esperanças, ela aproveitou seu tempo dentro da lanterna para aprender a usar a Névoa, ressurgindo com uma nova vida e sabendo que jamais voltaria a ser a mesma. Agora, armada com as forças da luz e da escuridão, Senna busca exterminar a Névoa Negra, atraindo o fenômeno para si mesma a cada disparo de sua arma relicária e salvando as almas perdidas que ali residem.';
            break;
        case 'Seraphine':
            mensagem = 'Nascida em Piltover e filha de zaunitas, Seraphine é capaz de ouvir a alma das pessoas. O mundo canta para ela, e ela canta em resposta. Esses sons a perturbavam quando era mais jovem, mas hoje ela os usa como inspiração, transformando o caos em uma sinfonia. A cantora se apresenta nas cidades irmãs para lembrar a seus cidadãos que eles não estão sozinhos, que são mais fortes juntos e que, aos olhos dela, o potencial deles é ilimitado.';
            break;
        default:
            mensagem = 'Campeão desconhecido';
    }

    alert('Informações sobre ' + campeao + ': ' + mensagem);
};
