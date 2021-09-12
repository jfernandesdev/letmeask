import { toast, Toaster } from 'react-hot-toast';
import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomCodeProps = {
  code: string;
}

export function RoomCode(props: RoomCodeProps) {
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    toast('Código da sala copiado!', {
      icon: '✍️',
      position: "top-right",
    });
  }

  return (
    <>
      <div><Toaster /></div>
      <button className="room-code" onClick={copyRoomCodeToClipboard}>
        <div>
          <img src={copyImg} alt="Copiar código da sala" />
        </div>
        <span>Sala #{props.code}</span>
      </button>
    </>
  );
}