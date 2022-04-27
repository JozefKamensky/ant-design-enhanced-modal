import { useState, useEffect, useCallback } from 'react'

interface InitialState {
    initX: number
    initY: number
    initWidth: number
    initHeight: number
    mouseDownX: number
    mouseDownY: number
}

export const useResize = (
    x: number,
    y: number,
    width: number,
    height: number,
    onResize: (args: { x: number; y: number; width: number; height: number }) => void,
): ((e: any) => void) => {
    const [dragging, setDragging] = useState(false)
    const [initialDragState, setInitialDragState] = useState<InitialState>({
        initX: 0,
        initY: 0,
        initWidth: 0,
        initHeight: 0,
        mouseDownX: 0,
        mouseDownY: 0,
    })

    const onMouseDown = useCallback(
        (e: any) => {
            e.clientX && e.preventDefault()
            const currentX = e.clientX ? e.clientX : e.changedTouches[0].clientX;
            const currentY = e.clientY ? e.clientY : e.changedTouches[0].clientY;
            setInitialDragState({
                initX: x,
                initY: y,
                initWidth: width,
                initHeight: height,
                mouseDownX: currentX,
                mouseDownY: currentY,
            })
            setDragging(true)
        },
        [width, height, setDragging, setInitialDragState, x, y],
    )

    useEffect(() => {
        const onMouseMove = (e: any): void => {
            if (dragging) {
                const {
                    initX,
                    initY,
                    initWidth,
                    mouseDownX,
                    initHeight,
                    mouseDownY,
                } = initialDragState
                const currentX = e.clientX ? e.clientX : e.changedTouches[0].clientX;
                const currentY = e.clientY ? e.clientY : e.changedTouches[0].clientY;
                let dx = currentX - mouseDownX
                let dy = currentY - mouseDownY
                const width = initWidth + dx
                const height = initHeight + dy
                return onResize({ x: initX, y: initY, width, height })
            }
        }
        window.addEventListener('mousemove', onMouseMove, { passive: true })
        window.addEventListener('touchmove', onMouseMove, { passive: true })
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('touchmove', onMouseMove)
        }
    }, [initialDragState, dragging, onResize])

    useEffect(() => {
        const onMouseUp = (): void => {
            setDragging(false)
        }
        window.addEventListener('mouseup', onMouseUp)
        window.addEventListener('touchend', onMouseUp)
        return () => {
            window.removeEventListener('mouseup', onMouseUp)
            window.removeEventListener('touchend', onMouseUp)
        }
    }, [setDragging])

    return onMouseDown
}
