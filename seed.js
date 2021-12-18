import PrismaClientPkg from "@prisma/client";

const PrismaClient = PrismaClientPkg.PrismaClient;

const prisma = new PrismaClient();

async function main() {
  const noticia1 = await prisma.noticia.upsert({
    where: { codigo: 1 },
    update: {
      autor: "Léo Arcoverde",
      data: new Date(),
      titulo:
        "Prefeitura de SP confirma transmissão comunitária da variante ômicron da Covid-19",
      descricao:
        "Segundo a secretaria municipal da Saúde, os novos infectados são duas mulheres (de 22 e 65 anos) e um homem de 30 anos e não tiveram contato com o primeiro caso de ômicron registrado no Brasil.",
      image: "im1.jpg",
      conteudo: "A Prefeitura de São Paulo confirmou na noite desta sexta-feira (17) a transmissão comunitária da variante ômicron da Covid-19 na cidade.  Três novos casos de ômicron - duas mulheres (de 22 e 65 anos) e um homem de 30 anos - foram confirmados e não estão relacionados com o primeiro caso registrado da variante no país, de um paciente de 67 anos. Nenhum desses três dos novos casos teve contato com outras pessoas vindas do exterior.  Compartilhe esta notícia no WhatsApp Compartilhe esta notícia no Telegram Agora, a capital soma 13 identificados da nova variante. Todos os pacientes estão sendo acompanhados por profissionais da saúde municipal e estão com sintomas leves, cumprindo a quarentena em casa."
    },
    create: {
      autor: "Léo Arcoverde",
      data: new Date(),
      titulo:
        "Prefeitura de SP confirma transmissão comunitária da variante ômicron da Covid-19",
      descricao:
        "Segundo a secretaria municipal da Saúde, os novos infectados são duas mulheres (de 22 e 65 anos) e um homem de 30 anos e não tiveram contato com o primeiro caso de ômicron registrado no Brasil.",
      image: "im1.jpg",
      conteudo: "A Prefeitura de São Paulo confirmou na noite desta sexta-feira (17) a transmissão comunitária da variante ômicron da Covid-19 na cidade.  Três novos casos de ômicron - duas mulheres (de 22 e 65 anos) e um homem de 30 anos - foram confirmados e não estão relacionados com o primeiro caso registrado da variante no país, de um paciente de 67 anos. Nenhum desses três dos novos casos teve contato com outras pessoas vindas do exterior.  Compartilhe esta notícia no WhatsApp Compartilhe esta notícia no Telegram Agora, a capital soma 13 identificados da nova variante. Todos os pacientes estão sendo acompanhados por profissionais da saúde municipal e estão com sintomas leves, cumprindo a quarentena em casa."
    },
  });

  const noticia2 = await prisma.noticia.upsert({
    where: { codigo: 2 },
    update: {
      autor: "Zé ninguém",
      data: new Date(2021, 11, 23),
      titulo:
        "Vacina da Covid para crianças: secretarias de Saúde abrem cadastro, e famílias aguardam por imunizante",
      descricao:
        "Recife, Campo Grande e a secretaria estadual do Ceará já abriram cadastro para o público de 5 a 11 anos receber a vacina contra o coronavírus. As doses para esse público são diferentes das que foram aplicadas em quem tem 12 anos ou mais. Ministério da Saúde ainda não se manifestou sobre o assunto.",
      image: "im2.jpg",
      conteudo: "Com a aprovação da vacina contra a Covid-19 da Pfizer para imunizar crianças de 5 a 11 anos, governos municipais estaduais se antecipam para essa nova fase da vacinação. As secretarias de Saúde de Campo Grande e Recife e a secretaria estadual do Ceará, por exemplo, já começaram a fazer o cadastro do novo público.  Em SP, o governador João Doria (PSDB) disse nesta sexta-feira (17) que irá negociar diretamente com a farmacêutica Pfizer. (Veja mais detalhes de cada região abaixo)  Compartilhe esta notícia no WhatsApp Compartilhe esta notícia no Telegram A Agência Nacional de Vigilância Sanitária (Anvisa) aprovou o imunizante para crianças na quinta-feira (16), mas o Ministério da Saúde ainda não se manifestou sobre o assunto."
    },
    create: {
      autor: "Zé ninguém",
      data: new Date(2021, 11, 23),
      titulo:
        "Vacina da Covid para crianças: secretarias de Saúde abrem cadastro, e famílias aguardam por imunizante",
      descricao:
        "Recife, Campo Grande e a secretaria estadual do Ceará já abriram cadastro para o público de 5 a 11 anos receber a vacina contra o coronavírus. As doses para esse público são diferentes das que foram aplicadas em quem tem 12 anos ou mais. Ministério da Saúde ainda não se manifestou sobre o assunto.",
      image: "im2.jpg",
      conteudo: "Com a aprovação da vacina contra a Covid-19 da Pfizer para imunizar crianças de 5 a 11 anos, governos municipais estaduais se antecipam para essa nova fase da vacinação. As secretarias de Saúde de Campo Grande e Recife e a secretaria estadual do Ceará, por exemplo, já começaram a fazer o cadastro do novo público.  Em SP, o governador João Doria (PSDB) disse nesta sexta-feira (17) que irá negociar diretamente com a farmacêutica Pfizer. (Veja mais detalhes de cada região abaixo)  Compartilhe esta notícia no WhatsApp Compartilhe esta notícia no Telegram A Agência Nacional de Vigilância Sanitária (Anvisa) aprovou o imunizante para crianças na quinta-feira (16), mas o Ministério da Saúde ainda não se manifestou sobre o assunto."

    },
  });

  const noticia3 = await prisma.noticia.upsert({
    where: { codigo: 3 },
    update: {
      autor: "Elisa Clavery",
      data: new Date(2021, 11, 23),
      titulo:
        "Congresso derruba veto, e governo terá de pagar emendas de relator segundo prioridades definidas pelos parlamentares",
      descricao:
        "Mudança torna 'orçamento secreto' mais parecido com as emendas impositivas, dizem técnicos do Legislativo. Governo afirmou ver ofensa ao 'princípio da impessoalidade'.",
      image: "im3.jpg",
      conteudo: 'O Congresso derrubou nesta sexta-feira (17) o veto do presidente Jair Bolsonaro a um dispositivo da Lei de Diretrizes Orçamentárias (LDO) 2022 que determina que o governo execute emendas ao Orçamento 2022 de acordo com a ordem de prioridade determinada pelos seus autores, isto é, os parlamentares.  Segundo técnicos do Congresso, na prática o governo perde a discricionariedade (liberdade para decidir sobre os recursos) sobre as emendas de relator – de rubrica “RP-9”, que ficaram conhecidas como "orçamento secreto".  Esses recursos, de acordo com os especialistas, ficarão "mais parecidos" com as emendas impositivas, as individuais e de bancada, cuja execução é obrigatória.  No caso das emendas de relator, não há obrigatoriedade de execução. O trecho que será promulgado com a derrubada do veto prevê, no entanto, que o governo não poderá repassar os recursos indicados pelo relator-geral a outros beneficiários.  Para esses técnicos, o dispositivo dificulta o direcionamento de recursos com critérios claros de política pública – por exemplo, para municípios em situação de maior necessidade.  O dispositivo prevê que "a execução das programações das emendas deverá observar as indicações de beneficiários e a ordem de prioridades feitas pelos respectivos autores".'
    },
    create: {
      autor: "Elisa Clavery",
      data: new Date(2021, 11, 23),
      titulo:
        "Congresso derruba veto, e governo terá de pagar emendas de relator segundo prioridades definidas pelos parlamentares",
      descricao:
        "Mudança torna 'orçamento secreto' mais parecido com as emendas impositivas, dizem técnicos do Legislativo. Governo afirmou ver ofensa ao 'princípio da impessoalidade'.",
      image: "im3.jpg",
      conteudo: 'O Congresso derrubou nesta sexta-feira (17) o veto do presidente Jair Bolsonaro a um dispositivo da Lei de Diretrizes Orçamentárias (LDO) 2022 que determina que o governo execute emendas ao Orçamento 2022 de acordo com a ordem de prioridade determinada pelos seus autores, isto é, os parlamentares.  Segundo técnicos do Congresso, na prática o governo perde a discricionariedade (liberdade para decidir sobre os recursos) sobre as emendas de relator – de rubrica “RP-9”, que ficaram conhecidas como "orçamento secreto".  Esses recursos, de acordo com os especialistas, ficarão "mais parecidos" com as emendas impositivas, as individuais e de bancada, cuja execução é obrigatória.  No caso das emendas de relator, não há obrigatoriedade de execução. O trecho que será promulgado com a derrubada do veto prevê, no entanto, que o governo não poderá repassar os recursos indicados pelo relator-geral a outros beneficiários.  Para esses técnicos, o dispositivo dificulta o direcionamento de recursos com critérios claros de política pública – por exemplo, para municípios em situação de maior necessidade.  O dispositivo prevê que "a execução das programações das emendas deverá observar as indicações de beneficiários e a ordem de prioridades feitas pelos respectivos autores".'
    },
  });

  const noticia4 = await prisma.noticia.upsert({
    where: { codigo: 4 },
    update: {
      autor: "Ciclano",
      data: new Date(2021, 17, 12),
      titulo:
        "Governo suspende venda de 24 marcas de azeite de oliva; veja lista",
      descricao:
        "Produtos tinham irregularidades como clandestinidade, contrabando e fraude, segundo o Ministério da Agricultura. Pasta diz que 3 fábricas envasavam mistura de óleos vegetais de procedência desconhecida.",
      image: "im4.jpg",
      conteudo: "O governo suspendeu a venda de 24 marcas de azeite de oliva em seis estados. O Ministério da Agricultura apreendeu mais de 150 mil garrafas impróprias para o consumo em São Paulo, Rio de Janeiro, Ceará, Goiás, Paraná e Santa Catarina; e fechou três fábricas clandestinas, que embalavam óleos vegetais de origem desconhecida como se fosse azeite. Os supermercados que venderem produtos das marcas suspensas podem ser multados em até R$ 532 mil."
    },
    create: {
      autor: "Ciclano",
      data: new Date(2021, 17, 12),
      titulo:
        "Governo suspende venda de 24 marcas de azeite de oliva; veja lista",
      descricao:
        "Produtos tinham irregularidades como clandestinidade, contrabando e fraude, segundo o Ministério da Agricultura. Pasta diz que 3 fábricas envasavam mistura de óleos vegetais de procedência desconhecida.",
      image: "im4.jpg",
      conteudo: "O governo suspendeu a venda de 24 marcas de azeite de oliva em seis estados. O Ministério da Agricultura apreendeu mais de 150 mil garrafas impróprias para o consumo em São Paulo, Rio de Janeiro, Ceará, Goiás, Paraná e Santa Catarina; e fechou três fábricas clandestinas, que embalavam óleos vegetais de origem desconhecida como se fosse azeite. Os supermercados que venderem produtos das marcas suspensas podem ser multados em até R$ 532 mil."
    },
  });

  const noticia5 = await prisma.noticia.upsert({
    where: { codigo: 5 },
    update: {
      autor: "Beltrano",
      data: new Date(2021, 17, 12),
      titulo:
        "André Mendonça é sorteado relator da notícia-crime contra Bolsonaro por fala sobre Iphan",
      descricao:
        "Notícia-crime contra o presidente foi apresentada pelo senador Rondolfe Rodrigues (Rede-AP). Bolsonaro afirmou ter 'ripado' servidores do instituto após suspensão de obra de aliado.",
      image: "im5.jpg",
      conteudo: 'O ministro André Mendonça foi sorteado nesta sexta-feira (17) relator no Supremo Tribunal Federal (STF) da notícia-crime contra o presidente Jair Bolsonaro por prevaricação e advocacia administrativa.  A notícia-crime foi apresentada pelo senador Randolfe Rodrigues (Rede-AP) depois de Bolsonaro ter afirmado que mandou "ripar" servidores do Iphan (Instituto do Patrimônio Histórico e Artístico Nacional) após receber a informação de que o órgão paralisou uma obra do empresário bolsonarista Luciano Hang.  Uma outra ação com o mesmo tema, protocolada pela deputada Natália Bonavides (PT-RN), também foi distribuída ao gabinete de Mendonça "por prevenção" – isso significa que as duas ações vão tramitar juntas.  Mendonça tomou posse nesta quinta (16) como ministro do Supremo, indicado por Bolsonaro (vídeo abaixo).'
    },
    create: {
      autor: "Beltrano",
      data: new Date(2021, 17, 12),
      titulo:
        "André Mendonça é sorteado relator da notícia-crime contra Bolsonaro por fala sobre Iphan",
      descricao:
        "Notícia-crime contra o presidente foi apresentada pelo senador Rondolfe Rodrigues (Rede-AP). Bolsonaro afirmou ter 'ripado' servidores do instituto após suspensão de obra de aliado.",
      image: "im5.jpg",
      conteudo: 'O ministro André Mendonça foi sorteado nesta sexta-feira (17) relator no Supremo Tribunal Federal (STF) da notícia-crime contra o presidente Jair Bolsonaro por prevaricação e advocacia administrativa.  A notícia-crime foi apresentada pelo senador Randolfe Rodrigues (Rede-AP) depois de Bolsonaro ter afirmado que mandou "ripar" servidores do Iphan (Instituto do Patrimônio Histórico e Artístico Nacional) após receber a informação de que o órgão paralisou uma obra do empresário bolsonarista Luciano Hang.  Uma outra ação com o mesmo tema, protocolada pela deputada Natália Bonavides (PT-RN), também foi distribuída ao gabinete de Mendonça "por prevenção" – isso significa que as duas ações vão tramitar juntas.  Mendonça tomou posse nesta quinta (16) como ministro do Supremo, indicado por Bolsonaro (vídeo abaixo).'
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
