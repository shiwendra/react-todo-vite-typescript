import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  oncClose: () => void;
}
const Alert = ({ children, oncClose }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={oncClose}
        aria-label="Close"
      ></button>
    </div>
  );
};
export default Alert;
