export default function Image(props) {
  return (
    <div
      className={
        "rounded-md hover:border-2 hover:border-orange-500 md:w-14 lg:w-20 "
      }
    >
      <img
        src={props.src}
        onClick={() => {
          props.change(props.img);
        }}
        width="80px"
        className="rounded-md hover:opacity-25 "
      />
    </div>
  );
}
