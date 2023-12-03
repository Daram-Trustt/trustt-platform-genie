import { useTranslation } from "react-i18next";
import classes from "./consents.module.scss";

const Consents = () => {
  const { i18n, t } = useTranslation();

  return (
    <div className={classes["consent-container"]}>
      <div className={classes["consent-content"]}>{t("consents.demo")}</div>
    </div>
  );
};

export default Consents;
