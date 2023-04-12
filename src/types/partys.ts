import { type SetStateAction, type Dispatch } from "react";
import { type IPartyProps } from "./party";

export interface IPartysProps {
	partys: IPartyProps[] | null;
	setPartys?: Dispatch<SetStateAction<IPartyProps[]>>;
}
