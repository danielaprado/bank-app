import { EntityType } from "../models/constants/Constants";
import { Contact } from "../models/Contact";
import { guidGenerator } from "../utils/guidGenerator";

export const ContactsMock: Contact[] = [
  {
    id: guidGenerator(EntityType.CONTACT),
    firstName: "Michael",
    lastName: "Scott",
    avatar: "",
  },
  {
    id: guidGenerator(EntityType.CONTACT),
    firstName: "Dwight",
    lastName: "Schrude",
    avatar: "",
  },
  {
    id: guidGenerator(EntityType.CONTACT),
    firstName: "Pam",
    lastName: "Beesly",
    avatar: "",
  },
  {
    id: guidGenerator(EntityType.CONTACT),
    firstName: "Jim",
    lastName: "Halpert",
    avatar: "",
  },
  {
    id: guidGenerator(EntityType.CONTACT),
    firstName: "Erin",
    lastName: "Hannon",
    avatar: "",
  },
  {
    id: guidGenerator(EntityType.CONTACT),
    firstName: "Kevin",
    lastName: "Malone",
    avatar: "",
  },
  {
    id: guidGenerator(EntityType.CONTACT),
    firstName: "Angela",
    lastName: "Martin",
    avatar: "",
  },
  {
    id: guidGenerator(EntityType.CONTACT),
    firstName: "Stanley",
    lastName: "Hudson",
    avatar: "",
  },
];
