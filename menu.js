/* eslint-disable  func-names */

/* eslint quote-props: ["error", "consistent"]*/



'use strict';

const Alexa = require('alexa-sdk');


//========================================================================================
//TODO: The items below this comment need your attention.

//========================================================================================

const APP_ID = undefined;



const ENTRY_MESSAGE = 'Hi! What menu would you like to hear today?';

const ENTRY_REPROMPT = 'What menu would you like to hear?';

const REPROMPT = 'Is there another menu you would like to hear?';


const SKILL_NAME = 'Lunch Buddy';

const HELP_MESSAGE = 'You can say tell me what\'s on the menu, or, you can say exit... What can I help you with?';

const HELP_REPROMPT = 'What can I help you with?';

const STOP_MESSAGE = 'Have a good lunch!';

const GET_OVEN = 'Today the oven has...';

const GET_OSG = 'Here\'s what oh so good has...' ;

const GET_FRESH = 'Here \'s the menu for fresh flex...';

const GET_UMAMI_MESSAGE = 'Here\'s what\'s in UMAMI...';

const GET_SOUP_MESSAGE = 'Here\'s what\'s on the soup menu...';

const GET_REC_MESSAGE = 'Here\'s what I recommend for today...';

const GET_CHEFSTABLE = 'Here\'s what\'s on the Chef\'s Table... ';

const GET_GRILLE = 'Here\'s what\'s on the Grille... ';

const GET_MARKETDELI = 'Here\'s what\'s at the Market Deli... ';

const GET_O_FOOD = 'Today the oven has...';


//============================================================================================

//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data

//============================================================================================
const ohSoGood ="Grilled Asparagus, Braised Carrots, Quinoa Stuffed Portobello Citrus, and Lentil Rice, all at $0.50 per ounce but its half price monday through thursday. ";

const freshFlex = "Macaroni and cheese, chipotle carolina chicken, Butter sauteed fresh collard greens, and sweet and smoky texas pork, all for $0.50 per ounce. ";

const umamidata = "Pho-Losophy has been serving us this week, so there will be Pho Bowls at $6.50 a bowl today. ";

const soupdata = "Today, there is homemade chunky vegetable barley, which is vegetarian and gluten free, and chicken noodle soup, which are about two dollars for a 12-ounce cup. For the Oh So Good option, there is Chicken Florentine Soup, which is gluten free, going for $0.90. ";

const recdata = [

     'The Noodle Pho-Losophy is here this week. You can get a delicious bowl of noodles for $6.50. You can check them out at the Umami station. ',

     'If you\'re looking for a healthier option or to save, the salad bar is always a great option, coming to half off from Monday to Thursday at 43 cents per ounce. There is also the Oh So Good bar at fifty cents per ounce, and soup at 90 cents for a 12 ounce cup. ',

     'A Garlic Knot is always a great addition to your meal, at 50 cents per knot. ',

     'Tator tots are a perfect, guilt-free side addition to your lunch, pricing at $1.50 per serving. ',

     'The Chicken Philly or Steak & Cheese at the Grille is a delectable, savory treat, coming at about $6 for each sandwich. ',

     'On the Market Deli\'s specialty menu, there is the Ham & Swiss on a Pretzel roll, coming at $5.65 for the sandwich. If you like pretzels, ham, and swiss cheese, this looks like the sandwich for you. '

];

const chefsTableData = "Farro Risotto Milanese, and Chicken Pesto Risotto, both for $6.50. ";

const grilleData = "Grilled Salmon Slider, and Grilled Vegetable Kebob, both for $5.90, chicken quesadilla for $4.25, Chicken or steak philly for around $6, tater tots and fries for $1.50, and burgers for $4.69. ";

const marketDeliData = "Italian Hero Sandwich, Buffalo Chicken Grinder, Tuna Club Grinder, Roast Beef and Brie Cheese Panini, Ham and Gouda Marble Rye Panini, Grilled Vegetable Foccacia, and Mozzarella Prosciutto Spinach Wrap. They range in price from $5.70 to $5.99. ";

const pizza = "Italian Meatball Grinder, Sausage and Peppers Grinder, Ham and Cheese Stromboli, a Garlic Knot for $0.50, and a variety of pizza for $2.50 to $2.90. ";

//==============================================================================================

//Editing anything below this line might break your skill.

//==============================================================================================


const handlers = {

    'LaunchRequest': function () {

        const speechOutput = ENTRY_MESSAGE;

        const reprompt = ENTRY_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);

        this.emit(':responseReady');

    },

    
'GetOvenFood': function(){

    	const speechOutput = GET_OVEN + pizza + REPROMPT;

    	this.response.cardRenderer(GET_OVEN, pizza);

    	this.response.speak(speechOutput).listen(REPROMPT);

    	this.emit(':responseReady');

    },

    'GetOSGFood': function(){

	    const speechOutput = GET_OSG  + ohSoGood + REPROMPT;

    	this.response.cardRenderer(GET_OSG, ohSoGood);

    	this.response.speak(speechOutput).listen(REPROMPT);

	    this.emit(':responseReady');

    },

    'GetFreshFood': function(){

    	const speechOutput = GET_FRESH + freshFlex + REPROMPT;

	    this.response.cardRenderer(GET_FRESH, freshFlex);

    	this.response.speak(speechOutput).listen(REPROMPT);

    	this.emit(':responseReady');

    },

    'GetUmamiMenu': function (){

        const speechOutput = GET_UMAMI_MESSAGE + umamidata + REPROMPT;

        this.response.cardRenderer(SKILL_NAME, umamidata);
  
        this.response.speak(speechOutput).listen(REPROMPT);

        this.emit(':responseReady');

    },

    'GetSoupMenu': function () {

        const speechOutput = GET_SOUP_MESSAGE + soupdata + REPROMPT;

        this.response.cardRenderer(SKILL_NAME, soupdata);

        this.response.speak(speechOutput).listen(REPROMPT);

        this.emit(':responseReady');

    },

	'GetRecommended': function () {

        const factArr = recdata;

        const factIndex = Math.floor(Math.random() * factArr.length);

        const randomFood = factArr[factIndex];

        const speechOutput = GET_REC_MESSAGE + randomFood + REPROMPT;


        this.response.cardRenderer(SKILL_NAME, randomFood);

        this.response.speak(speechOutput).listen(REPROMPT);

        this.emit(':responseReady');

    },

    'GetChefsTable': function () {

        const speechOutput = GET_CHEFSTABLE + chefsTableData + REPROMPT;

        this.response.cardRenderer(SKILL_NAME, chefsTableData);
  
        this.response.speak(speechOutput).listen(REPROMPT);

        this.emit(':responseReady');

    },

    'GetGrille': function () {

        const speechOutput = GET_GRILLE + grilleData + REPROMPT;

        this.response.cardRenderer(SKILL_NAME, grilleData);
  
        this.response.speak(speechOutput).listen(REPROMPT);

        this.emit(':responseReady');

    },

    'GetMarketDeli': function () {

        const speechOutput = GET_MARKETDELI + marketDeliData + REPROMPT;

        this.response.cardRenderer(SKILL_NAME, marketDeliData);
  
        this.response.speak(speechOutput).listen(REPROMPT);

        this.emit(':responseReady');

    },

    'AMAZON.HelpIntent': function () {

        const speechOutput = HELP_MESSAGE;

        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);

        this.emit(':responseReady');

    },

    'AMAZON.CancelIntent': function () {

        this.response.speak(STOP_MESSAGE);

        this.emit(':responseReady');

    },

    'AMAZON.StopIntent': function () {

        this.response.speak(STOP_MESSAGE);

        this.emit(':responseReady');

    },

};



exports.handler = function (event, context, callback) {

    const alexa = Alexa.handler(event, context, callback);

    alexa.APP_ID = APP_ID;

    alexa.registerHandlers(handlers);

    alexa.execute();
};
