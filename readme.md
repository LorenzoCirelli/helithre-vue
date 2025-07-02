# HELITHRE

## WHAT IS HELITHRE
Elitre allows you to create pages and forms in vue using a json

## WRAPPER
Helithre ti permette di creare un wrapper per la pagina o il form.
Una singola pagina è un wrapper in cui carichi il componente richiesto tramite il JSON passato.
Un singolo form è un wrapper in cui carichi i campi e Helithre carica le risposte.

Per creare il tuo primo wrapper devi creare un helithreJSON valido e passarlo tramite props a HelithreLoad. Il props è helithreJson.

## HELITRE JSON
for a form:
{
    name:'wrapperName';
    wrapper:'form';
    childrens: [
        {
            text:'Text for the field',
            id: 'fieldId',
            type:'number|text|date'
        }
    ]
}