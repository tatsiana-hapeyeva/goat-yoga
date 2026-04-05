import { useState } from "react";
import { useInfoPopup } from "./useInfoPopup";
import InfoPopup from "./InfoPopupUI";
import axios from "axios";

type YogaClass = {
    id: number;
    title: string;
    body: string;
};

type ClassRegistrationProps = {
    buttonText: string;
    buttonClassName: string;
};

function ClassRegistration({
    buttonText,
    buttonClassName,
}: ClassRegistrationProps) {
    const [selectedClassId, setSelectedClassId] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        isOpen,
        isLoading,
        items: classes,
        error,
        open,
        close,
    } = useInfoPopup<YogaClass>({
        loadItems: async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.typicode.com/posts",
            );

            return data.slice(0, 10);
        },
    });

    const handleOpen = async () => {
        setSelectedClassId(null);
        setSuccessMessage(null);
        setSubmitError(null);

        await open();
    };

    const handleSubmit = async () => {
        setSuccessMessage(null);
        setSubmitError(null);

        const selectedClass = classes.find((item) => item.id === selectedClassId);

        if (!selectedClass) return;

        try {
            await axios.post("https://jsonplaceholder.typicode.com/posts", {
                classId: selectedClass.id,
                title: selectedClass.title,
                description: selectedClass.body,
            });

            setSuccessMessage("Your class was successfully booked.");
        } catch {
            setSubmitError("Could not submit your selection.");
        }
    };

    return (
        <section>
            <button
                onClick={handleOpen}
                className={buttonClassName}
                type="button"
            >
                {buttonText}
            </button>

            <InfoPopup
                isOpen={isOpen}
                title="Training schedule"
                onClose={close}
            >
                {isLoading && <p>Loading classes...</p>}
                {error && <p>{error}</p>}
                {submitError && <p>{submitError}</p>}
                {successMessage && <p>{successMessage}</p>}

                {!isLoading && !error && (
                    <div className="classes-grid">
                        {classes.map((item) => (
                            <div
                                key={item.id}
                                className="class-card"
                                onClick={() => setSelectedClassId(item.id)}
                            >
                                <p>Title: {item.title}</p>
                                <p>Description: {item.body}</p>
                                <p>Skill Level: {item.id}</p>

                                {selectedClassId === item.id && (
                                    <button
                                        type="button"
                                        className="popup-submit-button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleSubmit();
                                        }}
                                    >
                                        Sign up for a class
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </InfoPopup>
        </section>
    );
}

export default ClassRegistration;