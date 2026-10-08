/**
 * CONTINGUT EDITABLE / EDITABLE CONTENT
 * Edita aquest fitxer a VS Code, desa i actualitza el navegador.
 * ca = catala; en = angles. Mantingues les cometes, comes i claus.
 * photo pot ser una ruta local (assets/retrat.jpg) o una URL https.
 * La foto actual es carrega del perfil public CRES / UPF.
 * Per desar-la localment: python tools/desar_foto.py
 * Les publicacions es mantenen manualment, no es sincronitzen amb Scholar.
 * enabled: false amaga una seccio, pero NO elimina les dades del codi public.
 */
window.SITE_CONTENT = {
  "updated": "2026-10-08",
  "profile": {
    "name": "Guillem Hernández Guillamet",
    "shortName": "Guillem Hernández",
    "degree": "PhD",
    "email": "guillem.hernandez@udg.edu",
    "githubUser": "guillemhg98",
    "siteUrl": "https://guillemhg98.github.io/",
    "photo": "https://www.upf.edu/documents/3223410/264314393/guillemhern%25C3%2581ndezguillamet/acac2c84-8c29-570b-2b0e-532c84af1f41?t=1669473458004",
    "photoAlt": {
      "ca": "Retrat de Guillem Hernández Guillamet",
      "en": "Portrait of Guillem Hernández Guillamet"
    },
    "role": {
      "ca": "Investigador en IA causal i salut",
      "en": "Researcher in causal AI and healthcare"
    },
    "location": {
      "ca": "Girona · Badalona, Catalunya",
      "en": "Girona · Badalona, Catalonia"
    },
    "heroKicker": {
      "ca": "Recerca i docència",
      "en": "Research & teaching"
    },
    "intro": {
      "ca": "Treballo amb dades clíniques per estudiar com evolucionen les malalties i com podem anticipar les necessitats dels serveis de salut.",
      "en": "I work with clinical data to study how diseases evolve and how we can anticipate the needs of healthcare services."
    },
    "bio": {
      "ca": [
        "Soc doctor per la Universitat de Girona. Faig recerca en IA causal amb el grup eXiT i en l’entorn de recerca i innovació de Germans Trias i Pujol. També imparteixo docència en Enginyeria Biomèdica a la UdG.",
        "Vinc de la bioinformàtica i la ciència de dades. Durant el doctorat vaig fer una estada a la University of Waikato, a Nova Zelanda, amb Albert Bifet."
      ],
      "en": [
        "I hold a PhD from the University of Girona. I carry out research in causal AI with the eXiT group and in the research and innovation environment of Germans Trias i Pujol. I also teach Biomedical Engineering at UdG.",
        "My background is in bioinformatics and data science. During my PhD, I spent a research period at the University of Waikato in New Zealand with Albert Bifet."
      ]
    },
    "links": [
      {
        "name": "Google Scholar",
        "url": "https://scholar.google.com/citations?user=VHZKrsMAAAAJ"
      },
      {
        "name": "ORCID",
        "url": "https://orcid.org/0000-0002-4701-4878"
      },
      {
        "name": "GitHub",
        "url": "https://github.com/guillemhg98"
      },
      {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/guillem-hern%C3%A1ndez-guillamet-9a2892178/"
      }
    ],
    "keywords": [
      "Causal AI",
      "Explainable AI",
      "Longitudinal data",
      "Healthcare forecasting",
      "Bayesian networks",
      "Deep learning"
    ],
    "contactText": {
      "ca": "Per parlar de recerca, docència o algun projecte en comú, em pots escriure a:",
      "en": "For research, teaching or a project we might work on together, you can reach me at:"
    },
    "photoSource": "https://www.upf.edu/web/cres/col-laboradors/-/asset_publisher/iAUt4aDIjVwv/content/hern%C3%A1ndez-guillamet-guillem/maximized",
    "photoCredit": {
      "ca": "Font: perfil CRES / UPF",
      "en": "Source: CRES / UPF profile"
    }
  },
  "affiliations": [
    {
      "name": "Universitat de Girona",
      "detail": "eXiT Research Group",
      "url": "https://exit.udg.edu/"
    },
    {
      "name": "Germans Trias i Pujol",
      "detail": {
        "ca": "Recerca i innovació · Hospital / IGTP",
        "en": "Research and innovation · Hospital / IGTP"
      },
      "url": "https://www.germanstrias.org/"
    },
    {
      "name": "University of Waikato",
      "detail": {
        "ca": "Estada de recerca · 2024–2025",
        "en": "Research visit · 2024–2025"
      },
      "url": "https://www.waikato.ac.nz/"
    }
  ],
  "research": [
    {
      "number": "01",
      "title": {
        "ca": "IA causal i explicable",
        "en": "Causal and explainable AI"
      },
      "text": {
        "ca": "Estudio les relacions temporals entre diagnòstics i esdeveniments clínics. Treballo amb mètodes de descobriment causal i models que permetin interpretar aquestes relacions.",
        "en": "I study temporal relationships between diagnoses and clinical events, using causal discovery methods and models that make those relationships interpretable."
      },
      "tags": [
        "CauRuler",
        "Causal discovery"
      ],
      "source": "https://pubmed.ncbi.nlm.nih.gov/36780801/"
    },
    {
      "number": "02",
      "title": {
        "ca": "Trajectòries i risc individual",
        "en": "Trajectories and individual risk"
      },
      "text": {
        "ca": "Treballo amb xarxes bayesianes en temps continu i models de risc per estudiar l’evolució de la multimorbiditat i adaptar les prediccions a cada pacient.",
        "en": "I work with continuous-time Bayesian networks and risk models to study multimorbidity progression and tailor predictions to individual patients."
      },
      "tags": [
        "CTBN-PH",
        "Longitudinal modelling"
      ],
      "source": "https://recerca.udg.edu/en/publications/ctbn-ph-a-continuous-time-bayesian-network-for-individualised-dia/"
    },
    {
      "number": "03",
      "title": {
        "ca": "Predicció de demanda",
        "en": "Healthcare demand forecasting"
      },
      "text": {
        "ca": "Desenvolupo models de sèries temporals per predir visites i diagnòstics, amb especial atenció a la planificació de l’atenció primària.",
        "en": "I develop time-series models to forecast visits and diagnoses, with a particular focus on primary-care planning."
      },
      "tags": [
        "CCLR-DL",
        "Transformers"
      ],
      "source": "https://pubmed.ncbi.nlm.nih.gov/40929936/"
    }
  ],
  "projects": [
    {
      "id": "predap",
      "name": "PredAP",
      "description": {
        "ca": "Predicció de la demanda d’atenció primària a partir de sèries temporals de visites i diagnòstics. Una línia de treball orientada a donar suport a la planificació de recursos sanitaris.",
        "en": "Primary-care demand forecasting from time series of visits and diagnoses. A research and translation effort aimed at supporting healthcare resource planning."
      },
      "tags": {
        "ca": [
          "Atenció primària",
          "Planificació",
          "Sèries temporals"
        ],
        "en": [
          "Primary care",
          "Planning",
          "Time series"
        ]
      },
      "url": "https://recerca.udg.edu/ca/publications/a-structured-residual-refinement-transformer-framework-for-long-h/",
      "linkLabel": {
        "ca": "Publicació relacionada",
        "en": "Related publication"
      },
      "featured": true
    },
    {
      "id": "ctbn",
      "name": "CTBN-PH",
      "description": {
        "ca": "Integració de xarxes bayesianes en temps continu i models de Cox per adaptar les transicions diagnòstiques a les característiques de cada pacient.",
        "en": "Combining continuous-time Bayesian networks and Cox models to adapt diagnostic transitions to individual patient characteristics."
      },
      "tags": [
        "Bayesian networks",
        "Cox-PH"
      ],
      "url": "https://doi.org/10.1016/j.compbiomed.2025.111069",
      "linkLabel": {
        "ca": "Llegir l’article",
        "en": "Read the paper"
      }
    },
    {
      "id": "cclr",
      "name": "CCLR-DL",
      "description": {
        "ca": "Selecció de predictors amb correlacions creuades, regressió amb retards i causalitat de Granger, combinada amb xarxes neuronals.",
        "en": "Predictor selection using cross-correlation, lagged regression and Granger causality, combined with neural forecasting models."
      },
      "tags": [
        "Feature selection",
        "Deep learning"
      ],
      "url": "https://doi.org/10.1016/j.cmpb.2025.109057",
      "linkLabel": {
        "ca": "Llegir l’article",
        "en": "Read the paper"
      }
    },
    {
      "id": "cauruler",
      "name": "CauRuler",
      "description": {
        "ca": "Mineria de regles d’associació causals no redundants per explorar trajectòries clíniques complexes i representar dependències entre diagnòstics.",
        "en": "Mining irredundant causal association rules to explore complex clinical trajectories and represent dependencies between diagnoses."
      },
      "tags": [
        "Rule mining",
        "Patient trajectories"
      ],
      "url": "https://doi.org/10.1016/j.compbiomed.2023.106636",
      "linkLabel": {
        "ca": "Llegir l’article",
        "en": "Read the paper"
      }
    }
  ],
  "roles": [
    {
      "title": {
        "ca": "Ciència de dades i innovació sanitària",
        "en": "Data science and healthcare innovation"
      },
      "institution": "Hospital Germans Trias i Pujol / IGTP",
      "description": {
        "ca": "Desenvolupament de models d’IA i anàlisi de dades per respondre a necessitats clíniques i de gestió assistencial.",
        "en": "Developing AI models and data analyses to address clinical and healthcare management needs."
      }
    },
    {
      "title": {
        "ca": "Recerca en intel·ligència artificial",
        "en": "Artificial intelligence research"
      },
      "institution": "eXiT · Universitat de Girona",
      "description": {
        "ca": "IA causal i explicable, modelització probabilística i predicció sobre dades sanitàries longitudinals.",
        "en": "Causal and explainable AI, probabilistic modelling and prediction using longitudinal healthcare data."
      }
    },
    {
      "title": {
        "ca": "Docència universitària",
        "en": "University teaching"
      },
      "institution": "Universitat de Girona",
      "description": {
        "ca": "Docència en intel·ligència artificial i aprenentatge automàtic en l’àmbit de l’Enginyeria Biomèdica.",
        "en": "Teaching artificial intelligence and machine learning in Biomedical Engineering."
      }
    }
  ],
  "education": [
    {
      "period": "2026",
      "title": {
        "ca": "Doctorat · Intel·ligència artificial i salut",
        "en": "PhD · Artificial intelligence and healthcare"
      },
      "institution": "Universitat de Girona",
      "description": {
        "ca": "Doctorat industrial. Tesi dirigida per Beatriz López i Francesc López Seguí. Excel·lent cum laude i menció internacional.",
        "en": "Industrial PhD. Thesis supervised by Beatriz López and Francesc López Seguí. Excellent cum laude and international mention."
      },
      "url": "https://exit.udg.edu/phd-thesis/"
    },
    {
      "period": "2024–2025",
      "title": {
        "ca": "Estada internacional de recerca",
        "en": "International research visit"
      },
      "institution": "University of Waikato · New Zealand",
      "description": {
        "ca": "Estada de recerca en intel·ligència artificial amb el professor Albert Bifet.",
        "en": "Research visit in artificial intelligence with Professor Albert Bifet."
      },
      "url": ""
    },
    {
      "period": "MSc",
      "title": {
        "ca": "Innovació i Recerca en Informàtica",
        "en": "Innovation and Research in Informatics"
      },
      "institution": "Universitat Politècnica de Catalunya",
      "description": {
        "ca": "Especialització en Data Science.",
        "en": "Specialisation in Data Science."
      },
      "url": ""
    },
    {
      "period": "BSc",
      "title": {
        "ca": "Grau en Bioinformàtica",
        "en": "BSc in Bioinformatics"
      },
      "institution": "ESCI-UPF · UPC · UAB",
      "description": {
        "ca": "Formació interdisciplinària en biologia, computació i anàlisi de dades.",
        "en": "Interdisciplinary training in biology, computing and data analysis."
      },
      "url": "https://www.upf.edu/web/cres/col-laboradors/-/asset_publisher/iAUt4aDIjVwv/content/hern%C3%A1ndez-guillamet-guillem/maximized"
    }
  ],
  "events": [
    {
      "year": "2026",
      "title": "AIME · Ottawa",
      "description": {
        "ca": "Treball sobre Transformers amb refinament residual per a la predicció de demanda assistencial a llarg termini.",
        "en": "Work on residual-refinement Transformers for long-horizon healthcare demand forecasting."
      },
      "url": "https://doi.org/10.1007/978-3-032-30813-9_40"
    },
    {
      "year": "2024",
      "title": "ICCBR",
      "description": {
        "ca": "Coautoria d’un treball sobre patrons de seqüències d’EEG per a la detecció de crisis epilèptiques.",
        "en": "Co-authored work on EEG sequence patterns for seizure detection."
      },
      "url": "https://doi.org/10.1007/978-3-031-63646-2_17"
    },
    {
      "year": "2023",
      "title": "CCIA",
      "description": {
        "ca": "Predicció de demanda associada a hipertensió amb correlacions creuades i regressió amb retards.",
        "en": "Forecasting hypertension-related demand using cross-correlation and lagged regression."
      },
      "url": "https://doi.org/10.3233/FAIA230682"
    }
  ],
  "personal": {
    "enabled": false,
    "title": {
      "ca": "Més enllà de la recerca",
      "en": "Beyond research"
    },
    "text": {
      "ca": "També participo en el món casteller, com a cap de colla dels Esperxats de l’Estany durant el bienni 2026–2027.",
      "en": "Beyond research, I am involved in the Catalan human-tower tradition as head of the Esperxats de l’Estany team for 2026–2027."
    }
  },
  "optionalProjects": {
    "enabled": false,
    "name": "RUMIA",
    "description": {
      "ca": "Iniciativa de transferència de coneixement en IA predictiva per a la gestió sanitària.",
      "en": "A knowledge-transfer initiative in predictive AI for healthcare management."
    },
    "url": "https://rumia.org"
  },
  "publications": [
    {
      "id": "aime2026",
      "year": 2026,
      "title": "A Structured Residual Refinement Transformer Framework for Long-Horizon Healthcare Demand Forecasting with Causal and Seasonal Signals",
      "authors": "Guillem Hernández Guillamet; Joan Samper Vila; Beatriz López Ibáñez",
      "venue": "AIME 2026 · pp. 216–221",
      "doi": "10.1007/978-3-032-30813-9_40",
      "category": "forecasting",
      "featured": true,
      "source": "https://recerca.udg.edu/ca/publications/a-structured-residual-refinement-transformer-framework-for-long-h/",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "cclr2025",
      "year": 2025,
      "title": "CCLR-DL: A novel statistics and deep learning hybrid method for feature selection and forecasting healthcare demand",
      "authors": "Guillem Hernández Guillamet; Francesc López Seguí; Josep Vidal-Alaball; Beatriz López",
      "venue": "Computer Methods and Programs in Biomedicine · 272, 109057",
      "doi": "10.1016/j.cmpb.2025.109057",
      "category": "forecasting",
      "featured": true,
      "source": "https://pubmed.ncbi.nlm.nih.gov/40929936/",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "ctbn2025",
      "year": 2025,
      "title": "CTBN-PH: A continuous-time Bayesian network for individualised diagnostic risk prediction",
      "authors": "Guillem Hernández Guillamet; Francesc López Seguí; Josep Vidal-Alaball; Beatriz López",
      "venue": "Computers in Biology and Medicine · 197, 111069",
      "doi": "10.1016/j.compbiomed.2025.111069",
      "category": "causal",
      "featured": true,
      "source": "https://recerca.udg.edu/en/publications/ctbn-ph-a-continuous-time-bayesian-network-for-individualised-dia/",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "als2025",
      "year": 2025,
      "title": "Epidemiology of amyotrophic lateral sclerosis: a population-based analysis, 2015–2020",
      "authors": "Bernat Bertran-Recasens; Sergio Vidal-Notari; Guillem Hernández Guillamet; Francesc López Seguí; Josep Vidal-Alaball; Joan Jiménez-Balado; Miguel Angel Rubio",
      "venue": "Amyotrophic Lateral Sclerosis and Frontotemporal Degeneration · 26(7–8), 784–793",
      "doi": "10.1080/21678421.2025.2527887",
      "category": "health",
      "featured": false,
      "source": "https://pubmed.ncbi.nlm.nih.gov/40644419/",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "eeg2024",
      "year": 2024,
      "title": "Examining the Potential of Sequence Patterns from EEG Data as Alternative Case Representation for Seizure Detection",
      "authors": "J. Fernandez; Guillem Hernández Guillamet; C. Montserrat; B. Innocenti; B. López",
      "venue": "ICCBR 2024 · pp. 258–272",
      "doi": "10.1007/978-3-031-63646-2_17",
      "category": "health",
      "featured": false,
      "source": "https://doi.org/10.1007/978-3-031-63646-2_17",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "cardio2024",
      "year": 2024,
      "title": "Assessing the impact of haemodynamic monitoring with CardioMEMS on heart failure patients: a cost–benefit analysis",
      "authors": "P. Codina; J. Á. Vicente Gómez; Guillem Hernández Guillamet; et al.",
      "venue": "ESC Heart Failure · 11(4), 1955–1962",
      "doi": "10.1002/ehf2.14698",
      "category": "health",
      "featured": false,
      "source": "https://onlinelibrary.wiley.com/doi/10.1002/ehf2.14698",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "cauruler2023",
      "year": 2023,
      "title": "CauRuler: Causal irredundant association rule miner for complex patient trajectory modelling",
      "authors": "Guillem Hernández Guillamet; Francesc López Seguí; Josep Vidal-Alaball; Beatriz López",
      "venue": "Computers in Biology and Medicine · 155, 106636",
      "doi": "10.1016/j.compbiomed.2023.106636",
      "category": "causal",
      "featured": true,
      "source": "https://pubmed.ncbi.nlm.nih.gov/36780801/",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "mortality2023",
      "year": 2023,
      "title": "Machine Learning Model for Predicting Mortality Risk in Patients With Complex Chronic Conditions: Retrospective Analysis",
      "authors": "Guillem Hernández Guillamet; A. N. Morancho Pallaruelo; L. Miró Mezquita; et al.",
      "venue": "Online Journal of Public Health Informatics · 15, e52782",
      "doi": "10.2196/52782",
      "category": "health",
      "featured": false,
      "source": "https://ojphi.jmir.org/2023/1/e52782/",
      "note": {
        "ca": "Correcció publicada el 2024: 10.2196/58453.",
        "en": "Correction published in 2024: 10.2196/58453."
      }
    },
    {
      "id": "ccia2023",
      "year": 2023,
      "title": "Hipertension Demand Forecasting Using Cross-Correlation and Lagged Multiple Linear Regression Models for Anticipating Health Resources Needs",
      "authors": "Guillem Hernández Guillamet; Beatriz López Ibáñez; Oriol Estrada Cuxart; et al.",
      "venue": "Artificial Intelligence Research and Development · CCIA 2023",
      "doi": "10.3233/FAIA230682",
      "category": "forecasting",
      "featured": false,
      "source": "https://doi.org/10.3233/FAIA230682",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "respiratory2023",
      "year": 2023,
      "title": "Impact of the COVID-19 pandemic on diagnosis of respiratory diseases in the Northern Metropolitan Area in Barcelona (Spain)",
      "authors": "Ignasi Garcia-Olive; Francesc López Seguí; Guillem Hernández Guillamet; Josep Vidal-Alaball; Jorge Abad; Antoni Rosell",
      "venue": "Medicina Clínica (English Edition) · 160(9), 392–396",
      "doi": "10.1016/j.medcle.2022.11.018",
      "category": "health",
      "featured": false,
      "source": "https://pubmed.ncbi.nlm.nih.gov/37197392/",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "visits2021",
      "year": 2021,
      "title": "Characterization and Identification of Variations in Types of Primary Care Visits Before and During the COVID-19 Pandemic in Catalonia: Big Data Analysis Study",
      "authors": "Francesc López Seguí; Guillem Hernández Guillamet; Hèctor Pifarré i Arolas; et al.",
      "venue": "Journal of Medical Internet Research · 23(9), e29622",
      "doi": "10.2196/29622",
      "category": "health",
      "featured": false,
      "source": "https://www.jmir.org/2021/9/e29622/",
      "note": {
        "ca": "",
        "en": ""
      }
    },
    {
      "id": "testing2021",
      "year": 2021,
      "title": "A Cost-Benefit Analysis of the COVID-19 Asymptomatic Mass Testing Strategy in the North Metropolitan Area of Barcelona",
      "authors": "Francesc López Seguí; Oriol Estrada Cuxart; Oriol Mitjà i Villar; Guillem Hernández Guillamet; et al.",
      "venue": "International Journal of Environmental Research and Public Health · 18(13), 7028",
      "doi": "10.3390/ijerph18137028",
      "category": "health",
      "featured": false,
      "source": "https://www.mdpi.com/1660-4601/18/13/7028",
      "note": {
        "ca": "",
        "en": ""
      }
    }
  ],
  "thesis": {
    "title": "Causal AI methods for healthcare decision-support making on longitudinal data",
    "url": "https://dugi-doc.udg.edu/handle/10256/28777"
  }
};
