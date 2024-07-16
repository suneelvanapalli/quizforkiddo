export const Input = ({ id, name, error, innerRef, ...props }) => {
  return (
    <>
      <input id={id} name={name} {...props} ref={innerRef} />
      <div className='control-error'>{error && <p>{error}</p>}</div>
    </>
  );
};
