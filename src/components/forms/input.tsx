export const Input = ({
  type,
  name,
  labelInfo,
  register,
}: {
  type: string;
  name: string;
  labelInfo: string;
  register: any;
}) => {
  return (
    <div>
      <label htmlFor={name}> {labelInfo}</label>
      {type === "number" ? (
        <input
          type={type}
          id={name}
          {...register(name, {
            setValueAs: (v: string) => parseInt(v),
          })}
        ></input>
      ) : (
        <input type={type} id={name} {...register(name)}></input>
      )}
    </div>
  );
};
