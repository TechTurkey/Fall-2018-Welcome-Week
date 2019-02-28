

$(function(){
	$("#includedNavbar").load("nav.html");

	$("#calendar").fullCalendar({
		header: false,
		height: "parent",
		dayRender: function(date, cell) {
			if(moment().diff(date,'days') > 0){
				cell.css("background-color","#dddddd");
			} else {
				cell.css("background-color", "rgba(255, 255, 255, 1)")
			}
		},
		eventClick: function(calEvent, jsEvent, view) {
			$("#event-details").find(".modal-title").html(calEvent.title);
			$("#event-details").find(".title-info").html(
				moment(calEvent.start).format("MMM Do, h:mm a")+" - " + moment(calEvent.end).format("h:mm a") + " | " + calEvent.chair
				);
			//$("#event-details").find(".modal-body .time").html("<h5>"+moment(calEvent.start).format("MMM Do, h:mm a")+" - " + moment(calEvent.end).format("h:mm a") + "</h5>");
			//$("#event-details").find(".modal-body .chair").html(calEvent.chair);
			$("#event-details").find(".modal-body .description").html(calEvent.description);
			$("#event-details").modal("show");
		},
		timezone: "local",
		defaultView: "week",
		defaultDate: '2018-11-25',
		views: {
			week: {
				type: 'basic',
				duration: { weeks: 2 }
			}
		},

		eventSources: [
		{
			events: service,
          color: '#e1dfdf',     // an option!
          textColor: 'black' // an option!
      },
      {
      	events: family,
      	color: '#00827f',	// teal
      	textColor: 'white'
      },
      {
      	events: tabletop,
      	color: '#d42426',	// CHRIStmas red
      	textColor: 'white'
      }

      // any other event sources...

      ]

  })

});

const tabletop = [
{
	title: 'Service Committee Meeting / Tabletop',
	start: '2018-11-26 19:00:00',
	end: '2018-11-26 20:00:00',
	description: "Help plan service events and provide us with feedback on what kind of service events you like or dislike. Also make Christmas cards for children in the hospital and the custodians on campus!",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2018-11-26 20:00:00',
	end: '2018-11-26 22:00:00',
	description: "Finish making Christmas cards!!",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2018-11-27 21:00:00',
	end: '2018-11-27 22:00:00',
	description: "Help make paper cranes to put into gift bags!",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2018-11-28 19:00:00',
	end: '2018-11-28 21:00:00',
	description: "Put together coloring book for the children in the hopsital ",
	chair: 'Gina Apinyavat'
},
{
	title: 'CKI General Meeting',
	start: '2018-11-29 19:00:00',
	end: '2018-11-29 20:30:00',
	description: "Tabletop: Writing Letter's to Santa and sending them to Macy's. Every letter written donates $1 to the Make-A-Wish Foundation",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2018-11-30 20:00:00',
	end: '2018-11-30 22:00:00',
	description: "Help make Christmas wreaths for the children in the hospital ",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2018-12-02 19:00:00',
	end: '2018-12-02 21:00:00',
	description: "Today we will be baking cookies for the custodians!",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2018-12-03 20:00:00',
	end: '2018-12-03 22:00:00',
	description: "Please help us package all the items into the gift bags. We need 50 care packages for kids in the hospital and 50 care packages for our campus custodians who work so hard every day.",
	chair: 'Gina Apinyavat'
}

];

const family = [
{
	title: 'PikaTroopers: Feeding Homeless',
	start: '2018-11-27 18:30:00',
	end: '2018-11-27 21:30:00',
	description: "Roll and Pass out burritos to the homeless population from a mobile food truck",
	chair: 'Ryan/Vicky/Sarah'
},
{
	title: 'Fomo Fam: GWFC',
	start: '2018-11-30 17:45:00',
	end: '2018-11-30 20:30:00',
	description: "Volunteering for our daily meal service M-F will include helping to set up the dining room, serving a freshly prepared meal, washing the items we have used to serve the dinner, breaking down one of the dining rooms (10-15 minutes) and a final cleaning of the dining room and the kitchen. At the end of the day, cleaning the kitchen is just as important as serving the meal. A thorough cleaning upholds our high hygienic standards and ensures safety for all.",
	chair: 'Calvin/Irene/Jessica'
},
{
	title: 'BulbaBuds: Planting in Baldwin Hills',
	start: '2018-12-01 08:00:00',
	end: '2018-12-01 13:30:00',
	description: "This is a project with Park Champions. Their projects improve the quality, safety and preservation of our state parks. This time we will be planting native plants in the park! A delicious lunch from a fancy vegan place will be provided",
	chair: 'Uyen/Frankie/Jone'
},
{
	title: 'Sick: Shop for Success',
	start: '2018-12-01 08:30:00',
	end: '2018-12-01 14:30:00',
	description: "We will be helping out at a pop-up shop on the day of the event! Most likely we will be assisting with selling merchandise, organizing the shop, and talking to customers. There will be some light snacks provided and it should be a lot of fun!",
	chair: 'Mara/Sharlene/Tiffany'
},
{
	title: 'Thicc: Shop for Success',
	start: '2018-12-01 13:30:00',
	end: '2018-12-01 19:30:00',
	description: "We will be helping out at a pop-up shop on the day of the event! Most likely we will be assisting with selling merchandise, organizing the shop, and talking to customers. There will be some light snacks provided and it should be a lot of fun!",
	chair: 'Tiffany Tu/JQ/Jolene'
},
{
	title: 'Bare: Shop for Success',
	start: '2018-12-02 08:30:00',
	end: '2018-12-02 14:30:00',
	description: "We will be helping out at a pop-up shop on the day of the event! Most likely we will be assisting with selling merchandise, organizing the shop, and talking to customers. There will be some light snacks provided and it should be a lot of fun!",
	chair: 'Amy/Danny/Jenny'
},
{
	title: 'Jack: Santa Monica Forest Restoration',
	start: '2018-12-02 09:00:00',
	end: '2018-12-02 12:00:00',
	description: "Join TreePeople and MRCA as we restore creekside habitat in beautiful Las Virgenes Canyon. Once again we will take you into public lands that are not open to the general public. Deer, bobcat and coyotes are often seen traversing the banks of the creek and adjacent woodland. <a href=\"https://www.treepeople.org/calendar/volunteer-events/2018-12-02/santa-monica-mountains-restoration\">Link to Volunteer</a>",
	chair: 'Khoa/Nhu/Matthew'
},
{
	title: 'Snacc: Shop for Sucess',
	start: '2018-12-02 13:30:00',
	end: '2018-12-02 19:30:00',
	description: "We will be helping out at a pop-up shop on the day of the event! Most likely we will be assisting with selling merchandise, organizing the shop, and talking to customers. There will be some light snacks provided and it should be a lot of fun!",
	chair: 'Jonathan Fan/Katie/Noah'
}
];

const service = [
{
	title: 'Monday Mornings: Animal Blankets',
	start: '2018-11-26 09:00:00',
	end: '2018-11-26 12:30:00',
	description: "Come make animal blankets for the Amanda Foundation! Really fun group of people and they hinted at having food...",
	chair: 'Kylee Lyons'
},
{
	title: 'Serve Breakfast to the Homeless',
	start: '2018-11-27 06:30:00',
	end: '2018-11-27 10:00:00',
	description: "Help out at the St. Francis Center's Family Well-Being Program, where we will be serving the homeless a warm meal for breakfast. The Staint Francis Center distributes over one million pounds of food through their programs and us volunteering at the front lines will help distribution move quicker and easier. ",
	chair: 'Kylee Lyons'
},
{
	title: 'Wheelchair Basketball',
	start: '2018-11-27 16:00:00',
	end: '2018-11-27 19:30:00',
	description: "Come be a baller and play some wheelchair basketball with para-athletes! It's really fun and quite the workout!",
	chair: 'Kylee Lyons'
},
{
	title: 'Be a Kid Again: Game Night with Midnight Mission',
	start: '2018-11-27 17:30:00',
	end: '2018-11-27 21:00:00',
	description: "The children at Midnight Mission’s Homelight Family Living Program in Inglewood look forward to every Tuesday night when L.A. Works volunteers spend time with them playing games, doing arts and crafts projects (from Play-Doh to rockets), reading books, and just having fun while their parents attend classes and counseling sessions. The seemingly simple act of interacting with the children is a highlight of their day and can be of yours too!",
	chair: 'Kylee Lyons'
},
{
	title: 'Anti-Poaching Gala',
	start: '2018-11-28 16:30:00',
	end: '2018-11-28 23:30:00',
	description: "Help at a nice gala to raise funds to stop poaching! We will be helping with the food and drink, the auction, and other general necessities. There will be some Picasso paintings there and a guy who took over singing for Bob Marley! ",
	chair: 'Kylee Lyons'
},
{
	title: 'Campus CleanUp',
	start: '2018-11-29 17:30:00',
	end: '2018-11-29 18:45:00',
	description: "Right before GM, we'll go around moving recycled items from the trast can into the recycle bin. Also pick up any trash around campus",
	chair: 'Kylee Lyons'
},
{
	title: 'Beach CleanUp',
	start: '2018-11-30 16:00:00',
	end: '2018-11-30 20:00:00',
	description: "Help the environment by cleaning up plastic and waste on the beach then watch the sunset with friends! ",
	chair: 'Kylee Lyons'
},
{
	title: 'Holiday Party at the Los Angeles Child Guidance Clinic',
	start: '2018-12-01 11:00:00',
	end: '2018-12-01 17:00:00',
	description: "Los Angeles Child Guidance Center has been a mental health provider for over 90 years, and it seeks to improve the social and emotional relationships, emotional development, and community functioning levels of children and their families who reside in the high-need, resource poor communities of Central and South Los Angeles. They are throwing their annual client holiday party and need volunteers to assist at the event! ",
	chair: 'Kylee Lyons'
},
{
	title: 'CivicLAvia: Heart of LA Race',
	start: '2018-12-02 09:45:00',
	end: '2018-12-02 15:00:00',
	description: "Help out at the annual Heart of LA Route. You will be helping with way-finding/ slow zones/dismount areas and providing participants with route/activity information! You'll also be cheering them on!",
	chair: 'Kylee Lyons'
},
{
	title: 'Monday Mornings: Ornaments & Snow Globes',
	start: '2018-12-03 09:00:00',
	end: '2018-12-03 12:30:00',
	description: "Get in a festive spirit and then come decorate ornaments and snow globes for the holidays!",
	chair: 'Kylee Lyons'
}
];