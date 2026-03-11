document.addEventListener('DOMContentLoaded', () => {
    // 1. НАВИГАЦИЯ (Превключване между HOME и OFFERS)
    const navHome = document.getElementById('nav-home');
    const navOffers = document.getElementById('nav-offers');
    const homePage = document.getElementById('home-page');
    const offersPage = document.getElementById('offers-page');

    navHome.addEventListener('click', (e) => {
        e.preventDefault();
        homePage.classList.remove('hidden');
        offersPage.classList.add('hidden');
    });

    navOffers.addEventListener('click', (e) => {
        e.preventDefault();
        offersPage.classList.remove('hidden');
        homePage.classList.add('hidden');
    });

    // 2. МОДАЛ (Отваряне и затваряне на формата)
    const bookBtn = document.getElementById('book-btn');
    const modal = document.getElementById('survey-modal');
    const closeBtn = document.querySelector('.close-btn');

    bookBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // 3. ПЛЪЗГАЧ ЗА БЮДЖЕТ
    const budgetInput = document.getElementById('budget');
    const budgetDisplay = document.getElementById('budget-val');

    budgetInput.addEventListener('input', function() {
        budgetDisplay.textContent = this.value;
    });

    // 4. ИНТЕРАКТИВНИ ИКОНКИ ЗА ХОРА (Нова логика)
    const personIcons = document.querySelectorAll('.person-icon');
    const peopleInput = document.getElementById('people');
    const peopleCountDisplay = document.getElementById('people-count');

    personIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const val = parseInt(icon.getAttribute('data-val'));
            
            // Запазваме стойността в скритото поле за бекенда
            peopleInput.value = val;
            
            // Обновяваме текста
            if (val === 6) {
                peopleCountDisplay.textContent = '6+';
            } else {
                peopleCountDisplay.textContent = val;
            }

            // Светваме всички човечета до кликнатото
            personIcons.forEach(ic => {
                const icVal = parseInt(ic.getAttribute('data-val'));
                if (icVal <= val) {
                    ic.classList.add('active');
                } else {
                    ic.classList.remove('active');
                }
            });
        });
    });

    // 5. ИЗПРАЩАНЕ НА ФОРМАТА (Симулация)
    const form = document.getElementById('mystery-survey');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const userName = document.getElementById('name').value;
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        // Проста проверка дали крайната дата е след началната
        if (startDate && endDate && startDate > endDate) {
            alert("Крайната дата трябва да е след началната!");
            return;
        }

        alert(`Супер, ${userName}! Твоите предпочитания са записани. Очаквай изненадата!`);
        
        modal.classList.add('hidden');
        homePage.classList.add('hidden');
        offersPage.classList.remove('hidden');
    });
});