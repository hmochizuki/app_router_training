export const Button: React.FC<JSX.IntrinsicElements["button"]> = (props) => {
  return (
    <button
      {...props}
      className="w-40 bg-blue-600 border border-blue-900 rounded-md disabled:opacity-50"
    >
      {props.children}
    </button>
  );
};
