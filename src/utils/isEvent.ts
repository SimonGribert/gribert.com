export const isMouseEvent = (
  e: React.MouseEvent | React.TouchEvent<HTMLElement>,
): e is React.MouseEvent => {
  return e.type === 'mouseup' || e.type === 'mouseup' || e.type === 'mousedown'
}

export const isTouchEvent = (
  e: React.MouseEvent | React.TouchEvent<HTMLElement>,
): e is React.TouchEvent<HTMLElement> => {
  return (
    e.type === 'touchend' || e.type === 'touchstart' || e.type === 'touchcancel'
  )
}
