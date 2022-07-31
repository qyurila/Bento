// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'Hyeon',
	imageBackground: true,
	openInNewTab: false,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good\xa0morning,',
	greetingAfternoon: 'Good\xa0afternoon,',
	greetingEvening: 'Good\xa0evening,',
	greetingNight: 'Good\xa0night,',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: 'd249708af5accd3481a841c094ab4eff', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Scoop',
			icon: 'terminal',
			link: 'https://scoop.sh/',
		},
		{
			id: '3',
			name: 'DevDocs',
			icon: 'file-search',
			link: 'https://devdocs.io/',
		},
		{
			id: '4',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://www.youtube.com/',
		},
		{
			id: '5',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.google.com/',
		},
		{
			id: '6',
			name: 'Google Sheets',
			icon: 'table-2',
			link: 'https://docs.google.com/spreadsheets/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'music',
			id: '1',
			links: [
				{
					name: 'YouTube Music',
					link: 'https://music.youtube.com/',
				},
				{
					name: '🎵RMfW',
					link: 'https://music.youtube.com/playlist?list=PLt4PlBZPJX7Hsx3Ls8CCg9S293Jft3BhG',
				},
				{
					name: 'Bandcamp',
					link: 'https://bandcamp.com/rea9lizer',
				},
				{
					name: 'SoundCloud',
					link: 'https://soundcloud.com/',
				},
			],
		},
		{
			icon: 'coffee',
			id: '2',
			links: [
				{
					name: 'MonkeyType',
					link: 'https://monkeytype.com/',
				},
				{
					name: 'TickTick',
					link: 'https://ticktick.com/',
				},
				{
					name: 'DEV',
					link: 'https://dev.to/',
				},
				{
					name: 'Barter.vg',
					link: 'https://barter.vg',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
