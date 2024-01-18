export const scrollToElement = (element, position) => {
    if (!element) return;
  
    element.scrollIntoView({
      behavior: "smooth",
      block: position || "center",
    });
  };
  