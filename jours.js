let jours = [
    { "numero": 1, "titre": "Urgence écologique", "texte": "Changement climatique, fonte des glaces, montée des eaux, extinction des espèces, déplacements forcés des populations, risques sanitaires, injustices économiques et sociales à court et à long terme. De l\'urgence écologique émanent des problèmes multiples et conséquents, souvent entremêlés. Or, face à l\'urgence écologique nous devons et pouvons agir. S\'il n\'est pas envisageable de sombrer dans le catastrophisme qui annihilerait la possibilité d\'agir, il ne s\'agit pas non plus d\'espérer un retour idéalisé à la nature ni même de pointer du doigt la responsabilité individuelle plus que celle d\'un système de production et de développement profondément injuste, qui se fonde sur l\'exploitation du vivant sans limite. Aussi, la lutte écologiste ne peut-être qu\'anticapitaliste et sociale.", "ouvert": false},
    { "numero": 2, "titre": "L\'écologie sociale ", "texte": "Théorisée par Murray Bookchin, l\'écologie sociale met en rapport problèmes écologiques et problèmes sociaux. En effet, les différents types de dominations exercées au sein des sociétés fondées sur la hiérarchie (les hommes sur les femmes, les blanc-hes sur les non-blanc-hes, les riches sur les pauvres etc.) se retrouvent dans la manière dont nous appréhendons notre environnement. En somme, la lutte écologiste appelle le dépassement de nos sociétés de classes, capitalistes, hiérarchiques et injustes.  Aussi, trois révolutions sont nécessaires: une révolution des modes de production afin de parvenir à une maîtrise écologique de la production ; une révolution des modes de vie pour une société égalitaire en harmonie avec l\'environnement; et enfin une révolution des échanges pour une autonomie productive de circuits d\'échanges courts afin de gagner notre indépendance face aux multinationales et sortir des énergies fossiles.", "ouvert": false},
    { "numero": 3, "titre": "Patriarcat", "texte": "Système politique et économique de domination des hommes cisgenres (*dont l\'identité de genre correspond au genre assigné à la naissance) sur les femmes et minorités de genre (*spectre regroupant toutes les identités de genre sortant du schéma binaire homme/femme), le patriarcat se traduit par l’exploitation domestique de ces dernières, produit la culture sexiste, solidifiée en un système de codes sociaux et de lois et instaure une hiérarchie : 2 classes de genre \"homme\" et \"femme\" sont essentialisées et l\'hétérosexualité est imposée comme norme. Toute personne qui sort de cette assignation genrée s\'y voit réintégrée de force. Cette domination aux facettes multiples relègue les femmes et minorités de genre à des rôles subalternes et les dépossède de la maîtrise de leur vie, corps, et sexualité. Elle est aussi physique avec les violences domestiques, sexuelles et le harcèlement qui entravent leur vie à la fois par leur réalité et par la menace constante qu’elles font peser.", "ouvert": false},
    { "numero": 4, "titre": "Féminisme", "texte": "Le féminisme incarne la lutte contre le patriarcat et combat l’inégalité entre les genres dans tous les domaines (juridique, économique, politique et social). Cette lutte pour l’émancipation est l\'un des thèmes essentiels du combat libertaire. Nos objectifs : l’abolition du patriarcat en tant que système de domination, l’égalité civile et sociale entre hommes, femmes et minorités de genre, et la liberté pour tou-tes de disposer de leur corps, leur capacité reproductrice et leur sexualité, dans l’espace privé et domestique comme dans l’espace public. La lutte féministe se doit d\'être inclusive et intersectionnelle: il est urgent de reconnaître que les multiples formes de domination entrecroisées, à savoir, le genre, la race et la classe ou encore le handicap génèrent des oppressions spécifiques, alimentées par l\'État.", "ouvert": false},
    { "numero": 5, "titre": "LGBTIphobies et Luttes LGBTI", "texte": "Les LGBTIphobies représentent l\'ensemble des discriminations et rejets à l\'encontre des personnes LGBTI, regroupant la lesbophobie, l’homophobie, la biphobie, la transphobie et la discrimination des personnes intersexes. Ces oppressions sont des manifestations du patriarcat, se fondant notamment, sur l’existence de seulement 2 classes de genre, entraînant la mutilation des personnes intersexes, et sur l’imposition d’un modèle cisgenre et hétérosexuel dominant. Leurs formes sont multiples : thérapies de conversion légales, discrimination au don du sang, invisibilisation dans l\'éducation, violences institutionnelles, PMA restreinte sur des critères transphobes... Les luttes LGBTI visent à lutter contre les discriminations quotidiennes et à obtenir et défendre les droits des personnes LGBTI, que ce soit les droits d\'accès à la santé, de reproduction, de disposition de leur propre corps, de parentalité, d\'union ou d\'accès au logement par exemple.", "ouvert": false},
    { "numero": 6, "titre": "On arrive", "texte": "On arrive au plus vite!", "ouvert": false},
    { "numero": 7, "titre": "On arrive", "texte": "On arrive au plus vite!", "ouvert": false},
    { "numero": 8, "titre": "On arrive", "texte": "On arrive au plus vite!", "ouvert": false},
    { "numero": 9, "titre": "On arrive", "texte": "On arrive au plus vite!", "ouvert": false},
    { "numero": 10, "titre": "On arrive", "texte": "On arrive au plus vite!", "ouvert": false},
    { "numero": 11, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 12, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 13, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 14, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 15, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 16, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 17, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 18, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 19, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 20, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 21, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 22, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 23, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 24, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 25, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 26, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 27, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 28, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 29, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 30, "titre": "", "texte": "text jour x", "ouvert": false},
    { "numero": 31, "titre": "", "texte": "text jour x", "ouvert": false}
];
