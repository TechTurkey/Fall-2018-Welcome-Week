

$(function(){
	$("#includedNavbar").load("nav.html");

	$("#calendar").fullCalendar({
		header: false,
		height: "parent",
		dayRender: function(date, cell) {
			if(moment().diff(date,'days') > 0){
				cell.css("background-color","rgba(200, 200, 200, 0.8");
			} else {
				cell.css("background-color", "rgba(255, 255, 255, 0.8)")
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
		defaultDate: '2019-02-25',
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
	title: 'Tabletop at GM',
	start: '2019-02-28 19:00:00',
	end: '2019-02-28 20:00:00',
	description: "Come out and make nice cards to give to the student parents of kids at UCLA day care center!",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2019-03-01 20:00:00',
	end: '2019-03-01 22:00:00',
	description: "Come out and make stressballs for the parents at the UCLA Day Care Center.",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2019-03-02 20:00:00',
	end: '2019-03-02 22:00:00',
	description: "Help make flash cards for the kids at the day care center.",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2019-03-03 21:00:00',
	end: '2019-03-03 23:00:00',
	description: "Help make silly putty for the kids at the UCLA Day Care Center!",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2019-03-04 21:30:00',
	end: '2019-03-04 23:30:00',
	description: "Come out and help us put together activity books for the kids at the Day Care Center!",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2019-03-05 20:00:00',
	end: '2019-03-05 22:00:00',
	description: "Help us make bookmarks for the kids at the UCLA Day Care Center!",
	chair: 'Gina Apinyavat'
},
{
	title: 'Tabletop Service',
	start: '2019-03-06 20:00:00',
	end: '2019-03-06 22:00:00',
	description: "Help us bake cookies and put together the gift bags to be ready to deliver!",
	chair: 'Gina Apinyavat'
},

];

const family = [
{
	title: 'SICK: ',
	start: '2019-02-28 18:30:00',
	end: '2019-02-28 21:30:00',
	description: "Roll and Pass out burritos to the homeless population from a mobile food truck",
	chair: 'Ryan/Vicky/Sarah'
},
{
	title: 'WBB: ',
	start: '2019-03-02 17:45:00',
	end: '2019-03-02 20:30:00',
	description: "Volunteering for our daily meal service M-F will include helping to set up the dining room, serving a freshly prepared meal, washing the items we have used to serve the dinner, breaking down one of the dining rooms (10-15 minutes) and a final cleaning of the dining room and the kitchen. At the end of the day, cleaning the kitchen is just as important as serving the meal. A thorough cleaning upholds our high hygienic standards and ensures safety for all.",
	chair: 'Amy/Jenny/Danny'
}
];

const service = [
{
	title: 'Serve Breakfast to the Homeless',
	start: '2019-02-28 06:30:00',
	end: '2019-02-28 10:15:00',
	description: "Come kick off your thursday morning (AND SERVICE MARATHONG) by serving a hot breakfast to between 200 and 300 homeless individuals. We will be helping with set-up, clean-up as well as serving coffee, working in the ketichen, cleaning tables, resetting tables and offering smiles.",
	chair: 'Kylee Lyons'
},
{
	title: 'Campus Cleanup',
	start: '2019-02-28 18:00:00',
	end: '2019-02-28 19:00:00',
	description: "After GM, come help revitalize the campus with a campus cleanup!",
	chair: 'Kylee Lyons'
},
{
	title: 'Fundraiser',
	start: '2019-03-01 16:00:00',
	end: '2019-03-01 19:30:00',
	description: "",
	chair: 'Kylee Lyons'
},
{
	title: 'Students of the Year Gala',
	start: '2019-03-01 16:45:00',
	end: '2019-03-01 22:30:00',
	description: "",
	chair: 'Kylee Lyons'
},
{
	title: 'Kids and Horses',
	start: '2019-03-02 08:00:00',
	end: '2019-03-02 16:00:00',
	description: "Horses are a special tool that can help physically and mentally challenged people develop skills. Our job will be assisting the instructor wiht the children and horses, which includes leading horses and spotting (Walking alongside the horse to ensure child's safey and position changes)",
	chair: 'Kylee Lyons'
},
{
	title: 'I Love Lucy Radio Theater (?)',
	start: '2019-03-02 17:30:00',
	end: '2019-03-02 18:45:00',
	description: "",
	chair: 'Kylee Lyons'
},
{
	title: 'Los Angeles Forest Restoration',
	start: '2019-03-03 08:00:00',
	end: '2019-03-03 13:30:00',
	description: "Come spend your morning in the (hopefully not too hot) sun and help restore the Angeles National Forest",
	chair: 'Kylee Lyons'
},
{
	title: 'Scholarship and Student Support Initatives',
	start: '2019-03-03 09:30:00',
	end: '2019-03-03 11:30:00',
	description: "",
	chair: 'Kylee Lyons'
},
{
	title: 'Help the Homeless: One Step at a Time',
	start: '2019-03-03 13:30:00',
	end: '2019-03-03 16:00:00',
	description: "Ever seen a homeless veteran wearing shoes that are falling apart and held together by duct tape or a homeless student with shoes so small and tight that it cuase the child to limp? What about a homeless man or woman with sores on the bottom of their feet from walking without shoes? Well, come help process/sort shoes, put rubber bands around each pair and put them in groups then place them in bags.",
	chair: 'Kylee Lyons'
},
{
	title: 'Serve Breakfast to the Homeless',
	start: '2019-03-04 06:30:00',
	end: '2019-03-04 10:15:00',
	description: "Come kick off your thursday morning (AND SERVICE MARATHONG) by serving a hot breakfast to between 200 and 300 homeless individuals. We will be helping with set-up, clean-up as well as serving coffee, working in the ketichen, cleaning tables, resetting tables and offering smiles.",
	chair: 'Kylee Lyons'
},
{
	title: '#TreePoseChallenge Round 1',
	start: '2019-03-04 12:00:00',
	end: '2019-03-04 14:30:00',
	description: "Come help with advocacy for the trees and for nature, while having a really fun time! We're going to hike to the Lone Tree, pose with it and post those photos on some sort of social media with the hashtag #TreePoseChallenge. Trees need people and people need trees and with the onslaught of wildfires, droughts, excessive heat and massive flooding, our community needs help and we can help by showing our love of the trees!",
	chair: 'Kylee Lyons'
},
{
	title: 'Alexandria House Cooknight',
	start: '2019-03-04 15:00:00',
	end: '2019-03-04 19:30:00',
	description: "",
	chair: 'Kylee Lyons'
},
{
	title: 'Beach Cleanup',
	start: '2019-03-05 14:30:00',
	end: '2019-03-05 17:00:00',
	description: "Not busy in the middle of the day on this lovely monday? WELLL, come join us as we help pickup trash at the beach!",
	chair: 'Kylee Lyons'
},
{
	title: 'Wheelchair Basketball',
	start: '2019-03-05 16:00:00',
	end: '2019-03-05 20:00:00',
	description: "Come be a baller and play some wheelchair basketball with para-athletes! It's really fun and quite the workout!",
	chair: 'Kylee Lyons'
},
{
	title: 'kNOw Waste Youth Education Program Prep',
	start: '2019-03-06 12:00:00',
	end: '2019-03-06 16:00:00',
	description: "Come help FOOD FORWARD prepare materials for their Winter session of the kNOw Waste Education Program. This program seeks to educate 5th graders about issues surrounding food waste and food justice, inspiring them to make a difference in their community. Volunteers should be comfortable with cooking, baking, poster making, and general organizational tasks to assist with the prep for our kNOw Waste Education Program!",
	chair: 'Kylee Lyons'
},
{
	title: 'Stock the Pantry',
	start: '2019-03-06 17:00:00',
	end: '2019-03-06 20:30:00',
	description: "Come help prepare nutritious grocery bags for those living with HIV/AIDs.",
	chair: 'Kylee Lyons'
},
{
	title: 'Hygiene Kit Making with Bruin Shelter',
	start: '2019-03-07 11:00:00',
	end: '2019-03-07 15:30:00',
	description: "Come help the campus club known as Bruin Shelter as they prepare hygiene kits for homeless organizations.",
	chair: 'Kylee Lyons'
},
{
	title: '#TreePoseChallenge Round 2',
	start: '2019-03-07 14:30:00',
	end: '2019-03-07 17:00:00',
	description: "Come help with advocacy for the trees and for nature, while having a really fun time! We're going to hike to the Lone Tree, pose with it and post those photos on some sort of social media with the hashtag #TreePoseChallenge. Trees need people and people need trees and with the onslaught of wildfires, droughts, excessive heat and massive flooding, our community needs help and we can help by showing our love of the trees!",
	chair: 'Kylee Lyons'
}
];