activateBtn();

//---- Start Chat Interface



$('#sendBtn').on('click', function () {
	$(this).removeClass('activeBtn');
	$('.message-container-intro').hide(500);
	firstMessage();
	startChatBot();
});

//---- Play Sound on Button Click

const clickSound = new Audio('audio/Button-click-sound.mp3');

startSound();

function startSound() {
	$('.soundBtn').click(e => clickSound.play());
}

function startChatBot() {
	$('body').addClass('beginChat');
}

function firstMessage() {
	var name = $.trim($("#nameInput").val());

	$('.individual-messages')
		.append('<li class="bot"> Hello 👋 ' + name + '. Welcome to Yellow Girlfriend .</li>')
		.delay(1000)
		.queue(function (next) {
			$(this).append('<li class="bot">We all know that your girlfriend cheats on you! 😊</li> <br />')
				.delay(1000)
				.queue(function (next) {
					$(this).append('<li class="bot">What\'d you say?</li> <br />');
				});
			next();
		});
}

function activateBtn() {
	$(function () {
		$('#nameInput').keyup(function () {
			if ($(this).val() == '') {
				$('#sendBtn').removeClass('activeBtn');
			} else {
				$('#sendBtn').addClass('activeBtn');
			}
		});
	});
}


$(function () {
	$('#messageBox').keyup(function () {
		if ($(this).val() == '') {
			$('#sendBtnRound').removeClass('activeSend');
		} else {
			$('#sendBtnRound').addClass('activeSend');
		}
	});
});


$(document).ready(function () {
	var chat_screen = $(".individual-messages ");
	var text_bar = $("#messageBox")
	$('#sendBtnRound').click(function () {
		chat_screen.append('<li class="user">' + text_bar.val() + '</li>');
		text_bar.val('');
	});
});