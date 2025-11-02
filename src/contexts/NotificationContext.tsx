import  React, { createContext, useCallback, useContext, useState } from 'react';

type NotificationType = 'info' | 'success' | 'error';

const NOTIFICATION_DURATION = 5000;

interface Notification {
    id: number;
    message: string;
    type: NotificationType;
}

interface NotificationContextType {
    addNotification: (message: string, type?: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
    const [ notifications, setNotifications ] = useState<Notification[]>([]);

    const addNotification = useCallback((message: string, type: NotificationType = "info") => {
        const id = Date.now();

        setNotifications((prev) => [...prev, {id, message, type }])

        setTimeout(() => {
            setNotifications((prev) => prev.filter((notif) => notif.id !== id));
        }, NOTIFICATION_DURATION)
    }, []);

    return (
        <NotificationContext.Provider value={{ addNotification }}>
            {children}
            <div className="fixed bottom-4 right-4 flex flex-col-reverse gap-2 z-50">
                {notifications.map(({ id, message, type}) => (
                    <div
                        key={id}
                        className={`px-4 py-2 rounded-md shadow-lg text-white font-jetbrains transition-all duration-300 transform
                            ${type === 'info' 
                                ? 'bg-blue-500' 
                                : type === 'success'
                                ? 'bg-green-500' :
                                'bg-red-500'}
                            `}
                    >
                        {message}
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    )
}