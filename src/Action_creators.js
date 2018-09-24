export function setupGame(seed = new Date().getTime()) {
    return { "type": "SETUP_GAME", seed };
};

export function setRecord(wins, losses) {
    return {
        "type": "SET_RECORD",
        wins,
        losses
    };
}