import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InfoPopup from "./InfoPopupUI";
import { useGetClassesQuery, useBookClassMutation } from "../../services/api";
import { openPopup, closePopup } from './popupSlice';
import type { RootState } from '../../app/store';

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

const dispatch = useDispatch();

const isOpen = useSelector(
  (state: RootState) =>
    state.popup.isOpen && state.popup.popupType === 'training'
);

const open = () => dispatch(openPopup('training'));
const close = () => dispatch(closePopup());

    const { data, error, isLoading } = useGetClassesQuery(undefined, {
        skip: !isOpen,
    });

    const [bookClass, { isLoading: isSubmitting }] = useBookClassMutation();

    const classes = data?.slice(0, 10) ?? [];
    const selectedClass = classes.find((item) => item.id === selectedClassId);

    const handleOpen = () => {
        setSelectedClassId(null);
        setSuccessMessage(null);
        setSubmitError(null);
        open();
    };

    const handleSubmit = async () => {
        if (!selectedClass) return;

        setSuccessMessage(null);
        setSubmitError(null);

        try {
            await bookClass({
                classId: selectedClass.id,
                title: selectedClass.title,
                description: selectedClass.body,
            }).unwrap();

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
                {error && <p>Could not load classes.</p>}
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
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting
                                            ? "Just a sec..."
                                            : "Sign up for a class"}
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