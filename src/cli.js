import readlineSync from 'readline-sync';
const greetingYou = () => {
	console.log ("Welcome to the Brain Games!")
	var userName = readlineSync.question('May I have your name? ');
	return 'Hello,' + userName + '!';
};
export default greetingYou;
