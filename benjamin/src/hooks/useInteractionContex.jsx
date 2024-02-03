import { useContext } from "react";
import { InteractionContex } from "../context/InteractionContex";
const useInteractionContex = () => {
  useContext(InteractionContex);
};

export default useInteractionContex;