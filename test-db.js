// test-db.js

const mysql = require('mysql2');



// Verbindung zur Datenbank herstellen
connection.connect((err) => {
  if (err) {
    console.error('Fehler bei der Verbindung zur Datenbank: ' + err.stack);
    return;
  }
  console.log('Erfolgreich zur MySQL-Datenbank verbunden.');

  // Beispielabfrage ausführen
  connection.query('SELECT * FROM todos', (err, results) => {
    if (err) {
      console.error('Fehler bei der Abfrage: ' + err.stack);
      return;
    }
    console.log('Abfrageergebnisse:', results);
  });

  // Verbindung schließen
  connection.end((err) => {
    if (err) {
      console.error('Fehler beim Schließen der Verbindung: ' + err.stack);
      return;
    }
    console.log('Verbindung erfolgreich geschlossen.');
  });
});
