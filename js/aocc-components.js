/* :::::::::::::::::::::::::::::::::::::::::::::::::: */
/* C O M P O N E N T S */
/* :::::::::::::::::::::::::::::::::::::::::::::::::: */

/* AOCC_Component */
class AOCC_Component {
    
    constructor(id, app) {
        this.id = id;
        this.app = app;
        this.view = null;
        this.parent = null;
        this.state = {};
    }

    /* Init */
    willInit() {
        let log = {sender: this.id, message: `Init`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    doInit() {
        this.app.components[this.id] = this;
    }
    didInit() {
        let log = {sender: this.id, message: `Initiated`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    init() {
        this.willInit();
        this.doInit();
        this.didInit();
    }

    /* Render */
    willRender() {
        let log = {sender: this.id, message: `Render`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    doRender() {}
    didRender() {
        let log = {sender: this.id, message: `Rendered`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    render() {
        this.willRender();
        this.doRender();
        this.didRender();
    }

    /* Derender */
    willDerender() {
        let log = {sender: this.id, message: `Derender`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    doDerender() {
        this.view = null;
    }
    didDerender() {
        let log = {sender: this.id, message: `Derendered`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    derender() {
        this.willDerender();
        this.doDerender();
        this.didDerender();
    }

    /* Attach */
    willAttach() {
        let log = {sender: this.id, message: `Attach`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    doAttach() {
        this.parent.view.element.append(this.view.element);
    }
    didAttach() {
        let log = {sender: this.id, message: `Attached`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    attach() {
        this.willAttach();
        this.doAttach();
        this.didAttach();
    }

    /* Detach */
    willDetach() {
        let log = {sender: this.id, message: `Detach`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    doDetach() {
        this.view.element.remove();
    }
    didDetach() {
        let log = {sender: this.id, message: `Detached`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    detach() {
        this.willDetach();
        this.doDetach();
        this.didDetach();
    }

    /* Destroy */
    willDestroy() {
        let log = {sender: this.id, message: `Destroy`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    doDestroy() {
        delete this.app.components[this.id];
    }
    didDestroy() {
        let log = {sender: this.id, message: `Destroyed`};
        this.app.mediator.publish(AOCC_Channels.AOCC_LOG, log);
    }
    destroy() {
        this.willDestroy();
        this.doDestroy();
        this.didDestroy();
    }

};

/* ::::: HTML ::::: */

/* AOCC_HtmlHeadComponent */
class AOCC_HtmlHeadComponent extends AOCC_Component {
    doRender() {
        let element = $("head");
        this.view = new AOCC_JQueryView(this, element);
    }
    willAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    doAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    didAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    attach() {
        throw new AOCC_UnsupportedOperationError();
    }
    willDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    doDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    didDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    detach() {
        throw new AOCC_UnsupportedOperationError();
    }
};

/* AOCC_HtmlBodyComponent */
class AOCC_HtmlBodyComponent extends AOCC_Component {
    doRender() {
        let element = $("body");
        this.view = new AOCC_JQueryView(this, element);
    }
    willAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    doAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    didAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    attach() {
        throw new AOCC_UnsupportedOperationError();
    }
    willDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    doDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    didDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    detach() {
        throw new AOCC_UnsupportedOperationError();
    }
};

/* AOCC_HtmlLinkListComponent */
class AOCC_HtmlLinkListComponent extends AOCC_Component {
    doRender() {
        let element = $(".links-list");
        this.view = new AOCC_JQueryView(this, element);
    }
    willAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    doAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    didAttach() {
        throw new AOCC_UnsupportedOperationError();
    }
    attach() {
        throw new AOCC_UnsupportedOperationError();
    }
    willDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    doDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    didDetach() {
        throw new AOCC_UnsupportedOperationError();
    }
    detach() {
        throw new AOCC_UnsupportedOperationError();
    }
};

/* ::::: AOCC JQuery ::::: */

/* AOCC_JQueryUICssComponent */
class AOCC_JQueryUICssComponent extends AOCC_Component {
    doRender() {
        let element = $(`<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">`);
        this.view = new AOCC_JQueryView(this, element);
    }
};

/* ::::: AOCC AppLauncher ::::: */

/* AOCC_AppLauncherComponent */
class AOCC_AppLauncherComponent extends AOCC_Component {

    doRender() {
        let idAppLauncherLink = `${this.id}_Link`;
        let element = $(`
            <span id="${this.id}" class="optional-wrapper">
                <li>
                    <a id="${idAppLauncherLink}">${this.state.user.targetUserFirstName}'s Org Chart Crawler</a>
                </li>
            </span>
        `);
        this.view = new AOCC_JQueryView(this, element);
        $(`a#${idAppLauncherLink}`, this.view.element).click(
            this._handleAppLauncherLinkClicked.bind(this)
        );
    }

    _handleAppLauncherLinkClicked () {
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_LAUNCH);
    }

};

/* ::::: AOCC App Component ::::: */

/* AOCC_AppComponent */
class AOCC_AppComponent extends AOCC_Component {
    doAttach() {
        // Create JQuery View
        let element = $(`<div id="${this.id}" title="${this.state.appTitle}"></div>`);
        this.view = new AOCC_JQueryView(this, element);
        // Attach to parent component
        this.parent.view.element.append(this.view.element);
    }
    doDetach() {
        this.view.element.remove();
        this.view = null;
    }
    doRender() {
        // Close button setup
        this.state.dialog["close"] = this._handleDialogCloseButtonClick.bind(this);
        this.view.element.dialog(this.state.dialog);
        this.view.element.dialog("open");
    }
    doDerender() {
        this.view.element.dialog("destroy");
    }
    _handleDialogCloseButtonClick() {
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_TERMINATE);
    }
};

/* ::::: AOCC CrawlerSettings User Components ::::: */

/* AOCC_CrawlerSettingsUserComponent */
class AOCC_CrawlerSettingsUserComponent extends AOCC_Component {
    constructor(id, app) {
        super(id, app);
        this.state = {
            settings: {
                mghd: false
            }
        };
    }
    doRender() {
        let element = $(`
            <div id="${this.id}">
                <p>If you want to crawl additional settings, select from below:</p>
                <table>
                    <tr>
                        <td>
                            <label for="mghd">MGHD</label>
                            <input type="checkbox" name="mghd" id="mghd" group="${this.id}">
                        </td>
                    </tr>
                </table>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                <p style="font-size: small; color: red;">
                    <b>NOTE:</b> <i>Crawling process may take longer, depending on your settings.</i>
                </p>
            </div>
        `);
        this.view = new AOCC_JQueryView(this, element);
        element.find(`input[group="${this.id}"]`).checkboxradio({icon: false});
        element.find(`input[group="${this.id}"]`).change(this._handleChecboxesEvent.bind(this));
    }
    didRender() {
        let buttons = [
            {
                text: "Run",
                click: this._handleRunButtonClicked.bind(this)
            }
        ];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didRender();
    }
    didDerender() {
        let buttons = [];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didDerender();
    }
    _handleChecboxesEvent(event) {
        this.state.settings[event.target.id] = event.target.checked;
    }
    _handleRunButtonClicked() {
        this.app.mediator.publish(AOCC_Channels.AOCC_ACTION_RUN_CRAWLER, {settings:this.state.settings});
    }
};

/* ::::: AOCC CrawlerExecution User Components ::::: */

/* AOCC_CrawlerExecutionStartUserComponent */
class AOCC_CrawlerExecutionStartUserComponent extends AOCC_Component {
    doRender() {
        let element = $(`
            <div id="${this.id}">
                <p>Starting crawler, please wait ...</p>
            </div>
        `);
        this.view = new AOCC_JQueryView(this, element);
    }
    didRender() {
        let buttons = [];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didRender();
    }
    didDerender() {
        let buttons = [];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didDerender();
    }
};

/* AOCC_CrawlerExecutionRunningUserComponent */
class AOCC_CrawlerExecutionRunningUserComponent extends AOCC_Component {
    doRender() {
        let element = $(`
            <div id="${this.id}">
                <p>Running crawler, please wait ...</p>
            </div>
        `);
        this.view = new AOCC_JQueryView(this, element);
    }
    didRender() {
        let buttons = [
            {
                text: "Stop",
                click: this._handleStopButtonClick.bind(this)
            }
        ];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didRender();
    }
    didDerender() {
        let buttons = [];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didDerender();
    }
    _handleStopButtonClick() {
        this.app.mediator.publish(AOCC_Channels.AOCC_ACTION_STOP_CRAWLER);
    }
};

/* AOCC_CrawlerExecutionFetchingUserComponent */
class AOCC_CrawlerExecutionFetchingUserComponent extends AOCC_Component {
    doRender() {
        let element = $(`
            <div id="${this.id}">
                <p>Running crawler, fetching data ...</p>
                <p id="Status"></p>
            </div>
        `);
        if (this.state.user) {
            element.find("p#Status").append(`
                User <span style="color:#FF6633"><b>${this.state.user.login}</b></span> fetched.
            `);
        }
        this.view = new AOCC_JQueryView(this, element);
    }
    didRender() {
        let buttons = [
            {
                text: "Stop",
                click: this._handleStopButtonClick.bind(this)
            }
        ];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didRender();
    }
    didDerender() {
        let buttons = [];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didDerender();
    }
    _handleStopButtonClick() {
        this.app.mediator.publish(AOCC_Channels.AOCC_ACTION_STOP_CRAWLER);
    }
};

/* AOCC_CrawlerExecutionStoppedUserComponent */
class AOCC_CrawlerExecutionStoppedUserComponent extends AOCC_Component {
    doRender() {
        let element = $(`
            <div id="${this.id}">
                <p>Crawler stopped.</p>
            </div>
        `);
        this.view = new AOCC_JQueryView(this, element);
    }
    didRender() {
        let buttons = [];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didRender();
    }
};

/* AOCC_CrawlerExecutionFinishedUserComponent */
class AOCC_CrawlerExecutionFinishedUserComponent extends AOCC_Component {
    doRender() {
        let element = $(`
        <div id="${this.id}">
            <p>Crawler finished.</p>
            <p>Click the <b>download</b> button.</p>
        </div>
        `);
        this.view = new AOCC_JQueryView(this, element);
    }
    didRender() {
        let buttons = [
            {
                text: "Download",
                click: this._handleDownloadButtonClick.bind(this)
            }
        ];
        this.app.mediator.publish(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, {buttons});
        super.didRender();
    }
    _handleDownloadButtonClick() {
        let orgDataBlob = Papa.unparse(this.state.orgData);
        let orgDataCsvBlob = new Blob([orgDataBlob], {type: "text/csv"});
        let csvUrl = window.URL.createObjectURL(orgDataCsvBlob);
        window.location.href = csvUrl;
        return false;
    }
};
