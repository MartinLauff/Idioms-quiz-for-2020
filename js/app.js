const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('box__btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    questionContainerElement.classList.add('hide')
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    {
        question: 'A DOG\'S LIFE',
        answers: [
            { text: 'very stressful life', correct: false},
            { text: 'very unhappy life', correct: true},
            { text: 'very exciting life', correct: false},
            { text: 'very happy life', correct: false}
        ]
    },
    {
        question: 'ADD INSULT TO INJURY',
        answers: [
            { text: 'speak about unnecessary things', correct: false},
            { text: 'to experiment in a dangerous way', correct: false},
            { text: 'make a situation worse', correct: true},
            { text: 'do something badly or cheaply', correct: false}
        ]
    },
    {
        question: 'AT A RATE OF KNOTS',
        answers: [
            { text: 'very quickly', correct: true},
            { text: 'very foxy', correct: false},
            { text: 'very slowly but surely', correct: false},
            { text: 'very positively', correct: false}
        ]
    },
    {
        question: 'AT SEA',
        answers: [
            { text: 'very confused', correct: true},
            { text: 'very excited and mellow', correct: false},
            { text: 'not correct', correct: false},
            { text: 'when you are at sea, you are very apprehensive', correct: false}
        ]
    },
    {
        question: 'AT PEACE',
        answers: [
            { text: 'vulgarism, refering to be quiet', correct: false},
            { text: 'a gentle way of saying that someone is mentally il', correct: false},
            { text: 'to be spick-and-span', correct: false},
            { text: 'a gentle way of saying that someone is dead', correct: true}
        ]
    },
    {
        question: 'BE ON THE CARDS',
        answers: [
            { text: 'to be likely to happen', correct: true},
            { text: 'to be ready ', correct: false},
            { text: 'to be well prepared for something dangerous', correct: false},
            { text: 'to hate exigious things', correct: false}
        ]
    },
    {
        question: 'BE ON CLOUD NINE',
        answers: [
            { text: 'not having enough money', correct: false},
            { text: 'to be destitute as hell', correct: false},
            { text: 'to be extremely blissful and excited', correct: true},
            { text: 'to feel depressed and sorrowful', correct: false}
        ]
    },
    {
        question: 'BE KNEE-HIGH TO A GRASSHOPPER',
        answers: [
            { text: 'to be quite indigent', correct: false},
            { text: 'to be young', correct: true},
            { text: 'the condition of being very old', correct: false},
            { text: 'abhorrence of small people', correct: false}
        ]
    },
    {
        question: 'BE PUSHING UP (THE) DAISIES',
        answers: [
            { text: 'to be couch-potato', correct: false},
            { text: 'to be dead', correct: true},
            { text: 'to be arrogant and quite impertinent', correct: false},
            { text: 'if you are pushing up daises you are farm-lover', correct: false}
        ]
    },
    {
        question: 'BE OF UNSOUND MIND',
        answers: [
            { text: 'to be cherished', correct: false},
            { text: 'to be mentally ill', correct: true},
            { text: 'to not be mentally ill', correct: false},
            { text: 'to not be cherished', correct: false}
        ]
    },
    {
        question: 'BE THE BEE\'S KNEES',
        answers: [
            { text: 'to be very small and young', correct: false},
            { text: 'to be very captivating', correct: false},
            { text: 'to be excellent', correct: true},
            { text: 'to be known for taking a risks', correct: false}
        ]
    },
    {
        question: 'BITE THE DUST',
        answers: [
            { text: 'to starve', correct: false},
            { text: 'usually when elder people are not able to do certain things', correct: false},
            { text: 'to die', correct: true},
            { text: 'if you are addicted to an alcohol you bite the dust', correct: false}
        ]
    },
    {
        question: 'LINE SB\'S POCKETS',
        answers: [
            { text: 'to provoke someone', correct: false},
            { text: 'to make someone richer in illegal ways', correct: true},
            { text: 'speak nicely about somebody', correct: false},
            { text: 'to mug somebody', correct: false}
        ]
    },
    {
        question: 'BONE IDLE',
        answers: [
            { text: 'extremely lazy', correct: true},
            { text: 'extremely active', correct: false},
            { text: 'extremely timid', correct: false},
            { text: 'extremely cold', correct: false}
        ]
    },
    {
        question: 'BURN THE CANDLE AT BOTH ENDS',
        answers: [
            { text: 'To work very quickly although the result is not qualitative', correct: false},
            { text: 'Something that seems bad or unlucky at first but causes something good to happen later', correct: false},
            { text: 'Said to emphasize that every difficult or unpleasant situation has some advantage', correct: false},
            { text: 'To work from early in the morning until late at night and so get very little rest', correct: true}
        ]
    },
    {
        question: 'BUY THE FARM',
        answers: [
            { text: 'to resign from a job', correct: false},
            { text: 'to die', correct: true},
            { text: 'to say the truth to your enemy', correct: false},
            { text: 'too obviously showing your power in an attempt to make other people notice and admire you', correct: false}
        ]
    },
    {
        question: 'CALL IT A DAY',
        answers: [
            { text: 'to say the truth to your enemy', correct: false},
            { text: 'to plan something succesfuly', correct: false},
            { text: 'to stop what you are doing because you do not want to do any more or think you have done enough', correct: true},
            { text: 'to speak vulgarly', correct: false}
        ]
    },
    {
        question: 'CHEW THE FAT',
        answers: [
            { text: 'to be known for eating unhealthy foods', correct: false},
            { text: 'to go to the gym every day in order to lose some weight', correct: false},
            { text: 'to sleep', correct: false},
            { text: 'To talk with someone in an informal and friendly way', correct: true}
        ]
    },
    {
        question: 'DOWN THE ROAD',
        answers: [
            { text: 'very easy and simple', correct: false},
            { text: 'very quickly and rapidly', correct: false},
            { text: 'in the future', correct: true},
            { text: 'in the past', correct: false}
        ]
    },
    {
        question: 'FEEL BLUE',
        answers: [
            { text: 'feel very ashamed', correct: false},
            { text: 'feel sad', correct: true},
            { text: 'feel overjoyed', correct: false},
            { text: 'to feel like you are a king of all kings,arrogant', correct: false}
        ]
    },
    {
        question: 'FENDER BENDER',
        answers: [
            { text: 'a person who often drinks a large amount of alcohol on one occasion', correct: false},
            { text: 'road accident in which the vehicles involved are only slightly damaged', correct: true},
            { text: 'a substance that can make people or animals ill or kill them', correct: false},
            { text: 'a gentle way of saying a rude vulgarism', correct: false}
        ]
    },
    {
        question: 'GET THE AXE',
        answers: [
            { text: 'to lose a job', correct: true},
            { text: 'to get an unexpected gift', correct: false},
            { text: 'get a sale in a shop', correct: false},
            { text: 'to start an argument between your parents', correct: false}
        ]
    },
    {
        question: 'HAUL SOMEONE OVER THE COALS',
        answers: [
            { text: 'to talk about other people\'s private lives behind their back', correct: false},
            { text: 'to shout at someone loudly even if it is not neccesery', correct: false},
            { text: 'to criticize someone severely for something they have done', correct: true},
            { text: 'to start an argument between your parents', correct: false}
        ]
    },
    {
        question: 'HAVE A LONG FACE',
        answers: [
            { text: 'if you have a long face, you look sad', correct: true},
            { text: 'to look hideous', correct: false},
            { text: 'to feel embarrassed or ashamed', correct: false},
            { text: 'if you have a long face, you are very nervous', correct: false}
        ]
    },
    {
        question: 'HIT THE CEILING',
        answers: [
            { text: 'to be very drunk', correct: false},
            { text: 'to die', correct: false},
            { text: 'to become extremely angry', correct: true},
            { text: 'to become extremely excited', correct: false}
        ]
    },
    {
        question: 'HIT THE SACK',
        answers: [
            { text: 'to start to drink too much alcohol', correct: false},
            { text: 'to start a big battle, used in wars', correct: false},
            { text: 'to go sleep', correct: true},
            { text: 'to earn money illegally', correct: false}
        ]
    },
    {
        question: 'JAM TOMORROW',
        answers: [
            { text: 'another opportunity to do something', correct: false},
            { text: 'the part that has not been used or eaten when the other parts have been', correct: false},
            { text: 'something good that is promised but never happens', correct: true},
            { text: 'to look chubby', correct: false}
        ]
    },
    {
        question: 'LIVE IN CLOVER',
        answers: [
            { text: 'to live in a part of a town that is considered poor and dangerous', correct: false},
            { text: 'someone who loves water activities like swimming, surfing etc, lives in clover', correct: false},
            { text: 'to be very skillfull in a particular activity', correct: false},
            { text: 'to enjoy a life of money and comfort', correct: true}
        ]
    },
    {
        question: 'WOMAN OF MEANS',
        answers: [
            { text: 'clever woman', correct: false},
            { text: 'rich woman', correct: true},
            { text: 'pretty woman', correct: false},
            { text: 'pregnant woman', correct: false}
        ]
    },
    {
        question: 'MAKE HEADWAY',
        answers: [
            { text: 'to make progress', correct: true},
            { text: 'to create or make a plan', correct: false},
            { text: 'to make a strong decision', correct: false},
            { text: 'to treat someone or something according to the usual rules', correct: false}
        ]
    },
    {
        question: 'MEET YOUR MAKER',
        answers: [
            { text: 'to have a strong argument, especially with your parents or close friends', correct: false},
            { text: 'to see your doctor', correct: false},
            { text: 'to look at someone directly while they are looking at you', correct: false},
            { text: 'to die', correct: true}
        ]
    },
    {
        question: 'ON THE WAGON',
        answers: [
            { text: 'to be nervous and hence to do many mistakes', correct: false},
            { text: 'if you are on the wagon, you have decided not to drink any alcohol', correct: true},
            { text: 'to be on the wagon means to travel a lot', correct: false},
            { text: 'to enjoy a life of money and comfort', correct: false}
        ]
    },
    {
        question: 'PULL SB\'S LEG',
        answers: [
            { text: 'to strongly provoke someone', correct: false},
            { text: 'to encourage someone to do something, esp. something unwise or bad', correct: false},
            { text: 'to try to persuade someone to believe something that is not true, as a joke', correct: true},
            { text: 'to continue talking about something that is not interesting to the person you are talking to', correct: false}
        ]
    },
    {
        question: 'SAY UNCLE',
        answers: [
            { text: 'to give up', correct: false},
            { text: 'to admit failure', correct: true},
            { text: 'to speak too proudly about what you have done or what you own', correct: false},
            { text: 'to miss an appointment', correct: false}
        ]
    },
    {
        question: 'SHOOT THE BREEZE',
        answers: [
            { text: 'to eat a lot of food, especially without being able to control yourself', correct: false},
            { text: 'to start to drink too much alcohol', correct: false},
            { text: 'to be very ravenous', correct: false},
            { text: 'to spend time talking about things that are not important', correct: true}
        ]
    },
    {
        question: 'SICK AT HEART',
        answers: [
            { text: 'if you are sick at heart, you are unbiased', correct: false},
            { text: 'mentally ill', correct: false},
            { text: 'extremely silly or stupid', correct: false},
            { text: 'very unhappy', correct: true}
        ]
    },
    {
        question: 'SPILL THE BEANS',
        answers: [
            { text: 'to not be versed in something', correct: false},
            { text: 'to kill or hurt people', correct: false},
            { text: 'to tell people secret information', correct: true},
            { text: 'to tell someone all about yourself, especially your problems', correct: false}
        ]
    },
    {
        question: 'SPLIT HAIRS',
        answers: [
            { text: 'to argue about small details of something', correct: true},
            { text: 'to have nothing to do;bored', correct: false},
            { text: 'to precisely search for something , especially what is well hidden', correct: false},
            { text: 'to learn/know how to do a job or activity', correct: false}
        ]
    },
    {
        question: 'STORM IN A TEACUP',
        answers: [
            { text: 'a man pretended to be someone else', correct: false},
            { text: 'a lot of unnecessary anger and worry about a matter that is not important', correct: true},
            { text: 'if you are not willing to do something, you say that you will do it, when there is storm in a teacup', correct: false},
            { text: 'a sentimental guy who can be easily provoked', correct: false}
        ]
    },
    {
        question: 'TAKE A BATTERING',
        answers: [
            { text: 'a man pretended to be someone else', correct: false},
            { text: 'to step on the gas', correct: false},
            { text: 'to be defeated heavily', correct: true},
            { text: 'to give up', correct: false}
        ]
    },
    {
        question: 'TALK TURKEY',
        answers: [
            { text: 'to talk nonsense', correct: false},
            { text: 'to discuss something in a direct way without avoiding difficult issues', correct: true},
            { text: 'to shout at someone, especially when it is unnecessary', correct: false},
            { text: 'to speak too proudly or happily about what you have done or what you own', correct: false}
        ]
    }
]