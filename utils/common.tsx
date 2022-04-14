import { toast, ToastPosition, TypeOptions } from 'material-react-toastify';

export const Notify = (message: string, type:TypeOptions = "info", time = 2500, position:ToastPosition = "top-right") => {
    toast( message, {
        position: position,
        autoClose: time,
        type: type
    });
}