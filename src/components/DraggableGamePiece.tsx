import React from 'react'



interface DraggableGamePieceProps {
    id: string
    piece: string
}

const DraggableGamePiece: React.FC<DraggableGamePieceProps> = ({id, piece}) => {
const onDragStart = (e: React.DragEvent<HTMLImageElement>) => {
    e.dataTransfer.setData('text', e.currentTarget.id)
    e.currentTarget.style.opacity = '0.3'
}

const onDragEnd = (e: React.DragEvent<HTMLImageElement>) => {
    e.currentTarget.style.opacity = ''
}

const imageSrc = piece === 'x' ? require('../images/pic-of-x.png') : require('../images/pic-of-o.png');


return (
    <img 
    id={id} 
    className={`gamePiece ${piece}`} 
    src={imageSrc} 
    draggable 
    onDragStart={onDragStart} 
    onDragEnd={onDragEnd}
    alt={`${piece} game piece`}
     />
)
}

export default DraggableGamePiece