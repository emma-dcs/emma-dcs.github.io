---
layout: default
title: 👩🏻‍💻 Projets réalisés
---

📊 Chaque projet présenté ici illustre un défi métier rencontré par les équipes agroalimentaires (qualité, R&D, marketing…) et la manière dont la donnée a permis de le résoudre.<br><br>
Mon objectif : montrer concrètement comment un problème opérationnel peut se transformer en solution data efficace, reproductible et transférable à d’autres secteurs. <br><br>

<label for="filtreService">Projets associés au service proposé :</label>
<select id="filtreService">
  <option value="all">Tous</option>
  <option value="A">A - Libérez du temps grâce à l'automatisation de vos rapports</option>
  <option value="B">B - Faites parler vos clients grâce à l'analyse de verbatims</option>
  <option value="C">C - Pilotez vos projets avec des dashboards interactifs</option>
  <option value="D">D - Offrez-vous une assistance intelligente grâce aux Chatbot ou à l'IA générative</option>
  <option value="E">E - Autre</option>
</select>

<div class="projets-container">
    <a href="{{ site.baseurl }}/projet5" class="projet" data-service="D">
    <h3 class="projet-titre">Projet 5 : Création d’un chatbot pour faciliter la consultation de documents techniques</h3>
    <p class="projet-description">Comment rendre la recherche d’information instantanée et autonome pour vos équipes ?</p>
    <span class="projet-lien">Découvrir le projet →</span>
    </a>
    <a href="{{ site.baseurl }}/projet4" class="projet" data-service="A">
    <h3 class="projet-titre">Projet 4 : Automatisation du reporting</h3>
    <p class="projet-description">Comment diviser par 4 le temps de création d'un rapport ?</p>
    <img src="{{ site.baseurl }}/assets/images/projet4.png" alt="Projet 4" class="projet-image">
    <span class="projet-lien">Découvrir le projet →</span>
    </a>
    <a href="{{ site.baseurl }}/projet3" class="projet" data-service="B">
    <h3 class="projet-titre">Projet 3 : Automatisation par IA de l'annotation des retours clients</h3>
    <p class="projet-description">Comment utiliser l'IA pour l'annotation des commentaires sensoriels ?</p>
    <img src="{{ site.baseurl }}/assets/images/projet3.png" alt="Projet 3" class="projet-image">
    <span class="projet-lien">Découvrir le projet →</span>
    </a>
    <a href="{{ site.baseurl }}/projet2" class="projet" data-service="E">
    <h3 class="projet-titre">Projet 2 : Évaluation d’une poignée haptique pour l’aide à la mobilité (Santé/Médecine)</h3>
    <p class="projet-description">Comment permettre aux personnes en situation de handicap de s'orienter et se déplacer de façon autonome ?</p>
    <img src="{{ site.baseurl }}/assets/images/projet2.png" alt="Projet 2" class="projet-image">
    <span class="projet-lien">Découvrir le projet →</span>
    </a>
    <a href="{{ site.baseurl }}/projet1" class="projet" data-service="E">
    <h3 class="projet-titre">Projet 1 : Aide à la décision pour le choix des cultures agricoles (Projet d'étude)</h3>
    <p class="projet-description">Comment adapter les cultures aux caractéristiques physico-chimiques des sols ?</p>
    <img src="{{ site.baseurl }}/assets/images/projet1.png" alt="Projet 1" class="projet-image">
    <span class="projet-lien">Découvrir le projet →</span>
    </a>
    
</div>

<script>
  const selectFiltre = document.getElementById("filtreService");
  const projets = document.querySelectorAll(".projet");

  selectFiltre.addEventListener("change", function() {
    const serviceChoisi = this.value;

    projets.forEach(projet => {
      if (serviceChoisi === "all" || projet.dataset.service === serviceChoisi) {
        projet.style.display = "block";
      } else {
        projet.style.display = "none";
      }
    });
  });
</script>