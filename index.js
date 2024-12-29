class hero {
    constructor(name, age, family) {
        this.name = name;
        this.age = age;
        this.family = family;
    }

    heroAttack() {

        let attack;

        switch (this.family) {
            case 'mage':
                attack = 'magic';
                break;
            case 'warrior':
                attack = 'sword';
                break;
            case 'monk':
                attack = 'martial arts';
                break;
            default:
                attack = 'shuriken';
        }

        console.log(`${this.name}: The ${this.family} attacked using ${attack}.`);

    }

}

let objHero = new hero('Neho', 17, 'mage');

objHero.heroAttack();