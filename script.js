
let balance = 0;

function calculateBalance() {
    const income = parseFloat(document.getElementById('income').value) || 0;
    const fixed = parseFloat(document.getElementById('fixed').value) || 0;
    const variable = parseFloat(document.getElementById('variable').value) || 0;
    const savings = parseFloat(document.getElementById('savings').value) || 0;
    balance = income - (fixed + variable + savings);
    document.getElementById('balanceResult').innerText = 'Spendable Balance: MVR ' + balance.toFixed(2);
}

function evaluatePurchase() {
    const cost = parseFloat(document.getElementById('itemCost').value) || 0;
    if (balance <= 0) {
        alert('Please calculate a valid balance first.');
        return;
    }
    const impact = (cost / balance) * 100;
    document.getElementById('impactResult').innerText = 
        `This purchase will reduce your balance by ${impact.toFixed(2)}%. Remaining after purchase: MVR ${(balance - cost).toFixed(2)}`;
    document.getElementById('checklistSection').style.display = 'block';
}

function finalDecision() {
    const checks = document.querySelectorAll('#checklistForm input[type="checkbox"]');
    let allChecked = true;
    checks.forEach(cb => {
        if (!cb.checked) allChecked = false;
    });
    const decision = document.getElementById('finalDecisionOutput');
    if (allChecked) {
        decision.innerHTML = "<strong>✅ Purchase Approved. Proceed mindfully.</strong>";
    } else {
        decision.innerHTML = "<strong>⚠️ Some checklist items are unchecked. Please review before finalizing.</strong>";
    }
}
