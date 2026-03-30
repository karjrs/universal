import { useThree } from "@react-three/fiber";
import { useState } from "react";
import { initialState } from "./consts";
import type { CameraHelpers } from "./types";

const CAMERA_ZOOM_MULTIPLIER = 0.5;
const CAMERA_MOVE_MULTIPLIER = 0.001;

export const useCameraHelpers = () => {
    const { camera } = useThree();

    const [state, setState] = useState<CameraHelpers>(initialState)

    const handleZoom = ({ deltaY }: WheelEvent) => {
        const value = deltaY > 0 ? 1 : -1;
        camera.position.z += CAMERA_ZOOM_MULTIPLIER * value;
    }

    const handleContextMenu = (e: PointerEvent) => {
        e.preventDefault();
    }

    const handleHold = ({ button, clientX: x, clientY: y}: PointerEvent) => {
        if (!button) {
            setState(prev => ({...prev, move: { enabled: true, from: { x, y } }}))
        }
        // if (button) {
        //     setState(prev => ({...prev, rotate: { enabled: true, from: { x, y } }}))
        // }
    }

    const handleMove = ({ clientX , clientY }: PointerEvent) => {
        const { move, rotate } = state;

        if (move.enabled) {
            const x = CAMERA_MOVE_MULTIPLIER * (move.from.x - clientX);
            const y = CAMERA_MOVE_MULTIPLIER * (clientY - move.from.y);
            camera.position.x += x
            camera.position.y += y;
        }

        if (rotate.enabled) {
            const x = CAMERA_MOVE_MULTIPLIER * (clientX - rotate.from.x);
            const y = CAMERA_MOVE_MULTIPLIER * (rotate.from.y - clientY);
            camera.rotation.x += x
            camera.rotation.y += y;
        }

    }

    const handleRelease = () => {
        setState(prev => ({...prev, move: initialState.move }))
    }

    console.log(state);

    return { handleZoom, handleContextMenu, handleHold, handleMove, handleRelease };
}