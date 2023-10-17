function skillsMember() {
    var skills = document.getElementById('memberSkills');
    var addSkill = document.getElementById('addSkill');
    var skill = document.getElementById('skill');
    var skillList = document.getElementById('skillList');
    var skillBtn = document.getElementById('skillBtn');
    var skillInput = document.getElementById('skillInput');
    var skillText = document.getElementById('skillText');
    var skillList = document.getElementById('skillList');
    var skillCount = 0;

    // add new skill
    function addNewSkill() {
        var skillValue = skill.value;
        if (skillValue === '') {
            skill.focus();
        } else {
            var skillItem = document.createElement('li');
            skillItem.className = 'skill-item';
            skillItem.innerHTML = '<span class="skill-name">' + skillValue + '</span> <span class="skill-remove">x</span>';
            skillList.appendChild(skillItem);
            skillCount++;
            skillText.innerHTML = skillCount + ' skills';
            skill.value = '';
            skill.focus();
        }
    }

    // remove skill
    function removeSkill(e) {
        if (e.target.classList.contains('skill-remove')) {
            var skillItem = e.target.parentElement;
            skillList.removeChild(skillItem);
            skillCount--;
            skillText.innerHTML = skillCount + ' skills';
        }
    }

    // events
    addSkill.addEventListener('click', addNewSkill);
    skillBtn.addEventListener('click', addNewSkill);
    skillInput.addEventListener('keypress', function(e) {
        if (e.keyCode === 13) {
            addNewSkill();
        }
    });
    skillList.addEventListener('click', removeSkill);
}