/* :::::::::::::::::::::::::::::::::::::::::::::::::: */
/* C O R E */
/* :::::::::::::::::::::::::::::::::::::::::::::::::: */

/* AOCC_App */
class AOCC_App {

    constructor(){
        this.mediator = new Mediator();
        this.state = {};
    }

    launch() {}
    terminate() {}

};

/* ::::: AOCC ::::: */

/* AOCC_MainApp */
class AOCC_MainApp extends AOCC_App {
    constructor() {
        super();
        this.title = "Amazon Org Chart Crawler",
        this.user = null;
        this.components = {};
        this._initSubscriptions();
    }
    launch() {
        this.mediator.publish(AOCC_Channels.AOCC_LAUNCH);
    }
    terminate() {
        this.mediator.publish(AOCC_Channels.AOCC_TERMINATE);
    }
    _initSubscriptions() {
        /* AOCC */
        this.mediator.subscribe(AOCC_Channels.AOCC_LOG, this._handleAoccLog.bind(this));
        this.mediator.subscribe(AOCC_Channels.AOCC_LAUNCH, this._handleAoccLaunch.bind(this));
        this.mediator.subscribe(AOCC_Channels.AOCC_TERMINATE, this._handleAoccTerminate.bind(this));
        /* AOCC App */
        this.mediator.subscribe(AOCC_Channels.AOCC_APP_LAUNCH, this._handleAoccAppLaunch.bind(this));
        this.mediator.subscribe(AOCC_Channels.AOCC_APP_TERMINATE, this._handleAoccAppTerminate.bind(this));
        /* AOCC App Component */
        this.mediator.subscribe(AOCC_Channels.AOCC_APP_COMPONENT_BUTTONS_RENDER, this._handleAoccAppComponentButtonsRender.bind(this));
        /* AOCC Actions */
        this.mediator.subscribe(AOCC_Channels.AOCC_ACTION_RUN_CRAWLER, this._handleAoccActionRunCrawler.bind(this));
        this.mediator.subscribe(AOCC_Channels.AOCC_ACTION_STOP_CRAWLER, this._handleAoccActionStopCrawler.bind(this));
    }
    /* AOCC */
    _handleAoccLog(data, channel) {
        console.debug(`[${data.sender}] ${data.message}`);
    }
    _handleAoccLaunch(data, channel) {
        let command = new AOCC_LaunchCommand(this);
        command.execute();
    }
    _handleAoccTerminate(data, channel) {
        let command = new AOCC_TerminateCommand(this);
        command.execute();
    }
    /* AOCC App */
    _handleAoccAppLaunch(data, channel) {
        let command = new AOCC_AppLaunchCommand(this);
        command.execute();
    }
    _handleAoccAppTerminate(data, channel) {
        let command = new AOCC_AppTerminateCommand(this);
        command.execute();
    }
    /* AOCC App Component */
    _handleAoccAppComponentButtonsRender(data, channel) {
        let command = new AOCC_AppComponentButtonsRenderCommand(this);
        let params = {
            buttons: data.buttons
        };
        command.execute(params);
    }
    /* AOCC Actions */
    _handleAoccActionRunCrawler(data, channel) {
        let command = new AOCC_ActionRunCrawlerCommand(this);
        let params = {
            crawler: {
                settings: data.settings
            }
        }
        command.execute(params);
    }
    _handleAoccActionStopCrawler(data, channel) {
        let command = new AOCC_ActionStopCrawlerCommand(this);
        command.execute();
    }
};
