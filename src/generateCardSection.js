const generateCardSection = (users) => {
    // const users = fs.readFileSync('users.json', (err) => {if(err) {console.log('error reading user data!')}});
    let cardSection = '';
    users.forEach(user => {
        const role = user.role;
        let customData;
        switch (role) {
            case 'Manager':
                customData = 'Office Number: ' + user.officeNumber;
                break;
            case 'Engineer':
                customData = 'Github: ' + user.github;
                break;
            case 'Intern':
                customData = 'School: ' + user.school;
                break;
        }
        const card = `<div class="card userCard">
            <div class="card-header">
                <h3 class="card-title">${user.name}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Email: ${user.email}</li>
                    <li class="list-group-item">${customData}</li>
            </div>
        </div>`;
        cardSection += card;
    });
    return cardSection;
};

module.exports = generateCardSection;