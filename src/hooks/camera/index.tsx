import { useEffect } from 'react';
import { useCameraHelpers } from './helpers';

export const useCamera = () => {
    const { handleZoom, handleHold, handleMove, handleRelease } = useCameraHelpers();

  useEffect(() => {
    window.addEventListener('wheel', handleZoom);
    window.addEventListener('pointerdown', handleHold);
    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handleRelease);
    
    return () => {
        window.removeEventListener('wheel', handleZoom);
        window.removeEventListener('pointerdown', handleHold);
        window.removeEventListener('pointermove', handleMove);
        window.removeEventListener('pointerup', handleRelease);
    }
  }, [handleZoom, handleHold, handleMove, handleRelease])
}