
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
    const answers = {
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value,
        q4: document.getElementById('q4').value,
        q5: document.getElementById('q5').value,
        q6: document.getElementById('q6').value
    };

    let score = 0;
    if (answers.q1 === 'need') score++;
    if (answers.q2 === 'yes') score++;
    if (answers.q3 === 'no') score++;
    if (answers.q4 === 'no') score++;
    if (answers.q5 === 'yes') score++;
    if (answers.q6 === 'no') score++;

    let decisionMsg = '';
    if (Object.values(answers).includes("")) {
        decisionMsg = "⚠️ Please answer all checklist questions.";
    } else if (score >= 5) {
        decisionMsg = "✅ Purchase Approved. This seems to be a well-justified spending.";
    } else if (score >= 3) {
        decisionMsg = "🟡 Consider Delaying. Some caution signals detected.";
    } else {
        decisionMsg = "❌ Not Recommended. Too many red flags in this decision.";
    }

    document.getElementById('finalDecisionOutput').innerHTML = `<strong>${decisionMsg}</strong>`;
}
