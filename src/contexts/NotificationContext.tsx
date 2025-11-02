import { AnimatePresence, motion } from 'framer-motion';
import  React, { createContext, useCallback, useContext, useState } from 'react';
import { CiCircleInfo } from "react-icons/ci";
import { MdError } from "react-icons/md";
import { FaCheck } from "react-icons/fa";

type NotificationType = 'info' | 'success' | 'error';

const NOTIFICATION_DURATION = {
    info: 8 * 1000,
    success: 5 * 1000,
    error: 10 * 1000
}

interface Notification {
    id: number;
    message: string;
    type: NotificationType;
}

interface NotificationContextType {
    addNotification: (message: string, type?: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = (): NotificationContextType => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error("useNotification must be used within a NotificationProvider");
    }
    return context;
};

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [ notifications, setNotifications ] = useState<Notification[]>([]);
    const [ isHovered, setIsHovered ] = useState<boolean>(false);

    const addNotification = useCallback((message: string, type: NotificationType = "info") => {
        const id = Date.now();

        setNotifications((prev) => [...prev, {id, message, type }])

        setTimeout(() => {
            setNotifications((prev) => prev.filter((notif) => notif.id !== id));
        }, NOTIFICATION_DURATION[type]);
    }, []);

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div className={`${notifications.length > 0 ? 'opacity-100' : 'opacity-0'} fixed bottom-4 right-4 flex flex-col-reverse gap-2 z-50 transition-opacity duration-500`}>
                {notifications.map(({ id, message, type}) => (
                    <AnimatePresence>
                    <motion.div
                        key={id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
                        onClick={() => setNotifications((prev => prev.filter((notif) => notif.id !== id)))}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className={`px-8 py-6 cursor-pointer relative flex flex-row gap-3 items-center rounded-md shadow-lg text-white font-jetbrains transition-all duration-300 transform
                            ${type === 'info' 
                                ? 'bg-blue-500' 
                                : type === 'success'
                                ? 'bg-green-500' :
                                'bg-red-500'}
                            `}
                    >
                        {type === 'info' && <CiCircleInfo size={40} />}
                        {type === 'error' && <MdError size={40} />}
                        {type === 'success' && <FaCheck size={40} />}
                        
                        {message}
                        <span className={`hidden ml-4 text-[10px] md:absolute bottom-1 left-1/2 -translate-x-1/2 transition-opacity duration-300 ${isHovered? 'opacity-75' : 'opacity-0'}`}>Click to dismiss</span>
                        <span className="text-[12px] absolute bottom-1 left-1/2 -translate-x-1/2 md:hidden animate-pulse">Tap to Dismiss</span>
                    </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </NotificationContext.Provider>
    )
}