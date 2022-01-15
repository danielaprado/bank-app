import { EntityType } from "../models/constants/Constants";

const guid = (prefix: string) => {
  return (
    prefix +
    "-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      (c: string): string => {
        const r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    )
  );
};

export const guidGenerator = (type: EntityType): string => {
  switch (type) {
    case EntityType.CONTACT:
      return guid(EntityType.CONTACT);
    case EntityType.TRANSACTION:
      return guid(EntityType.TRANSACTION);
    default:
      return "";
  }
};
