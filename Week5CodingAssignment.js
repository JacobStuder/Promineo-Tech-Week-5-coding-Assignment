// Class 1
class Characteristic {
    constructor(trait, physicalFeature) {
        this.trait = trait;
        this.physicalFeature = physicalFeature;
    }
    describe() {
        return `This Minion is ${this.trait} and has ${this.physicalFeature} for a pysical feature.`;
    }
}

// Class 2 with array to hold elements for class 1
class Minion {
    constructor(name) {
        this.name = name;
        this.characteristics = [];
    }

// Function to add elements to class 1 array
    addCharateristic(characteristic) {
       if (characteristic instanceof Characteristic) {
        this.characteristics.push(characteristic);
       } else {
        throw new Error(`You can only add an instance of Charateristic. Argument is not a characteristic: ${characteristic}`);
       }
    }
    describe() {
        return `${this.name} has ${this.characteristics.length} features.`;
    }
}

// Class to drive the application and all its choices
// with array to hold elements for class 2
class Menu {
    constructor() {
        this.minions = [];
        this.selectedMinion = null;
    }

// Method to start the application
    start() {
        let selection = this.showMainMenuOptions();

// Loop to control the flow of the application and the main menu
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createMinion();
                    break;
                case '2':
                    this.viewMinion();
                    break;
                case '3':
                    this.deleteMinion();
                    break;
                case '4':
                    this.displayMinions();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('Poopaye!');
    }

// Prompt box for main menu user input 
    showMainMenuOptions() {
        return prompt(`
          0) exit
          1) create new minion
          2) view minion
          3) delete minion
          4) display all minions
        `);
    }

// Prompt box for sub menu user input
    showMinionMenuOptions(minionInfo) {
        return prompt(`
         0) back
         1) create characteristic
         2) delete characteristic
         -------------------------
         ${minionInfo}
        `);
    }

// Method with loop for display option
    displayMinions() {
        let minionString = '';
        for (let i = 0; i < this.minions.length; i++) {
            minionString += i + ') ' + this.minions[i].name + '\n';
        }
        alert(minionString);
    }

// Method for create option on main menu
    createMinion() {
        let name = prompt('Enter name for new minion:');
        this.minions.push(new Minion(name));
    }

// Method with loop for view option
    viewMinion() {
        let index = prompt('Enter the index of the minion you wish to view:');
        if (index > -1 && index < this.minions.length) {
            this.selectedMinion = this.minions[index];
            let description = ' Minion Name: ' + this.selectedMinion.name + '\n';
            
            for (let i = 0; i < this.selectedMinion.characteristics.length; i++) {
                description += i + ' ) ' + this.selectedMinion.characteristics[i].trait
                 + ' - ' + this.selectedMinion.characteristics[i].physicalFeature + '\n';
            }

// Loop to control the flow of the sub menu
            let selection = this.showMinionMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createCharacteristic();
                    break;
                    case '2':
                        this.deleteCharateristic();
            }
        }
    }

// Method with loop for delete option on main menu
    deleteMinion() {
        let index = prompt('Enter the index of the minion you wish to delete:');
        if (index > -1 && index < this.minions.length) {
            this.minions.splice(index, 1);
        }
    }

// Method with loop for create option on sub menu
    createCharacteristic() {
        let trait = prompt('Enter trait for new characteristic:');
        let physicalFeature = prompt('Enter physical feature for new characteristic:');
        this.selectedMinion.characteristics.push(new Characteristic(trait, physicalFeature));
    }

// Method with loop for delete option on sub menu
    deleteCharateristic() {
        let index = prompt('Enter the index of the characteristic you wish to delete:');
        if (index > -1 && index < this.selectedMinion.characteristics.length) {
            this.selectedMinion.characteristics.splice(index, 1);
        }
    }
}

// Instance to instantiate the start the application method
let menu = new Menu();
menu.start();
