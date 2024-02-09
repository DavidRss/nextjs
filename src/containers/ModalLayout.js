/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { MODAL_BODY_TYPES } from "../utils/globalConstantUtil";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/common/modalSlice";
import AddLeadModalBody from "../features/leads/components/AddLeadModalBody";
import ConfirmationModalBody from "../features/common/components/ConfirmationModalBody";

function ModalLayout() {
    const { isOpen, bodyType, size, extraObject, title } = useSelector(
        (state) => state.modal
    );
    const dispatch = useDispatch();

    const close = (e) => {
        dispatch(closeModal(e));
    };

    const renderModalBody = () => {
        switch (bodyType) {
            case MODAL_BODY_TYPES.LEAD_ADD_NEW:
                return (
                    <AddLeadModalBody
                        closeModal={close}
                        extraObject={extraObject}
                    />
                );
            case MODAL_BODY_TYPES.CONFIRMATION:
                return (
                    <ConfirmationModalBody
                        extraObject={extraObject}
                        closeModal={close}
                    />
                );
            default:
                return <div></div>;
        }
    };

    return (
        <>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
                <div
                    className={`modal-box  ${size === "lg" ? "max-w-5xl" : ""}`}
                >
                    <button
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                        onClick={() => close()}
                    >
                        ✕
                    </button>
                    <h3 className="font-semibold text-2xl pb-6 text-center">
                        {title}
                    </h3>

                    {/* Loading modal body according to different modal type */}
                    {renderModalBody()}
                </div>
            </div>
        </>
    );
}

export default ModalLayout;
