import readlineSync from 'readline-sync';

const greetingYou = () => {
	let userName = readlineSync.question('May I have your name? ');
	return 'Hello,' + userName + '!';
};


export default greetingYou;