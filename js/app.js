var app = angular.module('simplest', []);

app.controller('emailCtrl', ['$scope', 'messagesService', '$filter', function($scope, messagesService, $filter) {
	'use strict';
	
	$scope.messages    = messagesService.getAll();
	$scope.inboxCount  = $filter('filter')($scope.messages, { type: 'inbox' }).length;
	// $scope.selMenuItem = 1;
	$scope.selType     = 'inbox';
	$scope.selMessage  = $scope.messages[1];

	$scope.selectMessage = function(message) {
		$scope.selMessage = message;
		// angular.element('#downloading').show();
	};

	$scope.closeMessage = function() {
		$scope.selMessage = null;
	};

	// $scope.changeMessagesType = function() {
	// 	// $scope.closeMessage();
	// };
}]);

app.service('messagesService', function() {
	'use strict';

	var messages = [
		{
			username: 'Sarah Connor',
			to:       'me',
			avatar:   'sarah',
			type:     'inbox',
			date:     '2014-07-15',
			files:    false,
			title:    'I\'ve been hunted',
			body:     'A crazy fucking robot lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam laboriosam libero, ut fuga minus natus perspiciatis non adipisci sint nobis quas accusantium perferendis ea. Quae quos nemo assumenda accusamus ea.'

		},
		{
			username: 'Jeremy Clarkson',
			to:       'me',
			avatar:   'jeremy',
			date:     '2014-07-15',
			type:     'inbox',
			files:    true,
			title:    'The brand new season of Top Gear',
			body:     'Hi Greg, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam velit itaque iste, doloribus, ab quae, explicabo similique numquam porro laborum ex impedit laboriosam ullam laudantium voluptatem minima molestias vel ut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cheers'
		},
		{
			username: 'Jack Forsythe',
			to:       'me',
			avatar:   'jack',
			date:     '2014-06-22',
			type:     'inbox',
			files:    true,
			title:    'CSS Responsive',
			body:     'Here is my hack, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam pariatur illo, incidunt perspiciatis repudiandae veritatis molestiae laudantium sed deleniti sequi maiores voluptas voluptate sunt eos reprehenderit velit inventore error delectus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia voluptates illo labore iste laudantium qui sapiente velit magni voluptate, ipsum repellendus beatae ea a maiores cumque corporis rem eius dolores.'
		},
		{
			username: 'Michelle Racine',
			to:       'me',
			avatar:   'michelle',
			date:     '2014-06-08',
			type:     'inbox',
			files:    false,
			title:    'Dribbble',
			body:     'Hey I saw your work on dribbble, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nolestias!'
		},
		{
			username: 'Safira Han',
			to:       'me',
			avatar:   'safira',
			date:     '2014-03-11',
			type:     'inbox',
			files:    false,
			title:    'This is Not Just Filler Text',
			body:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores itaque laboriosam dicta sequi libero magnam id voluptas, quibusdam ex explicabo at repellat blanditiis doloribus, ratione, nesciunt temporibus ducimus! Omnis, laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur architecto doloremque, tempore dolorem illum, cumque minus quia, sit nemo quaerat nesciunt provident sequi iusto fugit dolor repellendus vel consequuntur labore.'
		},
		{
			username: 'Brad Frost',
			to:       'me',
			avatar:   'brad',
			date:     '2014-03-10',
			type:     'inbox',
			files:    true,
			title:    'Web Design is Awesome!!',
			body:     'Qui reprehenderit aut ad consequatur porro nesciunt dolor et dolores illum, mollitia asperiores adipisci esse vero, explicabo, minus unde architecto eveniet! Sequi?'
		},
		{
			username: 'Anna Almond',
			to:       'me',
			avatar:   'anna',
			date:     '2014-03-02',
			type:     'inbox',
			files:    false,
			title:    'Hey! Do You Want To Go To That Meetup?',
			body:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, et corrupti necessitatibus harum consequatur nam autem praesentium possimus nobis repudiandae fugit, ullam, voluptatem temporibus. Dolores est assumenda quisquam totam at? Impedit aliquid explicabo cumque, labore distinctio sequi quaerat hic eligendi non numquam nemo consequatur fugit itaque deserunt mollitia dignissimos magnam, sint iure ipsum. Atque magnam eligendi praesentium laborum. Consectetur, eius. Dolore totam nobis nam amet ex earum tempora, natus ab. Natus quae culpa, odio nihil quis, laborum consectetur recusandae ducimus eligendi magni, omnis exercitationem quam expedita possimus vel est! Facere?'
		},
		{
			username: 'Anthony Kowalczyk',
			to:       'me',
			avatar:   'anthony',
			date:     '2014-01-04',
			type:     'inbox',
			files:    true,
			title:    'Finally 2014',
			body:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquid distinctio, earum cumque a culpa tempore quia commodi accusantium pariatur ratione consequuntur, vel quidem corporis atque minus aspernatur, esse ut!'
		},
		{
			username: 'me',
			to:       'Brad Frost',
			avatar:   'me',
			date:     '2014-03-15',
			type:     'sent',
			files:    false,
			title:    'Re: Web Design is Awesome!!',
			body:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit saepe ratione in sunt quo reprehenderit explicabo voluptatem. Ut, excepturi delectus dicta voluptatum, molestiae voluptatibus enim neque natus aliquam quasi inventore.'
		},
		{
			username: 'me',
			to:       'Anna Almond',
			avatar:   'me',
			date:     '2014-05-20',
			type:     'draft',
			files:    false,
			title:    'Re: Hey!!',
			body:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit saepe ratione in sunt quo reprehenderit explicabo voluptatem. Ut, excepturi delectus dicta voluptatum, molestiae voluptatibus enim neque natus aliquam quasi inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, enim. Sapiente cum quidem eum illo nihil cumque hic commodi porro! Labore fugit, voluptate excepturi assumenda repudiandae minus accusantium error reiciendis.'
		},
		{
			username: 'Future Shop',
			to:       'me',
			avatar:   'fshop',
			date:     '2014-02-18',
			type:     'junk mail',
			files:    false,
			title:    'Buy Our Laptops',
			body:     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit saepe ratione in sunt quo reprehenderit explicabo voluptatem. Ut, excepturi delectus dicta voluptatum, molestiae voluptatibus enim neque natus aliquam quasi inventore. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, enim. Sapiente cum quidem eum illo nihil cumque hic commodi porro! Labore fugit, voluptate excepturi assumenda repudiandae minus accusantium error reiciendis.'
		}
	];

	return {
		getAll: function() {
			return messages;
		}
	};
});

// get first fragment of message up to the first comma
app.filter('firstFragment', function() {
    'use strict';

    return function(input) {
        return input.slice(0, input.indexOf(','));
    };
});