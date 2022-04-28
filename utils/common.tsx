import { Backdrop, Button, Fade, Modal } from '@mui/material';
import { Box } from '@mui/system';
import { toast, ToastPosition, TypeOptions } from 'material-react-toastify';
import Link from 'next/link';

interface CustomLinkProps {
    href: URL | string,
    children: React.ReactNode,
    className?: string,
    button?: boolean
}

export const CustomLink = ({ href, children, className, button }: CustomLinkProps) => {
    return (
        <Link href={href} passHref>
            {button
                ? <Button className={className}>{children}</Button>
                : <a className={className}>{children}</a>
            }
        </Link>
    )
}

export const Notify = (message: string | undefined, type:TypeOptions = "default", time = 8000, position:ToastPosition = "top-right") => {
    let msg = message ? message : "Something went wrong!";
    toast( msg, {
        position: position,
        autoClose: time,
        type: type
    });
}

interface ModalProps {
    open: boolean,
    toggle: Function,
    children: React.ReactNode
}

export const CustomModal = ({open, toggle, children}: ModalProps)=> {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#fafafa',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    return (
        <Modal
            open={open}
            onClose={() => toggle()}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                   {children}
                </Box>
            </Fade>
        </Modal>
    )
}

export const ToBase64 = (file: any)=> new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
