export function setupGame() {
    return { "type": "SETUP_GAME" };
}

export function setRecord(wins, losses) {
    return {
        "type": "SET_RECORD",
        wins,
        losses
    };
}