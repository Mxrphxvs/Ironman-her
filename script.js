
const suitsInfo = [
  {
    name: `Mark I`,
    info: `Tony Stark en Ho Yinsen creëerden de Mark I Iron Man-harnas in gevangenschap als een middel om te ontsnappen, uitgerust met basiswapens en volledig kogelvrij.`,
    img: `afbeeldingen/suit_1.png`
  },
  { name: `Mark II`,
    info: `Terug in de VS verbeterde Stark de Mark I met geavanceerde repulsortechnologie en een slank design, maar het had een probleem met hoge hoogtes die bevriezing veroorzaakten.`,
    img: `afbeeldingen/suit_2.png`
  }
  ,
  { name: `Mark III`,
    info: `Stark introduceerde het kenmerkende rood-met-gouden harnas met geavanceerde wapens en opgeloste bevriezingsproblemen, waarmee Iron Man een volwaardige superheld werd.`,
    img: `afbeeldingen/suit_3.png`
  },
  { name: `Mark IV`,
    info: `Na zijn gevecht met Stane ontwikkelde Stark de Mark IV met minimale verbeteringen en extra luxe, zoals een afvalverwerkingssysteem.`,
    img: `afbeeldingen/suit_4.png`
  }
  ,
  { name: `Mark V`,
    info: `De "Kofferpak" Mark V was een stap naar draagbaarheid met gemakkelijke toegankelijkheid en snelle montage, maar minder duurzaamheid.`,
    img: `afbeeldingen/suit_5.png`
  }
  ,
  { name: `Mark VI`,
    info: `Stark ontwikkelde een nieuwe, schonere boogreactor en een bijpassend harnas met verbeterde energievoorziening en geavanceerde wapens.`,
    img: `afbeeldingen/suit_6.png`
  },
  { name: `Mark VII`,
    info: `Met de Mark 42 kon Stark het harnas op afstand besturen door middel van geïmplanteerde chips en was het geïnspireerd door de Extremis-verhaallijn van Marvel Comics.`,
    img: `afbeeldingen/suit_7.png`
  }
  ,
  { name: `Mark VIII`,
    info: `Rhodey Rhodes, een voormalige luchtmachtofficier, werd Iron Man's bondgenoot en steunde Stark in zijn transitie van wapenfabrikant naar superheld.`,
    img: `afbeeldingen/suit_8.png`
  }




];

  
document.addEventListener('DOMContentLoaded', (event) => {
    // Functie om de model en de achtergrond-blur te tonen
    function showModel(title, selectedArticle) {

      // Zoek het pak op basis van de titel.
      const suitInfo = suitsInfo.find(suit => suit.name === title);


      if (suitInfo) {
          // Maak en voeg de achtergrondvervaging toe
          let backgroundBlur = document.createElement('div');
          backgroundBlur.classList.add('background-blur');
          document.body.appendChild(backgroundBlur);
          
          // Toon de model container
          let model = document.getElementById('model');
          model.style.display = 'flex';
          model.querySelector('#model-title').innerText = title;
          model.querySelector('#model-info').innerText = suitInfo.info;
          model.querySelector('#model-image').src = suitInfo.img;
          // selectedArticle.classList.add('selected-article');
          
          // Voeg de blur-effect klasse toe aan alle articles behalve het geselecteerde
          document.querySelectorAll('main article').forEach(article => {
          if (article !== selectedArticle) {
            article.classList.add('blur-effect');
          }
        });
      } else {
        console.error("Titel van het pak niet gevonden mos", title);
      }
    }
  
    // Functie om de model en achtergrondvervaging te verbergen
    function hideModel() {
      document.getElementById('model').style.display = 'none';
      document.querySelector('.background-blur').remove(); // Verwijder de achtergrondvervaging
  
      // Verwijder de blur-effect en selected-article klassen van alle articles
      document.querySelectorAll('main article').forEach(article => {
        article.classList.remove('blur-effect', 'selected-article');
      });
    }
  
    // Event listeners voor alle articles
    document.querySelectorAll('main article').forEach(article => {
      article.addEventListener('click', function() {
        showModel(this.querySelector('h2').innerText, 'Hier komt de informatie over het model...', this);
      });
    });
  
    // Event listener voor de sluitknop
    document.querySelector('.close').addEventListener('click', function() {
      hideModel();
    });
  });

