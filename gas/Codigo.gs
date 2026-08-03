// ============================================================
// BACKEND SIMULACRO - Google Apps Script
// Recibe resultados del simulacro, guarda PDF en Drive
// y registra datos en Google Sheet.
// ============================================================
//
// CONFIGURACION (reemplazar con tus IDs):
//   1. Abre Google Drive, crea una carpeta llamada "Resultados Simulacro"
//   2. Copia el ID de la carpeta de la URL (drives.google.com/drive/folders/AQUI_EL_ID)
//   3. Crea un Google Sheet llamado "Registro Simulacros"
//   4. Copia el ID del Sheet de la URL (docs.google.com/spreadsheets/d/AQUI_EL_ID/edit)
//   5. Pega los IDs abajo:
//
// DESPLIEGUE:
//   1. Pega este codigo en el editor de Apps Script (Extensiones > Apps Script en el Sheet)
//   2. Haz clic en "Implementar" > "Nueva implementacion" > "Aplicacion web"
//   3. Ejecutar como: "Yo"
//   4. Quien tiene acceso: "Cualquiera"
//   5. Copia la URL generada y pegala en index.html (GOOGLE_SCRIPT_URL)
// ============================================================

var CARPETA_DRIVE_ID = 'AQUI_EL_ID_DE_LA_CARPETA';      // ← REEMPLAZAR
var SPREADSHEET_ID   = 'AQUI_EL_ID_DEL_SHEET';           // ← REEMPLAZAR

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var nombre = data.nombre || 'Sin_nombre';
    var puntaje = data.puntaje || 0;
    var nivel = data.nivel || '';
    var correctas = data.correctas || 0;
    var incorrectas = data.incorrectas || 0;
    var sinResponder = data.sinResponder || 0;
    var fecha = data.fecha || new Date().toLocaleDateString('es-CO');
    var pdfBase64 = data.pdfBase64 || '';

    // 1. Guardar PDF en Drive
    if (pdfBase64) {
      var pdfBlob = Utilities.newBlob(
        Utilities.base64Decode(pdfBase64),
        'application/pdf',
        nombre.replace(/\s+/g, '_') + '_' + fecha.replace(/\//g, '-') + '.pdf'
      );
      DriveApp.getFolderById(CARPETA_DRIVE_ID).createFile(pdfBlob);
    }

    // 2. Registrar en Google Sheet
    var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheets()[0];

    // Crear encabezados si el sheet esta vacio
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Fecha', 'Estudiante', 'Puntaje', 'Nivel', 'Correctas', 'Incorrectas', 'Sin responder']);
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    sheet.appendRow([fecha, nombre, puntaje, nivel, correctas, incorrectas, sinResponder]);

    return ContentService.createTextOutput(JSON.stringify({ success: true, message: 'Resultados guardados correctamente.' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, message: 'Error: ' + error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({ status: 'ok', message: 'Backend Simulacro activo.' }))
    .setMimeType(ContentService.MimeType.JSON);
}
