---
layout: default
title: Contact
---



<div id="contact"></div>
<div style="text-align: justify;">
Vous avez un projet, une question ou vous souhaitez échanger sur vos besoins data ?<br>
N’hésitez pas à me contacter par email, sur LinkedIn ou via le formulaire ci-dessous. Je serais ravie d’en discuter !
</div>


<div class="textecentre">
    <!-- Bouton mail -->
    <a href="mailto:emma.dacslv@gmail.com" class="badge-mail">
        ✉️ Contacter par mail : emma.dacslv@gmail.com
    </a>
    <br>
    <!-- Bouton Suivre sur LinkedIn -->
    <a class="btn-github" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=emma-d-352a37211" target="_blank">
        Suivre sur LinkedIn : https://www.linkedin.com/in/emma-d-352a37211
    </a>
    <br>
    <!-- Google Calendar Appointment Scheduling begin -->
    <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet">
    <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
    <script>
    (function() {
      var target = document.currentScript;
      window.addEventListener('load', function() {
        calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2seoerflEhyrPpgdxwN6z30CzVbFsRCcVPzRnVprC0Qt5ZxnR_L_NkdYhzomgMX7Pavmom9TKF?gv=true',
          color: '#7bae7f',
          textColor: '#FFFFFF',
          label: 'Réserver un rendez-vous',
          target,
        });
      });
    })();
    </script>
    <!-- end Google Calendar Appointment Scheduling -->
</div>

         

<form action="https://formsubmit.co/25f8342e7ed18e484f8a024826d9583f" method="POST" class="contact-form">
  <h3>Contactez-moi</h3>

  <label for="name">Prénom NOM</label>
  <input type="text" id="name" name="name" placeholder="" required>

  <label for="entreprise">Entreprise</label>
  <input type="text" id="entreprise" name="entreprise" placeholder="" required>

  <label for="service">Service ou Fonction</label>
  <input type="service" id="service" name="service" placeholder="" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="" required>

  <input type="hidden" id="objet" name="objet" value="">

  <label for="objetb">Objet de la demande</label>
  <input type="objetb" id="objetb" name="objetb" placeholder="" required>

  <label for="message">Message</label>
  <textarea id="message" name="message" placeholder="" rows="5" required></textarea>

  <label>
  <input type="checkbox" name="consent" required>
  J'accepte que mes données soient traitées conformément à la politique de confidentialité.
  </label>

  <button type="submit">Envoyer</button>
</form>

<script>
  // Récupérer tous les boutons
  const contactButtons = document.querySelectorAll('.contact-btn');
  const objetInput = document.getElementById('objet');

  contactButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      objetInput.value = this.dataset.objet;
      document.querySelector('.contact-form').scrollIntoView({ behavior: 'smooth' });
    });
  });
</script>