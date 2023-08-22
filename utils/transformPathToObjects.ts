export const transformPathToObjects = (
  path: string
): { name: string; href: string }[] => {
  const segments = path.split("/").filter((segment) => segment !== "");

  const result = segments.map((segment) => {
    let name;
    const words = segment.split("-");
    name = words
      .map((word, index) => {
        if (index === 0) return word.charAt(0).toUpperCase() + word.slice(1);
        return word;
      })
      .join(" ");
    const href = "/" + segment;
    return { name, href };
  });

  result.unshift({ name: "Home", href: "/" });

  return result;
};
