const blender = require("./blender").blender;

describe ("test mixerDesNombres", ()=>{
    test (" devrait retourner  10 quant on lui passe 2,3,4 : ", ()=>{
        expect (blender.mixerDesNombres(2,3,4)).toBe(10);
    });

    test ("retourne undifined si les types de données fournis sont incorrects ! ", ()=>{
        expect(blender.mixerDesNombres()).toBe();
    });
});

describe ("test  mixerDesChaines", ()=>{
    test ("devrait retourner 'Bonjour Lola !' quand on lui passe 'Lo','la' :", ()=>{
        expect(blender.mixerDesChaines("Lo", "la")).toBe('Bonjour Lola!');
    });

    test("retourne undifined si les types de données sont incorrects !", ()=>{
        expect(blender.mixerDesChaines()).toBe();
    });
});

describe("test mixerDesBooleens", ()=>{
    test("ne plante pas si on lui passe les bon types :", ()=>{
        expect(blender.mixerDesBooleens(true, true, true)).toBe( "Tout est vrai !");
    });
    test(" plante pas si au moins un arg n'est pas du bon type :", ()=>{
        expect(blender.mixerDesBooleens(true, false, true)).toBe("Au moins un argument n'est pas vrai !");
    });
    test(" plante pas si aucuns des arg n'est pas du bon type :", ()=>{
        expect(blender.mixerDesBooleens()).toBe();
    });
});

describe("test mixerDesTableaux", ()=>{
    test("retourne un nombre si on lui fournit les types adéquat: ", ()=>{
        expect(blender.mixerDesTableaux(['a',1,2], ['h', 6,8])).toBe(72)
    });

    test("retourne undifined si Les types de données fournis sont incorrects ! ", ()=>{
        expect(blender.mixerDesTableaux()).toBe();
    });
});

describe("test mixerDesObjets", ()=>{
    test(" retourne un nombre si on lui fournit les types adéquat: ", ()=>{
        expect(blender.mixerDesObjets({a:6, b:2}, {x:3, y:4})).toBe(1);
    });

    test("retourne undifined si Les types de données fournis sont incorrects !", ()=>{
        expect(blender.mixerDesObjets()).toBe();
    });
});

describe("test mixerDesFonctions", ()=>{
    test(" ne plante pas si les types adéquat sont fournis: ", ()=>{
        expect(blender.mixerDesFonctions(() =>{}, () =>{})).toBe()
    });

    test("retourne undifined si Les types de données fournis sont incorrects !", ()=>{
        expect(blender.mixerDesObjets()).toBe();
    });
});

describe("test mixerDeTout", ()=>{
    test("ne plante pas si les types adéquat sont fournis:", ()=>{
        expect(blender.mixerDeTout("bonjour", {message:"panam"}, () =>{}, 5)).toBe(5);
    });
});