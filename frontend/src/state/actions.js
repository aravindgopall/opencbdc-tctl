
export const TestController = {
    InitialStateLoaded: 'TEST_CONTROLLER::INITIAL_STATE_LOADED',
    WebsocketTokenReceived: 'TEST_CONTROLLER::WEBSOCKET_TOKEN_RECEIVED',
    WebsocketStateChanged: 'TEST_CONTROLLER::WEBSOCKET_STATE_CHANGED',
    MaintenanceModeChanged: 'TEST_CONTROLLER::MAINTENANCE_MODE_CHANGED',
    ConfigChanged: 'TEST_CONTROLLER::CONFIG_CHANGED',
    UsersUpdated: 'TEST_CONTROLLER::USERS_UPDATED',
    TestRunAdded: 'TEST_CONTROLLER::TESTRUN_ADDED',
    TestRunChanged: 'TEST_CONTROLLER::TESTRUN_CHANGED',
    TestRunLogAppended: 'TEST_CONTROLLER::TESTRUN_LOGAPPENDED',
    TestRunSweepChanged: 'TEST_CONTROLLER::SWEEP_CHANGED',
    AgentAdded: 'TEST_CONTROLLER::AGENT_ADDED',
    AgentCountUpdated: 'TEST_CONTROLLER::AGENT_COUNT_UPDATED',
    AgentsChanged: 'TEST_CONTROLLER::AGENTS_CHANGED',
    AgentRemoved: 'TEST_CONTROLLER::AGENT_REMOVED',
    OnlineUsersChanged: 'TEST_CONTROLLER::ONLINE_USERS_CHANGED',
    TestRunExecutedCommandAdded: 'TEST_CONTROLLER::TESTRUN_EXECUTED_COMMAND_ADDED',
    CommandLogDownloaded: 'TEST_CONTROLLER::COMMAND_LOG_DOWNLOADED',
    AgentRunningCommandAdded: 'TEST_CONTROLLER::AGENT_RUNNING_COMMAND_ADDED',
    AgentRunningCommandCompleted: 'TEST_CONTROLLER::AGENT_RUNNING_COMMAND_COMPLETED',
    TestRunMatrixUpdated: 'TEST_CONTROLLER::TESTRUN_MATRIX_UPDATED',
    TestRunSweepMatrixUpdated: 'TEST_CONTROLLER::TESTRUN_SWEEP_MATRIX_UPDATED',
    SweepPlotGenerated: 'TEST_CONTROLLER::TESTRUN_SWEEP_PLOT_GENERATED',
    SweepPlotsLoaded: 'TEST_CONTROLLER::TESTRUN_SWEEP_PLOTS_LOADED',
    SystemStateChanged: 'TEST_CONTROLLER::SYSTEM_STATE_CHANGE',
    Toast: {
        Success: 'TEST_CONTROLLER::TOAST::SUCCESS',
        Error: 'TEST_CONTROLLER::TOAST::ERROR',
        Warning: 'TEST_CONTROLLER::TOAST::WARN',
        Info: 'TEST_CONTROLLER::TOAST::INFO',
    },
    ScheduleTestRun: {
        ApplySweepRoleConfig: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::APPLY_SWEEP_ROLE_CONFIG',
        ChangeProperty: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::CHANGE_PROPERTY',
        AddNewRole: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::ADD_NEW_ROLE',
        DeleteRole: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::DELETE_ROLE',
        AddNewSweepRole: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::ADD_NEW_SWEEP_ROLE',
        DeleteSweepRole: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::DELETE_SWEEP_ROLE',
        SetRoleFail: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::SET_ROLE_FAIL',
        AssignRoleAgent: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::ASSIGN_ROLE_AGENT',
        AssignSweepRoleAgent: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::ASSIGN_SWEEP_ROLE_AGENT',
        ApplyRoleComposition: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::APPLY_COMPOSITION',
        Reschedule: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::RESCHEDULE',
        ApplyRoleConfig: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::APPLY_ROLE_CONFIG',
        ApplyRoleFailure: 'TEST_CONTROLLER::SCHEDULE_TESTRUN::APPLY_ROLE_FAILURE',
    },
}

export const ReduxWebSocket = {
    Open: 'REDUX_WEBSOCKET::OPEN',
    Closed: 'REDUX_WEBSOCKET::CLOSED',
    Error: 'REDUX_WEBSOCKET::ERROR',
    Message: 'REDUX_WEBSOCKET::MESSAGE',
    Connect: 'REDUX_WEBSOCKET::CONNECT',
}