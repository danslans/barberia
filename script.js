const subscriptionPlans = [
    { id: 1, name: 'Basic', price: '19.99', features: ['1 corte al mes', 'Reserva online', '10% descuento en productos'] },
    { id: 2, name: 'Platino', price: '39.99', features: ['2 cortes al mes', 'Reserva online', '20% descuento en productos', 'Tratamiento de barba gratis'] },
    { id: 3, name: 'Oro', price: '59.99', features: ['Cortes ilimitados', 'Reserva online prioritaria', '30% descuento en productos', 'Tratamiento de barba gratis', 'Masaje de cuero cabelludo'] },
];

let selectedPlan = null;

function renderPlans() {
    const plansContainer = document.getElementById('subscription-plans');
    plansContainer.innerHTML = '';

    subscriptionPlans.forEach(plan => {
        const planElement = document.createElement('div');
        planElement.className = 'plan';
        planElement.innerHTML = `
            <h2>${plan.name}</h2>
            <p>$${plan.price}/mes</p>
            <ul>
                ${plan.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
            <button class="${selectedPlan === plan.id ? 'selected' : 'select'}" data-plan-id="${plan.id}">
                ${selectedPlan === plan.id ? 'Seleccionado' : 'Seleccionar'}
            </button>
        `;
        plansContainer.appendChild(planElement);
    });

    updateSelectedPlanText();
}

function handleSelectPlan(planId) {
    selectedPlan = planId;
    renderPlans();
}

function updateSelectedPlanText() {
    const selectedPlanElement = document.getElementById('selected-plan');
    if (selectedPlan) {
        const plan = subscriptionPlans.find(plan => plan.id === selectedPlan);
        selectedPlanElement.textContent = `Has seleccionado el plan ${plan.name}`;
    } else {
        selectedPlanElement.textContent = '';
    }
}

document.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON' && event.target.hasAttribute('data-plan-id')) {
        const planId = parseInt(event.target.getAttribute('data-plan-id'));
        handleSelectPlan(planId);
    }
});

renderPlans();