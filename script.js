
const zodiac = ['Aquarius', 'Pisces', 'Aries', 'Taurus', 
                'Gemini', 'Cancer', 'Leo', 'Virgo', 
                'Libra', 'Scorpio', 'Sagittarious','Capricorn'];

const element = ['air', 'water', 'fire', 'earth'];

const phrases = ['"be confident"', '"have hope"', '"smile"', '"help someone"',
                '"be positive"', '"be calm"', '"be powerful"', '"be inspiring"'];

let randomZodiac = Math.floor(Math.random() * 12);

switch(randomZodiac) {
    case 0:
        console.log('Your zodiac sign is ' + zodiac[0] + '.');
        break;
    case 1:
        console.log('Your zodiac sign is ' + zodiac[1] + '.');
        break;
    case 2:
        console.log('Your zodiac sign is ' + zodiac[2] + '.');
        break;
    case 3:
        console.log('Your zodiac sign is ' + zodiac[3] + '.');
        break;
    case 4:
        console.log('Your zodiac sign is ' + zodiac[4] + '.');
        break;
    case 5:
        console.log('Your zodiac sign is ' + zodiac[5] + '.');
        break;
    case 6:
        console.log('Your zodiac sign is ' + zodiac[6] + '.');
        break;
    case 7:
        console.log('Your zodiac sign is ' + zodiac[7] + '.');
        break;
    case 8:
        console.log('Your zodiac sign is ' + zodiac[8] + '.');
        break;
    case 9:
        console.log('Your zodiac sign is ' + zodiac[9] + '.');
        break;
    case 10:
        console.log('Your zodiac sign is ' + zodiac[10] + '.');
        break;
    case 11:
        console.log('Your zodiac sign is ' + zodiac[11] + '.');
        break;
    default:
        console.log('Your zodiac sign is ' + zodiac[9] + '.');
        break;
}

let randomElement =Math.floor(Math.random() * 4);

switch(randomElement) {
    case 0:
        console.log('Your element is ' + element[0] + '.');
        break;
    case 1:
        console.log('Your element is ' + element[1] + '.');
        break;
    case 2:
        console.log('Your element is ' + element[2] + '.');
        break;
    case 3:
        console.log('Your element is ' + element[3] + '.');
        break;
    default:
        console.log('Your element is ' + element[1] + '.');
        break;
}

let randomPhrase = Math.floor(Math.random() * 8);

switch(randomPhrase) {
    case 0:
        console.log('You should: ' + phrases[0]);
        break;
    case 1:
        console.log('You should: ' + phrases[1]);
        break;
    case 2:
        console.log('You should: ' + phrases[2]);
        break;
    case 3:
        console.log('You should: ' + phrases[3]);
        break;
    case 4:
        console.log('You should: ' + phrases[4]);
        break;
    case 5:
        console.log('You should: ' + phrases[5]);
        break;
    case 6:
        console.log('You should: ' + phrases[6]);
        break;
    case 7:
        console.log('You should: ' + phrases[7]);
        break;
    default: 
        console.log('You should: ' + phrases[3]);
        break;
}