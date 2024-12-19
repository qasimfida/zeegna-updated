export const getNameInitials = (name) => {
  const names = name.split(" ");
  const initials = names.map((n) => n[0]).join("");
  return initials.length > 1
    ? initials[0] + initials[names.length - 1]
    : initials + initials;
};
