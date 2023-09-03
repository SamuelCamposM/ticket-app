import { useDispatch, useSelector } from "react-redux";
import {
  onSliHideMenu,
  onSliShowMenu,
  onSliToggleOcultarMenu,
} from "../../store";
import { useEffect } from "react";

export const useUi = (ocultar) => {
  const dispatch = useDispatch();
  const { ocultarMenu } = useSelector((state) => state.ui);
  const onToggleOcultarMenu = () => {
    dispatch(onSliToggleOcultarMenu());
  };

  const onShowMenu = () => {
    dispatch(onSliShowMenu());
  };
  const onHideMenu = () => {
    dispatch(onSliHideMenu());
  };

  useEffect(() => {
    if (ocultar !== undefined) {
      if (ocultar) {
        onHideMenu();
      } else {
        onShowMenu();
      }
    }
  }, [ocultar]);

  return { onToggleOcultarMenu, onShowMenu, onHideMenu, ocultarMenu };
};
