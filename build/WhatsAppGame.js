class Game {
    messages;
    message;
    charactersInWord;
    guessedCharactersInMessage;
    lettersInDOM;
    attemptInDOM;
    attempts;
    constructor() {
        this.messages = ['jamstack', 'paper', 'macbookpro', 'wuppo'];
        this.guessedCharactersInMessage = [];
        this.lettersInDOM = document.querySelector('#letters');
        this.attemptInDOM = document.querySelector('#attempt');
        this.attempts = 5;
        this.writeAlphabetToTheDom();
        this.setWord(this.messages[this.randomNumber(0, this.messages.length - 1)]);
        console.log(this.message);
        this.splitWordInCharacters();
        console.log(this.message);
        console.log(this.guessedCharactersInMessage);
        this.writeAttemptToTheDOM();
        this.writeGuessedWordToTheDOM();
    }
    splitWordInCharacters() {
        this.charactersInWord = this.message.split('');
        for (let i = 0; i < this.message.length; i += 1) {
            this.guessedCharactersInMessage.push('-');
        }
    }
    findLetters(clickedLetter) {
        const indexOfLetters = [];
        this.charactersInWord.forEach((letterInArray, index) => {
            if (clickedLetter === letterInArray) {
                indexOfLetters.push(index);
            }
        });
        return indexOfLetters;
    }
    guessOption = (e) => {
        const target = e.target;
        if (target.className === 'key') {
            console.log(target.id);
            const indexes = this.findLetters(target.id);
            console.log('indexes', indexes);
            if (indexes.length !== 0) {
                console.log('found');
                this.addLetterToGuessedWord(indexes, target.id);
                document.getElementById(target.id).classList.add('idle');
            }
            else {
                console.log('not found');
                this.attempts -= 1;
                this.writeAttemptToTheDOM();
            }
            this.checkWinner();
            this.writeGuessedWordToTheDOM();
        }
    };
    addLetterToGuessedWord(indexArray, letter) {
        indexArray.forEach((element) => {
            this.guessedCharactersInMessage[element] = letter;
        });
    }
    writeAttemptToTheDOM() {
        this.attemptInDOM.innerHTML = String(this.attempts);
    }
    setWord(newMessage) {
        this.message = newMessage;
    }
    checkWinner() {
        console.log(`${this.message} is ${this.guessedCharactersInMessage.join('')}`);
        if (this.message === this.guessedCharactersInMessage.join('')) {
            this.lettersInDOM.classList.add('winner');
        }
        else if (this.attempts === 0) {
            this.lettersInDOM.classList.add('lost');
            const keys = document.querySelectorAll('.key');
            keys.forEach((key) => {
                key.classList.add('idle');
            });
        }
    }
    writeGuessedWordToTheDOM() {
        this.lettersInDOM.innerHTML = '';
        this.guessedCharactersInMessage.forEach((letter) => {
            console.log(letter);
            const li = document.createElement('p');
            li.innerText = letter;
            this.lettersInDOM.append(li);
        });
    }
    writeAlphabetToTheDom() {
        const alphabet = '123'.split('');
        const keyboard = document.querySelector('#keyboard');
        keyboard.addEventListener('click', this.guessOption);
        alphabet.forEach((element) => {
            const divKey = document.createElement('div');
            divKey.id = element;
            divKey.classList.add('key');
            divKey.innerHTML = element;
            keyboard.append(divKey);
        });
    }
    randomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}
const init = () => new Game();
window.addEventListener('load', init);
//# sourceMappingURL=WhatsAppGame.js.map