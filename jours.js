let jours = [
    { "numero": 1, "titre": "Urgence écologique", "texte": "Changement climatique, fonte des glaces, montée des eaux, extinction des espèces, déplacements forcés des populations, risques sanitaires, injustices économiques et sociales à court et à long terme. De l\'urgence écologique émanent des problèmes multiples et conséquents, souvent entremêlés. Or, face à l\'urgence écologique nous devons et pouvons agir. S\'il n\'est pas envisageable de sombrer dans le catastrophisme qui annihilerait la possibilité d\'agir, il ne s\'agit pas non plus d\'espérer un retour idéalisé à la nature ni même de pointer du doigt la responsabilité individuelle plus que celle d\'un système de production et de développement profondément injuste, qui se fonde sur l\'exploitation du vivant sans limite. Aussi, la lutte écologiste ne peut-être qu\'anticapitaliste et sociale.", "ouvert": false},
    { "numero": 2, "titre": "L\'écologie sociale ", "texte": "Théorisée par Murray Bookchin, l\'écologie sociale met en rapport problèmes écologiques et problèmes sociaux. En effet, les différents types de dominations exercées au sein des sociétés fondées sur la hiérarchie (les hommes sur les femmes, les blanc-hes sur les non-blanc-hes, les riches sur les pauvres etc.) se retrouvent dans la manière dont nous appréhendons notre environnement. En somme, la lutte écologiste appelle le dépassement de nos sociétés de classes, capitalistes, hiérarchiques et injustes.  Aussi, trois révolutions sont nécessaires: une révolution des modes de production afin de parvenir à une maîtrise écologique de la production ; une révolution des modes de vie pour une société égalitaire en harmonie avec l\'environnement; et enfin une révolution des échanges pour une autonomie productive de circuits d\'échanges courts afin de gagner notre indépendance face aux multinationales et sortir des énergies fossiles.", "ouvert": false},
    { "numero": 3, "titre": "Patriarcat", "texte": "Système politique et économique de domination des hommes cisgenres (*dont l\'identité de genre correspond au genre assigné à la naissance) sur les femmes et minorités de genre (*spectre regroupant toutes les identités de genre sortant du schéma binaire homme/femme), le patriarcat se traduit par l’exploitation domestique de ces dernières, produit la culture sexiste, solidifiée en un système de codes sociaux et de lois et instaure une hiérarchie : 2 classes de genre \"homme\" et \"femme\" sont essentialisées et l\'hétérosexualité est imposée comme norme. Toute personne qui sort de cette assignation genrée s\'y voit réintégrée de force. Cette domination aux facettes multiples relègue les femmes et minorités de genre à des rôles subalternes et les dépossède de la maîtrise de leur vie, corps, et sexualité. Elle est aussi physique avec les violences domestiques, sexuelles et le harcèlement qui entravent leur vie à la fois par leur réalité et par la menace constante qu’elles font peser.", "ouvert": false},
    { "numero": 4, "titre": "Féminisme", "texte": "Le féminisme incarne la lutte contre le patriarcat et combat l’inégalité entre les genres dans tous les domaines (juridique, économique, politique et social). Cette lutte pour l’émancipation est l\'un des thèmes essentiels du combat libertaire. Nos objectifs : l’abolition du patriarcat en tant que système de domination, l’égalité civile et sociale entre hommes, femmes et minorités de genre, et la liberté pour tou-tes de disposer de leur corps, leur capacité reproductrice et leur sexualité, dans l’espace privé et domestique comme dans l’espace public. La lutte féministe se doit d\'être inclusive et intersectionnelle: il est urgent de reconnaître que les multiples formes de domination entrecroisées, à savoir, le genre, la race et la classe ou encore le handicap génèrent des oppressions spécifiques, alimentées par l\'État.", "ouvert": false},
    { "numero": 5, "titre": "LGBTIphobies et Luttes LGBTI", "texte": "Les LGBTIphobies représentent l\'ensemble des discriminations et rejets à l\'encontre des personnes LGBTI, regroupant la lesbophobie, l’homophobie, la biphobie, la transphobie et la discrimination des personnes intersexes. Ces oppressions sont des manifestations du patriarcat, se fondant notamment, sur l’existence de seulement 2 classes de genre, entraînant la mutilation des personnes intersexes, et sur l’imposition d’un modèle cisgenre et hétérosexuel dominant. Leurs formes sont multiples : thérapies de conversion légales, discrimination au don du sang, invisibilisation dans l\'éducation, violences institutionnelles, PMA restreinte sur des critères transphobes... Les luttes LGBTI visent à lutter contre les discriminations quotidiennes et à obtenir et défendre les droits des personnes LGBTI, que ce soit les droits d\'accès à la santé, de reproduction, de disposition de leur propre corps, de parentalité, d\'union ou d\'accès au logement par exemple.", "ouvert": false},
    { "numero": 6, "titre": "Racisme", "texte": "Le racisme imprègne tous les aspects de la société et prend de multiples formes. Historiquement, les nations impérialistes ont décrété l’infériorité des peuples colonisés justifiant ainsi le pillage de leurs richesses, l’accaparement de leurs territoires, les massacres et l’esclavage. Aujourd’hui les minorités, en opposition à l’identité nationale définie comme « blanche et chrétienne » créée artificiellement, subissent encore les violences physiques, les discriminations (à l’emploi, au logement, la santé), la ségrégation spatiale, le harcèlement, les violences policières etc. Le racisme peut aussi être attisé par les politiciens et pouvoirs publics afin de détourner les désastres de leurs politiques et du capitalisme vers des boucs émissaires. Enfin, le racisme confère des avantages (parfois nommés privilèges blancs) aux personnes qui ne le vivent pas.", "ouvert": false},
    { "numero": 7, "titre": "Antiracisme", "texte": "Le racisme ne peut disparaître par des actions uniquement individuelles et doit être combattu en repensant profondément les dynamiques l\'entretenant directement ou indirectement, volontairement ou involontairement. Prenant ses racines dans le colonialisme, il est important d\'adopter une perspective décoloniale, sans pour autant tomber dans l\'essentialisation (Réduire une personne à une ou des caractéristiques, notamment source de discrimination). L\'antiracisme doit comprendre des actions sur tous les niveaux, politiques, sociaux et économiques. L\'antiracisme ne peut également se faire sans une vision anticapitaliste. Le capitalisme se nourrit, entre autres, de l\'exploitation des ressources humaines et matérielles des pays du Sud mais aussi du travail précaire des personnes racisées (Ex : femmes de ménages). Cette précarisation des personnes racisées peut notamment être combattue par l\'auto-organisation de solidarités sur les lieux de travail.", "ouvert": false},
    { "numero": 8, "titre": "(Psy)validisme et Antivalidisme", "texte": "Le validisme est une forme de discrimination à l\'encontre des personnes en situation de handicap, ce terme est surtout utilisé pour celles concernées par un handicap physique. On appelle psyvalidisme l\'oppression envers les personnes touchées par un handicap psychique. La société capitaliste est extrêmement validiste et encourage les structures qui vont dans ce sens. En effet, ce système hiérarchise les individus en fonction de leur capacités à être productif ou exploitable dans la sphère du salariat. Les personnes valides sont ainsi considérées comme la norme, cela exclut, infantilise et marginalise les personnes en situation de handicap. Le validisme se fait aussi ressentir dans les infrastructures urbaines qui sont le plus souvent conçues pour une personne valide type. Les personnes en situation de handicap sont en général plus touchées par la précarité et la dépendance étant donné qu\'elles auront moins facilement accès au monde du travail, mais aussi par le fait que les critères administratifs leur permettant d\'obtenir des aides financières sont très limitantes et difficilement accessibles. De plus, avec le système de santé surchargé et en sous-effectif, l\'accès au soin est parfois compliqué. ", "ouvert": false},
    { "numero": 9, "titre": "Le capitalisme", "texte": "Pensé comme un système économique, et théorisé sous sa forme moderne au Royaume-Uni il y a plus de 200ans, le capitalisme s\'est, depuis la révolution industrielle et couplé à l\'idéologie libéral, imposé comme le système dominant tout autour du globe. Si ses couches sont nombreuses, elles reposent toujours sur deux principes centraux : la propriété privée des moyens de productions, et la recherche de profit à travers l\'accumulation de capitaux (productifs ou financiers). Devenu la norme dans le monde du travail mais intégré activement à de nombreux compartiments de nos vies, le capitalisme engendre de nombreuses problématiques, de plus en plus sensibles. Notamment des inégalités sociales inhérentes à son mode de fonctionnement et de contrôle ou des questionnements sur les limites productives de l\'humanité au sein de son écosystème.", "ouvert": false},
    { "numero": 10, "titre": "L'aliénation", "texte": "L\'aliénation est un concept philosophique du \"jeune Marx\" précédant son analyse plus économique du Capital. Aujourd\'hui dans le langage courant, s\'il sert effectivement à décrire la pénibilité au travail et une perte, il peut aussi décrire une dépendance (\"tu es aliénée à ton téléphone\"), ce qui n\'est pas le sens originel. L\'aliénation au sens marxiste décrit la perte de soi des travailleurs et leur non-reconnaissance dans l\'objet de leur travail, résultat de l\'exploitation au sein du mode de production capitaliste et de l\'industrialisation (comme le morcellement des tâches par le travail à la chaîne). L\'aliénation est aussi liée à la pauvreté puisque le travail, même lors des temps de repos, retire les espaces de liberté hors travail par la pauvreté qu\'il engendre. Le travail est, pour Marx, une force d’extériorisation du travailleur vers son environnement, mais lorsque le travailleur ne se reconnaît pas dans son travail, dans le fruit de son travail, qu\'il est sans objet, il ne peut plus se projeter ; la perte de l\'objet est semblable à une perte du monde. En devenant abstrait, le travail prive l\'être humain de ses besoins et de la matérialité de son existence. Cette philosophie a permis de rendre compte de l’incapacité des mouvements ouvriers à combattre l’exploitation capitaliste mais également le fascisme. L\'une des réponses formulée est l\'émancipation des travailleurs par la maîtrise de leur travail et la réappropriation de leur environnement. ", "ouvert": false},
    { "numero": 11, "titre": "L'exploitation: (le mécanisme économique)", "texte": "La centralité de l’exploitation capitaliste repose sur le principe de plus-value, développée par Karl Marx au XIXème siècle. Il oppose d’une part la bourgeoisie (le patronat), propriétaire des moyens de production, et de l’autre, le prolétariat (les travailleurs-euses) sans autres ressources que leur force de travail. Sur l’ensemble de la richesse produite par un-e travailleur-euse, une part de son travail lui revient sous forme de salaire. Ce revenu à comme objectif de restaurer sa force de travail, pas plus. L’autre part est accaparée par son patron : la-e travailleur-euse exerce un travail gratuit. Ce travail gratuit est appelé le surtravail et est à l’origine du profit, que la bourgeoisie tente d’augmenter toujours plus par la baisse du salaire ou l’augmentation de la productivité. Cette exploitation capitaliste n’est pas uniforme, et s’y conjugue plusieurs formes d’oppressions qui la structure à l’image du sexisme, des LGBTIphobies, du racisme, du validisme, de la grossophobie, etc. 150 ans après, cette analyse marxiste reste toujours d’actualité. Notre classe a ainsi des intérêts opposés à ceux de la bourgeoise. Pour combattre l’exploitation capitaliste, une seule solution : la réappropriation et la socialisation des moyens de production par une lutte inclusive et intersectionnelle !", "ouvert": false},
    { "numero": 12, "titre": "Le prolétariat", "texte": "Le prolétariat, celleux qui n’ont que leur force de travail, est défini par son antagonisme avec la classe capitaliste, ceux qui possèdent les moyens de productions. Il est aussi à distinguer de ces salariés gestionnaires des moyens de production, qui organisent la production et accaparent la plus-value avec le patronat. Le prolétariat n’est pas une classe uniforme comme expliqué hier avec les questions de genres, de races et d’orientations sexuelles. Le salariat est aussi en transformation avec l’augmentation du recours à l’auto-entreprenariat. Il est donc important de ne pas s’enfermer dans une vision dépassée d’une classe ouvrière historiquement fantasmée comme composée d’hommes blancs travaillant à l’usine et seule légitime pour lutter contre le capitalisme. Notre classe et nos conditions d’exploitations étant plurielles, notre lutte contre la bourgeoisie capitaliste doit être antipatriarcale et antiraciste!", "ouvert": false},
    { "numero": 13, "titre": "Lutte des classes", "texte": "Les classes sociales sont déterminées par leur place dans les rapports de pouvoir et dans la production, dans le secteur privé et public. La lutte des classes oppose principalement la classe capitaliste et le prolétariat moderne. La lutte des classes est au cœur de notre combat révolutionnaire. Elle est à la fois porteuse de transformations partielles (sur le travail, le partage des richesses, le droit, les institutions…) opposées à la logique et aux intérêts des dominants, et d’une rupture révolutionnaire posant les bases d’une société nouvelle émancipant l’ensemble de l’humanité. On l\'a vu hier, le prolétariat moderne est éclaté du fait de la multiplication des statuts, de nouvelles couches moyennes salariées ne participant pas à la finalité du processus de production et de nouvelles formes d\'exploitation au travail : s\'il est multiforme, il reste cependant unifiable sur la base de sa situation commune, dominée, exploitée. Ce nouveau prolétariat, du fait de sa place dans les rapports de domination et de production, aura un rôle central à jouer dans la rupture avec le capitalisme et l’instauration de l’autogestion. Il doit chercher des convergences revendicatives et anticapitalistes avec de larges pans des couches moyennes salariées et des autres catégories sociales dominées par le capitalisme. Ces convergences se construiront à travers les luttes sociales, les prises de conscience collectives, et l’émergence de projets nouveaux de transformation de la société. ", "ouvert": false},
    { "numero": 14, "titre": "Le syndicalisme", "texte": "Le syndicalisme est né de la volonté des travailleuses et des travailleurs en révolte contre leur oppression et leur exploitation: cette force collective permet l\'unité des salarié-es face au patronat comptant sur leur isolement pour faire perdurer son pouvoir. Si nous avons conscience qu\'il est, comme le reste du mouvement social en période non révolutionnaire, est traversé par une contradiction entre cogestion et opposition, cela ne doit pas nous mener à rejeter le syndicalisme dans son intégralité. Nous défendons un syndicalisme révolutionnaire revenant aux sources des dynamiques d\'auto-organisation du prolétariat intégrant un large répertoire d\'actions (grève, boycott, sabotage, blocage...) pour s\'aider mutuellement et défendre nos intérêts. La pratique syndicale se vit au jour le jour sur le terrain, doit s\'appuyer sur la démocratie interne, le fédéralisme, la rotation et le contrôle des mandats et être porteur de sa propre stratégie de transformation de la société, élaborée en toute indépendance, afin de pouvoir faire naître une vraie solidarité et conscience de classe sur le long terme.", "ouvert": false},
    { "numero": 15, "titre": "L\'État", "texte": "L\'émergence de l\'État est récente. Apparu il y a 6.000 ans, il n\'a rien d\'une organisation politique neutre qui surplombe les intérêts particuliers et permet la paix sociale. Au contraire, cette institution coïncide systématiquement avec la division en classes sociales hiérarchisées qu\'elle entérine, s\'impose par la force et rend possible l\'appropriation d\'un surplus productif au profit de classes dominantes politiques, économiques ou religieuses qui se confondent. Longtemps minoritaire, le principe étatique se répand peu à peu sur toute la planète et s\'intensifie: vers le XVIIe siècle, l\'appareil d\'État désormais accompagné de toute une administration stratifiée complexe est devenu État-nation et permet le développement du colonialisme et du système capitaliste. Bien qu\'un nombre croissant d\'États se disent démocratiques depuis quelques siècles, il ne s\'agit que d\'une façade car le capital se révèle être de loin la force dominante qui influe sa gouvernance. Les récentes transformations de sa structure depuis les années 1980 avec la décentralisation et la mondialisation d\'un côté ou les privatisations et ouvertures à la concurrence néolibérales de l\'autre ne font que modifier la forme de la domination capitaliste et étatique sans l\'affaiblir.", "ouvert": false},
    { "numero": 16, "titre": "L\'anti-étatisme", "texte": "S\'il arrive que des États mettent en œuvre des réformes sociales ou que des gouvernements affirment vouloir réguler les excès du capitalisme, voire se déclarent être l\'avant-garde du prolétariat ou du peuple, il ne faut pas laisser cette façade nous leurrer. Les conquêtes sociales n’ont pas été obtenues grâce aux urnes, alliances ou allégeances électorales mais par les luttes collectives. Sans faire de l\'abstentionnisme un dogme absolu, nous préférons donc nous tenir à l\'écart des institutions étatiques afin d\'œuvrer à créer partout ailleurs un rapport de force permanent contre les classes dirigeantes. Pour autant, nous ne mettons pas dos à dos démocraties et dictatures: les libertés et services publics conquis par le prolétariat doivent être défendus contre les attaques réactionnaires. Comme l\'ont montré l\'expérience des \"socialismes d\'État\" (en réalité d\'autres formes de capitalisme), l\'État est un appareil de domination en soi, dont la logique interne est de se reproduire en engendrant une technocratie qui constituera la nouvelle classe exploiteuse. Une démocratie authentique et véritablement émancipatrice ne pourra se réaliser qu’en dehors du carcan capitaliste et étatique, au sein d’une société sans classes.", "ouvert": false},
    { "numero": 17, "titre": "L\'impérialisme", "texte": "L’essor du capitalisme, aux XIXe et XXe siècles, n’a pu se faire sans le pillage systématique des ressources des pays du Sud. Les conséquences en sont désastreuses: guerres et massacres, destructions des équilibres écologiques, des cultures vivrières, des productions locales. Les économies locales s’en sont retrouvées incomplètes, dépendantes, incapables de répondre aux besoins des populations ce qui entraîne la montée des inégalités, la misère, la faim, l’exil. Aujourd’hui encore les opérations militaires, le pillage organisé des ressources naturelles sont organisées au profit des secteurs d’exportation des richesses par l’alliance entre les bourgeoisies occidentales et leurs relais à la tête des États des «anciennes» colonies. Ils orchestrent cette liberté de circulation des capitaux et des marchandises tout en érigeant des frontières et des murs entre les exploité·es. Ces frontières sont à l’origine de la mort de milliers de migrant-es et de la création d’une catégorie de travailleuses et travailleurs privé-es de droits. C\'est pourquoi il ne peut y avoir de lutte possible contre les inégalités Nord-Sud sans lutte pour la liberté de circulation et d’installation.", "ouvert": false},
    { "numero": 18, "titre": "L\'anti-impérialisme", "texte": "L’anti-impérialisme se définit comme l’organisation et la résistance face à l’impérialisme colonial et néocolonial. Des insurrections d’esclaves dans les Antilles à la formation de guérillas anticolonialistes au Congo, la résistance des opprimé-es s’inscrit dans une longue tradition de lutte, toujours motivée par les mêmes objectifs : la liberté et l’émancipation. Au cours du XXe siècle, cette lutte a pris davantage d’importance par l\'émergence de fronts de libération, notamment par la formation de leurs propres États. Cependant, elle n’a pas sonné le glas de l’oppression impérialiste. Celle-ci est souvent passée d’une domination directe à une domination indirecte, se manifestant par l\'établissement d\'une alliance entre les bourgeoisies occidentales et leurs relais à la tête des États des « anciennes » colonies. S\'y est également conjuguée l’émergence de nouvelles puissances impérialistes. Face aux différents impérialismes et à son ciment, le capitalisme, il est déterminant de soutenir les forces luttant contre la domination coloniale en y associant un projet d’émancipation sociale, démocratique, voire anticapitaliste et fédéraliste, en s’appuyant sur le prolétariat et sur la paysannerie. La lutte anti-impérialiste nécessite dès lors une solidarité, internationaliste et de classe. Du Rojava à la Kanaky, soutien aux peuples en lutte !", "ouvert": false},
    { "numero": 19, "titre": "L\'émancipation", "texte": "L\'émancipation se caractérise par la capacité à s\'auto-déterminer, être acteurice de ses propres conditions d\'existence et par la libération des individus de conditions inhumaines et des formes d\'oppression entretenues par les multiples systèmes de domination - que ce soit au travail par la réduction du/de la travailleureuse comme simple outil de production, dans la vie religieuse en régissant par des dogmes rigides par des institutions hiérarchisées jusqu’à la vie intime ou encore dans le néocolonialisme par l’exploitation des êtres humains. Ainsi, l’émancipation ne peut pas se faire uniquement via la lutte des classes mais doit aussi s’opérer avec les différentes luttes combattant les discriminations et inégalités. Elle n’est donc pas à l’encontre des libertés individuelles mais elle demande de se faire au sein de luttes collectives afin d’éviter, notamment, les intérêts particuliers. L’émancipation se réalise donc par différents moyens : la conscientisation des oppressions afin de pouvoir lutter contre, l’éducation populaire, l’appropriation des moyens de production par les travailleureuses et leur organisation collective, etc.", "ouvert": false},
    { "numero": 20, "titre": "Culture", "texte": "Quand elle est pensée à travers un prisme libertaire, la culture ne se définit non pas comme un capital mais davantage comme un langage. Outil puissant de communication et d\'organisation, elle est avant tout un puissant levier d\'émancipation (cf. définition précédente) individuelle et collective. En musique, on pense instinctivement au mouvement punk comme l\'un des plus fameux bastions s\'opposant à la culture sous sa forme capitaliste, mercantile et élitiste, verrouillée par les entreprises du divertissement et normalisée par les cahiers des charges des productions. Mais,il est important de ne pas oublier que la culture populaire est, -et à toujours été-,  un puissant vivier nourricier des actes de résistance. Que ce fut à travers des chanteurs à texte d\'antan à inspiration prolétaire, tel que Brassens, Ferré ou Vian; ou plus récemment par les jeunes à travers le rap, le hip-hop ou les circuits indépendants de la pop et du rock. Elle se veut protéiforme et a de tout temps permis de rendre leurs voix à ceux qui en avaient été dépossédés.", "ouvert": false},
    { "numero": 21, "titre": "Librisme", "texte": "Le librisme est entendu comme la revendication du caractère politique des technologies dites « numériques » – qu’elles soient matérielles ou logicielles – et la nécessité d’un contrôle populaire de ces outils et des choix qui y sont liés. L\'emprise des GAFAM (Google Amazon Facebook Apple Microsoft) sur nos vies est toujours plus grandissante par leur surveillance et le vol de nos données personnelles. Il s\'agit alors de créer et d\'encourager le développement d’une contre-culture par l\'utilisation de logiciels libres (dont le code n\'est pas secret), d\'aider à leur amélioration par une critique constructive et soutenir celles et ceux qui œuvrent à leur développement. Dès à présent nous pouvons utiliser des outils libres promus par exemple par Framasoft, sans pour autant renoncer à s’adresser à la masse du prolétariat là où elle se connecte – c’est-à-dire sur les réseaux sociaux commerciaux.", "ouvert": false},
    { "numero": 22, "titre": "Autogestion et mandat", "texte": "L\'autogestion est à la fois un objectif et un méthode. L\'auto-gestion comprise comme auto-organisation de la société de demain et des luttes actuelles, implique la participation et la prise de décision politiques de la base, dans une perspective de masse non-élitiste. Pour que les décisions soient collectives, il existe plusieurs \"outils\" permettant l\'autogestion des luttes, comme les assemblées générales et leur coordination démocratique, mais aussi l\'organisation des travailleur.ses au sein des syndicats, de collectifs ou d\'associations d\'opprimé.es. Cela ne veut pas dire qu\'il n\'existe pas des animateur.ices de ces luttes ayant une participation active, mais ces personnes sont soumises à un contrôle collectif et démocratique, comme tou.te participant.e à ces luttes. Pour cela, on va parler de \"mandat\" ( ou de mandaté.es), c\'est-à-dire une forme de délégation de pouvoir au nom du collectif contrôlée et momentanée; en cela, ce mandat est \"impératif\". L\'autogestion permet d\'éviter deux écueils: celui du dirigisme et celui du spontanéisme, puisqu\'il s\'agit d\'une coordination d\'individus rassemblés au nom du collectif encadrés par un certain nombre de règles décidées collectivement. Un autre outil de l\'autogestion peut être l\'utilisation du consensus, plutôt que le vote majoritaire, grâce auquel on cherche, par la discussion argumentée, une issue satisfaisante pour tou.tes, n\'impliquant pas de renoncement (contrairement au compromis).", "ouvert": false},
    { "numero": 23, "titre": "Organisation: plateformisme et spécifisme", "texte": "", "ouvert": false},
    { "numero": 24, "titre": "Révolution: contre-pouvoir et double-pouvoir", "texte": "", "ouvert": false},
    { "numero": 25, "titre": "Le communisme libertaire", "texte": "", "ouvert": false},
    { "numero": 26, "titre": "Commune de Paris", "texte": "", "ouvert": false},
    { "numero": 27, "titre": "Bourses du travail", "texte": "", "ouvert": false},
    { "numero": 28, "titre": "Ukraine", "texte": "", "ouvert": false},
    { "numero": 29, "titre": "Espagne 1936", "texte": "", "ouvert": false},
    { "numero": 30, "titre": "Zapatisme", "texte": "", "ouvert": false},
    { "numero": 31, "titre": "Rojava", "texte": "", "ouvert": false}
];
