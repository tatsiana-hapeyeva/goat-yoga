import type { ReactNode } from "react";

type InfoPopupProps = {
    isOpen: boolean;
    title: string;
    onClose: () => void;
    children: ReactNode;
};

function InfoPopup({ isOpen, title, onClose, children }: InfoPopupProps) {
    if (!isOpen) return null;

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={(e) => e.stopPropagation()}>
                <h2>{title}</h2>

                {children}
            </div>
        </div>
    );
}

export default InfoPopup;