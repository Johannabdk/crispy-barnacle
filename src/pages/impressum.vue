<template>
  <div class="container">
    <div class="impressum-title">
      <h1>Impressum | Datenschutz</h1>
    </div>
    <div class="verantwortlicher">
      <h3>Verantwortliche:</h3>
      <p>Kirsten Bodendieck<br>
        Musikerin<br><br>
        Fritz-Gansberg-Str. 8<br>
        28213 Bremen<br><br>
        Telefon   04 21 | 2 77 61 50<br>
        Telefax   04 21 | 2 77 61 49<br><br>
        >>  info@kirstenbodendieck.de</p>
    </div>
    <div class="haftung">
      <h3>Haftungshinweis</h3>
      <p>Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. </p>
    </div>
    <div class="impressum-inhalt">
      <h3>Datenschutzerklärung</h3>
      <p>Die Betreiberin dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Ihre personenbezogenen Daten werden vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung behandelt. Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich. Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck der Verarbeitung von personenbezogenen Daten innerhalb der Nutzung dieser Webseite auf. Im Hinblick auf die verwendeten Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO).</p>
      <h3>Erhebung von Zugriffsdaten und Logfiles</h3>
      <p>Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.

  Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.</p>
      <h3>Kontaktaufnahme</h3>
      <p>Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b) DSGVO verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.

  Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.</p>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Impressum',

  // component logic

};
</script>

<style scoped>

.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h1, h3 {
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 20px;
}

.verantwortlicher, .haftung, .impressum-inhalt {
  margin-bottom: 40px;
}

</style>