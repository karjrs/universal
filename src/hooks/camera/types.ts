export interface CameraHelpersCoords {
    x: number;
    y: number;
}

export interface CameraHelpers {
    move: {
        from: CameraHelpersCoords;
        enabled: boolean;
    };
    rotate: {
        from: CameraHelpersCoords;
        enabled: boolean;
    }
}