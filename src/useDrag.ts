import { useState, useEffect, useCallback } from 'react'

export const useDrag = (
    x: number,
    y: number,
    onDrag: (args: { x: number; y: number }) => void,
): ((e: any) => void) => {
    const [dragging, setDragging] = useState(false)
    const [initialDragState, setInitialDragState] = useState({
        initX: 0,
        initY: 0,
        mouseDownX: 0,
        mouseDownY: 0,
    })

    const onMouseDown = useCallback(
        (e: any) => {
            e.clientX && e.preventDefault()
            const startX = e.clientX ? e.clientX : e.changedTouches[0].clientX;
            const startY = e.clientY ? e.clientY : e.changedTouches[0].clientY;
            setInitialDragState({
                initX: x,
                initY: y,
                mouseDownX: startX,
                mouseDownY: startY,
            })
            setDragging(true)
        },
        [x, y, setDragging, setInitialDragState],
    )

    useEffect(() => {
        const onMouseMove = (e: any): void => {
            if (dragging) {
                const { initX, mouseDownX, initY, mouseDownY } = initialDragState
                const currentX = e.clientX ? e.clientX : e.changedTouches[0].clientX;
                const currentY = e.clientY ? e.clientY : e.changedTouches[0].clientY;
                let dx = currentX - mouseDownX
                let dy = currentY - mouseDownY
                const x = initX + dx
                const y = initY + dy
                onDrag({ x, y })
            }
        }
        window.addEventListener('mousemove', onMouseMove, { passive: true })
        window.addEventListener('touchmove', onMouseMove, { passive: true })
        return () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('touchmove', onMouseMove)
        }
    }, [initialDragState, dragging, onDrag])

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
