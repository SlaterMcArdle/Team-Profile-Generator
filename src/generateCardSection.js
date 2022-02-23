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
                customData = `Github: <a href="http://github.com/${user.github}">${user.github}</a>`;
                break;
            case 'Intern':
                customData = 'School: ' + user.school;
                break;
        }
        const card = `<div class="card w-25 m-3">
            <div class="card-header bg-primary text-white">
                <h3 class="card-title">${user.name}</h3>
                <h5>${user.role}</h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${user.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${user.email}">${user.email}</a></li>
                    <li class="list-group-item">${customData}</li>
            </div>
        </div>`;
        cardSection += card;
    });
    return cardSection;
};

module.exports = generateCardSection;