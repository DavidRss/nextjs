import PageContent from "./PageContent";
import LeftSidebar from "./LeftSidebar";
import { useSelector, useDispatch } from "react-redux";
import RightSidebar from "./RightSidebar";
import { useEffect } from "react";
import { removeNotificationMessage } from "../features/common/headerSlice";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import ModalLayout from "./ModalLayout";

function Layout() {
    const dispatch = useDispatch();
    const { newNotificationMessage, newNotificationStatus } = useSelector(
        (state) => state.header
    );

    const showNotification = (message, status) => {
        if (status === 1) {
            NotificationManager.success(message, "Success");
        } else if (status === 0) {
            NotificationManager.error(message, "Error");
        }
    };

    useEffect(() => {
        if (newNotificationMessage !== "") {
            showNotification(newNotificationMessage, newNotificationStatus);
            dispatch(removeNotificationMessage());
        }
    }, [dispatch, newNotificationMessage, newNotificationStatus]);

    return (
        <>
            {/* Left drawer - containing page content and side bar (always open) */}
            <div className="drawer  lg:drawer-open">
                <input
                    id="left-sidebar-drawer"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <PageContent />
                <LeftSidebar />
            </div>

            {/* Right drawer - containing secondary content like notifications list etc.. */}
            <RightSidebar />

            {/** Notification layout container */}
            <NotificationContainer />

            {/* Modal layout container */}
            <ModalLayout />
        </>
    );
}

export default Layout;
