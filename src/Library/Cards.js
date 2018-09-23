import { fromJS } from 'immutable';

// ...

// deal n cards from the end of List deck
export const deal = (deck, n) => {
    let dealt_cards = deck.takeLast(2);
    let newDeck = deck.skipLast(2);
    return [newDeck, dealt_cards];
};

export const shuffle = (array) => {
    let j, x, i;
    for (i = array.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = array[i - 1];
        array[i - 1] = array[j];
        array[j] = x;
    }
};

export const newDeck = () => {
    const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suits = ['S', 'C', 'H', 'D'];

    const deck = [];

    ranks.forEach( (r) => {
        suits.forEach( (s) => {
            deck.push({ "rank": r, "suit": s});
        });
    });

    shuffle(deck);

    return fromJS(deck);
};