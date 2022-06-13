/* :::::::::::::::::::::::::::::::::::::::::::::::::: */
/* G L O B A L S */
/* :::::::::::::::::::::::::::::::::::::::::::::::::: */

const AOCC_Constants = {
    AOCC_CRAWLER_STATE_READY: "READY",
    AOCC_CRAWLER_STATE_STARTED: "STARTED",
    AOCC_CRAWLER_STATE_RUNNING: "RUNNING",
    AOCC_CRAWLER_STATE_STOPPED: "STOPPED",
    AOCC_CRAWLER_STATE_FINISHED: "FINISHED"
};

const AOCC_Channels = {
    /* AOCC */
    AOCC_LOG: "aocc::log",
    AOCC_LAUNCH: "aocc::launch",
    AOCC_TERMINATE: "aocc::terminate",
    /* AOCC App */
    AOCC_APP_LAUNCH: "aocc::app::launch",
    AOCC_APP_TERMINATE: "aocc::app::terminate",
    /* AOCC App Component */
    AOCC_APP_COMPONENT_BUTTONS_RENDER: "aocc::appComponent::buttons::render",
    /* AOCC Actions */
    AOCC_ACTION_RUN_CRAWLER: "aocc::actions::runCrawler",
    AOCC_ACTION_STOP_CRAWLER: "aocc::actions::stopCrawler"
};
