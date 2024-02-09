import Subtitle from "../Typography/Subtitle";

function TitleCard({ title, children, topMargin, TopSideButtons, hover }) {
    const renderTopSideButtons = () => {
        if (TopSideButtons) {
            return (
                <div className="inline-block float-right">{TopSideButtons}</div>
            );
        }
        return null;
    };

    return (
        <div
            className={
                "card rounded-3xl w-full p-6 bg-cardBg dark:bg-base-100 shadow hover:shadow-md transition-shadow ease-in-out " +
                (topMargin || "mt-6") +
                (hover ? "hover:shadow-indigo-500/50" : "")
            }
        >
            <Subtitle styleClass={TopSideButtons ? "inline-block" : ""}>
                {title}
                {renderTopSideButtons()}
            </Subtitle>
            <div className="h-full w-full pb-6 bg-cardBg dark:bg-base-100 pt-2">
                {children}
            </div>
        </div>
    );
}

export default TitleCard;
