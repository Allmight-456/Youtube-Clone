export function VideoCard(props: any) {
  return (
    <div className="p-1">
      <img src={props.image} className="rounded-2xl" />
      <div className="grid grid-cols-12">
        <div className="col-span-2 pt-2">
          <img src={props.thumbImage} className="rounded-full w-15 h-15" />
        </div>
        <div className="col-span-10 pl-5">
          {props.title}
          <br />
          <div className="col-span-10 pl-0 text-base text-gray-400">
            {props.author}
          </div>
          <div className="col-span-10 pl-0 ext-base text-gray-500">
            {props.views}| {props.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
}
