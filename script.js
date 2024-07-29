document.getElementById('order-button').addEventListener('click', function() {
    // Captura os valores do formulário
    const name = document.getElementById('name').value;
    const size = document.getElementById('size').value;

    const ingredients = Array.from(document.querySelectorAll('#ingredients input:checked'))
                             .map(input => input.value);

    const sweetener = document.getElementById('sweetener').value;
    const smoothie = new Smoothie(name, size, ingredients, sweetener);

    document.getElementById('order-summary').textContent = smoothie.getDescription();

    const audio = new Audio('sounds/add.wav');
    audio.play();
});

class Smoothie {
    constructor(name, size, ingredients, sweetener) {
        this.name = name;
        this.size = size;
        this.ingredients = ingredients;
        this.sweetener = sweetener;
    }

    getDescription() {
        return `${this.name}, you ordered a ${this.size} smoothie with ${this.ingredients.join(', ')} and ${this.sweetener} as a sweetener.`;
    }
}
