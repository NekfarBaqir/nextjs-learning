import { PropsWithChildren } from "react";

const template = ({ children }: PropsWithChildren) => {
  console.log("Template rendered");
  return (
    <div>
      <h2>Hello</h2>
      {children}
    </div>
  );
};

export default template;
