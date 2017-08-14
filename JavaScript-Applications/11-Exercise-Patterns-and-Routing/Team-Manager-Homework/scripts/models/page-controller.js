/**
 * Created by Deyan Peychev on 14-Aug-17.
 */
let pageController = (() => {

    let commonPartials = {
        header: './templates/common/header.hbs',
        footer: './templates/common/footer.hbs'
    };
    function checkStatus(ctx) {
        ctx.loggedIn = sessionStorage.getItem('authtoken') !== null;
        ctx.username = sessionStorage.getItem('username');
    }

    function displayHome(ctx) {
        checkStatus(ctx);

        ctx.loadPartials(commonPartials).then(function () {
            this.partial('./templates/home/home.hbs');
        });
    }

    function displayAbout(ctx) {
        checkStatus(ctx);

        this.loadPartials(commonPartials).then(function () {
            this.partial('./templates/about/about.hbs');
        });
    }

    function getLogin(ctx) {
        checkStatus(ctx);
        commonPartials['loginForm'] = './templates/login/loginForm.hbs';

        this.loadPartials(commonPartials).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        })
    }
    function postLogin(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;

        auth.login(username, password)
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('Logged in');
                displayHome(ctx);
            })
            .catch(auth.handleError);
    }

    function logout(ctx) {
        auth.logout()
            .then(function () {
                sessionStorage.clear();
                auth.showInfo('Logged out');
                displayHome(ctx);
            })
            .catch(auth.handleError);
    }

    function getRegister(ctx) {
        checkStatus(ctx);
        commonPartials['registerForm'] = './templates/register/registerForm.hbs';

        this.loadPartials(commonPartials).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        })
    }
    function postRegister(ctx) {
        let username = ctx.params.username;
        let password = ctx.params.password;
        let confirmPassword = ctx.params.repeatPassword;

        if(password !== confirmPassword){
            auth.showError('Passwords do not match')
        }else{
            auth.register(username, password)
                .then(function (userInfo) {
                    auth.saveSession(userInfo);
                    auth.showInfo('Successfully registered');
                    displayHome(ctx);
                })
                .catch(auth.handleError);
        }
    }

    function getCatalog(ctx) {
        checkStatus(ctx);
        teamsService.loadTeams()
            .then(function (teams) {
                ctx.hasNoTeam = sessionStorage.getItem('teamId') === null
                    || sessionStorage.getItem('teamId') === 'undefined';
                ctx.teams = teams;

                commonPartials['team'] = './templates/catalog/team.hbs';
                ctx.loadPartials(commonPartials).then(function () {
                    this.partial('./templates/catalog/teamCatalog.hbs');
                })

            })
            .catch(auth.handleError);
    }

    function getCreateTeam(ctx) {
        checkStatus(ctx);

        commonPartials['createForm'] = './templates/create/createForm.hbs';
        ctx.loadPartials(commonPartials)
            .then(function () {
                this.partial('./templates/create/createPage.hbs');
            })
    }
    function postCreateTeam(ctx) {
        let teamName = ctx.params.name;
        let teamComment = ctx.params.comment;

        teamsService.createTeam(teamName, teamComment)
            .then(function (teamInfo) {
                teamsService.joinTeam(teamInfo._id)
                    .then(function (userInfo) {
                        auth.saveSession(userInfo);
                        auth.showInfo(`Successfully created team "${teamName.toUpperCase()}"`);
                        getCatalog(ctx);
                    })
                    .catch(auth.handleError);
            })
            .catch(auth.handleError);
    }

    function getTeamDetails(ctx) {
        checkStatus(ctx);

        let teamId = ctx.params.id.substr(1);

        teamsService.loadTeamDetails(teamId)
            .then(function (teamInfo) {
                ctx.teamId = teamId;
                ctx.name = teamInfo.name;
                ctx.comment = teamInfo.comment;
                ctx.isOnTeam = teamInfo._id === sessionStorage.getItem('teamId');
                ctx.isAuthor = teamInfo._acl.creator === sessionStorage.getItem('userId');

                commonPartials['teamControls'] = './templates/catalog/teamControls.hbs';
                ctx.loadPartials(commonPartials)
                    .then(function () {
                        this.partial('./templates/catalog/details.hbs');
                    })
            })
            .catch(auth.handleError);
    }

    function joinTeam(ctx) {
        let teamId = ctx.params.id.substr(1);

        teamsService.joinTeam(teamId)
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo(`Joined team`);
                getCatalog(ctx);
            })
            .catch(auth.handleError);
    }
    function leaveTeam(ctx) {
        teamsService.leaveTeam()
            .then(function (userInfo) {
                auth.saveSession(userInfo);
                auth.showInfo('Team left');
                getCatalog(ctx);
            })
            .catch(auth.handleError);
    }

    function getTeamEdit(ctx) {
        checkStatus(ctx);
        let id = ctx.params.id.substr(1);
        teamsService.loadTeamDetails(id)
            .then(function (teamInfo) {
                ctx.teamId = id;
                ctx.name = teamInfo.name;
                ctx.comment = teamInfo.comment;

                commonPartials['editForm'] = './templates/edit/editForm.hbs';
                ctx.loadPartials(commonPartials)
                    .then(function () {
                        this.partial('./templates/edit/editPage.hbs')
                    })
            })
            .catch(auth.handleError)
    }
    function postTeamEdit(ctx) {
        let teamName = ctx.params.name;
        let teamComment = ctx.params.comment;
        let teamId = ctx.params.id.substr(1);

        teamsService.edit(teamId, teamName, teamComment)
            .then(function () {
                auth.showInfo(`Edited team "${teamName}"`);
                getCatalog(ctx);
            })
            .catch(auth.handleError);
    }

    return {
        displayHome,
        displayAbout,
        getLogin,
        postLogin,
        logout,
        getRegister,
        postRegister,
        getCatalog,
        getCreateTeam,
        postCreateTeam,
        getTeamDetails,
        joinTeam,
        leaveTeam,
        getTeamEdit,
        postTeamEdit
    }
})();