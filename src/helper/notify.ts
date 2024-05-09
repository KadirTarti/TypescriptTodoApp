import Swal from 'sweetalert2'

//! enum olarak tanımladıkki bizden ne bekliyorsa yanlış yazmayalım diye.
export enum SweetAlertIcons {
    WARNING = "warning",
    ERROR = "error",
    SUCCESS = "success",
    INFO = "info",
    QUESTION = "question",
  }

  export enum SweetPosition {
    TopStart = "top-start",
    Center = "center",
    BottomEnd = "bottom-end",
  }

export const notify = (
    msg: string, 
    icon: SweetAlertIcons,
    position: SweetPosition
) => 
    Swal.fire({
        title: 'AKT ToDo',
        text: msg,
        timer: 3000,
        timerProgressBar: true,
        position: position,
        icon: icon,   
        // confirmButtonText: 'YES'
      })
