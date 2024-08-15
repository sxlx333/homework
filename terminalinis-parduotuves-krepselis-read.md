# Terminalinis parduotuvės krepšelis

Klientas nori galėti naudotis keliomis funkcijomis, kurios leistų pamatyti krepšelyje esančių prekių informaciją.

## Funkcijos

### Viso prekių sąrašo spausdinimas

-   priimami parametrai: prekių krepšelio masyvas
-   grąžinamas rezultatas:

    -   jei tuščias (**0,5 balo**):

    ```
    Šiuo metu, jūsų prekių krepšelis yra tuščias.
    ```

    -   jei ne tuščias:

    ```
    Jūsų prekių krepšelyje yra 3 prekės:
    -----------------------------------------------------------
    Pavadinimas  | Kiekis      | Vieneto kaina | Viso mokėti
    -----------------------------------------------------------
    1. Pomidoras | 1000000 vnt | 1.99 Eur      | 1990000.00 Eur
    2. Agurkas   | 2 vnt       | 0.50 Eur      | 1.00 Eur
    3. Svogūnas  | 1 vnt       | 0.45 Eur      | 0.45 Eur
    -----------------------------------------------------------
    ```

    > **2 balai** už teisingą informaciją

    > **2 balai** už tinkamą lentelės formatą

### Individualios prekės informacijos spausdinimas

-   priimami parametrai: prekių krepšelio masyvas, prekės ID
-   grąžinamas rezultatas:

    -   jei prekė neegzistuoja (**0,5 balo**):

    ```
    Prekė, su ID: 42069 neegzistuoja.
    ```

    -   jei prekė egzistuoja:

    ```
    ------------------------------
    Prekės informacija
    ------------------------------
    ID            | 1
    Pavadinimas   | Pomidoras
    Kiekis        | 1000000 vnt
    Vieneto kaina | 1.99 Eur
    Viso mokėti   | 1990000.00 Eur
    ------------------------------
    ```

    > **1 balas** už teisingą informaciją

    > **2 balai** už tinkamą lentelės formatą

## Bendra informacija

-   reikia paruošti `package.json` (**0,5 balo**)
-   darome prielaidą, jog gaunama informacija visada yra teisinga, dėl to galima nerašyti validacijų
-   atkreipti dėmesį į specifinėse vietose reikalingas žodžių galūnes, kurios gali priklausyti, pvz, nuo kiekio; linksniavimas privalo teisingai veikti skaičiams nuo 0 iki 1.000.000, nepaisant to, jog šiame uždavinyje esančiuose pavyzdžiuose nėra tokių didelių skaičių (**1 balas**)
-   naudojama valiūta - `Eur`
-   kainos visur privalo būti spausdinamo vienodu formatu, pvz.: `420.69 Eur`
-   atkreipti dėmesį į lentelių struktūras:
    -   horizontalių linijų ilgis
    -   vertikalių linijų pozicijos
    -   tekstai negali būti arčiau nei per 1 tarpą nuo vertikalios linijos
-   visos funkcijos privalo būti atskiruose failuose (**0,5 balo**)
-   pavyzdinė projekto failų struktūra:

```
- js/
    - shoppingList.js
    - productDetails.js
- index.js (čia vykdomas užduoties logikos demonstravimas)
- package.json
```

-   jei vis gi, kas nors ketina rašyti validacijas, tai jos turėtų būti visose logiškose vietose, būti pakankamos ir už tai galima bus užsidirbti extra 1 balą
