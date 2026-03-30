import type { CameraHelpers, CameraHelpersCoords } from "./types";

export const defaultCoords: CameraHelpersCoords = { x: 0, y: 0 };

export const initialState: CameraHelpers = {
    move: {
        enabled: false,
        from: defaultCoords,
    },
    rotate: {
        enabled: false,
        from: defaultCoords
    }
};