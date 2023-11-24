document.addEventListener('DOMContentLoaded', function () {
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-btn');
    const resultDisplay = document.getElementById('result');

    const questions = [
        {
            question: ' Which script is used for writing the Kazakh language?',
            options: ['Cyrillic', 'Latin', 'Arabic', 'Both Latin and Cyrillic'],
            correctAnswer: 'Both Latin and Cyrillic'
        },
        {
            question: 'The Kazakh language has been influenced by cultural and linguistic interactions with Turkic and Mongolic peoples?',
            options: ['True', 'False'],
            correctAnswer: 'True'
        },
        {
            question: 'Who is considered the most prominent figure in the history of the Kazakh language?',
            options: ['Kunanbayev and Altynsarin', 'Auezkhanov and Madiyarov', 'Mukhamedzhanov and Janaev'],
            correctAnswer: 'Kunanbayev and Altynsarin'
        },
        {
            question: 'When did the modern complex Kazakh language appear?',
            options: ['1900', '1929', '1950', '2000'],
            correctAnswer: '1929'
        },
        {
            question: 'When did the Kazakh language become Cyrillic?',
            options: ['1929', '1940', '1990', '2017'],
            correctAnswer: '1940'
        },
        {
            question: 'What is the significance of the Qazaq Latin alphabet in modern Kazakh communication?',
            options: ['It enhances international communication.', 'It is used for formal documents.', 'It is primarily used in academic settings.', 'It is only used by specific regions.'],
            correctAnswer: 'It enhances international communication.'
        },
        {
            question: 'What is the significance of the Kazakh language in the country\'s cultural identity, as emphasized in the Constitution of Kazakhstan?',
            options: ['It is a mandatory language for all citizens.', 'It is the primary language of international diplomacy.', 'It plays a crucial role in preserving national identity.', 'It is used exclusively in business and trade.'],
            correctAnswer: 'It plays a crucial role in preserving national identity.'
        },
        {
            question: 'What is the name of the Kazakh language regulatory body responsible for standardizing and promoting the language?',
            options: ['Kazakh Language Academy', 'Language Council of Kazakhstan', 'National Language Institute', 'Linguistic Development Authority'],
            correctAnswer: 'Language Council of Kazakhstan'
        },
        {
            question: 'Which government initiative in Kazakhstan promotes the use of the Kazakh language in various domains, including education and administration?',
            options: ['Trilingual Kazakhstan', 'Cyrillic Revival Program', 'Alphabet Modernization Project', 'Digital Language Campaign'],
            correctAnswer: 'Trilingual Kazakhstan'
        }
    ];

    function buildQuestion(question, index) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question', `question-${index + 1}`);
        questionDiv.innerHTML = `<p>${index + 1}. ${question.question}</p>`;

        question.options.forEach((option, optionIndex) => {
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question${index}`;
            input.value = option;
            input.id = `q${index}o${optionIndex}`;

            const label = document.createElement('label');
            label.htmlFor = `q${index}o${optionIndex}`;
            label.textContent = option;

            questionDiv.appendChild(input);
            questionDiv.appendChild(label);
        });

        quizContainer.appendChild(questionDiv);
    }

    function playFireworksAnimation() {
        particlesJS('fireworks-container', {
            particles: {
                // Customize particles.js options
                // Example options, you can modify these based on your preferences
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
                opacity: { value: 0.5, random: false, anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false } },
                size: { value: 3, random: true, anim: { enable: false, speed: 40, size_min: 0.1, sync: false } },
                line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false, attract: { enable: false, rotateX: 600, rotateY: 1200 } }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });
    }

    function showResults() {
        const answerContainers = quizContainer.querySelectorAll('.question');
        let score = 0;

        questions.forEach((question, index) => {
            const userAnswer = (document.querySelector(`input[name="question${index}"]:checked`) || {}).value;

            if (userAnswer === question.correctAnswer) {
                score++;
                answerContainers[index].style.color = 'green';
            } else {
                answerContainers[index].style.color = 'red';
            }
        });

        resultDisplay.textContent = `You scored ${score} out of ${questions.length}`;

        // Trigger the fireworks animation
        playFireworksAnimation();
    }

    submitButton.addEventListener('click', showResults);

    questions.forEach(buildQuestion);
});


