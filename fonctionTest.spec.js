const index = require("./index");

const fonctiontester = index.somme;

describe ("Début des test de la fonction somme : ", ()=>{
    test ("devrait retourner 4 quand on lui passe 2 et 2 ", ()=>{
        expect (fonctiontester(2,2)).toBe(4);
    });
    test ("devrait retourner 4 quand on lui passe '2' et '2' ", ()=>{
        expect (fonctiontester('2','2')).toBe(4);
    });
    test ("devrait retourner 4 quand on lui passe '2' et 2 ", ()=>{
        expect (fonctiontester('2',2)).toBe(4);
    });
    test ("devrait retourner 4 quand on lui passe 2 et '2' ", ()=>{
        expect (fonctiontester(2,'2')).toBe(4);
    });
    test ("devrait retourner 2 quand on lui passe 'undefined' et 2 ", ()=>{
        expect (fonctiontester('undifined',2)).toBe(2);
    });
});