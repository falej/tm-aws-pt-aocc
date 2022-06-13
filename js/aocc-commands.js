/* :::::::::::::::::::::::::::::::::::::::::::::::::: */
/* C O M M A N D S */
/* :::::::::::::::::::::::::::::::::::::::::::::::::: */

/* AOCC_Command */
class AOCC_Command {

    constructor(app) {
        this.app = app;
    }

    willExecute(params={}) {
        let log = {sender: this.constructor.name, message: `Execute`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    doExecute(params={}) {}
    didExecute(params={}) {
        let log = {sender: this.constructor.name, message: `Executed`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }

    execute(params={}) {
        this.willExecute(params);
        this.doExecute(params);
        this.didExecute(params);
    }

};

/* ::::: AOCC ::::: */

/* AOCC_LaunchCommand */
class AOCC_LaunchCommand extends AOCC_Command {
    doExecute(params={}) {
        let command = null;
        /* HTML Head Component */
        command = new AOCC_LaunchHtmlHeadComponentCommand(this.app);
        command.execute();
        /* HTML Body Component */
        command = new AOCC_LaunchHtmlBodyComponentCommand(this.app);
        command.execute();
        /* HTML Link List Component */
        command = new AOCC_LaunchHtmlLinkListComponentCommand(this.app);
        command.execute();
        /* JQuery UI CSS Component */
        command = new AOCC_LaunchJQueryUICssComponentCommand(this.app);
        command.execute();
        /* AOCC UserDetails */
        command = new AOCC_LoadUserDetailsCommand(this.app);
        command.execute();
        /* AOCC AppLauncher Component */
        command = new AOCC_LaunchAppLauncherComponentCommand(this.app);
        command.execute();
    }
};

/* AOCC_TerminateCommand */
class AOCC_TerminateCommand extends AOCC_Command {
    doExecute(params={}) {
        let command = null;
        /* AOCC AppLauncher Component */
        command = new AOCC_TerminateAppLauncherComponentCommand(this.app);
        command.execute();
        /* AOCC UserDetails */
        command = new AOCC_UnloadUserDetailsCommand(this.app);
        command.execute();
        /* JQuery UI CSS Component */
        command = new AOCC_TerminateJQueryUICssComponentCommand(this.app);
        command.execute();
        /* HTML Link List Component */
        command = new AOCC_TerminateHtmlLinkListComponentCommand(this.app);
        command.execute();
        /* HTML Body Component */
        command = new AOCC_TerminateHtmlBodyComponentCommand(this.app);
        command.execute();
        /* HTML Head Component */
        command = new AOCC_TerminateHtmlHeadComponentCommand(this.app);
        command.execute();
    }
};

/* ::::: AOCC HTML ::::: */

/* AOCC_LaunchHtmlHeadComponentCommand */
class AOCC_LaunchHtmlHeadComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component already exists
        let componentId = AOCC_HtmlHeadComponent.prototype.constructor.name;
        if (componentId in this.app.components)
            throw new AOCC_ComponentFoundError(componentId);
        // Create component
        let component = new AOCC_HtmlHeadComponent(componentId, this.app);
        // Launch component
        component.init();
        component.render();
    }
};

/* AOCC_TerminateHtmlHeadComponentCommand */
class AOCC_TerminateHtmlHeadComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component not exists
        let componentId = AOCC_HtmlHeadComponent.prototype.constructor.name;
        if (!(componentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(componentId);
        // Get component
        let component = this.app.components[componentId];
        // Terminate component
        component.derender();
        component.destroy();
    }
};

/* AOCC_LaunchHtmlBodyComponentCommand */
class AOCC_LaunchHtmlBodyComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component already exists
        let componentId = AOCC_HtmlBodyComponent.prototype.constructor.name;
        if (componentId in this.app.components)
            throw new AOCC_ComponentFoundError(componentId);
        // Create component
        let component = new AOCC_HtmlBodyComponent(componentId, this.app);
        // Launch component
        component.init();
        component.render();
    }
};

/* AOCC_TerminateHtmlBodyComponentCommand */
class AOCC_TerminateHtmlBodyComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component not exists
        let componentId = AOCC_HtmlBodyComponent.prototype.constructor.name;
        if (!(componentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(componentId);
        // Get component
        let component = this.app.components[componentId];
        // Terminate component
        component.derender();
        component.destroy();
    }
};

/* AOCC_LaunchHtmlLinkListComponentCommand */
class AOCC_LaunchHtmlLinkListComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component already exists
        let componentId = AOCC_HtmlLinkListComponent.prototype.constructor.name;
        if (componentId in this.app.components)
            throw new AOCC_ComponentFoundError(componentId);
        // Create Component
        let component = new AOCC_HtmlLinkListComponent(componentId, this.app);
        // Launch Component
        component.init();
        component.render();
    }
};

/* AOCC_TerminateHtmlLinkListComponentCommand */
class AOCC_TerminateHtmlLinkListComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component not exists
        let componentId = AOCC_HtmlLinkListComponent.prototype.constructor.name;
        if (!(componentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(componentId);
        // Get component
        let component = this.app.components[componentId];
        // Terminate component
        component.derender();
        component.destroy();
    }
};

/* ::::: AOCC JQuery ::::: */

/* AOCC_LaunchJQueryUICssComponentCommand */
class AOCC_LaunchJQueryUICssComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component already exists
        let componentId = AOCC_JQueryUICssComponent.prototype.constructor.name;
        if (componentId in this.app.components)
            throw new AOCC_ComponentFoundError(componentId);
        // Get parent component
        let htmlHeadComponentId = AOCC_HtmlHeadComponent.prototype.constructor.name;
        if (!(htmlHeadComponentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(htmlHeadComponentId);
        let htmlHeadComponent = this.app.components[htmlHeadComponentId];
        // Create component
        let component = new AOCC_JQueryUICssComponent(componentId, this.app);
        component.parent = htmlHeadComponent;
        // Launch component
        component.init();
        component.render();
        component.attach();
    }
};

/* AOCC_TerminateJQueryUICssComponentCommand */
class AOCC_TerminateJQueryUICssComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component not exists
        let componentId = AOCC_JQueryUICssComponent.prototype.constructor.name;
        if (!(componentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(componentId);
        // Get component
        let component = this.app.components[componentId];
        // Terminate component
        component.detach();
        component.derender();
        component.destroy();
    }
};

/* ::::: AOCC UserDetails ::::: */

/* AOCC_LoadUserDetailsCommand */
class AOCC_LoadUserDetailsCommand extends AOCC_Command {
    doExecute(params={}) {
        try {
            let userDetails = JSON.parse(document.querySelector("div[data-react-class=UserDetails]").dataset.reactProps);
            this.app["user"] = userDetails.targetUser;
        } catch {
            throw new AOCC_InternalError("Failed to load user.");
        }
    }
};

/* AOCC_UnloadUserDetailsCommand */
class AOCC_UnloadUserDetailsCommand extends AOCC_Command {
    doExecute(params={}) {
        delete this.app["user"];
    }
};

/* ::::: AOCC AppLauncher ::::: */

/* AOCC_LaunchAppLauncherComponentCommand */
class AOCC_LaunchAppLauncherComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component already exists
        let componentId = AOCC_AppLauncherComponent.prototype.constructor.name;
        if (componentId in this.app.components)
            throw new AOCC_ComponentFoundError(componentId);
        // Get parent component
        let htmlLinkListComponentId = AOCC_HtmlLinkListComponent.prototype.constructor.name;
        if (!(htmlLinkListComponentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(htmlHeadComponentId);
        let htmlLinkListComponent = this.app.components[htmlLinkListComponentId];
        // Create component
        let component = new AOCC_AppLauncherComponent(componentId, this.app);
        component.parent = htmlLinkListComponent;
        component.state["user"] = this.app["user"];
        // Launch component
        component.init();
        component.render();
        component.attach();
    }
};

/* AOCC_TerminateAppLauncherComponentCommand */
class AOCC_TerminateAppLauncherComponentCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component not exists
        let componentId = AOCC_AppLauncherComponent.prototype.constructor.name;
        if (!(componentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(componentId);
        // Get component
        let component = this.app.components[componentId];
        // Terminate Component
        component.detach();
        component.derender();
        component.destroy();
    }
};

/* ::::: AOCC App ::::: */

/* AOCC_AppLaunchCommand */
class AOCC_AppLaunchCommand extends AOCC_Command {
    doExecute(params={}) {
        let command = null;
        /* Init State */
        command = new AOCC_AppStateInitCommand(this.app);
        command.execute();
        /* Launch App Component */
        command = new AOCC_AppComponentLaunchCommand(this.app);
        command.execute();
        /* Launch Initial User Component */
        command = new AOCC_InitialUserComponentLaunchCommand(this.app);
        command.execute();
    }
};

/* AOCC_AppTerminateCommand */
class AOCC_AppTerminateCommand extends AOCC_Command {
    doExecute(params={}) {
        let command = null;
        /* Terminate Current User Component */
        command = new AOCC_CurrentUserComponentTerminateCommand(this.app);
        command.execute();
        /* Terminate App Component */
        command = new AOCC_AppComponentTerminateCommand(this.app);
        command.execute();
        /* Destroy State */
        command = new AOCC_AppStateDestroyCommand(this.app);
        command.execute();
    }
};

/* ::::: AOCC App State ::::: */

/* AOCC_AppStateInitCommand */
class AOCC_AppStateInitCommand extends AOCC_Command {
    doExecute(params={}) {
        this.app.state = {
            initialUserComponentId: AOCC_CrawlerSettingsUserComponent.prototype.constructor.name,
            currentUserComponentId: null,
            dialog: {
                autoOpen: false,
                modal: true,
                width: 500,
                height: 250,
                resizable: false,
                draggable: false
            },
            crawler: {
                state: AOCC_Constants.AOCC_CRAWLER_STATE_READY
            }
        };
    }
};

/* AOCC_AppStateDestroyCommand */
class AOCC_AppStateDestroyCommand extends AOCC_Command {
    doExecute(params={}) {
        this.app.state = {};
    }
};

/* ::::: AOCC App Component ::::: */

/* AOCC_AppComponentLaunchCommand */
class AOCC_AppComponentLaunchCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component already exists
        let componentId = AOCC_AppComponent.prototype.constructor.name;
        if (componentId in this.app.components)
            throw new AOCC_ComponentFoundError(componentId);
        // Get parent component
        let htmlBodyComponentId = AOCC_HtmlBodyComponent.prototype.constructor.name;
        if (!(htmlBodyComponentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(htmlBodyComponentId);
        let htmlBodyComponent = this.app.components[htmlBodyComponentId];
        // Create component
        let component = new AOCC_AppComponent(componentId, this.app);
        component.parent = htmlBodyComponent;
        component.state = {
            appTitle: this.app.title,
            dialog: this.app.state.dialog
        };
        // Launch component
        component.init();
        component.attach();
        component.render();
    }
};

/* AOCC_AppComponentTerminateCommand */
class AOCC_AppComponentTerminateCommand extends AOCC_Command {
    doExecute(params={}) {
        // Check if component not exists
        let componentId = AOCC_AppComponent.prototype.constructor.name;
        if (!(componentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(componentId);
        // Get component
        let component = this.app.components[componentId];
        // Terminate component
        component.derender();
        component.detach();
        component.destroy();
    }
};

/* AOCC_AppComponentButtonsRenderCommand */
class AOCC_AppComponentButtonsRenderCommand extends AOCC_Command {
    doExecute(params={}) {
        let componentId = AOCC_AppComponent.prototype.constructor.name;
        // Check if component not exists
        if (!(componentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(componentId);
        // Get component
        let component = this.app.components[componentId];
        // Update dialog settings
        component.state.dialog["buttons"] = params.buttons;
        // Render component
        component.render();
    }
};

/* ::::: AOCC User Component ::::: */

/* AOCC_UserComponentLaunchCommand */
class AOCC_UserComponentLaunchCommand extends AOCC_Command {
    doExecute(params={}) {
        let componentId = params.componentId;
        let parentComponentId = params.parentComponentId;
        // Check if component already exists
        if (componentId in this.app.components)
            throw new AOCC_ComponentFoundError(componentId);
        // Check if parent component not exists
        if (!(parentComponentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(parentComponentId);
        // Get component
        let component = null;
        switch(componentId) {
            case AOCC_CrawlerSettingsUserComponent.prototype.constructor.name:
                component = new AOCC_CrawlerSettingsUserComponent(componentId, this.app);
                break;
            case AOCC_CrawlerExecutionStartUserComponent.prototype.constructor.name:
                component = new AOCC_CrawlerExecutionStartUserComponent(componentId, this.app);
                break;
            case AOCC_CrawlerExecutionRunningUserComponent.prototype.constructor.name:
                component = new AOCC_CrawlerExecutionRunningUserComponent(componentId, this.app);
                break;
            case AOCC_CrawlerExecutionFetchingUserComponent.prototype.constructor.name:
                component = new AOCC_CrawlerExecutionFetchingUserComponent(componentId, this.app);
                component.state = params;
                break;
            case AOCC_CrawlerExecutionStoppedUserComponent.prototype.constructor.name:
                component = new AOCC_CrawlerExecutionStoppedUserComponent(componentId, this.app);
                break;
            case AOCC_CrawlerExecutionFinishedUserComponent.prototype.constructor.name:
                component = new AOCC_CrawlerExecutionFinishedUserComponent(componentId, this.app);
                component.state["orgData"] = params.orgData;
                break;
            default:
                throw new AOCC_ComponentNotFoundError(componentId);
        }
        // Get parent component
        let parentComponent = this.app.components[parentComponentId];
        // Set parent component
        component.parent = parentComponent;
        // Launch component
        component.init();
        component.render();
        component.attach();
        // Update current user component id
        this.app.state.currentUserComponentId = componentId;
    }
};

/* AOCC_UserComponentTerminateCommand */
class AOCC_UserComponentTerminateCommand extends AOCC_Command {
    doExecute(params={}) {
        let componentId = params.componentId;
        // Check if component not exists
        if (!(componentId in this.app.components))
            throw new AOCC_ComponentNotFoundError(componentId);
        // Get component
        let component = this.app.components[componentId];
        // Terminate component
        component.detach();
        component.derender();
        component.destroy();
        // Update current user component id to null
        this.app.state.currentUserComponentId = null;
    }
};

/* AOCC_InitialUserComponentLaunchCommand */
class AOCC_InitialUserComponentLaunchCommand extends AOCC_Command {
    doExecute(params={}) {
        // Get initial component id
        let componentId = this.app.state.initialUserComponentId;
        let parentComponentId = AOCC_AppComponent.prototype.constructor.name;
        // Launch user component
        let command = new AOCC_UserComponentLaunchCommand(this.app);
        command.execute({componentId,parentComponentId});
    }
};

/* AOCC_CurrentUserComponentTerminateCommand */
class AOCC_CurrentUserComponentTerminateCommand extends AOCC_Command {
    doExecute(params={}) {
        // Get current component id
        let componentId = this.app.state.currentUserComponentId;
        // Check if there is a current component
        if (componentId != null) {
            let command = new AOCC_UserComponentTerminateCommand(this.app);
            command.execute({componentId});
        }
    }
};

/* ::::: AOCC Actions ::::: */

/* AOCC_ActionRunCrawlerCommand */
class AOCC_ActionRunCrawlerCommand extends AOCC_Command {
    doExecute(params={}) {
        // Start crawler
        this._startCrawler(params);
        // Run crawler
        let runCrawler = this._runCrawler.bind(this);
        setTimeout(function() {
            runCrawler(params);
        },1500);
        // Fetch org data
        let fetchOrgData = this._fetchOrgData.bind(this);
        setTimeout(function() {
            fetchOrgData(params);
        },3000);
    }
    _startCrawler(params={}) {
        // Terminate current user component
        let command = new AOCC_CurrentUserComponentTerminateCommand(this.app);
        command.execute();
        // Get user component id
        let componentId = AOCC_CrawlerExecutionStartUserComponent.prototype.constructor.name;
        // Get parent component id
        let parentComponentId = AOCC_AppComponent.prototype.constructor.name;
        // Launch user component
        command = new AOCC_UserComponentLaunchCommand(this.app);
        let commandParams = {
            componentId,
            parentComponentId,
            crawler: params.crawler
        };
        command.execute(commandParams);
        // Update crawler state
        this.app.state.crawler.state = AOCC_Constants.AOCC_CRAWLER_STATE_STARTED;
    }
    _runCrawler(params={}) {
        // Terminate current user component
        let command = new AOCC_CurrentUserComponentTerminateCommand(this.app);
        command.execute();
        // Get user component id
        let componentId = AOCC_CrawlerExecutionRunningUserComponent.prototype.constructor.name;
        // Get parent component id
        let parentComponentId = AOCC_AppComponent.prototype.constructor.name;
        // Launch user component
        command = new AOCC_UserComponentLaunchCommand(this.app);
        let commandParams = {
            componentId,
            parentComponentId,
            crawler: params.crawler
        };
        command.execute(commandParams);
        // Update crawler state
        this.app.state.crawler.state = AOCC_Constants.AOCC_CRAWLER_STATE_RUNNING;
    }
    _fetchOrgData(params={}) {
        let command = new AOCC_ActionFetchOrgDataByLoginCommand(this.app);
        let commandParams = {
            user: {
                login: this.app.user.targetUserLogin
            },
            crawler: params.crawler
        };
        command.execute(commandParams);
    }
};

/* AOCC_ActionFetchOrgDataByLoginCommand */
class AOCC_ActionFetchOrgDataByLoginCommand extends AOCC_Command {
    doExecute(params={}) {
        this._resolveFetchOrgData(params);
    }
    async _resolveFetchOrgData(params) {
        try {
            let orgData = await this._fetchOrgData(params);
            let crawlerState = this.app.state.crawler.state;
            switch(crawlerState) {
                case AOCC_Constants.AOCC_CRAWLER_STATE_STOPPED:
                    this._crawlerExecutionStoppedUserComponentLaunch(params);
                    break;
                case AOCC_Constants.AOCC_CRAWLER_STATE_FINISHED:
                    params["orgData"] = orgData;
                    this._crawlerExecutionFinishedUserComponentLaunch(params);
                    break;
            }
        } catch {
            /*  
                Nothing to do. Handle exception in case the dialog window was closed and caused a removal of components,
                that doesn't allow to read the crawler state or receive orgData
            */
        }
    }
    async _fetchOrgData(params) {
        let orgData = [];
        try {
            // Check if crawler has stopped
            if (this.app.state.crawler.state == AOCC_Constants.AOCC_CRAWLER_STATE_STOPPED)
                return;
            // Fetch user
            let user = await this._fetchUser(params);
            // Handle MHGD
            await this._handleMghd(user, params);
            // Add User
            orgData.push(user);
            // Update Component
            await this._crawlerExecutionFetchingUserComponentLaunch(params);
            // Fetch user's direct reports
            if (user.direct_reports.length > 0) {
                for (let i = 0; i < user.direct_reports.length; i++) {
                    let directReportsParams = {
                        user: {
                            login: user.direct_reports[i]
                        },
                        crawler: params.crawler
                    };
                    if (this.app.state.crawler.state == AOCC_Constants.AOCC_CRAWLER_STATE_RUNNING) {
                        let directOrgData = await this._fetchOrgData(directReportsParams);
                        orgData.push(...directOrgData);
                    }
                }
            }
            if (user.login == this.app.user.targetUserLogin) {
                if (this.app.state.crawler.state != AOCC_Constants.AOCC_CRAWLER_STATE_STOPPED)
                    this.app.state.crawler.state = AOCC_Constants.AOCC_CRAWLER_STATE_FINISHED;
            }
        } catch(e) {
            throw new AOCC_InternalError(e);
        }
        return orgData;
    }
    async _fetchUser (params) {
        return new Promise(function(resolve,reject) {
            let urlString = `https://phonetool.amazon.com/users/${params.user.login}.json`;
            let httpRequest = GM.xmlHttpRequest || GM.xmlhttpRequest || GM_xmlhttpRequest;
            httpRequest({
                method: "GET",
                url: urlString,
                onload: function(httpResponse) {
                    if(httpResponse.status == 200) {
                        let userData = JSON.parse(httpResponse.responseText);
                        let userDirectReports = [];
                        for (let i = 0; i < userData.direct_reports.length; i++) {
                            userDirectReports.push(userData.direct_reports[i].login);
                        }
                        let user = {
                            id: userData.id,
                            login: userData.login,
                            name: userData.name,
                            first_name: userData.first_name,
                            last_name: userData.last_name,
                            department_number: userData.department_number,
                            department_name: userData.department_name,
                            job_title: userData.job_title,
                            is_manager: userData.is_manager,
                            bar_raiser: userData.bar_raiser,
                            building: userData.building,
                            city: userData.city,
                            country: userData.country,
                            phone_number: userData.phone_number,
                            mobile_number: userData.mobile_number,
                            office_number: userData.office_number,
                            email: userData.email,
                            steam: userData.steam,
                            business_unit: userData.business_unit,
                            job_level: userData.job_level,
                            hire_date: userData.hire_date_iso,
                            days_before_last_hire: userData.days_before_last_hire,
                            badge_type: userData.badge_type,
                            direct_reports: userDirectReports,
                            manager_login: userData.manager.login
                        };
                        resolve(user);
                    } else {
                        reject(httpResponse.responseText);
                    }
                },
                onerror: function(error) {
                    reject(error);
                }
            });
        });
    }
    async _handleMghd(user, params) {
        if(params.crawler.settings.mghd) {
            user["mghd"] = await this._fetchUserHasMghd(params);
        }
    }
    async _fetchUserHasMghd(params) {
        return new Promise(function(resolve,reject) {
            let urlString = `https://phonetool.amazon.com/users/${params.user.login}/awards.json`;
            let httpRequest = GM.xmlHttpRequest || GM.xmlhttpRequest || GM_xmlhttpRequest;
            httpRequest({
                method: "GET",
                url: urlString,
                onload: function(httpResponse) {
                    if(httpResponse.status == 200) {
                        let userAwardsData = JSON.parse(httpResponse.responseText);
                        for (let i=0; i<userAwardsData.length; i++) {
                            if (userAwardsData[i].award.name == "Making Great Hiring Decisions") {
                                resolve(true);
                            }
                        }
                        resolve(false);
                    } else {
                        reject(httpResponse.responseText);
                    }
                },
                onerror: function(error) {
                    reject(error);
                }
            });
        });
    }
    async _crawlerExecutionFetchingUserComponentLaunch(params) {
        // Terminate current user component
        let command = new AOCC_CurrentUserComponentTerminateCommand(this.app);
        command.execute();
        // Get user component id
        let componentId = AOCC_CrawlerExecutionFetchingUserComponent.prototype.constructor.name;
        // Get parent component id
        let parentComponentId = AOCC_AppComponent.prototype.constructor.name;
        // Launch user component
        command = new AOCC_UserComponentLaunchCommand(this.app);
        let commandParams = {
            componentId,
            parentComponentId,
            user: params.user,
            crawler: params.crawler
        };
        command.execute(commandParams);
    }
    async _crawlerExecutionStoppedUserComponentLaunch(params) {
        // Terminate current user component
        let command = new AOCC_CurrentUserComponentTerminateCommand(this.app);
        command.execute();
        // Get user component id
        let componentId = AOCC_CrawlerExecutionStoppedUserComponent.prototype.constructor.name;
        // Get parent component id
        let parentComponentId = AOCC_AppComponent.prototype.constructor.name;
        // Launch user component
        command = new AOCC_UserComponentLaunchCommand(this.app);
        let commandParams = {
            componentId,
            parentComponentId
        };
        command.execute(commandParams);
    }
    async _crawlerExecutionFinishedUserComponentLaunch(params) {
        // Terminate current user component
        let command = new AOCC_CurrentUserComponentTerminateCommand(this.app);
        command.execute();
        // Get user component id
        let componentId = AOCC_CrawlerExecutionFinishedUserComponent.prototype.constructor.name;
        // Get parent component id
        let parentComponentId = AOCC_AppComponent.prototype.constructor.name;
        // Launch user component
        command = new AOCC_UserComponentLaunchCommand(this.app);
        let commandParams = {
            componentId,
            parentComponentId,
            orgData: params.orgData
        };
        command.execute(commandParams);
    }
};

/* AOCC_ActionStopCrawlerCommand */
class AOCC_ActionStopCrawlerCommand extends AOCC_Command {
    doExecute(params={}) {
        this.app.state.crawler.state = AOCC_Constants.AOCC_CRAWLER_STATE_STOPPED;
    }
};
