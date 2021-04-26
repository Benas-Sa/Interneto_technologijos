# Interneto_technologijos
III ir IV užduotys iš IT atsiskaitymo

UŽDUOČIŲ REIKALAVIMŲ NUORODA: http://klevas.mif.vu.lt/~vaidasj/it/index.html

III UŽDUOTIS HTML ir CSS
Reikia parašyti HTML puslapį, kuriame būtų naudojamos tik struktūrinės žymės (išvardintos HTML5 dokumente). Negalima naudoti puslapio stilių nusakančių žymių bei atributų (color, font, size, ir panašiai). Stiliaus aprašymui reikia sukurti stilių lentelę, aprašytą atskirame faile. Turi būti patenkinti šie reikalavimai:
1.	Dokumentas privalo būti validus HTML5 dokumentas. Validatoriai:
o	http://validator.nu
o	http://validator.w3.org
2.	Elementų išdėstymas dokumente privalo būti sumodeliuotas naudojantis semantiniais HTML5 elementais (header, nav, section, articile, ...)
3.	Būtina pademonstruoti šių HTML elementų panaudojimą:
o	Skyrius ir paragrafas
o	Paveiksliukas
o	Nuoroda į kitą puslapį
o	Lentelė su prasmingais panaudotais colspan ir rowspan atributais
o	Numeruotas ir/ar nenumeruotas sąrašas
o	Duomenų įvedimo forma, kurioje prasmingai panaudoti bent 5 skirtingų tipų įvedimo laukai. Pademonstruoti privalomų laukų validaciją.
o	Sąrašo (pasirinkimo) komponentas
4.	Reikia panaudoti šiuos CSS selektorius (ir mokėti paaiškinti, kuo pirmas skiriasi nuo antro, bei ką jie visi reiškia):
o	Įpėdinio (descendant);
o	Vaiko (child);
o	Atributo (attribute);
o	Klasės (class);
o	ID
5.	Sukurtoje stilių lentelėje turi būti savybių paveldėjimo pavyzdys, t.y., būtina prasmingai panaudoti raktinį žodį inherit (ištrynus šį raktinį žodį, vaizdas ekrane turi pasikeisti) ir žinoti, ką jis reiškia
6.	Sukurtoje stilių lentelėje turi būti kaskadų mechanizmo pavyzdys, būtina prasmingai panaudoti raktinį žodį !important (ištrynus šį raktinį žodį, vaizdas ekrane turi pasikeisti), bei žinoti, ką jis reiškia ir kas yra tas kaskadų mechanizmas
7.	Reikia panaudoti @media taisyklę, kurios pagalba naršyklė atsižvelgtų į įrenginio, kuriame yra atvaizduojamas puslapis ekrano dydį ir atitinkimai pakeistų jo išdėstymą (Media Queries Level 3)
 
 
 
IV UŽDUOTIS JavaScript

Reikia sukurti HTML puslapį, kuriame būtų bent viena duomenų įvedimo forma ir bent viena lentelė. Tuomet atskirame JavaScript faile reikia parašyti skriptus, kuriuose būtų realizuotas:
1.	Formos laukų validavimas:
o	Įvedimo laukas, kuriame kažkas turi būti įvesta (kuris negali būti paliktas tuščias)
o	Įvedimo laukas, kuriame turi būti įvestas sveikas teigiamas skaičius
o	Įvedimo laukas (-ai), kuriame (-iuose) turi būti įvesta teisinga data (metai, mėnuo, diena) (pvz. vasaris negali turėti 30 dienų); būtina naudoti Date objektą
2.	HTML puslapio elementų paslėpimas/parodymas (ne išmetimas) panaudojant CSS savybę display, priklausomai nuo to, kas įvesta kokiame nors formos lauke (būtina naudoti jQuery biblioteką);
3.	HTML puslapio dinaminis turinio modifikavimas (būtina naudoti jQuery biblioteką):
o	Egzistuojančių HTML dokumento žymių tekstinio turinio pakeitimas (pvz. paragrafo teksto pakeitimas)
o	Egzistuojančių žymių stiliaus pakeitimas (atributui style priskiriant naują reikšmę)
o	Egzistuojančių žymių išmetimas (pvz. ištrinti įvedimo lauke numeriu nurodytą paragrafą)
o	Naujų žymių įterpimas (pvz. teksto gale pridėti paragrafą su tekstu, įvestu įvedimo lauke)
4.	Asinchroninis komunikavimas su nutolusiu serveriu:
o	Įvedimo formoje pateiktų duomenų serializavimas JSON formatu ir patalpinimas vienoje iš šių sistemų (naudojantis pateikiamu API):
	http://myjson.com/api
	https://jsonblob.com/api
o	Duomenų (JSON formatu) išsitraukimas iš aukščiau nurodytų sistemų
o	Gautų duomenų atvaizdavimas HTML puslapio lentelėje


